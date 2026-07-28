import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Política de compra" };

export default function PoliticaDeCompraPage() {
  return (
    <>
      <Header />
      <main id="conteudo-principal" className="section-container py-16 max-w-2xl">
        <h1 className="font-display text-2xl text-nsc-verde-profundo mb-6">Política de compra</h1>
        <ul className="list-disc pl-5 flex flex-col gap-2 mb-4">
          <li>Os pagamentos são processados por uma plataforma de checkout externa, ainda a ser conectada.</li>
          <li>A entrega dos e-books é digital, após a confirmação do pagamento.</li>
          <li>O acesso gratuito de sete dias ao Psiconutri é exclusivo para compradores do combo.</li>
          <li>Os planos de continuidade do Psiconutri (30 dias ou anual) são contratados separadamente, por escolha ativa da pessoa usuária.</li>
          <li>A política de reembolso segue as condições vigentes da plataforma de pagamento utilizada no checkout — será detalhada no momento da compra.</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
