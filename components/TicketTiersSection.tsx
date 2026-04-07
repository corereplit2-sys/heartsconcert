import { ticketTiers } from '@/data/mockData';
import { FadeIn } from './FadeIn';
import { Section } from './Section';

export function TicketTiersSection() {
  return (
    <Section id="tickets" eyebrow="Ticket Tiers" title="Choose how you’d like to support the evening.">
      <div className="grid gap-5 md:grid-cols-3">
        {ticketTiers.map((tier, index) => (
          <FadeIn key={tier.name} delay={index * 0.06}>
            <article
              className={`rounded-lg border p-6 ${
                tier.featured
                  ? 'border-amberearth-600 bg-amberearth-100/40 shadow-soft'
                  : 'border-amberearth-200 bg-amber-50/50'
              }`}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amberearth-600">{tier.name}</p>
              <p className="mt-3 font-serif text-4xl text-amberearth-900">{tier.price}</p>
              <p className="mt-4 text-sm leading-7 text-amberearth-700">{tier.details}</p>
              <button className="mt-6 w-full rounded-md bg-amberearth-900 px-4 py-3 text-sm font-medium text-amber-50 transition hover:bg-amberearth-800">
                Select {tier.name}
              </button>
            </article>
          </FadeIn>
        ))}
      </div>
      <p className="mt-6 text-sm text-amberearth-700">
        Note: The private viewing link will only be emailed 1 day before the concert.
      </p>
    </Section>
  );
}
