import { SITE_URL, AUTHOR_NAME, AUTHOR_CREDENTIAL, PRICES } from "@/lib/config";

export function buildProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Combo Nutrição Sem Culpa — Por que Você Não Perde Peso? + Receitas Sem Culpa",
    description:
      "E-book Por que Você Não Perde Peso? e livro Receitas Sem Culpa, com sete dias gratuitos de acesso ao aplicativo Psiconutri para compradores do combo.",
    brand: { "@type": "Brand", name: "Nutrição Sem Culpa" },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: PRICES.combo.toFixed(2),
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
  };
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    jobTitle: "Nutricionista",
    identifier: AUTHOR_CREDENTIAL,
    url: SITE_URL,
  };
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
