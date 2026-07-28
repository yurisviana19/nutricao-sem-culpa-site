import Image from "next/image";

export function ProductMockup({
  src,
  alt,
  rotate = 0,
}: {
  src: string;
  alt: string;
  rotate?: number;
}) {
  return (
    <div
      className="relative rounded-organic shadow-xl overflow-hidden border-4 border-white"
      style={{ transform: `rotate(${rotate}deg)`, width: 220 }}
    >
      <Image src={src} alt={alt} width={700} height={992} className="w-full h-auto" priority={false} />
    </div>
  );
}
