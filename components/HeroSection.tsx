import { FadeIn } from './FadeIn';

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@causemusicnight';

export function HeroSection() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden px-6 pb-20 pt-14 text-amberearth-50 md:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(35, 20, 14, 0.78), rgba(35, 20, 14, 0.66)), url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-amber-950/40" />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-end gap-10">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-100/80">Streaming live on YouTube</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.12] sm:text-5xl md:text-6xl">
            An Evening of Music and Meaning
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-amber-50/85 md:text-lg">
            Join us for a quiet night of music in support of [CAUSE NAME]. Watch from anywhere and help us
            raise funds for a meaningful cause.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#tickets"
              className="inline-flex items-center justify-center rounded-md bg-amber-100 px-6 py-3 text-sm font-medium tracking-wide text-amber-950 transition hover:bg-amber-50"
            >
              Buy Tickets
            </a>
            <a
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-md border border-amber-100/60 px-6 py-3 text-sm font-medium tracking-wide text-amber-50 transition hover:bg-amber-50/10"
            >
              Donate Only
            </a>
          </div>

          <p className="mt-5 text-sm text-amber-100/85">
            YouTube channel:{' '}
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-amber-100/70 underline-offset-4 hover:text-amber-50"
            >
              {YOUTUBE_CHANNEL_URL}
            </a>
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="max-w-xl rounded-lg border border-amber-100/25 bg-black/20 p-5 backdrop-blur-[2px]"
        >
          <p className="text-sm tracking-wide text-amber-100/90">Friday, June 19, 2026 · 8:00 PM ET</p>
          <p className="mt-2 text-sm text-amber-100/80">Countdown: 73 days 04 hrs 18 mins</p>
          <p className="mt-2 text-xs text-amber-100/70">Private concert stream link is emailed 1 day before the event.</p>
        </FadeIn>
      </div>
    </section>
  );
}
