export default function ResearchCard({ item }) {
  return (
    <div className="glass p-6 hover:border-electric-cyan/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-10 h-10 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-xl mb-4 group-hover:border-electric-cyan/50 group-hover:shadow-glow transition-all">
        <item.icon className="w-6 h-6 text-electric-cyan" />
      </div>
      <h3 className="font-semibold text-fg mb-2 text-base">{item.title}</h3>
      <p className="text-body text-sm leading-relaxed">{item.summary}</p>
    </div>
  );
}
