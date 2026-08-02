const BG = {
  'Lab Director':       'bg-electric-cyan/10 border-electric-cyan/25',
  'Industry Fellow':    'bg-electric-blue/10 border-electric-blue/25',
  'Postdoc':            'bg-blue-500/10 border-blue-400/25',
  'PhD Student':        'bg-purple-500/10 border-purple-400/25',
  'Masters Student':    'bg-green-500/10 border-green-400/25',
  'Research Associate': 'bg-slate-500/10 border-slate-400/25',
};
const TEXT = {
  'Lab Director':       'text-electric-cyan',
  'Industry Fellow':    'text-electric-blue',
  'Postdoc':            'text-blue-300',
  'PhD Student':        'text-purple-300',
  'Masters Student':    'text-green-300',
  'Research Associate': 'text-slate-300',
};
const INITIALS_BG = {
  'Lab Director':       'bg-electric-cyan text-[#030712]',
  'Industry Fellow':    'bg-electric-blue text-[#030712]',
  'Postdoc':            'bg-blue-500 text-white',
  'PhD Student':        'bg-purple-500 text-white',
  'Masters Student':    'bg-green-500 text-white',
  'Research Associate': 'bg-slate-500 text-white',
};

export default function TeamCard({ member }) {
  const bg      = BG[member.category]      || BG['Research Associate'];
  const txt     = TEXT[member.category]    || TEXT['Research Associate'];
  const initBg  = INITIALS_BG[member.category] || 'bg-slate-500 text-white';

  return (
    <div className="glass rounded-3xl overflow-hidden hover:shadow-glow hover:border-electric-cyan/30 transition-all duration-200">
      {/* AVATAR */}
      <div className={`${bg} border-b flex items-center justify-center py-8`}>
        <div className={`${initBg} w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold`}>
          {member.initials}
        </div>
      </div>
      {/* INFO */}
      <div className="p-5">
        <h3 className="font-bold text-white text-base mb-0.5">{member.name}</h3>
        <p className={`text-xs font-semibold uppercase tracking-wide mb-3 ${txt}`}>{member.role}</p>
        <p className="text-sm text-[#E0E6ED] leading-relaxed mb-4">{member.bio}</p>
        <div className="flex flex-wrap gap-2">
          {member.email    && <a href={`mailto:${member.email}`}       className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-400 hover:border-electric-cyan/40 hover:text-electric-cyan transition-colors">Email</a>}
          {member.scholar  && <a href={member.scholar}  target="_blank" rel="noopener" className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-400 hover:border-electric-cyan/40 hover:text-electric-cyan transition-colors">Scholar</a>}
          {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener" className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-400 hover:border-electric-cyan/40 hover:text-electric-cyan transition-colors">LinkedIn</a>}
        </div>
      </div>
    </div>
  );
}
