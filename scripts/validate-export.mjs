import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve(process.cwd());
const output = join(root, 'out');
const errors = [];

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const fullPath = join(directory, name);
    return statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function fail(message) {
  errors.push(message);
}

if (!existsSync(output)) {
  throw new Error('A pasta out/ não existe. Execute npm run build antes da validação.');
}

const htmlFiles = walk(output).filter((file) => extname(file) === '.html');
const internalLinks = new Set();
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenCanonicals = new Map();

function registerUnique(map, value, name, label) {
  if (!value) return;
  if (map.has(value)) fail(`${name}: ${label} duplicado com ${map.get(value)}.`);
  else map.set(value, name);
}

function routeFromFile(name) {
  if (name === 'index.html') return '/';
  return `/${name.replace(/\.html$/, '')}`;
}

function isAdEligibleRoute(route) {
  return route === '/guia-iniciante'
    || route.startsWith('/blog/')
    || route.startsWith('/ideias-de-negocios/');
}

function visibleWordCount(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|quot|#x27|#39);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text ? text.split(' ').length : 0;
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const name = relative(output, file).replaceAll('\\', '/');
  const route = routeFromFile(name);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  const titleCount = (html.match(/<title(?:\s|>)/gi) || []).length;
  const descriptionCount = (html.match(/<meta name="description"/gi) || []).length;
  const canonicalCount = (html.match(/<link rel="canonical"/gi) || []).length;
  const adScriptCount = (html.match(/<script[^>]+src="https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js[^>]*>/gi) || []).length;
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1]?.trim();
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1]?.trim();

  if (h1Count !== 1) fail(`${name}: esperado exatamente um H1; encontrado ${h1Count}.`);
  if (titleCount !== 1) fail(`${name}: esperado exatamente um title; encontrado ${titleCount}.`);
  if (route !== '/404' && route !== '/_not-found') {
    if (descriptionCount !== 1) fail(`${name}: esperado exatamente uma meta description; encontrado ${descriptionCount}.`);
    if (canonicalCount !== 1) fail(`${name}: esperado exatamente um canonical; encontrado ${canonicalCount}.`);
    const expectedCanonical = `https://meifacil.blog${route === '/' ? '' : route}`;
    if (canonical && canonical !== expectedCanonical) fail(`${name}: canonical ${canonical} não corresponde a ${expectedCanonical}.`);
    registerUnique(seenTitles, title, name, 'title');
    registerUnique(seenDescriptions, description, name, 'meta description');
    registerUnique(seenCanonicals, canonical, name, 'canonical');
  } else {
    if (canonicalCount !== 0) fail(`${name}: página de erro não deve declarar canonical.`);
    if (!/<meta name="robots" content="[^"]*noindex/i.test(html)) fail(`${name}: página de erro deve declarar noindex.`);
  }

  if (isAdEligibleRoute(route) && adScriptCount !== 1) {
    fail(`${name}: página editorial deve carregar exatamente um código do AdSense; encontrado ${adScriptCount}.`);
  }
  if (!isAdEligibleRoute(route) && adScriptCount !== 0) {
    fail(`${name}: página não editorial não pode carregar o código do AdSense.`);
  }

  const isLongForm = route === '/guia-iniciante' || route.startsWith('/blog/') || route.startsWith('/ideias-de-negocios/');
  if (isLongForm && visibleWordCount(html) < 550) {
    fail(`${name}: conteúdo editorial longo tem menos de 550 palavras visíveis.`);
  }
  if ((route.startsWith('/blog/') || route.startsWith('/ideias-de-negocios/')) && !html.includes('application/ld+json')) {
    fail(`${name}: artigo sem dados estruturados JSON-LD.`);
  }

  for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
    if (!/rel="[^"]*noopener[^"]*"/i.test(tag[0])) fail(`${name}: link externo em nova aba sem rel="noopener".`);
  }

  for (const match of html.matchAll(/href="(\/[^"#?]*)"/gi)) {
    const path = decodeURIComponent(match[1]);
    if (!path.startsWith('/_next/')) internalLinks.add(path);
  }
}

for (const path of internalLinks) {
  if (path === '/') continue;
  const relativePath = path.replace(/^\//, '');
  const directFile = join(output, relativePath);
  const htmlFile = `${directFile}.html`;
  if (!existsSync(directFile) && !existsSync(htmlFile)) fail(`Link interno sem destino exportado: ${path}`);
}

const requiredRoutes = [
  '/', '/quero-ser-mei', '/ja-sou-mei', '/servicos-oficiais', '/guia-iniciante',
  '/calculadora-das-mei', '/limite-faturamento-mei', '/calculadora-preco-hora-autonomo',
  '/emissor-recibo-mei', '/checklist-mensal-mei', '/simulador-aposentadoria-mei',
  '/blog', '/ideias-de-negocios', '/sobre', '/politica-editorial', '/politica-de-publicidade', '/contato', '/politica-de-privacidade', '/termos-de-uso'
];

const sitemapPath = join(output, 'sitemap.xml');
const robotsPath = join(output, 'robots.txt');
const adsPath = join(output, 'ads.txt');

for (const requiredFile of [sitemapPath, robotsPath, adsPath]) {
  if (!existsSync(requiredFile)) fail(`Arquivo obrigatório ausente: ${relative(root, requiredFile)}`);
}

if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  for (const route of requiredRoutes) {
    const url = `https://meifacil.blog${route === '/' ? '' : route}`;
    if (!sitemap.includes(`<loc>${url}</loc>`)) fail(`Sitemap não contém ${url}`);
  }
}

if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, 'utf8');
  if (/<html/i.test(robots)) fail('robots.txt contém HTML.');
  if (!robots.includes('Sitemap: https://meifacil.blog/sitemap.xml')) fail('robots.txt não aponta para o sitemap canônico.');
}

if (existsSync(adsPath)) {
  const ads = readFileSync(adsPath, 'utf8').trim();
  const expected = 'google.com, pub-9176810679156928, DIRECT, f08c47fec0942fa0';
  if (ads !== expected) fail('ads.txt não corresponde ao publisher autorizado.');
}

if (existsSync(join(output, '_redirects'))) fail('out/_redirects existe e pode transformar URLs inexistentes em soft 404.');

const home = readFileSync(join(output, 'index.html'), 'utf8');
if (!home.includes('google-adsense-account')) fail('Metatag da conta AdSense ausente.');
const guide = readFileSync(join(output, 'guia-iniciante.html'), 'utf8');
if (!guide.includes('pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')) fail('Script oficial do AdSense ausente do guia editorial principal.');

const privacy = readFileSync(join(output, 'politica-de-privacidade.html'), 'utf8');
for (const requiredPrivacyUrl of [
  'https://policies.google.com/technologies/partner-sites?hl=pt-BR',
  'https://myadcenter.google.com/',
  'https://adssettings.google.com/'
]) {
  if (!privacy.includes(requiredPrivacyUrl.replaceAll('&', '&amp;')) && !privacy.includes(requiredPrivacyUrl)) {
    fail(`Política de Privacidade não contém o link obrigatório: ${requiredPrivacyUrl}`);
  }
}

if (errors.length) {
  console.error(`\nValidação falhou com ${errors.length} problema(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validação concluída: ${htmlFiles.length} HTMLs, ${internalLinks.size} links internos e arquivos técnicos conferidos.`);
