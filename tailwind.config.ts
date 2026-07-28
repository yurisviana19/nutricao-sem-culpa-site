import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nsc-verde-profundo": "#0B4A3A",
        "nsc-verde-secundario": "#1F5C48",
        "nsc-creme": "#FDFCF7",
        "nsc-creme-secundario": "#FDEEDD",
        "nsc-terracota": "#E8724F",
        "nsc-terracota-escuro": "#D3461C",
        "nsc-dourado": "#C99A3B",
        "nsc-texto": "#20281F",
        "nsc-texto-secundario": "#6C7268",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        organic: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
