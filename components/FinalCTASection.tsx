import { FadeIn } from './FadeIn';
import { Section } from './Section';

export function FinalCTASection() {
  return (
    <Section id="final-cta" className="pb-28" >
      <FadeIn>
        <div className="rounded-xl border border-amberearth-300 bg-amberearth-900 px-6 py-14 text-center text-amber-50 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200/90">Thank you for showing up with heart</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
            Your presence can become real support for people who need it most.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-amber-100/85 md:text-base">
            Reserve your place, share the evening with someone you love, and help us turn music into meaningful
            action.
          </p>
          <a
            href="#tickets"
            className="mt-8 inline-flex rounded-md bg-amber-100 px-6 py-3 text-sm font-medium tracking-wide text-amber-950 transition hover:bg-amber-50"
          >
            Buy Tickets
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
