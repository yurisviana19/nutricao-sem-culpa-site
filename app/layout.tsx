import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Menos culpa, mais clareza para cuidar da alimentação`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "E-book, livro de receitas e aplicativo para entender seus padrões alimentares, aplicar escolhas possíveis na rotina e acompanhar sua alimentação com mais clareza e menos culpa. Por Yuri Viana, nutricionista CRN-5 18333.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Menos culpa, mais clareza para cuidar da alimentação`,
    description:
      "Entenda seus padrões, aplique escolhas possíveis na rotina e acompanhe sua alimentação com o ecossistema Nutrição Sem Culpa.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}`,
    description: "Menos culpa, mais clareza para cuidar da alimentação.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B4A3A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-body antialiased pb-20 md:pb-0">
        <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4">
          Pular para o conteúdo principal
        </a>
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
