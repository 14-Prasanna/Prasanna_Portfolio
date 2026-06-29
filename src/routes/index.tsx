import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import projectUi from "@/assets/project-ui.jpg";
import projectApi from "@/assets/project-api.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prasanna Venkatesh K — Automation Tester & SDET Portfolio" },
      {
        name: "description",
        content:
          "Prasanna Venkatesh K — Automation Tester and aspiring SDET. Selenium, TestNG, Cucumber BDD, Pytest, Rest Assured, Allure, Maven and Jenkins. B.E. CSE, Knowledge Institute of Technology, Salem.",
      },
      { property: "og:title", content: "Prasanna Venkatesh K — Automation Tester & SDET" },
      {
        property: "og:description",
        content:
          "Automation frameworks in Java and Python — POM, BDD, Data-Driven testing, Rest Assured API automation, Allure reports and Jenkins CI/CD.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ROTATING_ROLES = [
  "Automation Testing",
  "Playwright Testing",
  "Jmeter",
  "API Testing",
  "CI/CD Pipelines",
];

const TESTING_STACK = [
  {
    tone: "accent" as const,
    title: "Web UI Automation",
    icon: "▢",
    items: [
      "Selenium + TestNG + Cucumber BDD",
      "Playwright (JS/TS)",
      "Page Object Model (Java)",
      "Python Selenium without POM",
      "Data-Driven & Keyword-Driven",
    ],
  },
  {
    tone: "blue" as const,
    title: "API & Service Testing",
    icon: "◯",
    items: [
      "Rest Assured (Java)",
      "Pytest functional suites",
      "Postman automation",
      "JSON schema validation",
    ],
  },
  {
    tone: "muted" as const,
    title: "Dev Support",
    icon: "◇",
    items: [
      "Java · Core & OOP",
      "React · Node.js · Express",
      "MySQL · REST APIs",
      "Git · GitHub workflows",
    ],
  },
];

const PROJECTS = [
  {
    tag: "JAVA · TESTNG · BDD · POM",
    sub: "Maven · Allure · Jenkins",
    title: "End-to-End Automation Project",
    blurb:
      "Selenium + TestNG + Cucumber BDD framework with Page Object Model, Data-Driven testing, Log4j logger, Allure + Extent Spark reports, Maven build and Jenkins CI integration.",
    img: projectUi,
    accent: "accent" as const,
    href: "https://github.com/TAMILKUMAR0027/Automation-Project",
  },
  {
    tag: "PYTHON · PYTEST",
    sub: "No POM · Allure · Jenkins",
    title: "Pytest Automation Project",
    blurb:
      "Pytest-based UI automation suite (without POM) with structured logger, Allure reporting, GitHub source control and Jenkins pipeline execution for fast regression cycles.",
    img: projectApi,
    accent: "blue" as const,
    href: "https://github.com/TAMILKUMAR0027/Pytest_Automation_Project",
  },
  {
    tag: "JAVA · REST ASSURED · TESTNG",
    sub: "Maven · Allure · DDT",
    title: "API Testing Framework",
    blurb:
      "Rest Assured + TestNG API automation in Java with Data-Driven testing, Allure reporting and Maven build — covering positive, negative and schema validation flows.",
    img: projectApi,
    accent: "accent" as const,
    href: "https://github.com/14-Prasanna/API-Testing",
  },
];

