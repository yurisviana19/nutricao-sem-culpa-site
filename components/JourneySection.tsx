import { Reveal } from "@/components/Reveal";
import { IconBook, IconLeaf, IconChart, IconUser } from "@/components/icons";

const STEPS = [
  { n: "01", label: "Entender", product: "Por que Você Não Perde Peso?", desc: "Mitos, padrões e hábitos que podem estar dificultando seus resultados.", icon: IconBook },
  { n: "02", label: "Aplicar", product: "Receitas Sem Culpa", desc: "37 receitas práticas para colocar os conceitos em ação na rotina real.", icon: IconLeaf },
  { n: "03", label: "Acompanhar", product: "Psiconutri", desc: "Registre e observe seus padrões de alimentação, fome e sentimentos.", icon: IconChart },
  { n: "04", label: "Personalizar", product: "Consulta com Yuri Viana", desc: "Uma estratégia individual quando você precisar de acompanhamento próximo.", icon: IconUser },
];

export function JourneySection() {
  return (
    <section id="como-funciona" className="relative bg-nsc-verde-profundo text-white py-16 md:py-24 overflow-hidden">
      <div className="section-container relative">
        <Reveal as="div" className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-3">A jornada Nutrição Sem Culpa</h2>
          <p className="text-white/75 max-w-2xl mx-auto">
            Comece com informação, leve para a prática, acompanhe sua rotina e avance para uma estratégia individual
            quando precisar.
          </p>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-white/15" aria-hidden="true" />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {STEPS.map(({ n, label, product, desc, icon: Icon }, i) => (
              <Reveal key={n} delay={i * 100}>
                <li className="card-lift bg-white/10 rounded-organic p-6 h-full">
                  <div className="w-11 h-11 rounded-full bg-nsc-dourado/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-nsc-dourado" />
                  </div>
                  <span className="text-nsc-dourado font-display text-sm">{n}</span>
                  <h3 className="font-display text-lg mt-1 mb-1">{label}</h3>
                  <p className="text-sm font-medium text-white/90 mb-2">{product}</p>
                  <p className="text-sm text-white/70">{desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
