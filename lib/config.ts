/**
 * Configuração central e ÚNICA de links de checkout, contato e preços.
 * Nenhum componente deve declarar URLs de pagamento diretamente — sempre
 * importar deste arquivo. Os links reais serão adicionados depois, via
 * variáveis de ambiente (.env.local) — ver .env.example.
 */

export const SITE_NAME = "Nutrição Sem Culpa";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nutricaosemculpa.com.br";

export const AUTHOR_NAME = "Yuri Viana";
export const AUTHOR_CREDENTIAL = "CRN-5 18333";

export const CHECKOUT_URLS = {
  ebook: process.env.NEXT_PUBLIC_CHECKOUT_EBOOK_URL || "",
  combo: process.env.NEXT_PUBLIC_CHECKOUT_COMBO_URL || "",
  appMonthly: process.env.NEXT_PUBLIC_CHECKOUT_APP_30_DAYS_URL || "",
  appAnnual: process.env.NEXT_PUBLIC_CHECKOUT_APP_ANNUAL_URL || "",
  consultation: process.env.NEXT_PUBLIC_CHECKOUT_CONSULTATION_URL || "",
} as const;

export type CheckoutKey = keyof typeof CHECKOUT_URLS;

export const SUPPORT_WHATSAPP_URL = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP_URL || "";
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "yuriviananutri@gmail.com";
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/yuriviana.nutri";
export const INSTAGRAM_HANDLE = "@yuriviana.nutri";

/**
 * Número de WhatsApp (formato internacional, só dígitos, ex: 5579988575965)
 * usado para montar links wa.me com mensagem pré-preenchida.
 */
export const SUPPORT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP_NUMBER || "";

/**
 * Link de WhatsApp para quem comprou a consulta avisar que veio pelo site,
 * com mensagem pronta para agilizar o agendamento após a confirmação do pagamento.
 */
export function getConsultationWhatsAppUrl(): string | null {
  if (!SUPPORT_WHATSAPP_NUMBER) return null;
  const message =
    "Olá! Comprei a consulta individual pelo site Nutrição Sem Culpa (e-book) e gostaria de agendar meu atendimento.";
  return `https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Preços centrais — única fonte de verdade para toda a página. */
export const PRICES = {
  ebook: 19.99,
  recipes: 9.99,
  combo: 29.98,
  appMonthly: 24.9,
  appAnnual: 197.0,
  appAnnualMonthlyEquivalent: 16.42,
  consultation: 198.0,
  consultationMaxInstallments: 3,
} as const;

export function formatBRL(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}
