# 🚀 Como Publicar o MEI Fácil

Guia rápido para fazer alterações e colocar o site no ar em menos de 2 minutos.

---

## 📝 Como adicionar um novo artigo ao blog

1. Abra o arquivo `src/data/posts.ts`
2. Adicione um novo objeto no array `posts`, seguindo esta estrutura:

```typescript
{
  id: 10,                           // próximo número sequencial
  slug: "meu-novo-artigo",          // URL amigável (sem acentos, lowercase, hífens)
  title: "Título do Artigo",
  summary: "Resumo curto que aparece na listagem do blog.",
  content: `
    <h2 id="secao-1">Primeira seção</h2>
    <p>Conteúdo do artigo em HTML...</p>
    <h2 id="secao-2">Segunda seção</h2>
    <p>Mais conteúdo...</p>
  `,
  category: "Obrigações MEI",       // use uma categoria existente (veja lista abaixo)
  tags: ["tag1", "tag2"],
  date: "2026-05-05",               // formato AAAA-MM-DD
  readTime: 4,                      // tempo estimado de leitura em minutos
  featured: false,                  // true = aparece em destaque no topo
  views: 0,                         // começa em 0 para artigos novos
  relatedTool: { name: "Calculadora DAS", path: "das" },  // ou null
  seo: {
    metaTitle: "Título SEO (até 60 caracteres)",
    metaDescription: "Descrição SEO (até 160 caracteres)"
  }
}
```

### Categorias disponíveis

| Categoria             | Cor     |
|-----------------------|---------|
| Motoristas de App     | Âmbar   |
| Prestadores de Serviço| Teal    |
| Obrigações MEI        | Laranja |
| Finanças              | Azul    |
| MEI Digital           | Roxo    |
| Novidades             | Rosa    |

> **Dica:** Para criar uma nova categoria, adicione-a também no array `categories` no final do mesmo arquivo.

---

## ⚡ Como publicar pelo terminal (recomendado)

No terminal do VS Code ou PowerShell, rode:

```powershell
# Com mensagem personalizada
./publicar "Adicionado artigo sobre DASN 2026"

# Sem mensagem (usa data/hora automaticamente)
./publicar
```

**O que o script faz automaticamente:**
1. ✅ Roda `npm run build` (verifica se o site compila sem erros)
2. ✅ Adiciona todos os arquivos alterados ao git (`git add .`)
3. ✅ Faz o commit com a mensagem informada
4. ✅ Envia para o repositório (`git push`)
5. ✅ O Netlify detecta o push e faz o deploy automaticamente

> **Se o build falhar**, o script para imediatamente e mostra o erro. Nada é commitado com código quebrado.

---

## ⌨️ Como publicar via atalho no VS Code

1. Pressione **`Ctrl+Shift+B`** (atalho de Build padrão)
2. A task **"Publicar site"** será executada automaticamente
3. O terminal abrirá mostrando o progresso

> Esse atalho executa o mesmo `publicar.ps1` sem precisar digitar nada.

---

## 📋 Checklist rápido para novos artigos

- [ ] Artigo adicionado em `src/data/posts.ts`
- [ ] `id` único e `slug` sem acentos
- [ ] `date` no formato correto (`AAAA-MM-DD`)
- [ ] `seo.metaTitle` com até 60 caracteres
- [ ] `seo.metaDescription` com até 160 caracteres
- [ ] Conteúdo HTML com `<h2>` tendo atributos `id` para ancoragem
- [ ] Publicado com `./publicar "descrição da alteração"`

---

## 🔧 Troubleshooting

| Problema | Solução |
|----------|---------|
| `O termo './publicar' não é reconhecido` | Rode `powershell -File publicar.ps1` ou ajuste a ExecutionPolicy |
| Build falha com erro de TypeScript | Corrija o erro indicado no terminal antes de publicar |
| `git push` rejeita | Rode `git pull` antes para sincronizar com o remoto |
| Script bloqueado por política | Rode `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` |
