import { CheckoutButton } from "@/components/CheckoutButton";
import { Reveal } from "@/components/Reveal";
import { Blob } from "@/components/Blob";
import { IconArrowRight } from "@/components/icons";
import { PRICES, formatBRL } from "@/lib/config";

export function FinalCTA() {
  return (
    <section className="relative bg-nsc-creme py-16 md:py-24 overflow-hidden">
      <Blob className="w-[420px] h-[420px] -bottom-40 left-1/2 -translate-x-1/2" color="#E8724F" opacity={0.08} />
      <Reveal className="section-container relative text-center max-w-2xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo mb-4">
          Você não precisa mudar tudo hoje. Precisa começar enxergando com mais clareza.
        </h2>
        <p className="text-nsc-texto-secundario mb-8">
          E-book, Receitas Sem Culpa e sete dias no Psiconutri — {formatBRL(PRICES.combo)}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <CheckoutButton checkoutKey="combo" event="click_combo" variant="primary" className="btn-lift group">
            <span className="flex items-center gap-2">
              Começar agora por {formatBRL(PRICES.combo)}
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </CheckoutButton>
          <CheckoutButton checkoutKey="ebook" event="click_ebook" variant="outline" className="btn-lift">
            Comprar somente o e-book por {formatBRL(PRICES.ebook)}
          </CheckoutButton>
        </div>
        <a href="#consulta" className="focus-ring text-sm underline text-nsc-texto-secundario">
          Quero uma consulta individualizada
        </a>
      </Reveal>
    </section>
  );
}
