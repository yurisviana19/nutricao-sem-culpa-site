import { PRICES, formatBRL } from "@/lib/config";

export const FAQ_ITEMS: { q: string; a: string }[] = [
  { q: "O e-book é uma dieta?", a: "Não. É um material educativo sobre mitos, padrões e hábitos que podem dificultar seus resultados — não uma dieta pronta ou prescrição." },
  { q: "O material garante perda de peso?", a: "Não. Nenhum produto do ecossistema garante emagrecimento ou resultado específico. Resultados podem variar entre pessoas." },
  { q: "Posso comprar somente o e-book?", a: `Sim. O e-book pode ser adquirido separadamente por ${formatBRL(PRICES.ebook)}.` },
  { q: "Como recebo o livro de receitas?", a: "Ele é entregue digitalmente junto com a confirmação da sua compra, na mesma plataforma de pagamento." },
  { q: "Quem recebe os sete dias do Psiconutri?", a: "Apenas quem compra o e-book principal junto com Receitas Sem Culpa. A compra isolada do e-book não libera o teste." },
  { q: "Como funciona o cadastro no aplicativo?", a: "Você cria sua conta no Psiconutri utilizando o mesmo e-mail informado na compra do combo e confirma o cadastro por e-mail." },
  { q: "O que acontece após os sete dias?", a: "O acesso às funcionalidades do aplicativo é pausado e você pode escolher continuar com o plano de 30 dias ou anual." },
  { q: "Existe cobrança automática?", a: "Não. Os sete dias são um período de teste; a continuidade depende de uma escolha ativa sua pelos planos pagos." },
  { q: "Preciso usar o mesmo e-mail da compra?", a: "Sim, para que o sistema reconheça sua elegibilidade ao período gratuito." },
  { q: "O aplicativo substitui uma consulta?", a: "Não. O Psiconutri é uma ferramenta educativa de auto-observação, não uma consulta ou atendimento individualizado." },
  { q: "O Psiconutri substitui um psicólogo?", a: "Não. O aplicativo não oferece atendimento de crise, diagnóstico ou tratamento psicológico." },
  { q: "Como funcionam os planos?", a: `Plano de 30 dias por ${formatBRL(PRICES.appMonthly)} ou plano anual por ${formatBRL(PRICES.appAnnual)} (equivalente a cerca de ${formatBRL(PRICES.appAnnualMonthlyEquivalent)}/mês).` },
  { q: "Como funciona a consulta?", a: "É um atendimento individual com Yuri Viana para construir uma estratégia considerando sua rotina, objetivos e particularidades." },
  { q: "Posso parcelar a consulta?", a: `Sim, em até ${PRICES.consultationMaxInstallments}x, conforme as condições da plataforma de pagamento utilizada no checkout.` },
  { q: "Como recebo os produtos?", a: "Os e-books são entregues digitalmente após a confirmação do pagamento, pela plataforma de checkout." },
  { q: "Posso acessar pelo celular?", a: "Sim. O site, os e-books e o Psiconutri funcionam bem em celulares, tablets e computadores." },
  { q: "Existe política de reembolso?", a: "A política de reembolso segue as condições da plataforma de pagamento utilizada e será detalhada no checkout." },
];
