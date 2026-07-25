"use client";

import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Bot,
  Brain,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  GitGraph,
  Layers,
  Globe,
  Mail,
  MessageCircle,
  Server,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { useEffect } from "react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stats = [
  { label: "Tahun Belajar", value: "3+" },
  { label: "Proyek Selesai", value: "15+" },
  { label: "GitHub Commits", value: "500+" },
  { label: "Teknologi", value: "20+" },
];

const roles = [
  "Software Engineer",
  "AI Engineer",
  "Backend",
  "Frontend",
  "DevOps",
  "Automation",
];

const stackGroups = [
  {
    title: "AI",
    items: ["Python", "FastAPI", "LangChain", "OpenAI", "MCP"],
  },
  {
    title: "Full Stack",
    items: ["Next.js", "React", "Tailwind", "TypeScript", "Node.js"],
  },
  {
    title: "Infra",
    items: ["Docker", "Linux", "GitHub Actions", "VPS", "Nginx"],
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },
];

const projects = [
  {
    category: "AI",
    title: "Platform Dukungan Agentic",
    status: "Produksi",
    desc: "Workspace dukungan multi-agen dengan memori, retrieval, dan pipeline aksi otomatis.",
    features: ["Orkestrasi intent", "Workflow otonom", "Analitik realtime"],
    tech: ["Next.js", "FastAPI", "LangChain", "Redis"],
  },
  {
    category: "Automation",
    title: "Engine Automasi Ops",
    status: "Scaling",
    desc: "Sistem automasi berbasis event untuk deployment, observability, dan respons insiden.",
    features: ["Intelijensi CI/CD", "Pemeriksaan kebijakan", "Job self-healing"],
    tech: ["Node.js", "Docker", "GitHub Actions", "PostgreSQL"],
  },
  {
    category: "Web",
    title: "Core Commerce Premium",
    status: "Live",
    desc: "Platform full-stack berkinerja tinggi dengan pencarian, rekomendasi, dan checkout aman.",
    features: ["Arsitektur headless", "Rekomendasi pintar", "Infrastruktur audit-ready"],
    tech: ["React", "TypeScript", "Redis", "Nginx"],
  },
];

const experiences = [
  {
    role: "Freelance Developer",
    place: "Berbagai Proyek",
    period: "2023 — Sekarang",
    summary: "Mengerjakan proyek web development dan automation untuk berbagai klien.",
  },
  {
    role: "Junior Developer",
    place: "Startup Lokal",
    period: "2022 — 2023",
    summary: "Membangun aplikasi web dan mempelajari teknologi modern dalam tim kecil.",
  },
];

const certificates = [
  "Web Development",
  "Cloud Computing",
  "System Design",
];

const blog = [
  { title: "Merancang AI Agent yang Handal", category: "AI", time: "8 min" },
  { title: "Interface Neo-Brutal", category: "Design", time: "6 min" },
  { title: "CI/CD Tim Berkecepatan Tinggi", category: "Engineering", time: "10 min" },
];

