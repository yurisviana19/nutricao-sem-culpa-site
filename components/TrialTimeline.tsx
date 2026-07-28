import { Reveal } from "@/components/Reveal";
import { IconShield } from "@/components/icons";

const STEPS = [
  "Você compra os dois livros.",
  "Recebe as instruções de acesso.",
  "Cria sua conta com o mesmo e-mail da compra.",
  "Confirma o cadastro.",
  "Utiliza o Psiconutri por sete dias.",
  "Registra sua rotina.",
  "Consulta seu resumo.",
  "Decide se deseja continuar.",
];

export function TrialTimeline() {
  return (
    <section className="bg-nsc-creme py-16 md:py-24">
      <div className="section-container">
        <Reveal className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo">
            Como funcionam os sete dias gratuitos
          </h2>
        </Reveal>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STEPS.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <li className="card-lift bg-white rounded-organic p-4 text-sm h-full">
                <span className="text-nsc-dourado font-display text-lg block mb-1">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal>
          <div className="max-w-2xl mx-auto text-sm text-nsc-texto-secundario bg-nsc-creme-secundario rounded-organic p-5 flex gap-3">
            <IconShield className="w-5 h-5 text-nsc-verde-profundo shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <p>A compra somente do e-book não libera o aplicativo.</p>
              <p>Os sete dias são liberados com a compra dos dois livros.</p>
              <p>Você decide se deseja continuar depois do teste.</p>
              <p>O teste não representa cobrança automática.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
