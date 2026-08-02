import PageHero from "../../components/PageHero";
import SectionHeader from "../../components/SectionHeader";
import CircuitText from "../../components/CircuitText";
import PlasmaButton from "../../components/PlasmaButton";
import { site } from "../../data/site";

const pillars = [
  { icon:"🚁", text:"Aerial & ground uncrewed platforms" },
  { icon:"🧠", text:"AI-driven decision-making & autonomy" },
  { icon:"🔷", text:"Multi-agent swarm coordination" },
  { icon:"👁",  text:"Real-time perception & sensor fusion" },
  { icon:"🔍", text:"Aerial search & rescue operations" },
  { icon:"🌏", text:"Real-world deployment & field testing" },
];

const partners = [
  "CSIRO Data61","NSW Emergency Services","Defence Science & Technology Group",
  "Australian Robotics Institute","Airbus Defence & Space","Boeing Australia",
  "DroneShield","UTS Tech Lab",
];

const stats = [
  { value:"$2M+",  label:"Research Funding" },
  { value:"12+",   label:"Major Awards" },
  { value:"50+",   label:"Publications" },
  { value:"9000+", label:"Media Articles" },
  { value:"20+",   label:"Team Members" },
  { value:"6+",    label:"Research Areas" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Lab"
        title="Where autonomy meets the real world"
        subtitle="We develop intelligent autonomous systems that operate safely and effectively in complex, dynamic real-world environments."
      />

      {/* MISSION */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader tag="Our Mission" title="Built for impact" />
              <div className="space-y-4 text-slate-400 leading-relaxed text-base">
                <p>PIUS Lab is a UTS research laboratory dedicated to advancing the science and engineering of intelligent uncrewed systems. We develop autonomous platforms — aerial, ground, and multi-vehicle — capable of operating safely in complex, dynamic environments.</p>
                <p>Our work spans fundamental algorithm development to full-system deployment, with a strong commitment to translating research into real-world impact. We partner with government, defence, industry, and emergency services on problems that matter.</p>
                <p>Based at {site.university} Faculty of Engineering & IT, we bring together researchers, engineers, and students united by a passion for intelligent autonomous systems.</p>
              </div>
              <PlasmaButton href="/research" className="mt-8">
                Explore Research →
              </PlasmaButton>
            </div>
            <div className="glass rounded-2xl p-8">
              <p className="text-sm font-semibold text-electric-cyan uppercase tracking-widest mb-5">Research Pillars</p>
              <div className="space-y-1">
                {pillars.map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-base flex-shrink-0">
                      {icon}
                    </div>
                    <span className="text-sm text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* STATS */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader tag="Impact" title="By the numbers" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map(s => (
              <div key={s.label} className="glass rounded-xl p-5 text-center hover:border-electric-cyan/30 hover:shadow-glow transition-colors">
                <CircuitText as="div" text={s.value} className="block text-3xl font-bold mb-1" />
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* PARTNERS */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader tag="Partners" title="Who we work with"
            lead="Collaborating with leading organisations from government, industry, defence, and academia." />
          <div className="flex flex-wrap gap-3">
            {partners.map(p => (
              <span key={p} className="px-5 py-2 bg-white/[0.03] border border-white/10 rounded-full text-sm text-slate-400 hover:border-electric-cyan/40 hover:text-electric-cyan transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