const JOURNEY = [
  { year: "Until 2021", title: "The Boys Hr Secoundary School", note: "12th" },
  { year: "2022 – 2026", title: "B.E. CSE", note: "Knowledge Institute of Technology, Salem" },
  { year: "2024 – 2025", title: "SDET Training", note: "Selenium · Cucumber · Rest Assured" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Journey />
      <Projects />
      <GithubShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

/* -------------------- NAVBAR -------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Stack" },
    { href: "#journey", label: "Journey" },
    { href: "#projects", label: "Projects" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="font-mono font-medium tracking-tighter text-xs uppercase">
            sdet_portfolio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest uppercase text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-xs font-mono uppercase text-muted-foreground"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING_ROLES.length), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section id="top" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-70" />
              <span className="relative rounded-full h-2 w-2 bg-accent" />
            </span>
            All tests passing
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Prasanna Venkatesh K —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-test-blue">
              aspiring SDET
            </span>
          </h1>

          <div className="mt-6 h-7 font-mono text-sm text-muted-foreground">
            <span className="text-foreground">$ focus:</span>{" "}
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-accent"
            >
              {ROTATING_ROLES[idx]}
            </motion.span>
            <span className="cursor-blink text-accent">_</span>
          </div>

          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Automation Tester building reliable frameworks with{" "}
            <span className="text-foreground">Selenium, TestNG, Cucumber BDD, Pytest,
            Rest Assured, Allure, Maven and Jenkins</span> — backed by working
            full-stack skills in Java, React, Node.js, Express and MySQL.
            <br />
            <span className="text-xs font-mono text-muted-foreground/80 mt-2 inline-block">
              B.E. CSE · Knowledge Institute of Technology, Salem
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-lg hover:brightness-110 transition-all text-sm"
            >
              View frameworks
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-surface border border-border-strong text-foreground font-semibold rounded-lg hover:bg-surface-elevated transition-all text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -top-10 -right-10 size-48 bg-accent/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-12 -left-12 size-56 bg-test-blue/15 blur-3xl rounded-full" />
          <div className="relative rounded-2xl border border-border-strong bg-surface shadow-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-elevated/60">
              <span className="size-2.5 rounded-full bg-fail/80" />
              <span className="size-2.5 rounded-full bg-warn/80" />
              <span className="size-2.5 rounded-full bg-accent/80" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                execution_dashboard.runner
              </span>
            </div>
            <img
              src={heroDashboard}
              alt="SDET test execution dashboard with passing pipeline nodes"
              width={1280}
              height={960}
              className="w-full h-auto block"
            />
          </div>

          {/* Floating chips */}
          <FloatingChip className="absolute -left-6 top-10" delay={0.2}>
            <span className="text-accent">✓</span> 248 / 248 passed
          </FloatingChip>
          <FloatingChip className="absolute -right-4 bottom-16" delay={0.5}>
            <span className="text-test-blue">GET</span> /api/orders · 200
          </FloatingChip>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-elevated border border-border-strong shadow-card font-mono text-[11px] ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <SectionLabel index="01" label="About" />
        <p className="mt-8 text-2xl md:text-3xl leading-snug tracking-tight">
          I'm <span className="text-accent">Prasanna Venkatesh K</span>, an
          Automation Tester and aspiring SDET focused on UI and API testing.
          I build reliable automation frameworks, catch defects early, and ship
          quality with <span className="text-foreground">Selenium, TestNG,
          Cucumber BDD, Pytest, Rest Assured, Allure and Jenkins</span>.
        </p>
        <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
          Currently pursuing B.E. Computer Science & Engineering at Knowledge
          Institute of Technology, Salem. I also bring working knowledge of
          Java, React, Node.js, Express, MySQL, Git and GitHub — useful for
          reading source under test and integrating quality gates into the
          delivery pipeline.
        </p>
      </div>
    </section>
  );
}

