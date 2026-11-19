import PageHero from "../../../components/PageHero";
import StudentProjectCard from "../../../components/StudentProjectCard";
import { studentProjects } from "../../../data/studentProjects";

export default function StudentProjects() {
  return (
    <>
      <PageHero
        eyebrow="Student Projects"
        title="Student projects"
        subtitle="Worked by Masters and Honours students at PIUS Lab."
      />
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentProjects.map((p) => (
              <StudentProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
