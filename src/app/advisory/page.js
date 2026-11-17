import PageHero from "../../components/PageHero";
import { advisory } from "../../data/team";

export default function Advisory() {
  return (
    <>
      <PageHero eyebrow="Governance" title="Advisory committee"
        subtitle="Leading experts from industry, government, and academia guiding the lab's strategic direction." />
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {advisory.map(a => (
              <div key={a.name} className="glass rounded-xl p-6 hover:shadow-glow hover:border-electric-cyan/30 transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-electric-cyan/10 border border-electric-cyan/25 text-electric-cyan flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {a.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-fg text-base">{a.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-electric-cyan mt-0.5">{a.title}</p>
                    <p className="text-xs text-muted mt-0.5">{a.org}</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed border-t border-tint/5 pt-4">{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
