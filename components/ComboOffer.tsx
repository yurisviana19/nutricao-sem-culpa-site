import { CheckoutButton } from "@/components/CheckoutButton";
import { Reveal } from "@/components/Reveal";
import { Blob } from "@/components/Blob";
import { IconCheck, IconArrowRight, IconSparkle } from "@/components/icons";
import { PRICES, formatBRL } from "@/lib/config";

const INCLUDED = [
  { label: "E-book Por que Você Não Perde Peso?", value: formatBRL(PRICES.ebook) },
  { label: "Livro Receitas Sem Culpa (37 receitas)", value: formatBRL(PRICES.recipes) },
  { label: "7 dias de acesso ao Psiconutri", value: "Incluído" },
];

export function ComboOffer() {
  return (
    <section id="combo" className="relative bg-nsc-verde-profundo text-white py-20 md:py-28 overflow-hidden">
      <Blob className="w-[500px] h-[500px] -bottom-56 -right-40" color="#C99A3B" opacity={0.12} />
      <Blob className="w-[380px] h-[380px] -top-40 -left-32" color="#E8724F" opacity={0.1} />

      <div className="section-container relative">
        <Reveal className="max-w-2xl mx-auto text-center mb-10">
          <p className="inline-flex items-center gap-2 uppercase tracking-wide text-nsc-dourado text-xs font-medium mb-4 bg-white/10 px-3 py-1.5 rounded-full">
            <IconSparkle className="w-3.5 h-3.5" />
            Oferta principal
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-3">Comece pela jornada completa</h2>
          <p className="text-white/75">
            Os dois livros — para entender e para aplicar — mais sete dias para acompanhar sua rotina no Psiconutri.
          </p>
        </Reveal>

        <Reveal delay={100} className="max-w-lg mx-auto">
          <div
            className="bg-white text-nsc-texto rounded-organic p-8 md:p-10 shadow-2xl relative"
            style={{ boxShadow: "0 40px 80px -30px rgba(0,0,0,0.5)" }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nsc-dourado text-white text-xs font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
              Melhor forma de começar
            </div>

            <ul className="flex flex-col gap-3 mb-6 mt-2 text-sm">
              {INCLUDED.map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2.5">
                    <IconCheck className="w-4 h-4 text-nsc-verde-profundo shrink-0" />
                    {item.label}
                  </span>
                  <span className="text-nsc-texto-secundario whitespace-nowrap">{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-end justify-between border-t pt-5 mb-6">
              <span className="text-sm text-nsc-texto-secundario">Total por</span>
              <span className="font-display text-4xl text-nsc-verde-profundo">{formatBRL(PRICES.combo)}</span>
            </div>

            <CheckoutButton checkoutKey="combo" event="click_combo" variant="primary" className="btn-lift w-full mb-3 ring-pulse-once">
              <span className="flex items-center justify-center gap-2">
                Quero os dois livros e sete dias no app
                <IconArrowRight className="w-4 h-4" />
              </span>
            </CheckoutButton>
            <p className="text-xs text-nsc-texto-secundario text-center">
              Cadastre-se no Psiconutri utilizando o mesmo e-mail informado na compra. Os sete dias são um período
              de teste, sem cobrança automática ao final.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
