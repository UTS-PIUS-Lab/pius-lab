"use client";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const PREVIEW_SECONDS = 5;

// Shows the YouTube thumbnail; while hovered (or keyboard-focused) it plays a
// muted 5-second preview on loop. Clicking opens the full video on YouTube.
export default function StudentProjectCard({ project }) {
  const { title, youtubeId, previewStart = 0, event, description } = project;
  const [previewing, setPreviewing] = useState(false);
  const [loop, setLoop] = useState(0); // bumping this remounts the iframe → restarts the clip
  const timer = useRef(null);

  // Restart the clip every 5 s while the preview is showing
  useEffect(() => {
    if (!previewing) return;
    timer.current = setInterval(() => setLoop((n) => n + 1), PREVIEW_SECONDS * 1000);
    return () => clearInterval(timer.current);
  }, [previewing]);

  const start = () => setPreviewing(true);
  const stop = () => {
    setPreviewing(false);
    setLoop(0);
  };

  const videoUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
  const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const embed =
    `https://www.youtube-nocookie.com/embed/${youtubeId}` +
    `?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1` +
    `&start=${previewStart}&end=${previewStart + PREVIEW_SECONDS}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      className="glass rounded-3xl overflow-hidden block group hover:shadow-glow hover:border-electric-cyan/30 transition-all duration-200"
    >
      <div className="relative aspect-video bg-ink-card overflow-hidden">
        <img
          src={thumb}
          alt={`${title} video thumbnail`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {previewing && (
          <iframe
            key={loop}
            src={embed}
            title={`${title} preview`}
            allow="autoplay; encrypted-media"
            tabIndex={-1}
            aria-hidden="true"
            // pointer-events-none keeps the whole card clickable and the hover alive
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ border: 0 }}
          />
        )}

        {!previewing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="w-14 h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white backdrop-blur-sm">
              <Play size={22} className="ml-0.5" />
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        {event && (
          <p className="text-xs uppercase tracking-widest font-semibold text-electric-cyan mb-2">{event}</p>
        )}
        <h3 className="text-lg font-bold text-fg mb-1 group-hover:text-electric-cyan transition-colors">{title}</h3>
        {description && <p className="text-sm text-body leading-relaxed mb-2">{description}</p>}
        <span className="text-sm text-electric-cyan font-medium group-hover:underline">Watch on YouTube →</span>
      </div>
    </a>
  );
}
