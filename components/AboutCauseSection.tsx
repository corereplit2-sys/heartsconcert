import { FadeIn } from './FadeIn';
import { Section } from './Section';

const impactStats = [
  { label: 'Families Supported', value: '240+' },
  { label: 'Community Workshops', value: '18' },
  { label: 'Youth Scholarships', value: '52' }
];

export function AboutCauseSection() {
  return (
    <Section id="cause" eyebrow="About the Cause" title="Music that holds a community together.">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <FadeIn>
          <p className="max-w-2xl text-base leading-8 text-amberearth-800">
            [CAUSE NAME] supports local families, artists, and youth through programs that provide food access,
            creative mentorship, and emergency aid. This concert is a gentle act of solidarity—every ticket and
            donation helps keep these programs available through the year.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-lg border border-amberearth-200 bg-amber-50/60 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.18em] text-amberearth-600">Fundraising Goal</p>
            <p className="mt-2 font-serif text-4xl text-amberearth-900">$80,000</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-amberearth-200">
              <div className="h-full w-[42%] rounded-full bg-amberearth-600" />
            </div>
            <p className="mt-2 text-sm text-amberearth-700">$33,600 raised so far (placeholder)</p>
          </div>
        </FadeIn>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {impactStats.map((stat, index) => (
          <FadeIn key={stat.label} delay={0.05 * index}>
            <article className="rounded-md border border-amberearth-200 bg-amber-50/55 p-5">
              <p className="font-serif text-3xl text-amberearth-900">{stat.value}</p>
              <p className="mt-1 text-sm text-amberearth-700">{stat.label}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
