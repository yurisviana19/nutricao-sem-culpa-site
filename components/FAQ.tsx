"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/tracking";
import { FAQ_ITEMS } from "@/lib/faqData";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="section-container max-w-3xl">
        <Reveal className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo">Perguntas frequentes</h2>
        </Reveal>
        <div className="flex flex-col gap-2">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-organic border transition-colors ${isOpen ? "border-nsc-dourado/50 bg-nsc-creme" : "border-nsc-creme-secundario"}`}
              >
                <h3>
                  <button
                    type="button"
                    className="focus-ring w-full text-left px-5 py-4 flex justify-between items-center gap-4"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => {
                      const next = isOpen ? null : i;
                      setOpenIndex(next);
                      if (next !== null) trackEvent("faq_open", { question: item.q });
                    }}
                  >
                    <span className="font-medium">{item.q}</span>
                    <span
                      aria-hidden
                      className="shrink-0 w-6 h-6 rounded-full bg-nsc-creme-secundario flex items-center justify-center text-nsc-verde-profundo transition-transform"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-panel-${i}`} className="px-5 pb-4 text-sm text-nsc-texto-secundario">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
