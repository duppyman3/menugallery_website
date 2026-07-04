import Reveal from "@/components/Reveal";

const features = [
  {
    title: "Sort by what matters",
    body: "Course, price, calories, carbs or protein — reorder the whole menu with one tap.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 20V4" />
        <path d="M4 7l3-3 3 3" />
        <path d="M17 4v16" />
        <path d="M14 17l3 3 3-3" />
      </svg>
    ),
  },
  {
    title: "Keep favorites close",
    body: "Heart the dishes you're considering and compare your shortlist at a glance.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Four languages on the menu",
    body: "MenuGallery speaks English, Spanish, French and German — and translates every dish to match.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 3.9 5.7 3.9 9s-1.4 6.4-3.9 9c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
      </svg>
    ),
  },
  {
    title: "Your menus, remembered",
    body: "Scans are saved automatically, ready to reopen the next time you're choosing where to eat.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-balance font-display text-[clamp(1.9rem,4vw,2.75rem)] font-medium leading-tight tracking-tight text-ink">
          Everything you need to order well.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-card p-6">
                <div className="text-accent">{feature.icon}</div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
