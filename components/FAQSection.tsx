import { faqs } from '@/data/mockData';
import { FadeIn } from './FadeIn';
import { Section } from './Section';

export function FAQSection() {
  return (
    <Section eyebrow="FAQ" title="A few details before the evening begins.">
      <div className="divide-y divide-amberearth-200 rounded-lg border border-amberearth-200 bg-amber-50/50">
        {faqs.map((item, index) => (
          <FadeIn key={item.question} delay={index * 0.03}>
            <details className="group px-5 py-4">
              <summary className="cursor-pointer list-none text-sm font-medium tracking-wide text-amberearth-800 marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-lg transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="pt-3 text-sm leading-7 text-amberearth-700">{item.answer}</p>
            </details>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
