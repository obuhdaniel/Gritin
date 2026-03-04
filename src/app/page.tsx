"use client";

import React, { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────
const PILLARS = [
  {
    num: "01", label: "Travel", letter: "W",
    title: ["The World", "Map"],
    desc: "Hidden gems, student discounts, visa tips, and the art of seeing the world while your bank account says otherwise.",
    tag: "Coming Soon",
  },
  {
    num: "02", label: "Wellness", letter: "R",
    title: ["The Reading", "Room"],
    desc: "Academic wellness, thesis support, burnout guides, and honest conversations about mental health your department won't have.",
    tag: "Coming Soon",
  },
  {
    num: "03", label: "Love", letter: "L",
    title: ["Love &", "Latitude"],
    desc: "Relationships while being mobile, ambitious, and emotionally complex. Long-distance, international, and everything in between.",
    tag: "Coming Soon",
  },
  {
    num: "04", label: "Nature", letter: "N",
    title: ["The Nature", "Diaries"],
    desc: "Slow travel, ecotourism, nature retreats, and the healing that comes from forests, mountains, and water.",
    tag: "Coming Soon",
  },
  {
    num: "05", label: "Identity", letter: "P",
    title: ["Pan-African", "Thread"],
    desc: "Afrodiaspora perspectives on education, identity, belonging. Stories from Lagos to London, Accra to Atlanta.",
    tag: "Coming Soon",
  },
];

const MEMBERS = [
  {
    city: "Lagos, Nigeria", name: "Adaeze", degree: "PhD in Urban Planning",
    quote: "Dream destination: Lisbon — I want to write my dissertation in a café by the Tagus, watching the river change colour in the afternoon light.",
  },
  {
    city: "Atlanta, USA", name: "Khadija", degree: "Masters in Public Health",
    quote: "Dream destination: Zanzibar — to understand my roots and my grandmother's stories with my own two feet on the sand.",
  },
  {
    city: "London, UK", name: "Siri", degree: "PhD in African Studies",
    quote: "Dream destination: Paris — for the archives, the food, the language, and the beautiful, productive chaos of it all.",
  },
];

const MARQUEE_ITEMS = [
  "Academia meets Adventure",
  "Love meets Ambition",
  "Theory meets Travel",
  "Roots meet the World",
  "You don't have to choose",
];

const TENSIONS = [
  { num: "01", glyph: "&", a: "Brilliant", b: "Free" },
  { num: "02", glyph: "✦", a: "Ambitious", b: "Alive" },
  { num: "03", glyph: "→", a: "Rooted", b: "Global" },
  { num: "04", glyph: "◎", a: "In Love", b: "Moving" },
];

// ─── Scroll Reveal ────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.style.transitionDelay = `${el.dataset.delay ?? 0}ms`;
          el.classList.add("is-visible");
        }
      });
    }, { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── Custom Cursor ────────────────────────────────────────────
function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cur = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const tick = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.1;
      cur.current.y += (pos.current.y - cur.current.y) * 0.1;
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${cur.current.x - 20}px, ${cur.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf.current = requestAnimationFrame(tick);
    const interactables = document.querySelectorAll("a, button, [data-cursor]");
    const enter = () => { if (ring.current) ring.current.style.transform += " scale(1.6)"; };
    const leave = () => {};
    interactables.forEach((el) => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

// ─── Reveal wrapper ───────────────────────────────────────────
function R({ children, d = 0, className = "" }: { children: React.ReactNode; d?: number; className?: string }) {
  return (
    <div data-reveal data-delay={d} className={`reveal-el ${className}`}>
      {children}
    </div>
  );
}

// ─── Arrow ────────────────────────────────────────────────────
const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// ─── Main ─────────────────────────────────────────────────────
export default function Goliard() {
  useScrollReveal();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (email) setDone(true); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Mono:wght@300;400&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --ink: #0a0908;
          --ink2: #111009;
          --ivory: #f4ede4;
          --ivory2: #ece3d6;
          --ember: #c05621;
          --ember2: #d4682e;
          --gold: #b08750;
          --gold-light: #d4aa6a;
          --mist: #9a8e84;
          --mist2: #c8bcb2;
          --border: rgba(255,255,255,0.07);
          --border-warm: rgba(200,188,178,0.15);
          --serif: 'Playfair Display', Georgia, serif;
          --mono: 'DM Mono', 'Courier New', monospace;
        }

        html { scroll-behavior: smooth; }
        body { background: var(--ink); color: var(--ivory); font-family: var(--mono); cursor: none; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        a, button { cursor: none; }

        /* Cursor */
        .cursor-dot {
          position: fixed; top: 0; left: 0; width: 8px; height: 8px;
          border-radius: 50%; background: var(--ember);
          pointer-events: none; z-index: 9999; will-change: transform;
          mix-blend-mode: normal;
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0; width: 40px; height: 40px;
          border-radius: 50%; border: 1px solid rgba(192,86,33,0.5);
          pointer-events: none; z-index: 9998; will-change: transform;
          transition: width 0.3s, height 0.3s, border-color 0.3s;
        }

        /* Reveal */
        .reveal-el { opacity: 0; transform: translateY(20px); transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1); }
        .reveal-el.is-visible { opacity: 1; transform: none; }

        /* Marquee */
        @keyframes marquee { to { transform: translateX(-50%); } }
        .marquee-inner { display: flex; gap: 0; animation: marquee 24s linear infinite; white-space: nowrap; }
        .marquee-inner:hover { animation-play-state: paused; }

        /* Scroll line */
        @keyframes scroll-line { from { transform: scaleX(0); transform-origin: left; } to { transform: scaleX(1); transform-origin: left; } }

        /* Grain overlay */
        .grain::after {
          content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px; opacity: 0.028; mix-blend-mode: overlay;
        }

        /* Section label */
        .s-label { font-family: var(--mono); font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--ember); display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .s-label span { color: var(--mist); }

        /* Divider line */
        .h-line { height: 1px; background: var(--border-warm); width: 100%; }

        /* Card base */
        .card { background: rgba(255,255,255,0.025); border: 1px solid var(--border); position: relative; overflow: hidden; transition: border-color 0.35s, background 0.35s; }
        .card:hover { border-color: rgba(192,86,33,0.25); background: rgba(192,86,33,0.04); }
        .card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: var(--ember); transform: scaleX(0); transform-origin: left; transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); }
        .card:hover::before { transform: scaleX(1); }

        /* Pillar card */
        .p-card { background: rgba(255,255,255,0.02); border: 1px solid var(--border); transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), border-color 0.35s, background 0.35s; flex-shrink: 0; }
        .p-card:hover { transform: translateY(-8px); border-color: rgba(192,86,33,0.2); background: rgba(192,86,33,0.03); }
        .p-card:hover .p-arrow { background: var(--ember); border-color: var(--ember); color: var(--ivory); }

        /* Input */
        input[type=email] { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.09); color: var(--ivory); font-family: var(--mono); font-size: 13px; padding: 16px 20px; width: 100%; outline: none; transition: border-color 0.25s; }
        input[type=email]:focus { border-color: var(--ember); }
        input[type=email]::placeholder { color: var(--mist); }

        /* Button */
        .btn { display: inline-flex; align-items: center; gap: 10px; font-family: var(--mono); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; padding: 17px 32px; background: var(--ember); color: var(--ivory); border: none; position: relative; overflow: hidden; transition: background 0.3s; }
        .btn::after { content: ''; position: absolute; inset: 0; background: var(--ember2); transform: translateX(-100%); transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        .btn:hover::after { transform: translateX(0); }
        .btn > * { position: relative; z-index: 1; }
        .btn-ghost { background: transparent; border: 1px solid var(--border-warm); color: var(--mist2); }
        .btn-ghost::after { background: rgba(255,255,255,0.04); }
        .btn-ghost:hover { color: var(--ivory); }

        /* Nav link */
        .nav-link { font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--mist); text-decoration: none; transition: color 0.25s; }
        .nav-link:hover { color: var(--ivory); }

        /* Scrollbar hide */
        .no-scroll::-webkit-scrollbar { display: none; }
        .no-scroll { -ms-overflow-style: none; scrollbar-width: none; }

        /* Member card */
        .m-card { background: rgba(255,255,255,0.025); border: 1px solid var(--border); transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.35s; }
        .m-card:hover { transform: translateY(-6px); border-color: rgba(192,86,33,0.2); }

        /* Tag pill */
        .tag { display: inline-block; font-family: var(--mono); font-size: 9px; letter-spacing: 0.4em; text-transform: uppercase; color: var(--ember); border: 1px solid rgba(192,86,33,0.3); padding: 5px 12px; }

        /* Social icon */
        .soc { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.08); color: var(--mist); transition: background 0.25s, border-color 0.25s, color 0.25s; }
        .soc:hover { background: var(--ember); border-color: var(--ember); color: var(--ivory); }

        /* Glow */
        .glow { position: absolute; border-radius: 50%; pointer-events: none; }
      `}</style>

      <Cursor />
      <div className="grain" />

      {/* ── NAV ──────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "24px 48px",
        background: "linear-gradient(to bottom, rgba(10,9,8,0.95) 0%, transparent 100%)",
        backdropFilter: "blur(12px)",
      }}>
        <a href="#" style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--ivory)", textDecoration: "none", letterSpacing: "0.08em" }}>
          Goliard
        </a>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {["Features", "Manifesto", "Community"].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} className="nav-link">{n}</a>
          ))}
          <a href="#waitlist" className="btn" style={{ padding: "11px 24px" }}>
            <span>Join Waitlist</span><Arrow />
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", padding: "0 48px 96px", overflow: "hidden" }}>
        {/* BG */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 65% at 75% 35%, #1e110a 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 15% 75%, #140d07 0%, transparent 55%), var(--ink)" }} />
        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)" }} />
        {/* Orange glow */}
        <div className="glow" style={{ width: 500, height: 500, top: "10%", right: "15%", background: "radial-gradient(circle, rgba(192,86,33,0.12) 0%, transparent 70%)" }} />

        {/* Deco line */}
        <div style={{ position: "absolute", top: 0, right: "38%", width: 1, height: "100%", background: "linear-gradient(to bottom, transparent 10%, rgba(192,86,33,0.1) 50%, transparent 90%)" }} />

        {/* Corner label */}
        <div style={{ position: "absolute", top: 130, left: 48, display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--ember)", animation: "fadeUp 1s ease 0.3s both" }}>
          <span style={{ display: "block", width: 32, height: 1, background: "var(--ember)" }} />
          Est. 2025 — Lifestyle Platform
        </div>

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "flex-end", width: "100%" }}>
          <div>
            <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24, animation: "fadeUp 1s ease 0.5s both" }}>
              For scholars. For wanderers. For those who are both.
            </p>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, lineHeight: 0.88, marginBottom: 40, letterSpacing: "-0.01em", fontSize: "clamp(80px, 12vw, 172px)", animation: "fadeUp 1.1s ease 0.6s both" }}>
              Goli<em style={{ color: "var(--ember)" }}>ard</em>
            </h1>
            <div style={{ display: "flex", gap: 16, alignItems: "center", animation: "fadeUp 1s ease 0.85s both" }}>
              <a href="#waitlist" className="btn"><span>Join the Waitlist</span><Arrow /></a>
              <a href="#features" className="btn btn-ghost"><span>Explore</span><Arrow /></a>
            </div>
          </div>

          <div style={{ maxWidth: 260, paddingBottom: 8, animation: "fadeUp 1s ease 0.9s both" }}>
            <div style={{ width: 1, height: 56, background: "linear-gradient(to bottom, transparent, var(--ember))", marginBottom: 24 }} />
            <p style={{ fontFamily: "var(--mono)", fontSize: 12, lineHeight: 1.85, color: "var(--mist)" }}>
              The platform for those who balance{" "}
              <em style={{ color: "var(--mist2)", fontStyle: "italic" }}>brilliance</em> with{" "}
              <em style={{ color: "var(--mist2)", fontStyle: "italic" }}>wildness</em> — and refuse to choose between the two.
            </p>
          </div>
        </div>

        {/* Scroll text */}
        <div style={{ position: "absolute", bottom: 40, right: 48, display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--mist)", animation: "fadeUp 1s ease 1.1s both" }}>
          <div style={{ width: 40, height: 1, background: "var(--mist)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "var(--ember)", animation: "slideRight 2s ease 2s infinite" }} />
          </div>
          Scroll
        </div>

        <style>{`
          @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
          @keyframes slideRight { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
        `}</style>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <div style={{ background: "var(--ember)", overflow: "hidden", padding: "18px 0", borderTop: "none" }}>
        <div className="marquee-inner">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span key={i} style={{ fontFamily: "var(--serif)", fontSize: 20, fontStyle: "italic", color: "rgba(244,237,228,0.92)", paddingRight: 56, display: "flex", alignItems: "center", gap: 56, flexShrink: 0 }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(244,237,228,0.45)", flexShrink: 0 }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── TENSION ──────────────────────────────────────────── */}
      <section id="about" style={{ padding: "120px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, position: "relative", overflow: "hidden" }}>
        <div className="glow" style={{ width: 600, height: 600, top: "50%", right: -200, transform: "translateY(-50%)", background: "radial-gradient(circle, rgba(192,86,33,0.06) 0%, transparent 70%)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <R>
            <div className="s-label"><span>01</span> The Problem</div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: 1.2, marginBottom: 28, color: "var(--ivory)" }}>
              Nobody told you that getting your Masters would mean{" "}
              <em style={{ color: "var(--ember)" }}>explaining</em> why you still want to{" "}
              <em style={{ color: "var(--ember)" }}>live</em>.
            </h2>
            <p style={{ fontFamily: "var(--mono)", fontSize: 13, lineHeight: 1.9, color: "var(--mist)", maxWidth: 400 }}>
              The world expects you to choose. Academia asks you to prove you're serious. The world asks you to prove you're fun. Goliard asks you to prove nothing.
            </p>
          </R>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          {TENSIONS.map((t, i) => (
            <R key={t.num} d={i * 80}>
              <div className="card" style={{ padding: "36px 28px", minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.3em", color: "var(--mist)" }}>{t.num}</span>
                  <span style={{ fontFamily: "var(--serif)", fontSize: 28, color: "var(--ember)", lineHeight: 1 }}>{t.glyph}</span>
                </div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, color: "var(--ivory)", lineHeight: 1.3 }}>
                  {t.a}<br />
                  <em style={{ color: "var(--mist2)" }}>& {t.b}</em>
                </div>
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────── */}
      <section id="features" style={{ background: "var(--ivory)", color: "var(--ink)", padding: "120px 0 80px" }}>
        <div style={{ padding: "0 48px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
          <R>
            <div className="s-label" style={{ color: "var(--ember)" }}><span style={{ color: "var(--mist)" }}>02</span> Five Pillars</div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, color: "var(--ink)" }}>
              What Goliard<br />gives <em style={{ color: "var(--ember)" }}>you</em>
            </h2>
          </R>
          <R d={150}>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12, lineHeight: 1.8, color: "#8a7d72", maxWidth: 220, textAlign: "right" }}>
              Five spaces for those who refuse to fragment themselves.
            </p>
          </R>
        </div>

        <div className="no-scroll" style={{ display: "flex", gap: 2, padding: "0 48px", overflowX: "auto" }}>
          {PILLARS.map((p, i) => (
            <div key={p.num} className="p-card" style={{ width: 280, minHeight: 480, padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
              {/* Ghost letter */}
              <div style={{ position: "absolute", right: -12, top: 0, fontFamily: "var(--serif)", fontSize: 140, fontStyle: "italic", color: "rgba(10,9,8,0.06)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>{p.letter}</div>

              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.3em", color: "#9a8e84", marginBottom: 12 }}>{p.num}</div>
                <span className="tag">{p.label}</span>
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, fontWeight: 400, lineHeight: 1.15, marginBottom: 16, color: "var(--ink)" }}>
                  {p.title[0]}<br /><em style={{ color: "var(--ember)" }}>{p.title[1]}</em>
                </h3>
                <p style={{ fontFamily: "var(--mono)", fontSize: 12, lineHeight: 1.8, color: "#7a6e64" }}>{p.desc}</p>
              </div>

              <div style={{ borderTop: "1px solid rgba(10,9,8,0.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
                <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "#9a8e84" }}>{p.tag}</span>
                <div className="p-arrow" style={{ width: 32, height: 32, border: "1px solid rgba(10,9,8,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7a6e64", transition: "all 0.3s" }}>
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────────── */}
      <section id="manifesto" style={{ padding: "140px 48px", position: "relative", overflow: "hidden" }}>
        <div className="glow" style={{ width: 700, height: 700, top: "50%", left: -200, transform: "translateY(-50%)", background: "radial-gradient(circle, rgba(192,86,33,0.08) 0%, transparent 60%)" }} />

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <R>
            <div className="s-label"><span>03</span> Manifesto</div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(52px, 8vw, 100px)", lineHeight: 0.92, marginBottom: 72, letterSpacing: "-0.01em" }}>
              <em>Dear</em><br />Goliard,
            </h2>
          </R>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <R d={100}>
              <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(22px, 2.5vw, 34px)", lineHeight: 1.45, borderLeft: "2px solid var(--ember)", paddingLeft: 36, color: "var(--ivory)" }}>
                "You were told you couldn't have it all. That choosing academia meant choosing solitude."
              </blockquote>
            </R>
            <R d={180}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(18px, 2vw, 26px)", lineHeight: 1.65, color: "rgba(244,237,228,0.7)", paddingLeft: 36 }}>
                But nobody told you about the ones who did <em style={{ color: "var(--ember)" }}>both</em>. Who finished their theses <em style={{ color: "var(--ember)" }}>and</em> watched the sunset in Santorini. Who fell in love deeply <em style={{ color: "var(--ember)" }}>and</em> published their research.
              </p>
            </R>
            <R d={260}>
              <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(18px, 2vw, 26px)", lineHeight: 1.65, color: "rgba(244,237,228,0.7)", paddingLeft: 36 }}>
                Goliard is for you — the one who reads theory by day and dances by night. Unapologetically intellectual <em style={{ color: "var(--ember)" }}>and</em> unapologetically alive.
              </p>
            </R>
            <R d={340}>
              <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(22px, 2.5vw, 34px)", lineHeight: 1.45, borderLeft: "2px solid var(--ember)", paddingLeft: 36, color: "var(--ivory)" }}>
                "You are not broken for wanting more. You are not too much for being whole."
              </blockquote>
            </R>
            <R d={400}>
              <div style={{ height: 1, background: "var(--border-warm)", margin: "8px 0 16px 36px" }} />
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18, color: "var(--gold)", paddingLeft: 36 }}>
                — Welcome home, traveler. You've been waiting for this space.
              </p>
            </R>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ────────────────────────────────────────── */}
      <section id="community" style={{ background: "var(--ivory2)", color: "var(--ink)", padding: "120px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
          <R>
            <div className="s-label"><span style={{ color: "var(--mist)" }}>04</span> Community</div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.05, color: "var(--ink)" }}>
              Who you'll<br />meet <em style={{ color: "var(--ember)" }}>here</em>
            </h2>
          </R>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {MEMBERS.map((m, i) => (
            <R key={m.name} d={i * 100}>
              <div className="m-card" style={{ padding: "48px 40px", position: "relative", overflow: "hidden", minHeight: 420 }}>
                <div style={{ position: "absolute", bottom: -24, right: -16, fontFamily: "var(--serif)", fontSize: 180, fontStyle: "italic", color: "rgba(192,86,33,0.05)", lineHeight: 1, pointerEvents: "none" }}>{m.name[0]}</div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--ember)", marginBottom: 24 }}>
                  <span style={{ display: "block", width: 20, height: 1, background: "var(--ember)" }} />
                  {m.city}
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 52, lineHeight: 1, marginBottom: 6, color: "var(--ink)" }}>{m.name}</h3>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#8a7d72", borderBottom: "1px solid rgba(10,9,8,0.07)", paddingBottom: 24, marginBottom: 24 }}>{m.degree}</div>
                <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 17, lineHeight: 1.7, color: "#5a5047", position: "relative", zIndex: 1 }}>"{m.quote}"</p>
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* ── WAITLIST ─────────────────────────────────────────── */}
      <section id="waitlist" style={{ padding: "140px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, position: "relative", overflow: "hidden" }}>
        <div className="glow" style={{ width: 600, height: 600, top: -100, right: -100, background: "radial-gradient(circle, rgba(192,86,33,0.1) 0%, transparent 65%)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <R>
            <div className="s-label"><span>05</span> Early Access</div>
            <h2 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(38px, 4.5vw, 62px)", lineHeight: 1.1, marginBottom: 24, color: "var(--ivory)" }}>
              They're building<br />something.
              <br /><em style={{ color: "var(--ember)" }}>Are you in?</em>
            </h2>
            <p style={{ fontFamily: "var(--mono)", fontSize: 13, lineHeight: 1.85, color: "var(--mist)", maxWidth: 360 }}>
              Join the waitlist to be the first to know when we launch. Early access members get exclusive community access and beta features before anyone else.
            </p>
          </R>
        </div>

        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <R d={200}>
            {!done ? (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                <input
                  type="email" value={email} placeholder="your@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submit(e)}
                />
                <button type="submit" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                  <span>Join the Waitlist</span><Arrow />
                </button>
              </form>
            ) : (
              <div style={{ border: "1px solid rgba(192,86,33,0.25)", padding: "36px", marginBottom: 36, textAlign: "center", background: "rgba(192,86,33,0.04)" }}>
                <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 28, color: "var(--ember)", marginBottom: 8 }}>Welcome, Goliard.</p>
                <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--mist)" }}>You're on the list. We'll be in touch.</p>
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid var(--border-warm)" }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: 44, color: "var(--gold-light)" }}>2,847</span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--mist)", lineHeight: 1.6 }}>people already<br />on the waitlist</span>
            </div>
          </R>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer style={{ background: "#080706", borderTop: "1px solid var(--border)", padding: "72px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: 48, fontWeight: 400, marginBottom: 16, color: "var(--ivory)" }}>Goliard</h3>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12, lineHeight: 1.85, color: "var(--mist)", maxWidth: 260, marginBottom: 28 }}>
              A lifestyle platform for those who balance brilliance with wildness. Because you shouldn't have to choose.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { label: "IG", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "TT", path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} className="soc">
                  <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {[
            { h: "Explore", links: ["Features", "Community", "Manifesto", "Join Waitlist"] },
            { h: "Pillars", links: ["The World Map", "The Reading Room", "Love & Latitude", "Nature Diaries", "Pan-African Thread"] },
            { h: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookies"] },
          ].map(col => (
            <div key={col.h}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--mist2)", marginBottom: 24 }}>{col.h}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map(l => (
                  <a key={l} href="#" style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--mist)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--ember)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--mist)"}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, borderTop: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--mist)" }}>© {new Date().getFullYear()} Goliard. All rights reserved.</span>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18, color: "var(--ember)" }}>For those who want both.</span>
        </div>
      </footer>
    </>
  );
}