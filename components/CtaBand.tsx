import Reveal from "@/components/Reveal";
import StoreBadges from "@/components/StoreBadges";

export default function CtaBand() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-3xl bg-accent-soft px-8 py-14 text-center md:py-16">
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-ink">
              Never order blind again.
            </h2>
            <p className="mt-4 text-lg text-ink/80">
              MenuGallery is coming soon to iPhone and Android.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges className="justify-center" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
