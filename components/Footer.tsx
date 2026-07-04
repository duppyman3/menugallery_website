export default function Footer() {
  return (
    <footer className="border-t border-dotted border-ink/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-lg font-semibold tracking-tight">
          <span className="text-ink">Menu</span><span className="text-accent">Gallery</span>
        </span>
        <span className="text-sm text-ink-muted">
          Photograph a menu, see the dishes.
        </span>
        <span className="text-sm text-ink-muted">© 2026 MenuGallery</span>
      </div>
    </footer>
  );
}