function Section({ id, title, icon: Icon, children }: { id: string; title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section id={id} className="section-shell mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="mb-2 flex items-center gap-3">
          <Icon className="h-4 w-4 text-[#888]" />
          <h2 className="text-4xl font-black tracking-tight uppercase md:text-5xl">{title}</h2>
        </div>
        <div className="brutal-line w-24 mb-8"></div>
      </motion.div>
      {children}
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.25 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#0a0a0a] text-[#f0f0f0]">
      {/* Scanline overlay */}
      <div className="scanlines" />

      {/* Scroll progress indicator */}
      <motion.div className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-[#e0e0e0]" style={{ scaleX: progress }} />

      <div className="grid-bg" />
      <div className="particles" />
      <div className="spotlight" />

      {/* ===== HERO ===== */}
      <section className="section-shell relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-22 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="brutal-tag mb-6 inline-flex">Web Developer</div>
            <h1 className="text-5xl font-black leading-tight tracking-tighter uppercase md:text-7xl">
              Rangga
              <br />
              Figo Hidayat
            </h1>
            <div className="brutal-line w-32 my-6"></div>
            <p className="max-w-xl text-base text-[#888] uppercase tracking-widest text-sm">
              Mahasiswa Universitas Semarang — AI, Web, Automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="brutal-button inline-flex items-center gap-2 bg-[#e0e0e0] text-black px-6 py-3 text-sm no-underline">
                Lihat Proyek <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="brutal-button inline-flex items-center gap-2 bg-[#111] text-[#e0e0e0] px-6 py-3 text-sm no-underline">
                Hubungi Saya
              </a>
            </div>
          </motion.div>

          {/* Terminal card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="brutal-card p-0"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b-[3px] border-[#333] px-5 py-3 bg-[#0d0d0d]">
              <span className="h-3 w-3 rounded-full bg-[#555]" />
              <span className="h-3 w-3 rounded-full bg-[#555]" />
              <span className="h-3 w-3 rounded-full bg-[#555]" />
              <span className="ml-3 text-xs text-[#555] uppercase tracking-widest">Terminal — ~/ranggacey</span>
            </div>
            {/* Terminal content */}
            <div className="p-5 space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { icon: Code2, title: "VSCode", sub: "Coding realtime" },
                  { icon: Terminal, title: "zsh", sub: "Linux + Docker" },
                  { icon: GitGraph, title: "git log", sub: "500+ commits" },
                  { icon: Zap, title: "AI Agent", sub: "Arsitektur otonom" },
                ].map((item) => (
                  <div key={item.title} className="brutal-card-white p-4">
                    <item.icon className="mb-2 h-4 w-4 text-[#e0e0e0]" />
                    <p className="font-bold text-sm uppercase tracking-wider">{item.title}</p>
                    <p className="text-xs text-[#666]">{item.sub}</p>
                  </div>
                ))}
              </div>
              {/* Terminal output */}
              <div className="border-[3px] border-[#222] p-4 font-mono text-xs text-[#666] bg-black">
                <p><span className="text-[#888]">$</span> docker compose up -d</p>
                <p className="mt-1"><span className="text-[#888]">$</span> npx agents run --mode prod</p>
                <p className="mt-1 text-[#e0e0e0]">✓ Sistem operasional</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ABOUT ===== */}
      <Section id="about" title="Tentang" icon={Sparkles}>
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Photo placeholder */}
          <div className="brutal-card flex items-center justify-center min-h-[320px]">
            <span className="text-[#444] uppercase text-xs tracking-widest">[ FOTO ]</span>
          </div>
          <div className="grid gap-6">
            {/* Roles */}
            <div className="brutal-card p-5">
              <div className="grid gap-2 sm:grid-cols-2">
                {roles.map((item) => (
                  <div key={item} className="border-[3px] border-[#222] bg-black px-4 py-3 font-bold text-sm uppercase tracking-wider">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div key={stat.label} whileHover={{ y: -4 }} className="brutal-card p-5">
                  <p className="text-3xl font-black text-[#e0e0e0]">{stat.value}</p>
                  <p className="text-xs text-[#666] uppercase tracking-widest mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* ===== TECH STACK ===== */}
      <Section id="stack" title="Tech Stack" icon={Cpu}>
        <div className="grid gap-5 md:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.title} className="brutal-card p-6">
              <h3 className="mb-5 text-lg font-black uppercase tracking-widest">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div key={item} className="brutal-tag">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* ===== PROJECTS ===== */}
      <Section id="projects" title="Proyek" icon={Layers}>
        <div className="grid gap-6">
          {projects.map((project) => (
            <motion.div key={project.title} whileHover={{ y: -4 }}>
              <div className="brutal-card p-0">
                <div className="grid lg:grid-cols-[1.2fr_1fr]">
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="brutal-tag brutal-tag-accent text-[10px]">{project.category}</span>
                      <span className="brutal-tag text-[10px]">{project.status}</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{project.title}</h3>
                    <p className="mt-2 text-sm text-[#666]">{project.desc}</p>
                    <ul className="mt-4 space-y-2 text-xs text-[#888]">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <BadgeCheck className="h-3 w-3 text-[#e0e0e0]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Side panel */}
                  <div className="border-t-[3px] lg:border-t-0 lg:border-l-[3px] border-[#222] bg-black p-6">
                    <div className="mb-5 h-32 border-[3px] border-[#222] bg-[#0a0a0a] flex items-center justify-center">
                      <span className="text-[#333] text-xs uppercase tracking-widest">Preview</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="brutal-tag text-[10px]">{tech}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href="#" className="brutal-button bg-[#111] text-[#e0e0e0] px-4 py-2 text-[10px] no-underline">GitHub</a>
                      <a href="#" className="brutal-button bg-[#111] text-[#e0e0e0] px-4 py-2 text-[10px] no-underline">Demo</a>
                      <a href="#" className="brutal-button bg-[#e0e0e0] text-black px-4 py-2 text-[10px] no-underline">Studi Kasus</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* ===== EXPERIENCE ===== */}
      <Section id="experience" title="Pengalaman" icon={ChartNoAxesCombined}>
        <div className="relative ml-2">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#333]" />
          {experiences.map((item) => (
            <motion.div key={item.role} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mb-6 pl-8">
              {/* Dot */}
              <span className="absolute -left-[7px] top-7 h-[14px] w-[14px] bg-[#e0e0e0] border-[3px] border-[#333]" />
              <div className="brutal-card p-5">
                <p className="text-xs text-[#555] uppercase tracking-widest">{item.period}</p>
                <h3 className="mt-1 text-xl font-black uppercase">{item.role}</h3>
                <p className="text-xs text-[#888] uppercase tracking-widest">{item.place}</p>
                <p className="mt-3 text-sm text-[#666]">{item.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* ===== CERTIFICATES ===== */}
      <Section id="certificates" title="Sertifikat" icon={BadgeCheck}>
        <div className="grid gap-4 md:grid-cols-3">
          {certificates.map((cert) => (
            <motion.div key={cert} whileHover={{ y: -4 }}>
              <div className="brutal-card p-5">
                <div className="mb-4 h-32 border-[3px] border-[#222] bg-black flex items-center justify-center">
                  <span className="text-[#333] text-xs uppercase tracking-widest">[ SERTIFIKAT ]</span>
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wider">{cert}</h3>
                <p className="text-xs text-[#555] mt-1">Issuer</p>
                <button className="brutal-button w-full mt-4 bg-black text-[#e0e0e0] py-2 text-[10px] uppercase">
                  Verify
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* ===== GITHUB ===== */}
      <Section id="github" title="GitHub" icon={GitGraph}>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="brutal-card p-5">
            <h3 className="mb-4 font-bold text-sm uppercase tracking-wider">Contribution Graph</h3>
            <div className="grid grid-cols-12 gap-1.5">
              {Array.from({ length: 84 }).map((_, i) => (
                <div key={i} className={`h-3 ${i % 5 === 0 ? "bg-[#e0e0e0]/60" : "bg-[#1a1a1a]"}`} />
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            {["Repositories: 78", "Commit Activity: High", "Top Language: TypeScript", "Streak: 148 days"].map((item) => (
              <div key={item} className="brutal-card p-4">
                <p className="text-xs text-[#888] uppercase tracking-wider">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* ===== BLOG ===== */}
      <Section id="blog" title="Blog" icon={BookOpen}>
        <div className="grid gap-4 md:grid-cols-3">
          {blog.map((post) => (
            <div key={post.title} className="brutal-card p-5">
              <div className="mb-4 h-24 border-[3px] border-[#222] bg-black flex items-center justify-center">
                <span className="text-[#333] text-[10px] uppercase tracking-widest">[ THUMB ]</span>
              </div>
              <span className="brutal-tag text-[10px]">{post.category}</span>
              <h3 className="mt-3 font-bold text-sm uppercase tracking-wider">{post.title}</h3>
              <p className="mt-1 text-xs text-[#555]">{post.time}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="section-divider" />

      {/* ===== CONTACT ===== */}
      <Section id="contact" title="Kontak" icon={Mail}>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="brutal-card p-6">
            <h3 className="text-3xl font-black uppercase tracking-tight">Let's Build Something.</h3>
            <p className="mt-3 text-sm text-[#666]">Open to kolaborasi AI, consulting, dan high-impact engineering.</p>
            <div className="mt-6 space-y-3 text-xs text-[#888]">
              <p className="flex items-center gap-2"><Mail className="h-3 w-3 text-[#e0e0e0]" /> hello@portogweh.com</p>
              <p className="flex items-center gap-2"><Globe className="h-3 w-3 text-[#e0e0e0]" /> linkedin.com/in/ranggacey</p>
              <p className="flex items-center gap-2"><GitGraph className="h-3 w-3 text-[#e0e0e0]" /> github.com/ranggacey</p>
              <p className="flex items-center gap-2"><MessageCircle className="h-3 w-3 text-[#e0e0e0]" /> @ranggacey</p>
            </div>
            <button className="brutal-button mt-6 bg-black text-[#e0e0e0] px-5 py-3 text-xs inline-flex items-center gap-2 uppercase">
              <Download className="h-3 w-3" /> Resume
            </button>
          </div>
          <form className="brutal-card p-6 space-y-3">
            <div className="border-[3px] border-[#222] bg-black px-4 py-3">
              <input placeholder="Your Name" className="w-full bg-transparent text-sm text-[#e0e0e0] outline-none placeholder:text-[#444]" />
            </div>
            <div className="border-[3px] border-[#222] bg-black px-4 py-3">
              <input type="email" placeholder="Email" className="w-full bg-transparent text-sm text-[#e0e0e0] outline-none placeholder:text-[#444]" />
            </div>
            <div className="border-[3px] border-[#222] bg-black px-4 py-3">
              <textarea placeholder="Your idea..." rows={4} className="w-full bg-transparent text-sm text-[#e0e0e0] outline-none resize-none placeholder:text-[#444]" />
            </div>
            <button type="submit" className="brutal-button w-full bg-[#e0e0e0] text-black py-3 text-sm uppercase font-bold tracking-wider">
              Kirim
            </button>
          </form>
        </div>
      </Section>

      <div className="section-divider" />

      {/* ===== FOOTER ===== */}
      <footer className="section-shell border-t-[3px] border-[#222] bg-[#0a0a0a]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#555] uppercase tracking-widest">
            <Brain className="h-3 w-3 text-[#888]" />
            <span>The future belongs to builders.</span>
          </div>
          <div className="flex items-center gap-2">
            {[GitGraph, Globe, ExternalLink, Cloud, ArrowUpRight].map((Icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ y: -3 }}
                href="#"
                className="brutal-card-white p-2"
              >
                <Icon className="h-3 w-3" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
