type SectionLabelProps = {
  children: string;
  light?: boolean;
};

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className={`mb-3 text-sm font-medium uppercase tracking-widest ${
        light ? "text-primary-foreground/70" : "text-muted-foreground"
      }`}
    >
      {children}
    </p>
  );
}
