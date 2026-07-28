import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Termos de uso" };

export default function TermosPage() {
  return (
    <>
      <Header />
      <main id="conteudo-principal" className="section-container py-16 max-w-2xl">
        <h1 className="font-display text-2xl text-nsc-verde-profundo mb-6">Termos de uso</h1>
        <p className="text-sm text-nsc-texto-secundario mb-4">
          Minuta inicial para posterior revisão jurídica profissional; não constitui aconselhamento jurídico
          definitivo.
        </p>
        <p className="mb-4">
          Este site apresenta e direciona para a compra dos produtos do ecossistema Nutrição Sem Culpa (e-book,
          livro de receitas, acesso ao Psiconutri e consulta individual). A compra é processada por uma plataforma
          de pagamento externa, cujos termos próprios também se aplicam à transação.
        </p>
        <p className="mb-4">
          Os conteúdos possuem finalidade educativa e não substituem avaliação individual de nutricionista, médico,
          psicólogo ou outro profissional habilitado. Nenhum produto garante resultado específico.
        </p>
        <p>
          O acesso gratuito de sete dias ao Psiconutri é exclusivo para compradores do combo (e-book + livro de
          receitas) e não constitui assinatura automática.
        </p>
      </main>
      <Footer />
    </>
  );
}
