type BlobProps = {
  className?: string;
  color?: string;
  opacity?: number;
};

/**
 * Forma orgânica decorativa (SVG), sempre aria-hidden — decoração de
 * fundo, nunca carrega significado. Usada com posicionamento absoluto
 * pelo componente pai.
 */
export function Blob({ className = "", color = "#0B4A3A", opacity = 0.08 }: BlobProps) {
  return (
    <svg
      className={`blob ${className}`}
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={color}
        opacity={opacity}
        d="M45.3,-58.5C57.9,-49.9,65.7,-33.6,68.9,-16.6C72.1,0.4,70.7,18.2,62.5,32.3C54.3,46.5,39.3,57,22.6,63.6C5.8,70.2,-12.8,72.9,-29.4,67.7C-46,62.6,-60.6,49.6,-68.1,33.5C-75.6,17.5,-76,-1.7,-70.1,-18.5C-64.2,-35.3,-52,-49.7,-37.4,-58C-22.8,-66.3,-11.4,-68.5,3.5,-73.6C18.4,-78.7,36.7,-67.1,45.3,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
