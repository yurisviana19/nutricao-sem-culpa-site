"use client";
import { CheckoutButton } from "@/components/CheckoutButton";
import { IconArrowRight } from "@/components/icons";
import { PRICES, formatBRL } from "@/lib/config";

export function StickyMobileCTA() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t px-4 py-3 flex items-center justify-between gap-3"
      style={{ boxShadow: "0 -8px 24px rgba(0,0,0,0.08)" }}
    >
      <span className="text-sm font-medium">Combo completo — {formatBRL(PRICES.combo)}</span>
      <CheckoutButton checkoutKey="combo" event="click_combo" variant="primary" className="btn-lift shrink-0 py-2 px-4 text-sm">
        <span className="flex items-center gap-1.5">
          Quero começar
          <IconArrowRight className="w-3.5 h-3.5" />
        </span>
      </CheckoutButton>
    </div>
  );
}
