import { CheckoutButton } from "@/components/CheckoutButton";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "@/components/Reveal";
import { IconCheck } from "@/components/icons";

const FEATURES = [
  "Registro de refeições, bebidas e beliscos",
  "Nível de fome e possíveis contextos",
  "Sentimentos antes e depois de comer",
  "Pausa consciente — sem tratar comer como falha",
  "Resumo semanal dos seus registros",
  "Relatório personalizado, gerado por um motor próprio",
  "Receitas marcadas como preparadas",
  "Área da conta com seus dados e status de acesso",
];

export function PsiconutriShowcase() {
  return (
    <section id="psiconutri" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal className="order-2 md:order-1 flex justify-center gap-4">
          <div className="animate-float">
            <PhoneMockup screen="pausa" />
          </div>
          <div className="hidden sm:block animate-float" style={{ animationDelay: "1s" }}>
            <PhoneMockup screen="relatorio" />
          </div>
        </Reveal>
        <Reveal delay={100} className="order-1 md:order-2">
          <p className="uppercase text-xs tracking-wide text-nsc-dourado font-medium mb-2">Acompanhe sua rotina</p>
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo mb-3">Psiconutri</h2>
          <p className="text-nsc-texto-secundario mb-5">
            O Psiconutri organiza seus registros e ajuda você a observar os padrões da semana — uma ferramenta
            educativa de auto-observação, não um tratamento, diagnóstico ou substituto de profissional de saúde.
          </p>
          <ul className="grid gap-2.5 mb-6 text-sm">
            {FEATURES.map((f) => (
              <li key={f} className="flex gap-2.5">
                <IconCheck className="w-4 h-4 text-nsc-terracota shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <CheckoutButton checkoutKey="combo" event="click_combo" variant="primary" className="btn-lift">
            Quero experimentar o Psiconutri com o combo
          </CheckoutButton>
        </Reveal>
      </div>
    </section>
  );
}
