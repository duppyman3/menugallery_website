import type { ReactNode } from "react";

type BadgeProps = {
  glyph: ReactNode;
  small: string;
  big: string;
};

function Badge({ glyph, small, big }: BadgeProps) {
  return (
    <div className="flex select-none items-center gap-3 rounded-xl bg-ink px-5 py-2.5 text-paper opacity-60">
      <span className="shrink-0">{glyph}</span>
      <span className="flex flex-col leading-tight">
        <span className="font-sans text-[0.65rem] tracking-wide">{small}</span>
        <span className="font-sans text-lg font-semibold">{big}</span>
      </span>
    </div>
  );
}

const AppleGlyph = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    <path d="M12 7.2c-.9-1-2.2-1.5-3.5-1.1C6.4 6.7 5.2 8.7 5.4 11c.2 3 2.2 8 4.3 8 .9 0 1.4-.5 2.3-.5s1.4.5 2.3.5c2.1 0 4.1-5 4.3-8 .2-2.3-1-4.3-3.1-4.9-1.3-.4-2.6.1-3.5 1.1z" />
    <path d="M12 7c0-1.6.7-2.9 2-3.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M12.5 5.1c.7-.9 1.9-1.3 3-1.1.1 1.1-.5 2.2-1.5 2.7-.6.3-1.4.2-2-.2z" />
  </svg>
);

const PlayGlyph = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M7 4.5v15a1 1 0 0 0 1.5.87l12-7.5a1 1 0 0 0 0-1.74l-12-7.5A1 1 0 0 0 7 4.5z" />
  </svg>
);

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Badge glyph={AppleGlyph} small="Coming soon to the" big="App Store" />
      <Badge glyph={PlayGlyph} small="Coming soon on" big="Google Play" />
    </div>
  );
}
