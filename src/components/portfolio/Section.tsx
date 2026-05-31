import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mb-12">
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-medium">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}