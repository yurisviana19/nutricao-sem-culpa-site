"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";
import { IconArrowRight } from "@/components/icons";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#combo", label: "O que você recebe" },
  { href: "#psiconutri", label: "Psiconutri" },
  { href: "#consulta", label: "Consulta" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-nsc-creme/95 backdrop-blur transition-shadow ${scrolled ? "shadow-[0_4px_16px_rgba(11,74,58,0.08)]" : ""} border-b border-nsc-creme-secundario`}
    >
      <div className="section-container flex items-center justify-between py-4">
        <Link href="/" className="font-display text-lg text-nsc-verde-profundo">
          YV <span className="font-body text-sm text-nsc-texto-secundario">Nutrição Sem Culpa</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="focus-ring hover:text-nsc-verde-profundo transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CheckoutButton checkoutKey="combo" event="click_combo" variant="primary" className="btn-lift text-sm py-2 px-4">
            <span className="flex items-center gap-1.5">
              Quero começar
              <IconArrowRight className="w-3.5 h-3.5" />
            </span>
          </CheckoutButton>
        </div>

        <button
          type="button"
          className="focus-ring md:hidden border rounded-organic px-3 py-2 text-sm"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Navegação móvel"
        className={`md:hidden border-t bg-nsc-creme overflow-hidden transition-[max-height] duration-300 ease-out ${open ? "max-h-96" : "max-h-0 border-t-0"}`}
      >
        <ul className="section-container py-4 flex flex-col gap-3 text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="focus-ring block py-1" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <CheckoutButton checkoutKey="combo" event="click_combo" variant="primary" className="btn-lift w-full mt-2">
              Quero começar
            </CheckoutButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
