import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const output = resolve(process.cwd(), 'out');

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const fullPath = join(directory, name);
    return statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const urls = new Set();
for (const file of walk(output).filter((item) => extname(item) === '.html')) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="(https:\/\/[^"#]+)"/gi)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (!url.includes('meifacil.blog')) urls.add(url);
  }
}

const queue = [...urls];
const failures = [];
const warnings = [];
let checked = 0;

async function worker() {
  while (queue.length) {
    const url = queue.shift();
    try {
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        headers: { 'User-Agent': 'MEI-Facil-Link-Audit/1.0' },
        signal: AbortSignal.timeout(20000)
      });
      checked += 1;
      if (response.status === 404 || response.status === 410) failures.push(`${response.status} ${url}`);
      else if (response.status >= 400) warnings.push(`${response.status} ${url}`);
      await response.body?.cancel();
    } catch (error) {
      warnings.push(`sem resposta ${url} (${error instanceof Error ? error.message : String(error)})`);
    }
  }
}

await Promise.all(Array.from({ length: 6 }, () => worker()));

if (warnings.length) {
  console.warn(`Avisos de rede (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (failures.length) {
  console.error(`Links externos quebrados (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Auditoria externa concluída: ${checked} URLs responderam e nenhum link retornou 404/410.`);
