import ResearchCard from "../components/ResearchCard";
import ProjectCard from "../components/ProjectCard";
import NewsCard from "../components/NewsCard";
import SectionHeader from "../components/SectionHeader";
import CircuitText from "../components/CircuitText";
import PlasmaButton from "../components/PlasmaButton";
import HeroBackgroundVideo from "../components/HeroBackgroundVideo";
import { site } from "../data/site";
import { researchAreas } from "../data/research";
import { projects } from "../data/projects";
import { news } from "../data/news";

export default function Home() {
  return (
    <>
      <HeroBackgroundVideo />

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full relative">
          {/* TITLE */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem,8vw,6rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              color: '#fff'
            }}
          >
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                fontWeight: 700,
                fontFamily: '"Times New Roman", Times, serif',
                background: 'linear-gradient(135deg,#00F0FF,#00A3FF,#3B82F6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingBottom: '0.1em'
              }}
            >
              Physical Intelligence &
            </span>

            <CircuitText as="span" text="Uncrewed Systems" className="block font-bold text-white" />

            <span style={{display:'block',fontStyle:'bold',color:'#7d8aa3',fontSize:'50%',fontWeight:600}}>
              PIUS Lab
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10">
            Advancing autonomous drones, swarm intelligence, and AI-driven robotics
            at UTS — from award-winning research to real-world deployments.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-16">
            <PlasmaButton href="/research">
              Explore Research →
            </PlasmaButton>
            <PlasmaButton href="/contact" variant="ghost" className="border border-electric-cyan/15">
              Get in Touch
            </PlasmaButton>
          </div>

          {/* HIGHLIGHT STAT CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {site.stats.map(s => (
              <div key={s.label}
                className="glass rounded-3xl p-6 hover:-translate-y-1 hover:border-electric-cyan/30 hover:shadow-glow transition-all duration-300">
                <CircuitText as="div" text={s.value} className="block text-3xl font-bold mb-1" />
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ── RESEARCH — Next.js grid style ── */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            tag="Research Focus"
            title="What we work on"
            lead="Our research spans the full stack of autonomous systems — from low-level vehicle control to high-level mission planning and real-world deployment."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchAreas.map((r, i) => (
              <div
                key={i}
                className="bg-white/[0.02] rounded-xl border border-white/10 hover:border-electric-cyan/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <img
                  src={r.gif.src}
                  alt={r.title}
                  className="w-full h-48 object-cover bg-[#0B1220]"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {r.title}
                  </h3>

                  <p className="text-[#E0E6ED] text-sm leading-relaxed">
                    {r.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <PlasmaButton href="/research" variant="ghost">
              View all research areas →
            </PlasmaButton>
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ── PROJECTS ── */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            tag="Major Projects"
            title="Award-winning research"
            lead="Real-world impact across public safety, defence, emergency response, and sport."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
          <div className="mt-8">
            <PlasmaButton href="/projects" variant="ghost">
              View all projects →
            </PlasmaButton>
          </div>
        </div>
      </section>

      <hr className="border-white/5" />

      {/* ── NEWS ── */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            tag="Latest"
            title="News & updates"
            lead="Recent announcements, publications, and events from PIUS Lab."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {news.slice(0,3).map(n => <NewsCard key={n.id} item={n} />)}
          </div>
          <div className="mt-8">
            <PlasmaButton href="/news" variant="ghost">
              All news →
            </PlasmaButton>
          </div>
        </div>
      </section>
    </>
  );
}
