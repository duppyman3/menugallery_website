import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function PhoneFrame({
  src,
  alt,
  priority = false,
  className,
}: PhoneFrameProps) {
  return (
    <div
      className={`w-[17rem] rounded-[2.75rem] bg-ink p-3 shadow-[0_2px_6px_rgba(46,46,46,0.10),0_30px_60px_-20px_rgba(46,46,46,0.45)] sm:w-[19rem] lg:w-[22rem] ${
        className ?? ""
      }`}
    >
      <div className="overflow-hidden rounded-[2rem] bg-card">
        <Image
          src={src}
          alt={alt}
          width={864}
          height={1920}
          quality={80}
          priority={priority}
          sizes="(min-width: 1024px) 400px, 75vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
