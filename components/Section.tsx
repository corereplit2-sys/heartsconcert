import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <header className="mb-9 md:mb-12">
            {eyebrow && (
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-amberearth-600">{eyebrow}</p>
            )}
            {title && <h2 className="font-serif text-3xl leading-tight md:text-4xl">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
