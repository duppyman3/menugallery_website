type SectionLabelProps = {
  n: number;
  label: string;
};

export default function SectionLabel({ n, label }: SectionLabelProps) {
  return (
    <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent">
      Nº {n} — {label}
    </p>
  );
}
