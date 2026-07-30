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
  { label: "Proyek Selesai", value: "8+" },
  { label: "GitHub Commits", value: "200+" },
  { label: "Teknologi", value: "15+" },
];

const roles = [
  "Web Developer",
  "AI Enthusiast",
  "Backend",
  "Frontend",
  "PHP Developer",
  "Mahasiswa",
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind", "TypeScript", "Vite"],
  },
  {
    title: "Backend",
    items: ["PHP", "Python", "FastAPI", "Node.js", "Supabase"],
  },
  {
    title: "AI & ML",
    items: ["Python", "Fuzzy Logic", "CNN", "Jupyter", "Pandas"],
  },
  {
    title: "Infra",
    items: ["Docker", "Linux", "GitHub Actions", "VPS", "Nginx"],
  },
];

const projects = [
  {
    category: "Web",
    title: "QRkuy Generator",
    status: "Live",
    slug: "qrkuy",
    desc: "QR code generator brutalist — kustom warna, gradient, dot style rounded/circle/square, logo tengah, PWA. Color-blind safe palette, riwayat 20 item.",
    features: ["Gradient QR", "Frame brutalist", "Color-blind safe", "PWA offline", "Download PNG"],
    tech: ["React", "TypeScript", "Tailwind v4", "shadcn/ui", "Vite"],
    liveUrl: "https://qrkuyut.vercel.app",
    screenshot: "/screenshots/qrkuy.png",
  },
  {
    category: "Web",
    title: "Presensi Magang",
    status: "Live",
    slug: "presensi-bridaa",
    desc: "Aplikasi absensi magang berbasis web untuk memantau kehadiran, jam kerja, dan aktivitas peserta magang secara realtime.",
    features: ["Absensi realtime", "Laporan magang", "Multi-role access"],
    tech: ["Next.js", "JavaScript", "Tailwind", "Vercel"],
    liveUrl: null,
    screenshot: null,
  },
  {
    category: "Web",
    title: "Puzzlefoto (Vision Puzzle)",
    status: "Live",
    slug: "puzzlefoto",
    desc: "AI-powered hand tracking puzzle game. Ambil foto, solve puzzle pake gesture tangan. Computer vision + AI background removal.",
    features: ["AI Photo Booth", "Hand gesture control", "AI background removal", "Dynamic puzzle"],
    tech: ["Next.js", "React", "TypeScript", "MediaPipe", "TensorFlow.js"],
    liveUrl: "https://puzzlefoto.my.id",
    screenshot: "/screenshots/puzzlefoto.png",
  },
  {
    category: "Web",
    title: "PalettePilot",
    status: "Live",
    slug: "palettepilot",
    desc: "Color palette generator dengan harmony modes (monochromatic, analogous, complementary, triadic). Export CSS/Tailwind, WCAG checker, color blind simulator.",
    features: ["Harmony analysis", "AI suggestions", "WCAG checker", "Export CSS/Tailwind"],
    tech: ["React", "TypeScript", "Tailwind v4", "Framer Motion"],
    liveUrl: "https://palettepilot.vercel.app",
    screenshot: "/screenshots/palettepilot.png",
  },
  {
    category: "Game",
    title: "Yuna's Quest",
    status: "Live",
    slug: "yunas-quest",
    desc: "2D Pixel RPG with procedural art, D-Pad controls, turn-based combat, NPC interaction. Single-file HTML prototype.",
    features: ["Procedural pixel art", "D-Pad mobile", "Turn-based combat", "NPC dialog"],
    tech: ["HTML5 Canvas", "JavaScript", "Procedural Art"],
    liveUrl: "https://yunas-quest.vercel.app",
    screenshot: "/screenshots/yunas-quest.png",
  },
  {
    category: "Game",
    title: "World of Hernia",
    status: "Live",
    slug: "world-of-hernia",
    desc: "2D Pixel RPG — Next.js + MongoDB. Pixel art assets dari OpenGameArt. Turn-based combat, quest system, level-up.",
    features: ["MongoDB Atlas", "Pixel art OGA", "Quest system", "Level-up"],
    tech: ["Next.js", "MongoDB", "TypeScript", "Tailwind"],
    liveUrl: "https://world-of-hernia.vercel.app",
    screenshot: "/screenshots/world-of-hernia.png",
  },
  {
    category: "Game",
    title: "2DHTML RPG",
    status: "Live",
    slug: "2dhtml",
    desc: "World of Hernia — HTML prototype dengan pixel art asli. Map interaktif, D-Pad, combat, 5 NPC, 4 enemy types. Single file HTML/CSS/JS.",
    features: ["Pixel art sprites", "5 NPCs", "4 enemy types", "Combat system"],
    tech: ["HTML5 Canvas", "CSS", "JavaScript"],
    liveUrl: null,
    screenshot: "/screenshots/2dhtml.png",
  },
  {
    category: "AI",
    title: "Love Prompt Battle (Oekod)",
    status: "Side Project",
    slug: "oekod",
    desc: "Web interaktif untuk pasangan dengan pertanyaan acak, dua versi jawaban (cewe/cowo), dan penyimpanan hasil ke Supabase. UI neobrutalism.",
    features: ["Acak pertanyaan", "Dua versi jawaban", "Supabase storage"],
    tech: ["React", "Vite", "TypeScript", "Supabase"],
    liveUrl: null,
    screenshot: null,
  },
  {
    category: "AI",
    title: "Fuzzy Logic System",
    status: "Kuliah",
    slug: "fuzzy-logic",
    desc: "Implementasi lengkap sistem fuzzy logic: Mamdani, Sugeno, dan Tsukamoto untuk pengambilan keputusan berbasis aturan fuzzy.",
    features: ["Mamdani FIS", "Sugeno FIS", "Tsukamoto FIS", "ANFIS"],
    tech: ["Python", "Jupyter", "NumPy", "Scikit-learn"],
    liveUrl: null,
    screenshot: null,
  },
  {
    category: "AI",
    title: "Face Recognition CNN",
    status: "Kuliah",
    slug: "face-recognition-cnn",
    desc: "Face recognition menggunakan Convolutional Neural Network. Bagian dari praktikum kecerdasan buatan dengan dataset wajah.",
    features: ["CNN architecture", "Image processing", "Classification"],
    tech: ["Python", "TensorFlow", "OpenCV", "Jupyter"],
    liveUrl: null,
    screenshot: null,
  },
  {
    category: "ML",
    title: "ML API Deployment",
    status: "Deployed",
    slug: "ml-api-deployment",
    desc: "API prediksi berbasis linear regression untuk dataset healthcare. Model dilatih dan dideploy dengan Flask.",
    features: ["REST API", "Model prediction", "Healthcare dataset"],
    tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
    liveUrl: null,
    screenshot: null,
  },
  {
    category: "Web",
    title: "Chef AI",
    status: "Side Project",
    slug: "chef-ai",
    desc: "Aplikasi asisten resep masakan berbasis AI yang membantu pengguna menemukan resep berdasarkan bahan yang tersedia.",
    features: ["Resep otomatis", "Filter bahan", "Interaktif UI"],
    tech: ["React", "TypeScript", "AI API", "Tailwind"],
    liveUrl: null,
    screenshot: null,
  },
];

