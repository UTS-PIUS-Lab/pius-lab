"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

// Items with `children` render as a dropdown on desktop and an indented
// sub-list on mobile. `match` is the path prefix that marks the item active.
const navItems = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Research", href: "/research" },
  {
    label: "Projects",
    match: "/projects",
    children: [
      { label: "Research Projects", href: "/projects" },
      { label: "Student Projects",  href: "/projects/students" },
    ],
  },
  { label: "Team",     href: "/team" },
  { label: "Advisory", href: "/advisory" },
  { label: "News",     href: "/news" },
  { label: "Awards",   href: "/awards" },
  { label: "Contact",  href: "/contact" },
];

const isActive = (item, pathname) =>
  item.match ? pathname === item.match || pathname.startsWith(item.match + "/") : pathname === item.href;

function DesktopDropdown({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const active = isActive(item, pathname);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey  = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close after navigating
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 uppercase text-xs tracking-widest font-medium px-3 py-2 rounded-md transition-colors ${
          active ? "text-electric-cyan" : "text-muted hover:text-electric-cyan hover:bg-electric-cyan/5"
        }`}
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        // pt-2 bridges the gap so the menu doesn't close while the mouse moves down to it
        <div className="absolute left-0 top-full pt-2 z-50">
          <div className="glass rounded-lg py-2 min-w-[200px]">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={`block px-4 py-2 uppercase text-xs tracking-widest font-medium transition-colors ${
                  pathname === child.href
                    ? "text-electric-cyan"
                    : "text-muted hover:text-electric-cyan hover:bg-electric-cyan/5"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled ? "bg-ink/90 backdrop-blur-md border-electric-cyan/10 shadow-glow" : "bg-ink/60 backdrop-blur-sm border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group md:mr-8 lg:mr-16 xl:mr-24">
            <div className="bg-ink-card text-electric-cyan border border-electric-cyan/30 rounded-lg px-3 py-1.5 text-sm font-bold tracking-wide shadow-glow group-hover:border-electric-cyan/60 transition-colors">
              PIUS
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-fg leading-tight">
                Physical Intelligence and Uncrewed Systems Lab
              </div>
              <div className="text-xs text-muted">
                University of Technology Sydney
              </div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} pathname={pathname} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`uppercase text-xs tracking-widest font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive(item, pathname)
                      ? "text-electric-cyan"
                      : "text-muted hover:text-electric-cyan hover:bg-electric-cyan/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* THEME + MOBILE TOGGLES */}
          <div className="flex items-center gap-3 md:ml-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-soft hover:text-electric-cyan transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-ink border-t border-electric-cyan/10 pb-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className={`px-6 py-2.5 uppercase text-xs tracking-widest font-medium ${
                    isActive(item, pathname) ? "text-electric-cyan" : "text-muted"
                  }`}>
                    {item.label}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block pl-10 pr-6 py-2 uppercase text-xs tracking-widest font-medium transition-colors ${
                        pathname === child.href
                          ? "text-electric-cyan"
                          : "text-muted hover:text-electric-cyan"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-2.5 uppercase text-xs tracking-widest font-medium transition-colors ${
                    isActive(item, pathname)
                      ? "text-electric-cyan"
                      : "text-muted hover:text-electric-cyan"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
