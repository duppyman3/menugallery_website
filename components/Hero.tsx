import Reveal from "@/components/Reveal";
import PhoneFrame from "@/components/PhoneFrame";
import StoreBadges from "@/components/StoreBadges";

const splashAlt =
  'MenuGallery splash screen: the MenuGallery logo over a collage of restaurant menus, with the tagline "Photograph a menu, see the dishes."';

export default function Hero() {
  return (
    <section className="pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
              <rect x="1.5" y="1.5" width="37" height="37" rx="12" fill="#F09A4B" />
              <g stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.85">
                <path d="M8.5 13v-2.5A2 2 0 0 1 10.5 8.5H13" />
                <path d="M31.5 13v-2.5A2 2 0 0 0 29.5 8.5H27" />
                <path d="M8.5 27v2.5A2 2 0 0 0 10.5 31.5H13" />
                <path d="M31.5 27v2.5A2 2 0 0 1 29.5 31.5H27" />
              </g>
              <g stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M15 13.2v3" />
                <path d="M17 13.2v3" />
                <path d="M19 13.2v3" />
                <path d="M15 16.2h4" />
                <path d="M17 16.2v10.6" />
                <ellipse cx="23.5" cy="15.8" rx="2.2" ry="3" />
                <path d="M23.5 18.6v8.2" />
              </g>
            </svg>
            <span className="font-display text-2xl font-semibold tracking-tight">
              <span className="text-ink">Menu</span><span className="text-accent">Gallery</span>
            </span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.25rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-ink">
            <span className="block">Photograph a menu,</span>
            <span className="block text-accent">see the dishes.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            MenuGallery turns any restaurant menu into a gallery of appetizing
            photos — every dish pictured, priced, and nutrition-estimated before
            you order.
          </p>

          <div className="mt-8">
            <StoreBadges />
          </div>
        </div>

        <Reveal className="flex justify-center lg:justify-end">
          <PhoneFrame
            src="/screenshots/splash.png"
            alt={splashAlt}
            priority
            className="sm:rotate-2"
          />
        </Reveal>
      </div>
    </section>
  );
}
