# Publicação na Vercel

1. Importe o repositório na Vercel — o framework Next.js é detectado
   automaticamente.
2. Configure as variáveis de ambiente listadas em `.env.example` (Project
   Settings → Environment Variables), preenchendo ao menos:
   - `NEXT_PUBLIC_SITE_URL` com o domínio final;
   - os links de checkout, quando existirem;
   - `NEXT_PUBLIC_SUPPORT_EMAIL` e `NEXT_PUBLIC_INSTAGRAM_URL`.
3. Configure o domínio customizado em Project Settings → Domains.
4. Publique. `npm run build` deve concluir sem erros (ver `TEST_REPORT.md`
   para o status da verificação nesta entrega).

## Checklist antes de publicar
- [ ] Links de checkout reais configurados (ou aceitar a mensagem de
      "checkout em configuração" temporariamente)
- [ ] `NEXT_PUBLIC_SITE_URL` apontando para o domínio final (usado no
      sitemap, robots e Open Graph)
- [ ] IDs de rastreamento reais (nunca fictícios) se for usar Analytics/Pixel
- [ ] Imagem `public/images/og-cover.jpg` substituída por uma arte de
      compartilhamento definitiva (ver `ASSETS_AND_GAPS.md`)
