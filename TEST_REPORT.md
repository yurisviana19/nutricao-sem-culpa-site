# Relatório de testes

## Verificação executada nesta sessão
O ambiente sandbox usado para montar este projeto não conseguiu concluir
`npm install` de todas as dependências do Next.js dentro do limite de tempo
por comando (mesma limitação documentada no projeto Psiconutri). Para
compensar, a lógica de dados/preços foi executada diretamente com
`node --experimental-strip-types` contra os arquivos-fonte reais entregues:

| Verificação | Resultado |
|---|---|
| `PRICES.ebook === 19.99` | ✅ |
| `PRICES.recipes === 9.99` | ✅ |
| `PRICES.combo === 29.98` | ✅ |
| `ebook + recipes === combo` (nenhum desconto inventado) | ✅ |
| `PRICES.appMonthly === 24.90` | ✅ |
| `PRICES.appAnnual === 197.00` | ✅ |
| `PRICES.consultation === 198.00` | ✅ |
| `formatBRL` formata corretamente (ex.: "R$ 19,99") | ✅ |
| Nenhum link de checkout hardcoded fora de `lib/config.ts` (todas as URLs vazias por padrão) | ✅ |
| 37 receitas em `data/recipes.json` | ✅ |

**10/10 verificações aprovadas.**

## Checagem manual de integridade do projeto
- Todos os 20 componentes referenciados em `app/page.tsx` e nos demais
  arquivos existem em `components/` com os nomes exatos importados
  (checado via `grep` cruzado entre imports e arquivos).
- Nenhum componente declara URL de checkout fora de `lib/config.ts`
  (checado por inspeção — `CheckoutButton` é o único ponto de saída).
- Nenhuma seção de depoimentos/avaliações foi criada, conforme instrução
  de não inventar prova social.
- Nenhum contador regressivo, "vagas limitadas" ou desconto falso foi
  criado.

## Pendente de execução pelo usuário/CI
`npm install`, `npm run build`, `npm run lint`, `npm run typecheck` — ver
checklist em `DEPLOY_VERCEL.md`. Recomendado rodar Lighthouse/PageSpeed
Insights após o primeiro deploy para validar Core Web Vitals reais.
