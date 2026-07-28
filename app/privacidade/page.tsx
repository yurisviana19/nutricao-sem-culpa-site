import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SUPPORT_EMAIL } from "@/lib/config";

export const metadata = { title: "Política de privacidade" };

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main id="conteudo-principal" className="section-container py-16 max-w-2xl">
        <h1 className="font-display text-2xl text-nsc-verde-profundo mb-6">Política de privacidade</h1>
        <p className="text-sm text-nsc-texto-secundario mb-4">
          Esta é uma minuta inicial, para posterior revisão jurídica profissional, e não constitui aconselhamento
          jurídico definitivo.
        </p>
        <p className="mb-4">
          Este site coleta apenas os dados necessários para viabilizar o contato e o direcionamento para a
          plataforma de pagamento externa (nome e e-mail, quando informados voluntariamente em formulários de
          contato). O site não processa pagamentos nem armazena dados de cartão — essas informações são tratadas
          exclusivamente pela plataforma de checkout escolhida.
        </p>
        <p className="mb-4">
          Dados de uso do site podem ser coletados por ferramentas de análise (Google Analytics, Meta Pixel, Google
          Ads, TikTok Pixel), quando configuradas com identificadores reais em produção, exclusivamente para
          entender o desempenho das páginas e campanhas.
        </p>
        <p>Contato: {SUPPORT_EMAIL}</p>
      </main>
      <Footer />
    </>
  );
}
