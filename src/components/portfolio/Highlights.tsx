const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "8", label: "Certifications" },
  { value: "15+", label: "Technologies" },
];

export function Highlights() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold gradient-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}