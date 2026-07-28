import Image from "next/image";
import { CheckoutButton } from "@/components/CheckoutButton";
import { Reveal } from "@/components/Reveal";
import { IconCheck } from "@/components/icons";
import { PRICES, formatBRL } from "@/lib/config";

const CONTENTS = [
  "Mitos e verdades sobre emagrecimento",
  "Reflexões sobre comportamento alimentar",
  "Fome e saciedade",
  "Alimentação no final de semana",
  "Organização da rotina",
  "Exercícios práticos",
  "Autoavaliação",
  "Plano prático de sete dias",
  "Checklist",
  "Mapa de prioridades",
];

export function EbookOffer() {
  return (
    <section id="ebook" className="bg-white py-16 md:py-24">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal className="flex justify-center order-2 md:order-1">
          <div className="relative animate-float">
            <Image
              src="/images/products/ebook_cover.webp"
              alt="Capa do e-book Por que Você Não Perde Peso?"
              width={420}
              height={596}
              className="rounded-organic shadow-2xl w-full max-w-xs h-auto"
              style={{ boxShadow: "0 30px 60px -25px rgba(11,74,58,0.4)" }}
            />
          </div>
        </Reveal>
        <Reveal className="order-1 md:order-2" delay={100}>
          <p className="uppercase text-xs tracking-wide text-nsc-dourado font-medium mb-2">Ponto de partida</p>
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo mb-3">
            Por que Você Não Perde Peso?
          </h2>
          <p className="text-nsc-texto-secundario mb-5">
            O ponto de partida da jornada: entender, sem julgamento, os mitos, padrões e hábitos silenciosos que
            podem estar dificultando seus resultados.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-sm">
            {CONTENTS.map((c) => (
              <li key={c} className="flex gap-2">
                <IconCheck className="w-4 h-4 text-nsc-terracota shrink-0 mt-0.5" />
                {c}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
            <div className="bg-nsc-creme rounded-organic p-4">
              <p className="font-medium mb-1">Para quem é</p>
              <p className="text-nsc-texto-secundario">
                Quem quer compreender melhor a própria rotina alimentar antes de tentar mudá-la.
              </p>
            </div>
            <div className="bg-nsc-creme rounded-organic p-4">
              <p className="font-medium mb-1">Para quem não é</p>
              <p className="text-nsc-texto-secundario">
                Quem busca uma dieta pronta, prescrição individual ou promessa de resultado garantido.
              </p>
            </div>
          </div>

          <p className="text-3xl font-display text-nsc-verde-profundo mb-4">{formatBRL(PRICES.ebook)}</p>
          <CheckoutButton checkoutKey="ebook" event="click_ebook" variant="primary" className="btn-lift">
            Quero o e-book por {formatBRL(PRICES.ebook)}
          </CheckoutButton>
        </Reveal>
      </div>
    </section>
  );
}
