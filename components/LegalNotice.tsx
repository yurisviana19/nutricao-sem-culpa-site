export function LegalNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-nsc-texto-secundario ${className}`}>
      Os conteúdos possuem finalidade educativa e não substituem avaliação individual de nutricionista, médico,
      psicólogo ou outro profissional habilitado. Resultados podem variar entre pessoas.
    </p>
  );
}
