import { IconShield, IconLeaf, IconClock, IconBook } from "@/components/icons";
import { AUTHOR_CREDENTIAL } from "@/lib/config";

const ITEMS = [
  { icon: IconShield, label: `Nutricionista responsável — ${AUTHOR_CREDENTIAL}` },
  { icon: IconBook, label: "37 receitas reais, sem enrolação" },
  { icon: IconLeaf, label: "Sem promessa milagrosa" },
  { icon: IconClock, label: "7 dias grátis no Psiconutri" },
];

export function TrustBar() {
  return (
    <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-nsc-texto-secundario">
      {ITEMS.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-nsc-dourado shrink-0" />
          {label}
        </li>
      ))}
    </ul>
  );
}
