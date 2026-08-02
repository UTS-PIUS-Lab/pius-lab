"use client";
import Link from "next/link";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-[#020409] text-white py-12 border-t border-electric-cyan/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-8 text-center md:text-left">

        {/* LAB INFO */}
        <div>
          <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
            <div className="bg-[#0B1220] text-electric-cyan border border-electric-cyan/30 rounded-lg px-3 py-1 text-sm font-bold shadow-glow">PIUS</div>
            <span className="text-sm font-semibold">Lab</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            {site.name}<br />{site.university}
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contact</h3>
          <p className="text-slate-400 text-sm">{site.faculty}</p>
          <p className="text-slate-400 text-sm">{site.university}</p>
          <p className="text-slate-400 text-sm mt-1">
            <a href={`mailto:${site.email}`} className="text-electric-cyan hover:underline">
              {site.email}
            </a>
          </p>
          <p className="text-slate-400 text-sm">{site.address}</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1.5">
            {[["About","/about"],["Research","/research"],["Projects","/projects"],["Team","/team"],["Advisory","/advisory"],["News","/news"],["Awards","/awards"],["Contact","/contact"]].map(([label,href]) => (
              <li key={label}>
                <Link href={href} className="text-slate-400 text-sm hover:text-electric-cyan transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-base font-semibold mb-3">Connect</h3>
          <ul className="space-y-1.5">
            {[["GitHub", site.social.github],["LinkedIn", site.social.linkedin],["Google Scholar", site.social.scholar],["Twitter", site.social.twitter]].map(([label, url]) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-electric-cyan transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} {site.name} · {site.university}. All rights reserved.
      </div>
    </footer>
  );
}
