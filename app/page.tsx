import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { JourneySection } from "@/components/JourneySection";
import { EbookOffer } from "@/components/EbookOffer";
import { RecipeOffer } from "@/components/RecipeOffer";
import { ComboOffer } from "@/components/ComboOffer";
import { PsiconutriShowcase } from "@/components/PsiconutriShowcase";
import { TrialTimeline } from "@/components/TrialTimeline";
import { AppPricing } from "@/components/AppPricing";
import { AuthorSection } from "@/components/AuthorSection";
import { ConsultationOffer } from "@/components/ConsultationOffer";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { buildProductSchema, buildPersonSchema, buildFaqSchema } from "@/lib/structuredData";
import { FAQ_ITEMS } from "@/lib/faqData";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProductSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPersonSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(FAQ_ITEMS)) }}
      />
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <ProblemSection />
        <JourneySection />
        <EbookOffer />
        <RecipeOffer />
        <ComboOffer />
        <PsiconutriShowcase />
        <TrialTimeline />
        <AppPricing />
        <AuthorSection />
        <ConsultationOffer />
        <ComparisonSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
