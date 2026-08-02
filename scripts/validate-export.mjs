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

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const name = relative(output, file).replaceAll('\\', '/');
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;

  if (h1Count !== 1) fail(`${name}: esperado exatamente um H1; encontrado ${h1Count}.`);

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
  '/blog', '/ideias-de-negocios', '/sobre', '/politica-editorial', '/contato', '/politica-de-privacidade', '/termos-de-uso'
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
if (!home.includes('pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')) fail('Script oficial do AdSense ausente.');

if (errors.length) {
  console.error(`\nValidação falhou com ${errors.length} problema(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validação concluída: ${htmlFiles.length} HTMLs, ${internalLinks.size} links internos e arquivos técnicos conferidos.`);
