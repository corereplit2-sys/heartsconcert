import { FadeIn } from './FadeIn';
import { Section } from './Section';

const steps = [
  'Buy your ticket',
  'Receive confirmation email',
  'Receive YouTube link the day before',
  'Join live on concert day'
];

export function HowItWorksSection() {
  return (
    <Section eyebrow="How It Works" title="Simple steps, thoughtful experience.">
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <FadeIn key={step} delay={index * 0.05}>
            <div className="rounded-md border border-amberearth-200 bg-amber-50/50 p-5">
              <p className="font-serif text-2xl text-amberearth-900">0{index + 1}</p>
              <p className="mt-3 text-sm text-amberearth-700">{step}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
