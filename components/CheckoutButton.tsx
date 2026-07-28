"use client";
import { useState } from "react";
import { CheckoutKey, CHECKOUT_URLS, SUPPORT_WHATSAPP_URL, SUPPORT_EMAIL } from "@/lib/config";
import { trackEvent, TrackingEvent } from "@/lib/tracking";

interface CheckoutButtonProps {
  checkoutKey: CheckoutKey;
  event: TrackingEvent;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

/**
 * Único ponto de saída para links de pagamento. Se a URL ainda não
 * estiver configurada, nunca navega para "#" nem quebra — mostra uma
 * mensagem profissional com contato de suporte.
 */
export function CheckoutButton({ checkoutKey, event, children, variant = "primary", className = "" }: CheckoutButtonProps) {
  const [showPending, setShowPending] = useState(false);
  const url = CHECKOUT_URLS[checkoutKey];

  const base = "focus-ring inline-flex items-center justify-center rounded-organic px-6 py-3 font-medium transition-colors text-center";
  const variants: Record<string, string> = {
    primary: "bg-nsc-terracota-escuro text-white hover:bg-nsc-terracota",
    secondary: "bg-nsc-verde-profundo text-white hover:bg-nsc-verde-secundario",
    outline: "border-2 border-nsc-verde-profundo text-nsc-verde-profundo hover:bg-nsc-creme-secundario",
  };

  if (!url) {
    return (
      <div className={className}>
        <button
          type="button"
          className={`${base} ${variants[variant]}`}
          onClick={() => setShowPending(true)}
        >
          {children}
        </button>
        {showPending && (
          <p role="status" aria-live="polite" className="mt-3 text-sm text-nsc-texto-secundario max-w-sm">
            O checkout está sendo configurado e ficará disponível em breve. Enquanto isso, você pode falar direto
            com o suporte:{" "}
            {SUPPORT_WHATSAPP_URL ? (
              <a className="underline" href={SUPPORT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            ) : (
              <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            )}
            .
          </p>
        )}
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      onClick={() => {
        trackEvent(event);
        trackEvent("begin_checkout", { product: checkoutKey });
      }}
    >
      {children}
    </a>
  );
}
