import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { AUTHOR_NAME, AUTHOR_CREDENTIAL, INSTAGRAM_HANDLE, SUPPORT_EMAIL } from "@/lib/config";

export function AuthorSection() {
  return (
    <section className="bg-nsc-creme-secundario py-16 md:py-24">
      <div className="section-container grid md:grid-cols-3 gap-10 items-center">
        <Reveal className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-nsc-verde-profundo/10 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden" style={{ boxShadow: "0 20px 40px -15px rgba(11,74,58,0.35)" }}>
            <Image
              src="/images/app/author-placeholder.svg"
              alt={`Foto profissional de ${AUTHOR_NAME}`}
              width={192}
              height={192}
            />
          </div>
        </Reveal>
        <Reveal delay={100} className="md:col-span-2">
          <h2 className="font-display text-2xl md:text-3xl text-nsc-verde-profundo mb-2">Sobre {AUTHOR_NAME}</h2>
          <p className="text-sm text-nsc-texto-secundario mb-4">Nutricionista — {AUTHOR_CREDENTIAL}</p>
          <p className="mb-4 text-lg leading-relaxed">
            {AUTHOR_NAME} é responsável por todo o conteúdo do ecossistema Nutrição Sem Culpa — o e-book, o livro de
            receitas e o aplicativo Psiconutri. O trabalho é guiado por um compromisso com educação nutricional
            clara, alimentação possível na rotina real e cuidado individualizado, sem soluções milagrosas.
          </p>
          <p className="text-sm text-nsc-texto-secundario">
            {INSTAGRAM_HANDLE} · {SUPPORT_EMAIL}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