/* -------------------- STACK -------------------- */
function Stack() {
  return (
    <section id="stack" className="px-6 py-24 bg-surface/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="02" label="Core testing stack" />
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
          Primary testing capability, grouped by domain.
        </h2>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTING_STACK.map((s) => (
            <StackCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StackCard({
  title,
  icon,
  items,
  tone,
}: {
  title: string;
  icon: string;
  items: string[];
  tone: "accent" | "blue" | "muted";
}) {
  const toneRing =
    tone === "accent"
      ? "hover:border-accent/50"
      : tone === "blue"
        ? "hover:border-test-blue/50"
        : "hover:border-border-strong";
  const toneText =
    tone === "accent"
      ? "text-accent"
      : tone === "blue"
        ? "text-test-blue"
        : "text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={`p-7 bg-surface border border-border rounded-xl transition-colors ${toneRing}`}
    >
      <div className={`size-10 rounded-md border border-current ${toneText} grid place-items-center mb-6`}>
        <span className="text-lg leading-none">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2.5 text-sm text-muted-foreground font-mono">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className={toneText}>+</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* -------------------- JOURNEY (GSAP pinned road) -------------------- */
function Journey() {
  const wrap = useRef<HTMLDivElement>(null);
  const road = useRef<HTMLDivElement>(null);
  const vehicle = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!wrap.current || !road.current || !vehicle.current) return;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const stops = gsap.utils.toArray<HTMLElement>(".journey-stop");

      // Animate vehicle along the road on scroll
      gsap.fromTo(
        vehicle.current,
        { left: "0%" },
        {
          left: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );

      // Reveal each stop card
      stops.forEach((s, i) => {
        gsap.fromTo(
          s,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.05,
            scrollTrigger: { trigger: s, start: "top 85%" },
          },
        );
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="journey" ref={wrap} className="px-6 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="03" label="Education journey" />
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
          The road from foundations to automation engineering.
        </h2>

        <div className="relative mt-24 pb-12">
          {/* Road */}
          <div
            ref={road}
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent -translate-y-1/2"
          >
            <div className="absolute inset-0 flex">
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className="flex-1 h-px border-t border-dashed border-border"
                />
              ))}
            </div>
          </div>

          {/* Vehicle */}
          <div
            ref={vehicle}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
            style={{ left: "0%" }}
          >
            <div className="px-3 py-1.5 bg-accent text-accent-foreground text-[10px] font-mono font-bold rounded-md flex items-center gap-2 shadow-glow-accent whitespace-nowrap">
              <span>QA_CRUISER</span>
              <span className="cursor-blink">_</span>
            </div>
          </div>

          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-6">
            {JOURNEY.map((j, i) => (
              <div
                key={j.title}
                className={`journey-stop flex flex-col items-center gap-5 ${
                  i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-24"
                }`}
              >
                {i % 2 === 0 && <StopCard {...j} />}
                <div
                  className={`size-4 rounded-full border-2 relative z-10 ${
                    j.current
                      ? "bg-accent border-background shadow-glow-accent"
                      : "bg-background border-border-strong"
                  }`}
                />
                {i % 2 === 1 && <StopCard {...j} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StopCard({
  year,
  title,
  note,
  current,
}: {
  year: string;
  title: string;
  note: string;
  current?: boolean;
}) {
  return (
    <div
      className={`p-4 bg-surface border rounded-lg text-center w-44 ${
        current ? "border-accent/50 shadow-glow-accent" : "border-border"
      }`}
    >
      <span className="text-[10px] font-mono text-accent block mb-1.5 tracking-widest uppercase">
        {year}
      </span>
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{note}</p>
    </div>
  );
}

/* -------------------- PROJECTS -------------------- */
function Projects() {
  const filters = ["All", "Automation Testing", "API Testing"];
  const [active, setActive] = useState("All");

  return (
    <section id="projects" className="px-6 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionLabel index="04" label="Framework showcases" tone="blue" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Real automation work, not slide decks.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-widest border transition-colors ${
                  active === f
                    ? "bg-accent/10 border-accent/40 text-accent"
                    : "bg-surface border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  tag,
  sub,
  title,
  blurb,
  img,
  accent,
  href,
}: {
  tag: string;
  sub: string;
  title: string;
  blurb: string;
  img: string;
  accent: "accent" | "blue";
  href: string;
}) {
  const accentText = accent === "accent" ? "text-accent" : "text-test-blue";
  const accentBorder = accent === "accent" ? "hover:border-accent/50" : "hover:border-test-blue/50";
  const accentBg = accent === "accent" ? "bg-accent/10 border-accent/20" : "bg-test-blue/10 border-test-blue/20";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className={`group bg-surface border border-border rounded-2xl overflow-hidden transition-all ${accentBorder}`}
    >
      <div className="relative aspect-video bg-background overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={1280}
          height={720}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>
      <div className="p-7">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${accentBg} ${accentText}`}>
            {tag}
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-elevated text-muted-foreground text-[10px] font-mono border border-border">
            {sub}
          </span>
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{blurb}</p>
        <span className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest ${accentText} group-hover:gap-3 transition-all`}>
          Explore repository <span className="text-base leading-none">→</span>
        </span>
      </div>
    </motion.a>
  );
}

/* -------------------- GITHUB -------------------- */
function GithubShowcase() {
  const repos = [
    {
      name: "Automation-Project",
      lang: "Java",
      desc: "Selenium + TestNG + Cucumber BDD with POM, DDT, Log4j, Allure + Extent Spark, Maven, Jenkins.",
      href: "https://github.com/TAMILKUMAR0027/Automation-Project",
    },
    {
      name: "Pytest_Automation_Project",
      lang: "Python",
      desc: "Pytest automation (no POM) with logger, Allure reports, GitHub and Jenkins pipeline.",
      href: "https://github.com/TAMILKUMAR0027/Pytest_Automation_Project",
    },
    {
      name: "API-Testing",
      lang: "Java",
      desc: "Rest Assured + TestNG API framework with DDT, Allure reports and Maven build.",
      href: "https://github.com/14-Prasanna/API-Testing",
    },
  ];

  return (
    <section id="github" className="px-6 py-24 bg-surface/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="05" label="GitHub evidence" />
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
          Pinned repositories — proof of execution, not just claims.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {repos.map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-surface border border-border rounded-xl hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">
                  {r.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {r.lang}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                View on github →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel index="06" label="Contact" center />
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Initialize connection</h2>
          <p className="mt-3 text-muted-foreground">
            Ready to discuss framework architecture or a QA opening?
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 2400);
          }}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Sender_Name" type="text" />
            <Field label="Sender_Email" type="email" />
          </div>
          <Field label="Subject" type="text" />
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest ml-1">
              Payload_Message
            </label>
            <textarea
              rows={5}
              required
              className="w-full px-4 py-3.5 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent text-foreground transition-colors"
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:brightness-110 transition-all font-mono text-xs uppercase tracking-widest"
          >
            {sent ? "✓ Transmitted" : "Transmit_message"}
          </motion.button>
        </form>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
          <a href="https://github.com/14-Prasanna" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub.profile</a>
          <a href="https://www.linkedin.com/in/prasanna-venkatesh-k" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn.in</a>
          <a href="mailto:prasannavenkatesh.k@example.com" className="hover:text-accent transition-colors">prasannavenkatesh.k@email</a>
          <a href="#" className="hover:text-accent transition-colors">Resume.pdf</a>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest ml-1">
        {label}
      </label>
      <input
        required
        type={type}
        className="w-full px-4 py-3.5 bg-surface border border-border rounded-lg focus:outline-none focus:border-accent text-foreground transition-colors"
      />
    </div>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        <span>© {new Date().getFullYear()} Prasanna Venkatesh K · All checks passed</span>
        <span>Built with React · GSAP · Motion</span>
      </div>
    </footer>
  );
}

/* -------------------- SHARED -------------------- */
function SectionLabel({
  index,
  label,
  tone = "accent",
  center = false,
}: {
  index: string;
  label: string;
  tone?: "accent" | "blue";
  center?: boolean;
}) {
  const t = tone === "accent" ? "text-accent" : "text-test-blue";
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className={`font-mono text-[10px] uppercase tracking-[0.3em] ${t}`}>
        {index}
      </span>
      <span className="h-px w-8 bg-border-strong" />
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
