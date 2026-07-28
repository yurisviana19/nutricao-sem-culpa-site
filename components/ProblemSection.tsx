import { CheckoutButton } from "@/components/CheckoutButton";
import { Reveal } from "@/components/Reveal";
import { IconHeart } from "@/components/icons";

const SITUATIONS = [
  "Você corta alimentos e depois volta a comê-los com culpa.",
  "Sente que come pouco, mas não compreende o conjunto da rotina.",
  "Chega a algumas refeições com fome intensa.",
  "Trata o final de semana como se anulasse toda a semana.",
  "Recebe informações contraditórias sobre alimentação.",
  "Não sabe se está com fome, vontade ou apenas seguindo um hábito.",
  "Precisa de opções práticas para a rotina.",
  "Já tentou mudar tudo de uma vez e não conseguiu manter.",
];

export function ProblemSection() {
  return (
    <section id="identificacao" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <Reveal as="div" className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo mb-2">Isso soa familiar?</h2>
          <p className="text-nsc-texto-secundario">Você não está sozinha nisso — e não há nada de errado em sentir isso.</p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-4 mb-10">
          {SITUATIONS.map((s, i) => (
            <Reveal key={s} as="li" delay={i * 60}>
              <div className="card-lift flex gap-3 bg-nsc-creme rounded-organic p-5 h-full border border-transparent hover:border-nsc-dourado/30">
                <IconHeart className="w-5 h-5 text-nsc-terracota shrink-0 mt-0.5" />
                <span>{s}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal as="div" className="text-center">
          <p className="font-display text-xl md:text-2xl text-nsc-verde-profundo max-w-2xl mx-auto mb-8">
            O problema pode não ser falta de esforço. Pode ser falta de clareza sobre o que acontece ao longo dos
            seus dias.
          </p>
          <CheckoutButton checkoutKey="combo" event="click_combo" variant="secondary" className="btn-lift">
            Quero entender melhor minha rotina
          </CheckoutButton>
        </Reveal>
      </div>
    </section>
  );
}
