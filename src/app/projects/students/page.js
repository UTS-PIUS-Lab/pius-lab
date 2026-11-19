import PageHero from "../../../components/PageHero";
import PlasmaButton from "../../../components/PlasmaButton";

// Student Projects: placeholder until the content is decided.
export default function StudentProjects() {
  return (
    <>
      <PageHero
        eyebrow="Student Projects"
        title="Student projects"
        subtitle="Work by PhD, Masters, and Honours students at PIUS Lab."
      />
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="glass rounded-3xl p-10 text-center">
            <p className="text-lg text-body mb-6">Student projects are coming soon.</p>
            <PlasmaButton href="/projects" variant="ghost">
              View research projects →
            </PlasmaButton>
          </div>
        </div>
      </section>
    </>
  );
}
