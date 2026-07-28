import Link from "next/link";
import { AUTHOR_NAME, AUTHOR_CREDENTIAL, SUPPORT_EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/config";
import { LegalNotice } from "@/components/LegalNotice";

export function Footer() {
  return (
    <footer className="bg-nsc-verde-profundo text-white/80 py-12">
      <div className="section-container grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
        <div>
          <p className="font-display text-white text-lg mb-2">Nutrição Sem Culpa</p>
          <p>{AUTHOR_NAME}</p>
          <p>Nutricionista — {AUTHOR_CREDENTIAL}</p>
        </div>
        <div>
          <p className="font-medium text-white mb-2">Contato</p>
          <p><a className="underline focus-ring" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
          <p><a className="underline focus-ring" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE}</a></p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-white mb-1">Institucional</p>
          <Link className="underline focus-ring" href="/privacidade">Política de privacidade</Link>
          <Link className="underline focus-ring" href="/termos">Termos de uso</Link>
          <Link className="underline focus-ring" href="/politica-de-compra">Política de compra</Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-white mb-1">Legal</p>
          <p>Direitos autorais reservados.</p>
          <p>© {new Date().getFullYear()} Nutrição Sem Culpa.</p>
        </div>
      </div>
      <div className="section-container">
        <LegalNotice className="text-white/60" />
      </div>
    </footer>
  );
}
