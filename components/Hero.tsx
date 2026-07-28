import { CheckoutButton } from "@/components/CheckoutButton";
import { ProductMockup } from "@/components/ProductMockup";
import { PhoneMockup } from "@/components/PhoneMockup";
import { TrustBar } from "@/components/TrustBar";
import { Blob } from "@/components/Blob";
import { IconArrowRight, IconSparkle } from "@/components/icons";
import { AUTHOR_NAME, AUTHOR_CREDENTIAL, PRICES, formatBRL } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-nsc-creme">
      <Blob className="w-[520px] h-[520px] -top-40 -left-40" color="#0B4A3A" opacity={0.06} />
      <Blob className="w-[420px] h-[420px] top-10 -right-32" color="#E8724F" opacity={0.07} />

      <div className="section-container relative py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 uppercase tracking-wide text-nsc-dourado text-xs font-medium mb-4 bg-nsc-creme-secundario px-3 py-1.5 rounded-full">
            <IconSparkle className="w-3.5 h-3.5" />
            Nutrição Sem Culpa
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] text-nsc-verde-profundo leading-[1.08] mb-6 tracking-tight">
            Antes de tentar mudar tudo <span className="text-gradient-gold">de novo</span>, descubra o que realmente acontece na sua rotina.
          </h1>
          <p className="text-nsc-texto-secundario text-lg mb-7 max-w-xl">
            Um conjunto de ferramentas para entender seus padrões, colocar escolhas possíveis em prática e
            acompanhar sua alimentação com mais clareza e menos culpa.
          </p>
          <p className="text-sm mb-7">
            Por <strong>{AUTHOR_NAME}</strong>, Nutricionista — {AUTHOR_CREDENTIAL}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <CheckoutButton checkoutKey="combo" event="click_combo" variant="primary" className="btn-lift group">
              <span className="flex items-center gap-2">
                Quero o combo completo por {formatBRL(PRICES.combo)}
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </CheckoutButton>
            <CheckoutButton checkoutKey="ebook" event="click_ebook" variant="outline" className="btn-lift">
              Quero somente o e-book por {formatBRL(PRICES.ebook)}
            </CheckoutButton>
          </div>
          <p className="text-xs text-nsc-texto-secundario mb-8">
            Na compra dos dois livros, você recebe sete dias gratuitos de acesso ao Psiconutri — sem cobrança
            automática ao final.
          </p>

          <TrustBar />
        </div>

        <div className="relative flex justify-center items-end gap-4 min-h-[380px]">
          <div className="animate-float">
            <ProductMockup src="/images/products/ebook_cover.webp" alt="Capa do e-book Por que Você Não Perde Peso?" rotate={-7} />
          </div>
          <div className="animate-float" style={{ animationDelay: "1.2s" }}>
            <ProductMockup src="/images/products/recipes_cover.webp" alt="Capa do livro Receitas Sem Culpa" rotate={5} />
          </div>
          <div className="hidden lg:block absolute -right-4 -bottom-10">
            <PhoneMockup screen="hoje" />
          </div>
        </div>
      </div>
    </section>
  );
}
