import PageHero from "../../components/PageHero";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Major Projects"
        title="Award-winning research"
        subtitle="Real-world impact across public safety, defence, emergency response, and sport — translating research into deployable systems."
      />
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
