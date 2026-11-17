"use client";
import { useState } from "react";
import PageHero from "../../components/PageHero";
import SectionHeader from "../../components/SectionHeader";
import TeamCard from "../../components/TeamCard";
import { currentTeam, alumni, teamCategories } from "../../data/team";
import { ChevronDown } from "lucide-react";

export default function Team() {
  const [cat, setCat]           = useState("All");
  const [alumniOpen, setAlumniOpen] = useState(false);
  const visible = cat === "All" ? currentTeam : currentTeam.filter(m => m.category === cat);

  return (
    <>
      <PageHero eyebrow="People" title="The team"
        subtitle="Researchers, engineers, and students united by a passion for autonomous systems and uncrewed vehicles." />

      {/* CURRENT TEAM */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader tag="Current Members" title="Who we are" />
          <div className="flex flex-wrap gap-2 mb-8">
            {teamCategories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`uppercase text-xs tracking-widest font-semibold px-4 py-2 rounded-full border transition-colors ${
                  cat === c
                    ? "bg-electric-cyan text-ink border-electric-cyan shadow-glow"
                    : "border-tint/10 text-muted hover:border-electric-cyan/40 hover:text-electric-cyan"
                }`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {visible.map(m => <TeamCard key={m.initials} member={m} />)}
          </div>
        </div>
      </section>

      <hr className="border-tint/5" />

      {/* LAB ALUMNI — collapsible */}
      <section className="py-12 bg-tint/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <button onClick={() => setAlumniOpen(o => !o)}
            className="w-full flex items-center justify-between glass rounded-xl px-6 py-5 hover:border-electric-cyan/30 transition-colors group">
            <div className="flex items-center gap-4">
              <span className="uppercase text-xs tracking-widest font-semibold text-electric-cyan">
                Lab Alumni
              </span>
              <span className="text-sm text-faint font-medium">{alumni.length} members</span>
            </div>
            <ChevronDown size={18} className={`text-faint transition-transform duration-300 ${alumniOpen ? "rotate-180" : ""}`} />
          </button>

          {alumniOpen && (
            <div className="mt-6">
              <p className="text-muted text-sm leading-relaxed mb-6 max-w-xl">
                PIUS Lab graduates who have gone on to careers in academia, industry, and government.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {alumni.map(a => (
                  <div key={a.name}
                    className="glass rounded-xl p-5 flex gap-4 hover:border-electric-cyan/30 transition-colors">
                    <div className="w-11 h-11 rounded-full bg-electric-cyan/10 border border-electric-cyan/25 text-electric-cyan flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {a.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-fg text-sm">{a.name}</div>
                      <div className="flex items-center gap-2 mt-1 mb-2 flex-wrap">
                        <span className="text-xs font-semibold uppercase tracking-wide bg-tint/5 text-soft px-2 py-0.5 rounded">
                          {a.degree}
                        </span>
                        <span className="text-xs text-faint">{a.year}</span>
                      </div>
                      {a.thesis && (
                        <p className="text-xs text-faint italic mb-1.5 truncate">"{a.thesis}"</p>
                      )}
                      {a.nowAt && (
                        <p className="text-xs text-muted">
                          <span className="text-faint uppercase tracking-wide text-xs">Now at </span>
                          <span className="text-electric-cyan font-medium">{a.nowAt}</span>
                          {a.nowRole && <span className="text-faint"> · {a.nowRole}</span>}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
