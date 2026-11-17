import PageHero from "../../components/PageHero";
import SectionHeader from "../../components/SectionHeader";
import ResearchCard from "../../components/ResearchCard";
import PlasmaButton from "../../components/PlasmaButton";
import { researchAreas } from "../../data/research";

export default function Research() {
  return (
    <>
      <PageHero
        eyebrow="Research Focus"
        title="What we work on"
        subtitle="From fundamental algorithms to full-system deployment — spanning the complete stack of autonomous systems engineering."
      />
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 border border-tint/10 rounded-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-tint/10">
            {researchAreas.map(r => <ResearchCard key={r.title} item={r} />)}
          </div>
        </div>
      </section>
      <hr className="border-tint/5" />
      <section className="py-20 bg-tint/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader tag="Collaborate" title="Work with us"
            lead="We welcome collaborators from industry, government, and academia. If you have a challenge involving autonomous or uncrewed systems, reach out." />
          <PlasmaButton href="/contact">
            Contact the Lab →
          </PlasmaButton>
        </div>
      </section>
    </>
  );
}
