export default function ProjectCard({ project }) {
  return (
    <div className="glass rounded-3xl overflow-hidden hover:shadow-glow hover:border-electric-cyan/30 transition-all duration-200">
      <div className={`h-1.5 w-full ${project.barColor}`} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3 gap-2">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${project.tagColor}`}>
            {project.tag}
          </span>
          {project.highlight && (
            <span className="text-xs text-slate-500 font-medium">{project.highlight}</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-electric-cyan font-medium mb-3">{project.subtitle}</p>
        <p className="text-sm text-[#E0E6ED] leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.awards.map(a => (
            <span key={a} className="text-xs px-2.5 py-1 bg-amber-400/10 text-amber-300 border border-amber-400/20 rounded-full font-medium">
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
