"use client";
import { useEffect, useRef } from "react";

// Picks up whichever single .mp4 lives in src/data/video/, whatever it's
// named — drop in a replacement file (any filename) and it's used as-is,
// no code change needed.
const videoFiles = require.context("../data/video", false, /\.mp4$/);
const heroVideoSrc = videoFiles.keys().length > 0 ? videoFiles(videoFiles.keys()[0]) : null;

// Fixed full-viewport background video for the homepage. Muted set both as
// an attribute and a DOM property, and play() is retried on mount, since
// some browsers only honor autoplay when muted is set imperatively too.
export default function HeroBackgroundVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    const playPromise = el.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, []);

  if (!heroVideoSrc) return null;

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <source src={heroVideoSrc} type="video/mp4" />
    </video>
  );
}
