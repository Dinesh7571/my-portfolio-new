import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaNpm,
  FaYoutube, FaGoogleDrive, FaAndroid,
  FaReact, FaNodeJs,
  FaBell,
  FaDocker,
  FaAws,
  FaGit,
} from "react-icons/fa";
import {
  FiExternalLink, FiSun, FiMoon,
  FiArrowUpRight, FiX, FiMapPin, FiCode,
} from "react-icons/fi";
import {
  SiMongodb, SiTypescript, SiKotlin,
  SiTailwindcss, SiFirebase, SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";

/* ─── helpers ─── */
function ytThumb(url) {
  const m = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : null;
}
function ytEmbed(url) {
  const m = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
  return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1` : null;
}

const SKILL_ICONS = {
  "React Native": <FaReact />,
  "React.js": <FaReact />,
  "Node.js": <FaNodeJs />,
  "MongoDB": <SiMongodb />,
  "TypeScript": <SiTypescript />,
  "Kotlin": <SiKotlin />,
  "Tailwind CSS": <SiTailwindcss />,
  "Firebase": <SiFirebase />,
  "Express": <SiExpress />,
  "Zustand": <FiCode />,
  "Android Native": <FaAndroid />,
  "Android Native Modules": <SiKotlin />,
  "Native Module Bridge": <FiCode />,
  "Headless JS": <FiCode />,
  "Notifee": <FaBell />,
  "JWT Authentication": <SiJsonwebtokens />,
  "REST API": <FiCode />,
  "Docker": <FaDocker />,
  "AWS": <FaAws />,
  "Gemini API": <FiCode />,
  "Git":<FaGit/>,
  "GitHub":<FaGithub/>
};

function DemoIcon({ type }) {
  if (type === "youtube") return <FaYoutube />;
  if (type === "drive")   return <FaGoogleDrive />;
  if (type === "npm")     return <FaNpm />;
  return <FiExternalLink />;
}

/* ─── data ─── */
const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "SR Edu Technology Pvt. Ltd.",
    period: "June 2025 — Present",
    location: "Hyderabad, India",
    type: "Full-time",
    points: [
      "Developed and optimized responsive UIs with React.js and Tailwind CSS.",
      "Improved performance and enhanced UX across web platforms.",
      "Collaborated with backend devs to integrate REST APIs seamlessly.",
    ],
  },
  {
    role: "IT Developer",
    company: "Gyankosha",
    period: "Feb 2025 — May 2025",
    location: "Gorakhpur, India",
    type: "Contract",
    points: [
      "Built and maintained an e-learning platform website and mobile application.",
      "Focused on diversified learning tools and personality development features.",
    ],
  },
];

const PROJECTS = [
  {
    name: "WhoCall - Smart Caller ID & Spam Detection App",
    short: "Real-time Caller ID & Spam Detection",
    desc: "WhoCall is a full-stack Caller Identification and Spam Detection mobile app built with React Native and Kotlin Native Modules. It detects incoming calls in real-time, sends encrypted numbers to a secure Node.js backend, checks spam scores from MongoDB, and displays caller details instantly using an overlay screen. Includes Kill Mode for auto-disconnecting spam calls.",
    tech: [
      "React Native CLI",
      "Kotlin (Android Native Modules)",
      "Headless JS",
      "Zustand",
      "Notifee",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST API"
    ],
    isPrivateRepo: true,
    github: "",
    demo: "https://youtu.be/YYvRfXNpWnc?si=fD8mpFUgkp2LvLmd",
    demoType: "youtube",
    demoLabel: "Watch Demo"
  },
  {
    name: "MyBuildFlow - Drag & Drop Website Builder",
    short: "No-code website builder platform",
    desc: "MyBuildFlow is a full-stack drag-and-drop website builder that enables users to create and deploy professional websites without writing code. It features real-time editing, responsive components, authentication, project management, and deployment-ready architecture powered by a scalable MERN-based backend.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Context API",
      "Zustand",
      "Docker",
      "AWS",
      "Git",
      "GitHub"
    ],
    isPrivateRepo: true,
    github: "", 
    demo: "https://youtu.be/U-zZ3CTtgxk?si=mFxwvZVjPe8QK8hP",
    demoType: "youtube",
    demoLabel: "Watch Demo"
  },
  {
    name: "Baymax",
    short: "AI health companion",
    desc: "Health companion app inspired by Big Hero 6's Baymax. Tracks water intake, step count via pedometer, and delivers personalized health tips powered by Gemini AI with a TTS voice engine. State managed by Zustand with Firebase sync.",
    tech: ["React Native", "Zustand", "Firebase", "Gemini API"],
    github: "https://github.com/Dinesh7571/Baymax",
    demo: "https://youtu.be/7ET_kdNZqes?si=4bG4ZDwTQdJjS6dB",
    demoType: "youtube",
    isPrivateRepo: false,
    demoLabel: "Watch Demo",
  },
  {
    name: "React-Rabbit",
    short: "Framework detector for Android",
    desc: "Android utility app that inspects installed applications and identifies whether they were built with React Native, Flutter, Kotlin, or Java native code — using low-level APK inspection via a Native Module Bridge.",
    tech: ["React Native", "Native Module Bridge", "Kotlin"],
    github: "https://github.com/Dinesh7571/React-Rabbit",
    demo: "https://drive.google.com/file/d/1ExS1J_iEZJSqvyxaxWW7uR_qb--Scxlx/view",
    demoType: "drive",
    isPrivateRepo: false,
    demoLabel: "Download APK",
  },
  {
    name: "RN Call-Logs NPM",
    short: "Open-source Android library",
    desc: "Published NPM library for React Native that provides full access to Android call logs with TypeScript support and advanced filtering options. Actively maintained with growing weekly downloads.",
    tech: ["TypeScript", "Android Native", "React Native"],
    github: "https://github.com/Dinesh7571/react-native-calllogs-android",
    demo: "https://www.npmjs.com/package/react-native-calllogs-android",
    demoType: "npm",
    isPrivateRepo: false,
    demoLabel: "View on NPM",
  },
];

const SKILLS = [
  { label: "React Native", icon: <FaReact /> },
  { label: "React.js",     icon: <FaReact /> },
  { label: "Kotlin",       icon: <SiKotlin /> },
  { label: "Node.js",      icon: <FaNodeJs /> },
  { label: "Express",      icon: <SiExpress /> },
  { label: "MongoDB",      icon: <SiMongodb /> },
  { label: "Docker", icon: <FaDocker /> },
  { label: "AWS", icon: <FaAws /> },
  { label: "TypeScript",   icon: <SiTypescript /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss /> },
  { label: "Zustand",      icon: <FiCode /> },
  { label: "Firebase",     icon: <SiFirebase /> },
  { label: "Headless JS", icon: <FiCode /> },
  { label: "Notifee", icon: <FaBell /> },
  { label: "JWT Authentication", icon: <SiJsonwebtokens /> },
  { label: "REST API", icon: <FiCode /> },
  { label: "Android Native Modules", icon: <SiKotlin /> },
  { label: "Code Push", icon: <FiCode /> },
];

const STATS = [
  { val: "1+", lbl: "Years Experience" },
  { val: "4+", lbl: "Projects Shipped" },
  { val: "1",  lbl: "NPM Package" },
  { val: "∞",  lbl: "Lines of Code" },
];

const NAV_SECTIONS = ["home", "experience", "projects", "contact"];

/* ─── component ─── */
export default function Portfolio() {
  const [dark, setDark]           = useState(true);
  const [modal, setModal]         = useState(null);
  const [active, setActive]       = useState("home");

  const refs = {
    home:       useRef(null),
    experience: useRef(null),
    projects:   useRef(null),
    contact:    useRef(null),
  };

  /* sync dark class on <html> */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  /* active section observer */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.2, rootMargin: "-60px 0px 0px 0px" }
    );
    Object.values(refs).forEach((r) => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) =>
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  /* close modal on Escape */
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setModal(null);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    /* root: dark class applied to <html> via useEffect above */
    <div className="bg-[#f7f7f5] dark:bg-[#0a0a0a] text-neutral-900 dark:text-[#efefed] min-h-screen font-sans transition-colors duration-300">

      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap');`}</style>

      {/* ═══════════ NAV ═══════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-[rgba(247,247,245,0.9)] dark:bg-[rgba(10,10,10,0.9)] backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between gap-4">

          {/* logo */}
          <div className="flex items-center gap-3">
            <div className="w-[34px] h-[34px] rounded-[10px] bg-accent flex items-center justify-center text-xs font-extrabold text-[#0a0a0a] shrink-0">
              DK
            </div>
            <span className="font-bold text-sm hidden sm:block">Dinesh Kannaujiya</span>
          </div>

          {/* desktop nav */}
          <div className="hidden sm:flex gap-1">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-[14px] py-[6px] rounded-full text-[13px] font-medium capitalize transition-all duration-200
                  ${active === s
                    ? "bg-accent text-[#0a0a0a]"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* dark toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {dark ? <FiSun size={15} /> : <FiMoon size={15} />}
          </button>
        </div>

        
      </nav>

      {/* ═══════════ PAGE CONTENT ═══════════ */}
      <div className="max-w-5xl mx-auto px-6">

        {/* ── HERO ── */}
        <section id="home" ref={refs.home} className="pt-[140px] pb-24 relative overflow-hidden">
          {/* glow blob */}
          <div className="absolute -top-36 -right-36 w-[480px] h-[480px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 items-start">
            <div>
              {/* status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-[5px] rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold mb-6">
                <span className="w-[7px] h-[7px] rounded-full bg-accent shadow-[0_0_10px_#6ffc03] inline-block" />
                Available for work
              </div>

              <h1 className="font-serif italic text-[clamp(40px,7vw,72px)] font-normal leading-[1.05] mb-5">
                Dinesh<br />Kannaujiya
              </h1>

              <p className="text-[clamp(13px,1.8vw,16px)] text-neutral-500 dark:text-neutral-400 max-w-[460px] leading-[1.85] mb-8">
                Full Stack web &amp; Mobile App Developer crafting high-quality React Native apps
                and React.js web products. Based in Uttar Pradesh, India.
              </p>

              <div className="flex flex-wrap gap-3 mb-9">
                <a href="mailto:kannaujiya00000@gmail.com"
                   className="inline-flex items-center gap-2 px-5 py-[10px] rounded-xl bg-accent text-[#0a0a0a] text-[13px] font-semibold hover:opacity-85 hover:-translate-y-px transition-all duration-200">
                  <FaEnvelope /> Get in Touch
                </a>
                <a href="https://github.com/Dinesh7571" target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 px-5 py-[10px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-[13px] font-semibold hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200">
                  <FaGithub /> GitHub
                </a>
              </div>

              {/* social icons */}
              <div className="flex gap-2">
                {[
                  { icon: <FaEnvelope />, url: "mailto:kannaujiya00000@gmail.com", label: "Email" },
                  { icon: <FaGithub />, url: "https://github.com/Dinesh7571", label: "GitHub" },
                  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/dinesh-kannaujiya-985719205", label: "LinkedIn" },
                ].map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}
                     className="w-10 h-10 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-[18px] text-neutral-500 dark:text-neutral-400 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* avatar card */}
            <div className="hidden sm:flex w-[200px] h-[200px] rounded-[32px] border border-accent/40 bg-gradient-to-br from-accent/15 to-accent/35 items-center justify-center flex-col gap-2 shrink-0">
              <span className="font-sans text-[60px] font-extrabold text-accent leading-none">DK</span>
              <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[.12em]">Developer</span>
            </div>
          </div>

          {/* skills */}
          <div className="mt-16">
            <p className="text-[11px] font-bold tracking-[.12em] uppercase text-neutral-400 dark:text-neutral-500 mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-[10px]">
              {SKILLS.map((s) => (
                <div key={s.label}
                     className="inline-flex items-center gap-[6px] px-[13px] py-[7px] rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 text-[12px] font-medium cursor-default hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200">
                  <span className="text-[13px]">{s.icon}</span> {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.lbl}
                   className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg dark:hover:shadow-black/50 hover:-translate-y-px transition-all duration-200">
                <div className="text-[28px] font-extrabold text-accent leading-none mb-1">{s.val}</div>
                <div className="text-[12px] text-neutral-500 dark:text-neutral-400 font-medium">{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" ref={refs.experience} className="py-24">
          <h2 className="font-serif italic text-[clamp(32px,5vw,52px)] font-normal leading-tight mb-2">Work Experience</h2>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mb-14">Where I've been building things professionally.</p>

          <div className="flex flex-col gap-4 max-w-3xl">
            {EXPERIENCE.map((exp, i) => (
              <div key={i}
                   className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-accent/30 hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-250">
                <div className="flex flex-wrap justify-between gap-3 mb-4">
                  <div>
                    <div className="font-bold text-[16px] mb-1">{exp.role}</div>
                    <div className="flex items-center gap-[6px] text-[13px] text-neutral-500 dark:text-neutral-400">
                      <FiMapPin size={12} /> {exp.company} · {exp.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-[6px]">
                    <span className="text-[11px] font-semibold px-[10px] py-[3px] rounded-full bg-accent/15 text-accent whitespace-nowrap">
                      {exp.type}
                    </span>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-4" />

                <ul className="flex flex-col gap-[10px]">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-[10px] text-[13px] text-neutral-500 dark:text-neutral-400 leading-[1.8]">
                      <span className="text-accent text-[10px] mt-[5px] shrink-0">◆</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" ref={refs.projects} className="py-24">
          <h2 className="font-serif italic text-[clamp(32px,5vw,52px)] font-normal leading-tight mb-2">Featured Projects</h2>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mb-14">Click any card to explore — watch demos, view repos, and download apps.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROJECTS.map((p, i) => {
              const thumb = p.demoType === "youtube" ? ytThumb(p.demo) : null;
              return (
                <article
                  key={i}
                  onClick={() => setModal(p)}
                  className="group rounded-[20px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden cursor-pointer hover:border-accent/50 hover:shadow-2xl dark:hover:shadow-black/60 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* thumbnail */}
                  {/* Keep 16:9 aspect ratio for thumbnail */}
                  <div className="relative w-full aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/10 to-accent/25">
                        <span className="text-[44px] text-accent"><DemoIcon type={p.demoType} /></span>
                        <span className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[.12em]">
                          {p.demoType === "npm" ? "NPM Package" : p.demoType === "drive" ? "Android APK" : "Live Demo"}
                        </span>
                      </div>
                    )}

                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="inline-flex items-center gap-2 px-5 py-[10px] rounded-xl bg-accent text-[#0a0a0a] font-bold text-[13px] shadow-[0_4px_20px_#6ffc0366]">
                        {thumb ? <><FaYoutube /> Watch Demo</> : <><FiExternalLink /> View Project</>}
                      </div>
                    </div>

                    {/* youtube badge */}
                    {thumb && (
                      <div className="absolute top-[10px] right-[10px] flex items-center gap-[5px] px-2 py-[3px] rounded-lg bg-black/70 text-white text-[11px] font-semibold">
                        <FaYoutube className="text-red-500" /> Demo
                      </div>
                    )}
                  </div>

                  {/* body */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-[15px] leading-snug">{p.name}</h3>
                      <FiArrowUpRight
                        size={16}
                        className="shrink-0 mt-[2px] text-neutral-400 group-hover:text-accent group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-200"
                      />
                    </div>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-[1.7] mb-4">{p.short}</p>
                    <div className="flex flex-wrap gap-[6px]">
                      {p.tech.slice(0, 3).map((t) => (
                        <span key={t}
                              className="inline-flex items-center gap-[5px] px-[10px] py-[3px] rounded-xl text-[11px] font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                          <span className="text-[11px]">{SKILL_ICONS[t] || <FiCode />}</span> {t}
                        </span>
                      ))}
                      {p.tech.length > 3 && (
                        <span className="inline-flex items-center px-[10px] py-[3px] rounded-xl text-[11px] font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                          +{p.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" ref={refs.contact} className="py-24">
          <h2 className="font-serif italic text-[clamp(32px,5vw,52px)] font-normal leading-tight mb-2">Let's Connect</h2>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mb-14">Open to new projects, collaborations, or just a good chat.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* form */}
            <div>
              <p className="text-[11px] font-bold tracking-[.12em] uppercase text-neutral-400 dark:text-neutral-500 mb-4">Send a message</p>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Name", placeholder: "Your name", type: "text" },
                    { label: "Email", placeholder: "you@email.com", type: "email" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-[.08em] mb-[6px]">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-[13px] placeholder-neutral-400 dark:placeholder-neutral-600 outline-none focus:border-accent transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-[.08em] mb-[6px]">Message</label>
                  <textarea
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-[13px] placeholder-neutral-400 dark:placeholder-neutral-600 outline-none focus:border-accent transition-colors duration-200 resize-y"
                  />
                </div>
                <button className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-accent text-[#0a0a0a] text-[13px] font-semibold hover:opacity-85 hover:-translate-y-px transition-all duration-200">
                  <FaEnvelope /> Send Message
                </button>
              </div>
            </div>

            {/* links */}
            <div>
              <p className="text-[11px] font-bold tracking-[.12em] uppercase text-neutral-400 dark:text-neutral-500 mb-4">Reach me directly</p>
              <div className="flex flex-col gap-[10px] mb-5">
                {[
                  { icon: <FaEnvelope />, label: "kannaujiya00000@gmail.com", sub: "Email",    url: "mailto:kannaujiya00000@gmail.com" },
                  { icon: <FaGithub />,   label: "github.com/Dinesh7571",      sub: "GitHub",   url: "https://github.com/Dinesh7571" },
                  { icon: <FaLinkedin />, label: "linkedin.com/in/dinesh-kannaujiya", sub: "LinkedIn", url: "https://www.linkedin.com/in/dinesh-kannaujiya-985719205" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[14px] px-5 py-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-accent hover:bg-accent/5 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-[10px] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[17px] text-accent shrink-0">
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-[.08em] text-neutral-400 dark:text-neutral-500 mb-[2px]">{link.sub}</div>
                      <div className="text-[13px] font-medium truncate">{link.label}</div>
                    </div>
                    <FiArrowUpRight className="text-neutral-400 shrink-0" />
                  </a>
                ))}
              </div>

              {/* quick info */}
              <div className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-accent/5">
                <p className="text-[11px] font-bold text-accent uppercase tracking-[.1em] mb-4">Quick Info</p>
                {[
                  { l: "Location",      v: "Deoria, UP, India" },
                  { l: "Status",        v: "Open to roles" },
                  { l: "Response time", v: "Within 24 hours" },
                ].map((r) => (
                  <div key={r.l} className="flex justify-between text-[13px] mb-[10px] last:mb-0">
                    <span className="text-neutral-500 dark:text-neutral-400">{r.l}</span>
                    <span className="font-semibold">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-7 flex flex-wrap justify-between items-center gap-3">
          <span className="text-[13px] text-neutral-400 dark:text-neutral-500">© {new Date().getFullYear()} Dinesh Kannaujiya</span>
          <span className="text-[13px] text-neutral-400 dark:text-neutral-500">
            Built with <span className="text-accent font-semibold">React</span> &amp; <span className="text-accent font-semibold">Tailwind</span>
          </span>
        </footer>
      </div>

      {/* ═══════════ PROJECT MODAL ═══════════ */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4 backdrop-blur-[10px] animate-fadeIn"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* video or placeholder */}
            {modal.demoType === "youtube" && ytEmbed(modal.demo) ? (
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={ytEmbed(modal.demo)}
                  title={modal.name}
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-t-3xl border-none"
                />
              </div>
            ) : (
              <div className="h-40 bg-gradient-to-br from-accent/15 to-accent/35 rounded-t-3xl flex flex-col items-center justify-center gap-3">
                <span className="text-[52px] text-accent"><DemoIcon type={modal.demoType} /></span>
                <span className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[.12em]">
                  {modal.demoType === "npm" ? "NPM Package" : modal.demoType === "drive" ? "Android APK" : "Demo"}
                </span>
              </div>
            )}

            <div className="p-7">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif italic text-[26px] font-normal">{modal.name}</h3>
                <button
                  onClick={() => setModal(null)}
                  className="w-[34px] h-[34px] rounded-[10px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors shrink-0"
                >
                  <FiX size={16} />
                </button>
              </div>

              <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-[1.85] mb-5">{modal.desc}</p>

              <div className="h-px bg-neutral-100 dark:bg-neutral-800 mb-5" />

              <p className="text-[11px] font-bold tracking-[.12em] uppercase text-neutral-400 dark:text-neutral-500 mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {modal.tech.map((t) => (
                  <span key={t}
                        className="inline-flex items-center gap-[6px] px-[13px] py-[7px] rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 text-[12px] font-medium hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200">
                    <span className="text-[13px]">{SKILL_ICONS[t] || <FiCode />}</span> {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-[10px] flex-wrap">
                {modal.isPrivateRepo ? (
                  <button
                    disabled
                    className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-[10px] rounded-xl border-0 bg-gradient-to-r from-green-400 to-green-600 text-white text-[13px] font-semibold opacity-90 cursor-not-allowed"
                    style={{ filter: 'brightness(0.95)' }}
                  >
                    <FaGithub /> Private Repo
                  </button>
                ) : (
                  <a href={modal.github} target="_blank" rel="noreferrer"
                     className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-[10px] rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-[13px] font-semibold hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-200">
                    <FaGithub /> View Code
                  </a>
                )}
                <a href={modal.demo} target="_blank" rel="noreferrer"
                   className="flex-1 inline-flex justify-center items-center gap-2 px-5 py-[10px] rounded-xl bg-accent text-[#0a0a0a] text-[13px] font-semibold hover:opacity-85 transition-all duration-200">
                  <DemoIcon type={modal.demoType} /> {modal.demoLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}