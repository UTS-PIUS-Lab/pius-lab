import Link from "next/link";

const BADGE = {
  grant:       "bg-green-500/15 text-green-300 border border-green-400/20",
  launch:      "bg-blue-500/15 text-blue-300 border border-blue-400/20",
  publication: "bg-purple-500/15 text-purple-300 border border-purple-400/20",
  award:       "bg-amber-500/15 text-amber-300 border border-amber-400/20",
  event:       "bg-blue-500/15 text-blue-300 border border-blue-400/20",
  partnership: "bg-slate-500/15 text-slate-300 border border-slate-400/20",
};

export default function NewsCard({ item }) {
  return (
    <Link href={`/news/${item.id}`}
      className="glass rounded-3xl p-6 flex flex-col gap-3 hover:shadow-glow hover:border-electric-cyan/30 transition-all duration-200 group">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">{item.date}</span>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${BADGE[item.badge] || BADGE.launch}`}>
          {item.badge}
        </span>
      </div>
      <h3 className="font-bold text-white text-base leading-snug group-hover:text-electric-cyan transition-colors">
        {item.title}
      </h3>
      <p className="text-sm text-[#E0E6ED] leading-relaxed flex-1">{item.summary}</p>
      <span className="text-sm text-electric-cyan font-medium group-hover:underline self-end">
        Read more →
      </span>
    </Link>
  );
}
