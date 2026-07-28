/**
 * Ícones lineares próprios (SVG inline, sem dependência externa),
 * coerentes com a identidade "formas orgânicas / traço fino" da marca.
 */
type IconProps = { className?: string };

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconCheck({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
export function IconLeaf({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 20c8 0 16-8 16-16-8 0-16 8-16 16Z" />
      <path d="M4 20c0-6 4-10 10-12" />
    </svg>
  );
}
export function IconShield({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
export function IconClock({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
export function IconBook({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5c-.8 0-1.5-.7-1.5-1.5v-13Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5c.8 0 1.5-.7 1.5-1.5v-13Z" />
    </svg>
  );
}
export function IconChart({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M4 20V10M12 20V4M20 20v-7" />
      <path d="M2 20h20" />
    </svg>
  );
}
export function IconHeart({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 20s-7-4.4-9.5-9C.8 7.5 2.8 4 6.3 4c2 0 3.6 1.2 4.7 2.8C12.1 5.2 13.7 4 15.7 4c3.5 0 5.5 3.5 3.8 7-2.5 4.6-9.5 9-9.5 9Z" />
    </svg>
  );
}
export function IconArrowRight({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function IconSparkle({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    </svg>
  );
}
export function IconUser({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.5-4 5-6 7.5-6s6 2 7.5 6" />
    </svg>
  );
}
