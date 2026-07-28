import Image from "next/image";
import { CheckoutButton } from "@/components/CheckoutButton";
import { Reveal } from "@/components/Reveal";
import { PRICES, formatBRL } from "@/lib/config";
import recipes from "@/data/recipes.json";

const CATEGORY_LABELS: Record<string, string> = {
  "CAFÉ DA MANHÃ": "Café da manhã",
  "LANCHES E BELISCOS PRÁTICOS": "Lanches e beliscos",
  "PRATOS PRINCIPAIS": "Pratos principais",
  "MOLHOS E TEMPEROS CASEIROS": "Molhos e temperos",
  "FINAL DE SEMANA E EVENTOS SOCIAIS": "Fim de semana e eventos",
  "SOBREMESAS E DOCES EQUILIBRADOS": "Sobremesas e doces",
};

export function RecipeOffer() {
  const counts = new Map<string, number>();
  for (const r of recipes as { category: string }[]) {
    counts.set(r.category, (counts.get(r.category) ?? 0) + 1);
  }

  return (
    <section id="receitas" className="bg-nsc-creme-secundario py-16 md:py-24">
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="uppercase text-xs tracking-wide text-nsc-dourado font-medium mb-2">Da teoria à prática</p>
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo mb-3">Receitas Sem Culpa</h2>
          <p className="text-nsc-texto-secundario mb-5">
            O e-book ajuda você a entender. O livro de receitas ajuda você a colocar em prática — com{" "}
            <strong className="text-nsc-verde-profundo">37 receitas reais</strong> para caber na sua rotina.
          </p>

          <ul className="grid grid-cols-2 gap-2 mb-6 text-sm">
            {Array.from(counts.entries()).map(([cat, n]) => (
              <li key={cat} className="card-lift bg-white rounded-organic px-3 py-2.5">
                {CATEGORY_LABELS[cat] ?? cat} <span className="text-nsc-texto-secundario">({n})</span>
              </li>
            ))}
          </ul>

          <p className="text-sm mb-6 text-nsc-texto-secundario">
            Cada receita traz ingredientes, modo de preparo, tempo, rendimento, informações nutricionais aproximadas
            e uma nota da nutricionista conectando a preparação aos conceitos do e-book principal.
          </p>

          <p className="text-3xl font-display text-nsc-verde-profundo mb-4">+ {formatBRL(PRICES.recipes)}</p>
          <CheckoutButton checkoutKey="combo" event="click_combo" variant="primary" className="btn-lift">
            Adicionar Receitas Sem Culpa
          </CheckoutButton>
        </Reveal>

        <Reveal delay={120} className="flex justify-center gap-4">
          <div className="animate-float">
            <Image
              src="/images/products/recipes_cover.webp"
              alt="Capa do livro Receitas Sem Culpa"
              width={320}
              height={454}
              className="rounded-organic shadow-2xl w-full max-w-[220px] h-auto"
              style={{ boxShadow: "0 30px 60px -25px rgba(11,74,58,0.4)" }}
            />
          </div>
          <div className="hidden sm:block self-end animate-float" style={{ animationDelay: "1s" }}>
            <Image
              src="/images/products/recipe_sample_1.webp"
              alt="Exemplo de página do livro Receitas Sem Culpa"
              width={320}
              height={454}
              className="rounded-organic shadow-lg w-full max-w-[150px] h-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
