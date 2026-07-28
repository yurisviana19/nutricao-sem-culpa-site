# Nutrição Sem Culpa — Site de Vendas

Landing page evergreen para o ecossistema **Nutrição Sem Culpa**: e-book
"Por que Você Não Perde Peso?", livro "Receitas Sem Culpa", aplicativo
Psiconutri e consulta individual com Yuri Viana (Nutricionista, CRN-5 18333).

> Este projeto é **exclusivamente o site de vendas**. Ele não modifica, não
> reconstrói e não contém código do aplicativo Psiconutri, não tem banco de
> dados, login, cadastro ou integração interna de pagamento. Todos os
> botões de compra apontam para uma plataforma de checkout externa, cujos
> links serão preenchidos depois em `.env.local`.

## Stack
Next.js 14 (App Router) + TypeScript estrito + Tailwind CSS.

## Instalação

```bash
npm install
cp .env.example .env.local   # preencha os links de checkout quando existirem
npm run dev
```

## Build

```bash
npm run build
npm run lint
npm run typecheck
```

## Estrutura

```
app/                    Rotas: landing (/), privacidade, termos, política de compra, sitemap, robots
components/              20 componentes (Header, Hero, ofertas, FAQ, comparação, footer etc.)
lib/config.ts            ÚNICA fonte de preços e links de checkout (via env)
lib/tracking.ts           Camada única de eventos de rastreamento
lib/structuredData.ts     Schema.org (Product, Person, FAQPage)
lib/faqData.ts             Perguntas frequentes (usadas na seção e no schema)
data/recipes.json          Referência das 37 receitas (nomes/categorias) para a vitrine
public/images/products/    Capas dos e-books extraídas dos PDFs originais
```

## Links de checkout

Todos os botões de compra usam `components/CheckoutButton.tsx`, que lê as
URLs de `lib/config.ts` (por sua vez lidas de variáveis de ambiente). Link
ausente nunca gera página quebrada nem usa `#` — mostra uma mensagem
profissional com contato de suporte.

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_CHECKOUT_EBOOK_URL` | Botão "Quero o e-book" |
| `NEXT_PUBLIC_CHECKOUT_COMBO_URL` | Botão do combo (oferta principal) |
| `NEXT_PUBLIC_CHECKOUT_APP_30_DAYS_URL` | Plano de 30 dias do Psiconutri |
| `NEXT_PUBLIC_CHECKOUT_APP_ANNUAL_URL` | Plano anual do Psiconutri |
| `NEXT_PUBLIC_CHECKOUT_CONSULTATION_URL` | Consulta individual |

## Documentos relacionados
`SETUP_LOCAL.md` · `DEPLOY_VERCEL.md` · `TEST_REPORT.md` · `CHANGELOG.md` ·
`ASSETS_AND_GAPS.md`
