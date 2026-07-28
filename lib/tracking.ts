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

export function trackEvent(event: TrackingEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[tracking]", event, params);
  }

  window.gtag?.("event", event, params);
  window.fbq?.("trackCustom", event, params);
  window.ttq?.track(event, params);
}
