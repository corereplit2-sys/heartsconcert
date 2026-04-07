import Image from 'next/image';
import { performers } from '@/data/mockData';
import { FadeIn } from './FadeIn';
import { Section } from './Section';

export function PerformersSection() {
  return (
    <Section id="performers" eyebrow="Performers" title="Intimate sets from artists you can feel close to.">
      <div className="grid gap-6 md:grid-cols-3">
        {performers.map((performer, index) => (
          <FadeIn key={performer.name} delay={index * 0.06}>
            <article className="overflow-hidden rounded-md border border-amberearth-200 bg-amber-50/50">
              <div className="relative aspect-[4/5]">
                <Image src={performer.image} alt={performer.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl text-amberearth-900">{performer.name}</h3>
                <p className="mt-2 text-sm leading-7 text-amberearth-700">{performer.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
