import PlasmaButton from "../../../components/PlasmaButton";
import { news } from "../../../data/news";

export function generateStaticParams() {
  return news.map(n => ({ id: n.id }));
}

const BADGE = {
  grant:       "bg-green-500/15 text-green-300 border border-green-400/20",
  launch:      "bg-blue-500/15 text-blue-300 border border-blue-400/20",
  publication: "bg-purple-500/15 text-purple-300 border border-purple-400/20",
  award:       "bg-amber-500/15 text-amber-300 border border-amber-400/20",
  event:       "bg-blue-500/15 text-blue-300 border border-blue-400/20",
  partnership: "bg-slate-500/15 text-slate-300 border border-slate-400/20",
};

export default function NewsDetail({ params }) {
  const item = news.find(n => n.id === params.id);
  if (!item) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-400 mb-4">News item not found.</p>
        <PlasmaButton href="/news" variant="ghost">Back to News</PlasmaButton>
      </div>
    </div>
  );
  return (
    <>
      <section className="bg-white/[0.02] border-b border-white/10 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <PlasmaButton href="/news" variant="ghost" className="mb-6">
            ← Back to News
          </PlasmaButton>
          <div className="flex items-center gap-3 mb-4">
            <span className={"text-xs font-semibold px-2.5 py-1 rounded-full capitalize " + (BADGE[item.badge] || BADGE.launch)}>
              {item.badge}
            </span>
            <span className="text-xs text-slate-500 font-medium">{item.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{item.title}</h1>
        </div>
      </section>
      <section className="py-16 bg-transparent">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-slate-300 leading-relaxed mb-8 font-medium">{item.summary}</p>
          <div className="w-12 h-1 bg-electric-cyan rounded mb-8 shadow-glow" />
          <p className="text-slate-400 leading-relaxed">{item.body || item.summary}</p>
        </div>
      </section>
    </>
  );
}
