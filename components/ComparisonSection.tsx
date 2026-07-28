import { PRICES, formatBRL } from "@/lib/config";
import { Reveal } from "@/components/Reveal";

const ROWS = [
  { label: "Conteúdo educativo (e-book)", ebook: true, combo: true, app30: false, appAnnual: false, consult: false },
  { label: "Livro de receitas", ebook: false, combo: true, app30: false, appAnnual: false, consult: false },
  { label: "Acesso ao Psiconutri", ebook: false, combo: "7 dias", app30: "30 dias", appAnnual: "1 ano", consult: false },
  { label: "Personalização", ebook: false, combo: false, app30: false, appAnnual: false, consult: true },
  { label: "Atendimento individual", ebook: false, combo: false, app30: false, appAnnual: false, consult: true },
];

const COLUMNS = [
  { key: "ebook", label: "E-book", price: formatBRL(PRICES.ebook) },
  { key: "combo", label: "Combo", price: formatBRL(PRICES.combo) },
  { key: "app30", label: "Psiconutri 30 dias", price: formatBRL(PRICES.appMonthly) },
  { key: "appAnnual", label: "Psiconutri anual", price: formatBRL(PRICES.appAnnual) },
  { key: "consult", label: "Consulta", price: formatBRL(PRICES.consultation) },
] as const;

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span aria-label="incluído" className="text-nsc-verde-profundo">✓</span>;
  if (value === false) return <span aria-label="não incluído" className="text-nsc-texto-secundario">—</span>;
  return <span>{value}</span>;
}

export function ComparisonSection() {
  return (
    <section className="bg-nsc-creme py-16">
      <div className="section-container">
        <Reveal className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo">
            Qual opção faz sentido para você
          </h2>
        </Reveal>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm bg-white rounded-organic overflow-hidden">
            <thead>
              <tr className="bg-nsc-verde-profundo text-white">
                <th className="text-left p-3">&nbsp;</th>
                {COLUMNS.map((c) => (
                  <th key={c.key} className="p-3 text-left">
                    <div>{c.label}</div>
                    <div className="text-xs font-normal text-white/80">{c.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label} className="border-b last:border-0">
                  <th scope="row" className="text-left p-3 font-normal">{r.label}</th>
                  {COLUMNS.map((c) => (
                    <td key={c.key} className="p-3"><Cell value={r[c.key as keyof typeof r] as boolean | string} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden grid gap-4">
          {COLUMNS.map((c) => (
            <div key={c.key} className="bg-white rounded-organic p-4">
              <p className="font-display text-nsc-verde-profundo mb-1">{c.label} — {c.price}</p>
              <ul className="text-sm flex flex-col gap-1">
                {ROWS.map((r) => (
                  <li key={r.label} className="flex justify-between">
                    <span>{r.label}</span>
                    <Cell value={r[c.key as keyof typeof r] as boolean | string} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
