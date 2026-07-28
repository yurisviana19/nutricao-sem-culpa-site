/**
 * Camada única de rastreamento. Cada evento é disparado por aqui, nunca
 * diretamente nos componentes. Enquanto os IDs de GA/Meta/Ads/TikTok não
 * estiverem configurados via env, os eventos apenas registram no console
 * em desenvolvimento — nada é enviado para nenhum provedor.
 */

export type TrackingEvent =
  | "click_ebook"
  | "click_combo"
  | "click_app_30_days"
  | "click_app_annual"
  | "click_consultation"
  | "click_support"
  | "view_combo"
  | "view_psiconutri"
  | "view_consultation"
  | "faq_open"
  | "begin_checkout";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, params?: Record<string, unknown>) => void };
  }
}

const GOOGLE_ADS_CONVERSION_ID = "AW-18356072029";
const GOOGLE_ADS_CONVERSION_LABEL = "8jXxCN7IgtgcEN3c7bBE";

// Preço aproximado de cada produto, usado como valor da conversão no Google Ads.
// Mantido aqui (em vez de importar de lib/config) para não acoplar o rastreamento
// à estrutura de preços — se um checkoutKey não estiver mapeado, usamos o valor padrão.
const CONVERSION_VALUE_BY_PRODUCT: Record<string, number> = {
  ebook: 19.99,
  recipes: 9.99,
  combo: 29.98,
  appMonthly: 24.9,
  appAnnual: 197.0,
  consultation: 198.0,
};

export function trackEvent(event: TrackingEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[tracking]", event, params);
  }

  window.gtag?.("event", event, params);
  window.fbq?.("trackCustom", event, params);
  window.ttq?.track(event, params);

  // Dispara a ação de conversão "Compra" do Google Ads sempre que alguém
  // inicia um checkout (clica em um botão de compra). Isso permite que a
  // campanha otimize por vendas reais, não só por cliques.
  if (event === "begin_checkout") {
    const product = typeof params.product === "string" ? params.product : undefined;
    const value = product ? CONVERSION_VALUE_BY_PRODUCT[product] ?? 1.0 : 1.0;

    window.gtag?.("event", "conversion", {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
      value,
      currency: "BRL",
      transaction_id: `${product ?? "checkout"}-${Date.now()}`,
    });
  }
}
