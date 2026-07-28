# Configuração local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse http://localhost:3000. Sem links de checkout configurados, todos os
botões de compra mostram a mensagem "o checkout está sendo configurado" em
vez de navegar para lugar nenhum — comportamento esperado nesta fase.

## Adicionando os links de pagamento
Edite `.env.local` com as URLs reais assim que a plataforma de checkout
estiver pronta (ver `README.md` para a lista completa de variáveis).
Nenhuma alteração de código é necessária — todos os componentes já leem de
`lib/config.ts`.

## Adicionando rastreamento
Preencha `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`,
`NEXT_PUBLIC_GOOGLE_ADS_ID` e/ou `NEXT_PUBLIC_TIKTOK_PIXEL_ID` apenas com
IDs reais de produção. Os scripts dessas ferramentas ainda precisam ser
adicionados em `app/layout.tsx` (não incluídos por padrão para evitar IDs
fictícios rodando em produção sem querer — ver `ASSETS_AND_GAPS.md`).
