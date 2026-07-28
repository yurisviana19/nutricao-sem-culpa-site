import { CheckoutButton } from "@/components/CheckoutButton";
import { Reveal } from "@/components/Reveal";
import { Blob } from "@/components/Blob";
import { IconCheck } from "@/components/icons";
import { PRICES, formatBRL, AUTHOR_NAME, AUTHOR_CREDENTIAL } from "@/lib/config";

export function ConsultationOffer() {
  return (
    <section id="consulta" className="relative bg-nsc-verde-profundo text-white py-16 md:py-24 overflow-hidden">
      <Blob className="w-[420px] h-[420px] -top-32 -right-24" color="#C99A3B" opacity={0.1} />
      <div className="section-container relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl mb-4">
            Precisa de uma estratégia construída para a sua realidade?
          </h2>
          <p className="text-white/80 mb-4">
            Os produtos digitais oferecem educação, reflexão, organização, ferramentas práticas e auto-observação.
            A consulta individual com {AUTHOR_NAME} ({AUTHOR_CREDENTIAL}) permite considerar, de forma
            personalizada, sua rotina, necessidades, preferências, objetivos, histórico, dificuldades e
            particularidades.
          </p>
          <p className="text-3xl font-display mb-1">{formatBRL(PRICES.consultation)}</p>
          <p className="text-sm text-white/70 mb-6">
            Em até {PRICES.consultationMaxInstallments}x, conforme as condições da plataforma de pagamento.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CheckoutButton checkoutKey="consultation" event="click_consultation" variant="primary" className="btn-lift">
              Quero uma consulta individualizada
            </CheckoutButton>
            <a href="#faq" className="focus-ring underline self-center text-sm text-white/80">
              Entender como funciona a consulta
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="bg-white/10 rounded-organic p-8">
            <p className="font-display text-lg mb-4">O que a consulta considera</p>
            <ul className="grid gap-2.5 text-sm text-white/90">
              {["Rotina", "Objetivos", "Preferências", "Necessidades", "Histórico", "Dificuldades", "Particularidades pessoais"].map((i) => (
                <li key={i} className="flex gap-2.5">
                  <IconCheck className="w-4 h-4 text-nsc-dourado shrink-0 mt-0.5" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