const experiences = [
  {
    role: "Mahasiswa Teknik Informatika",
    place: "Universitas Semarang",
    period: "2022 — 2025",
    summary: "Mempelajari pengembangan web, kecerdasan buatan, dan pemrograman. Aktif mengerjakan proyek praktikum dan tugas akhir.",
  },
  {
    role: "Web Developer (Freelance)",
    place: "Berbagai Proyek",
    period: "2024 — Sekarang",
    summary: "Mengerjakan proyek pengembangan aplikasi web, sistem absensi, dan prototyping aplikasi berbasis Next.js dan PHP.",
  },
];

const certificates = [
  "Web Development (Dicoding)",
  "Machine Learning",
  "Cloud Computing",
];

const blog = [
  { title: "Cara Kerja Fuzzy Logic", category: "AI", time: "5 min" },
  { title: "Deploy ML Model gratis", category: "Engineering", time: "7 min" },
  { title: "Tips React untuk Pemula", category: "Web", time: "6 min" },
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
            <div className="brutal-tag mb-6 inline-flex">Web Developer — AI Enthusiast</div>
            <h1 className="text-5xl font-black leading-tight tracking-tighter uppercase md:text-7xl">
              Rangga
              <br />
              Figo Hidayat
            </h1>
            <div className="brutal-line w-32 my-6"></div>
            <p className="max-w-xl text-base text-[#888] uppercase tracking-widest text-sm">
              Mahasiswa Teknik Informatika — Universitas Semarang
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
                  { icon: Code2, title: "VSCode", sub: "Coding daily" },
                  { icon: Terminal, title: "zsh", sub: "Linux + Docker" },
                  { icon: GitGraph, title: "git log", sub: "200+ commits" },
                  { icon: Brain, title: "AI Lab", sub: "Fuzzy + CNN" },
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
                <p><span className="text-[#888]">$</span> npm run dev</p>
                <p className="mt-1"><span className="text-[#888]">$</span> python3 fuzzy_mamdani.py</p>
                <p className="mt-1 text-[#e0e0e0]">✓ Sistem siap</p>
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
                    <div className="mb-5 h-32 border-[3px] border-[#222] bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
                      {project.screenshot ? (
                        <img src={project.screenshot} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-[#333] text-xs uppercase tracking-widest">Preview</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span key={tech} className="brutal-tag text-[10px]">{tech}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a href={`https://github.com/ranggacey/${project.slug}`} target="_blank" rel="noopener" className="brutal-button bg-[#111] text-[#e0e0e0] px-4 py-2 text-[10px] no-underline">GitHub</a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener" className="brutal-button bg-[#1a3a2a] text-[#7f7] px-4 py-2 text-[10px] no-underline">Live Demo</a>
                      )}
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
            {["Repositories: 20+", "Commit Activity: Medium", "Top Language: JavaScript", "Focus: Web & AI"].map((item) => (
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
            <p className="mt-3 text-sm text-[#666]">Mahasiswa TI yang tertarik di web development, AI, dan backend.</p>
            <div className="mt-6 space-y-3 text-xs text-[#888]">
              <p className="flex items-center gap-2"><Mail className="h-3 w-3 text-[#e0e0e0]" /> ranggafigo@email.com</p>
              <p className="flex items-center gap-2"><Globe className="h-3 w-3 text-[#e0e0e0]" /> linkedin.com/in/ranggacey</p>
              <p className="flex items-center gap-2"><GitGraph className="h-3 w-3 text-[#e0e0e0]" /> github.com/ranggacey</p>
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
            <span>Build something everyday.</span>
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
