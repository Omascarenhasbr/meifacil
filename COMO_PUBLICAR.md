# Como publicar o MEI Fácil

## Fluxo recomendado

1. Altere apenas arquivos-fonte. Não inclua `.next/` ou `out/` no Git.
2. Rode `npm run build` e corrija qualquer erro.
3. Revise as páginas exportadas, especialmente `robots.txt`, `sitemap.xml` e `ads.txt`.
4. Crie uma branch com prefixo `codex/` ou `feature/`.
5. Faça commit apenas do escopo desejado e abra um pull request.
6. Confira o Deploy Preview do Netlify antes de integrar à branch principal.
7. Após publicar, verifique as URLs reais e solicite nova revisão do AdSense somente quando todo o conteúdo estiver acessível.

## Novo artigo

Adicione o artigo em `src/data/posts.ts` com:

- slug exclusivo e legível;
- título e descrição próprios;
- conteúdo realmente útil, escrito para uma necessidade concreta;
- autoria e datas de publicação e revisão;
- fontes oficiais diretamente relacionadas às afirmações;
- link para ferramenta ou próximo passo quando fizer sentido.

Evite artigos criados apenas para preencher palavras-chave. Antes de publicar, confirme que a página responde melhor à dúvida do leitor do que uma simples lista de links.

## Checklist técnico

- [ ] `npm run build` concluído
- [ ] página com um único título principal visível
- [ ] canonical correto
- [ ] links internos e externos funcionando
- [ ] valores e prazos conferidos em fonte oficial
- [ ] `https://meifacil.blog/robots.txt` retorna texto, não a página inicial
- [ ] `https://meifacil.blog/sitemap.xml` inclui a nova URL
- [ ] `https://meifacil.blog/ads.txt` retorna HTTP 200 e o publisher correto

## AdSense

Não use blocos vazios ou imitações de anúncio. Antes da aprovação, mantenha a integração técnica e priorize conteúdo próprio, navegação clara, páginas institucionais e experiência completa. A aprovação é uma decisão do Google e não pode ser garantida por uma quantidade específica de artigos.
