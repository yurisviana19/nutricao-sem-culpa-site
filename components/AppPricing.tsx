import { CheckoutButton } from "@/components/CheckoutButton";
import { Reveal } from "@/components/Reveal";
import { IconCheck } from "@/components/icons";
import { PRICES, formatBRL } from "@/lib/config";

export function AppPricing() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container">
        <Reveal className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo">
            Depois dos sete dias, continue no seu ritmo
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Reveal>
            <div className="card-lift border rounded-organic p-7 flex flex-col gap-3 h-full">
              <h3 className="font-display text-lg">Plano de 30 dias</h3>
              <p className="text-3xl font-display text-nsc-verde-profundo">{formatBRL(PRICES.appMonthly)}</p>
              <ul className="text-sm text-nsc-texto-secundario flex flex-col gap-1.5 mb-2">
                {["Acesso por 30 dias", "Continuidade dos registros", "Resumos e relatórios", "Receitas e demais recursos"].map((f) => (
                  <li key={f} className="flex gap-2">
                    <IconCheck className="w-4 h-4 text-nsc-verde-profundo shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <CheckoutButton checkoutKey="appMonthly" event="click_app_30_days" variant="outline" className="btn-lift mt-auto">
                Continuar por 30 dias
              </CheckoutButton>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-lift border-2 border-nsc-dourado rounded-organic p-7 flex flex-col gap-3 h-full relative">
              <span className="absolute -top-3 left-6 bg-nsc-dourado text-white text-xs font-medium px-3 py-1 rounded-full">
                Melhor custo-benefício
              </span>
              <h3 className="font-display text-lg mt-1">Plano anual</h3>
              <p className="text-3xl font-display text-nsc-verde-profundo">{formatBRL(PRICES.appAnnual)}</p>
              <p className="text-sm text-nsc-texto-secundario">
                Equivalente a aproximadamente {formatBRL(PRICES.appAnnualMonthlyEquivalent)} por mês.
              </p>
              <CheckoutButton checkoutKey="appAnnual" event="click_app_annual" variant="primary" className="btn-lift mt-auto">
                Quero o plano anual
              </CheckoutButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
