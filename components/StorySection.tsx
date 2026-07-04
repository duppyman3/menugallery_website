import Reveal from "@/components/Reveal";
import PhoneFrame from "@/components/PhoneFrame";

type StorySectionProps = {
  title: string;
  body: string;
  img: string;
  alt: string;
  caption?: string;
  flip?: boolean;
};

export default function StorySection({
  title,
  body,
  img,
  alt,
  caption,
  flip = false,
}: StorySectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className={flip ? "md:order-2" : undefined}>
          <h2 className="text-balance font-display text-[clamp(1.9rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-ink">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/80">
            {body}
          </p>
          {caption ? (
            <p className="mt-4 text-sm text-ink-muted">{caption}</p>
          ) : null}
        </div>

        <Reveal
          className={`flex justify-center ${flip ? "md:order-1 md:justify-start" : "md:justify-end"}`}
        >
          <PhoneFrame src={img} alt={alt} />
        </Reveal>
      </div>
    </section>
  );
}
