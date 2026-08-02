# MEI Fácil

Webapp educativo para pessoas que querem abrir um MEI e para microempreendedores que precisam organizar a rotina do negócio.

O produto combina:

- jornadas guiadas para antes e depois da formalização;
- calculadoras e organizadores que funcionam no navegador;
- central de atalhos para serviços oficiais;
- guias editoriais com autoria, revisão e fontes identificadas.

O MEI Fácil não é um órgão público, não acessa dados do CNPJ e não substitui orientação contábil, fiscal, jurídica ou previdenciária individual.

## Desenvolvimento local

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validação

```bash
npm run validate
```

O comando verifica TypeScript, gera a exportação estática e audita H1, links internos, sitemap, robots, ads.txt e integração técnica do AdSense. O resultado é gerado em `out/`, que não deve ser versionado.

## Publicação

O repositório está conectado ao Netlify. O arquivo `netlify.toml` define o comando de build e a pasta publicada. Mudanças devem passar por build local antes de serem enviadas ao GitHub.

Fluxo automatizado:

1. toda alteração é enviada para uma branch;
2. o GitHub Actions executa `npm run validate`;
3. o Netlify cria um Deploy Preview para o pull request;
4. depois da revisão, o merge em `main` publica a produção;
5. o Dependabot abre pull requests de manutenção das dependências.

## Conteúdo e manutenção

- Artigos: `src/data/posts.ts`
- Guias das ferramentas: `src/data/toolGuides.ts`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- Arquivo de autorização do AdSense: `public/ads.txt`

Regras e valores ligados ao MEI mudam. Toda atualização deve registrar data de revisão e apontar para fontes oficiais.
