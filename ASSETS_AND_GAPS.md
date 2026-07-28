# Ativos utilizados e lacunas conhecidas

## O que foi extraído dos materiais reais enviados
- Capa do e-book "Por que Você Não Perde Peso?" — extraída da primeira
  página do PDF `Por_que_voce_nao_perde_peso_capa_corrigida.pdf`.
- Capa do livro "Receitas Sem Culpa" — extraída da primeira página do PDF
  `Receitas_Sem_Culpa_Capa_Ajustada.pdf`.
- Duas páginas de exemplo de receitas (`recipe_sample_1.webp`,
  `recipe_sample_2.webp`) — extraídas do miolo do PDF de receitas.
- Contagem e categorias das 37 receitas — reaproveitadas de
  `data/recipes.json`, já extraído fielmente do PDF em um projeto anterior
  desta mesma conta (Psiconutri), sem recálculo de nenhum valor.
- Imagem de compartilhamento (`public/images/og-cover.jpg`) — montada a
  partir das duas capas reais, sem elementos inventados.

## O que NÃO existe nesta sessão e foi tratado como placeholder identificado
- **Foto profissional de Yuri Viana**: o prompt menciona "foto profissional
  fornecida", mas nenhuma foto foi enviada nesta sessão. Em
  `AuthorSection.tsx`, o espaço usa um monograma "YV" em SVG
  (`public/images/app/author-placeholder.svg`), claramente um placeholder,
  não uma foto inventada. Substitua por uma foto real antes da publicação.
- **Telas do Psiconutri**: nenhum screenshot real do aplicativo foi
  fornecido ou pôde ser gerado nesta sessão (o app roda em outro projeto,
  sem ambiente de captura de tela disponível aqui). O componente
  `PhoneMockup.tsx` reproduz fielmente os textos, rótulos e fluxo reais
  implementados no Psiconutri (telas Hoje, Pausa Consciente e Relatório),
  renderizados como HTML/CSS dentro de uma moldura de celular — não são
  screenshots, e isso está documentado no comentário do próprio arquivo.
  Para produção, recomendamos substituir por capturas de tela reais do
  aplicativo publicado.
- **Depoimentos**: nenhum depoimento real foi fornecido. Conforme o prompt
  mestre, a seção de depoimentos foi omitida — não existe no site.
- **Scripts de Analytics/Pixel**: a camada `lib/tracking.ts` e os eventos
  estão prontos, mas os `<script>` de Google Analytics, Meta Pixel, Google
  Ads e TikTok Pixel não foram adicionados ao `app/layout.tsx`, para evitar
  qualquer risco de subir com um ID de exemplo/fictício. Adicione-os junto
  com os IDs reais no momento da configuração de produção.

## Verificação executada nesta sessão
Ver `TEST_REPORT.md`. O `npm install` completo do Next.js não pôde ser
finalizado dentro dos limites de tempo por comando deste ambiente (mesma
limitação técnica documentada no projeto Psiconutri); em compensação, a
lógica pura de preços/configuração (`lib/config.ts`) e a integridade dos
dados de receitas foram executadas diretamente com
`node --experimental-strip-types` e aprovadas. Recomendamos rodar
`npm install && npm run typecheck && npm run build && npm run lint` no seu
ambiente como primeiro passo.
