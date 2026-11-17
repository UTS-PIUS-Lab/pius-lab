import CircuitText from "./CircuitText";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="border-b border-electric-cyan/10 bg-ink-panel py-16 relative overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {eyebrow && (
          <p className="uppercase text-xs tracking-widest text-electric-cyan font-semibold mb-3">
            {eyebrow}
          </p>
        )}
        <CircuitText
          as="h1"
          text={title}
          className="text-4xl md:text-5xl font-bold text-fg mb-4 leading-tight"
        />
        {subtitle && (
          <p className="text-lg text-body max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
