"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NODE_WIDTH = 260;
const AXIS_GAP = 40; // px between the axis and the near edge of a node's content block

function TimelineNode({ item, index, viewportRef }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const above = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { root: viewportRef.current, threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [viewportRef]);

  return (
    <div ref={ref} className="relative flex-shrink-0 h-full" style={{ width: NODE_WIDTH }}>
      {/* node marker on the central axis */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-electric-cyan shadow-glow z-10" />

      {/* stem connecting the axis to the content block */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 w-px bg-electric-cyan/30"
        style={above ? { bottom: "50%", height: AXIS_GAP } : { top: "50%", height: AXIS_GAP }}
      />

      <Link
        href={`/news/${item.id}`}
        className={`timeline-node-inner group absolute left-1/2 flex items-center gap-3 ${
          above ? "flex-col" : "flex-col-reverse"
        } ${visible ? "is-visible" : ""}`}
        style={above ? { bottom: `calc(50% + ${AXIS_GAP}px)` } : { top: `calc(50% + ${AXIS_GAP}px)` }}
      >
        <p className="w-[220px] text-center text-xs text-slate-300 leading-snug group-hover:text-electric-cyan transition-colors">
          {item.title}
        </p>
        <div className="w-20 h-20 rounded-full border-2 border-dashed border-electric-cyan/50 bg-ink-card/70 backdrop-blur flex items-center justify-center text-white font-bold text-sm group-hover:border-electric-cyan group-hover:shadow-glow transition-all">
          {item.date}
        </div>
      </Link>
    </div>
  );
}

// Scroll-driven horizontal timeline: a tall spacer section holds a sticky,
// full-height viewport; normal vertical scroll progress through the spacer
// is translated into horizontal movement of the node track.
export default function AwardsTimeline({ items }) {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(null);

  useEffect(() => {
    function measure() {
      if (!trackRef.current || !viewportRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.clientWidth;
      const mt = Math.max(trackWidth - viewportWidth, 0);
      setMaxTranslate(mt);
      setSectionHeight(window.innerHeight + mt);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

  useEffect(() => {
    if (!maxTranslate) {
      if (trackRef.current) trackRef.current.style.transform = "translateX(0px)";
      return;
    }
    let raf = null;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / maxTranslate, 0), 1);
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`;
        }
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [maxTranslate]);

  if (!items.length) return null;

  return (
    <section ref={sectionRef} style={{ height: sectionHeight ? `${sectionHeight}px` : "200vh" }}>
      <div ref={viewportRef} className="relative sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent"
          aria-hidden="true"
        />
        <div ref={trackRef} className="absolute inset-y-0 left-0 flex will-change-transform">
          <div style={{ width: "10vw" }} className="flex-shrink-0" aria-hidden="true" />
          {items.map((item, i) => (
            <TimelineNode key={item.id} item={item} index={i} viewportRef={viewportRef} />
          ))}
          <div style={{ width: "10vw" }} className="flex-shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
