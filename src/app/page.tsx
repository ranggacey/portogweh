"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import {
  AtSign,
  ArrowRight,
  Bot,
  Briefcase,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Layers,
  Link2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { ThreeOrb } from "@/components/three-orb";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years Learning", value: "7+" },
  { label: "Projects Completed", value: "54" },
  { label: "GitHub Commits", value: "2.4K" },
  { label: "Technologies", value: "32" },
];

const skillGroups = {
  AI: ["Python", "FastAPI", "LangChain", "OpenAI", "MCP"],
  "Full Stack": ["Next.js", "React", "Tailwind", "TypeScript", "Node.js"],
  Database: ["MongoDB", "PostgreSQL", "Redis"],
  Cloud: ["VPS", "Nginx", "Docker", "GitHub Actions", "CI/CD"],
};

const projects = [
  {
    category: "AI",
    title: "AgentOps Command Center",
    status: "Active",
    tech: ["Next.js", "LangChain", "Docker"],
    description: "Enterprise dashboard for orchestrating autonomous AI agents.",
    features: ["Multi-agent routing", "Prompt observability", "Live deployment lanes"],
  },
  {
    category: "Automation",
    title: "FlowForge Automation",
    status: "Shipped",
    tech: ["Python", "FastAPI", "Redis"],
    description: "Workflow engine automating support, billing, and reporting pipelines.",
    features: ["Event-driven queues", "Audit logs", "Self-healing retries"],
  },
  {
    category: "Web",
    title: "Atlas Commerce OS",
    status: "Beta",
    tech: ["React", "Node.js", "PostgreSQL"],
    description: "Composable commerce stack focused on high conversion and reliability.",
    features: ["Realtime inventory", "A/B experimentation", "Edge caching"],
  },
];

const experiences = [
  { role: "AI Engineer", period: "2024 — Present", detail: "Building production AI agents and autonomous systems." },
  { role: "Full Stack Developer", period: "2022 — 2024", detail: "Shipped SaaS products across web, backend, and cloud." },
  { role: "Automation Specialist", period: "2020 — 2022", detail: "Designed workflow automation and CI/CD modernization." },
];

const certificates = [
  { title: "TensorFlow Developer", issuer: "Google", year: "2025" },
  { title: "AWS Solutions Architect", issuer: "Amazon", year: "2024" },
  { title: "Kubernetes Administrator", issuer: "CNCF", year: "2023" },
];

const articles = [
  { title: "Designing Resilient AI Agents", read: "8 min", category: "AI Systems" },
  { title: "Scaling Next.js for SaaS", read: "6 min", category: "Web Engineering" },
  { title: "CI/CD Strategies That Don’t Break", read: "7 min", category: "DevOps" },
];

function MagneticLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={(event) => {
        if (!ref.current) {
          return;
        }

        const bounds = ref.current.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;
        gsap.to(ref.current, { x, y, duration: 0.25, ease: "power2.out" });
      }}
      onMouseLeave={() => {
        if (!ref.current) {
          return;
        }

        gsap.to(ref.current, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
      }}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const workspaceRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const contributionCells = useMemo(
    () => Array.from({ length: 140 }, (_, i) => ((i * 17) % 100) / 100),
    []
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), 700);
    const workspaceNode = workspaceRef.current;

    const onMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      setCursor({ x: event.clientX, y: event.clientY });
    };

    const onParallax = (event: MouseEvent) => {
      if (!workspaceRef.current) {
        return;
      }

      const bounds = workspaceRef.current.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;
      gsap.to(workspaceRef.current, {
        rotateY: x,
        rotateX: -y,
        y: -8,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    const resetParallax = () => {
      if (!workspaceRef.current) {
        return;
      }

      gsap.to(workspaceRef.current, { rotateY: 0, rotateX: 0, y: 0, duration: 0.5, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove);
    workspaceNode?.addEventListener("mousemove", onParallax);
    workspaceNode?.addEventListener("mouseleave", resetParallax);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("mousemove", onMove);
      workspaceNode?.removeEventListener("mousemove", onParallax);
      workspaceNode?.removeEventListener("mouseleave", resetParallax);
    };
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <motion.div
        className="custom-cursor"
        animate={{ x: cursor.x - 10, y: cursor.y - 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 240px at var(--cursor-x) var(--cursor-y), rgba(79,140,255,0.16), transparent 80%)",
        }}
      />

      {!loaded && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.55, duration: 0.4 }}
        >
          <span>Loading Portfolio</span>
        </motion.div>
      )}

      <div className="grid-bg relative z-10 pb-20">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-100">Rangga Cey</p>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            {["About", "Tech", "Projects", "Experience", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </header>

        <main className="space-y-24 px-6">
          <section className="mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-zinc-400">
                AI Engineer • Full Stack Developer
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-black leading-tight md:text-6xl"
              >
                Building Intelligent Products for the Future.
              </motion.h1>
              <p className="max-w-xl text-lg text-zinc-300">
                I build AI Agents, Full Stack Applications, Automation Systems, and Scalable Web Platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticLink href="#projects" className={buttonVariants({ variant: "default", size: "lg" })}>
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </MagneticLink>
                <MagneticLink href="#contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  Contact Me
                </MagneticLink>
              </div>
            </div>

            <motion.div
              ref={workspaceRef}
              className="floating-card relative overflow-hidden rounded-3xl border-2 border-[#2a2a2a] bg-[#111111] p-6 shadow-[10px_10px_0px_#0a0a0a]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="absolute -right-14 -top-14">
                <ThreeOrb />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-[#2a2a2a] bg-[#161616] px-4 py-3">
                  <span>Developer Workspace</span>
                  <Code2 className="h-5 w-5 text-[#4F8CFF]" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {["Laptop Mockup", "Terminal", "VSCode", "GitHub Graph", "Docker", "AI Nodes", "Server Architecture", "Code Snippets"].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -4, boxShadow: "0 0 0 1px #4F8CFF" }}
                      className="rounded-2xl border border-[#2a2a2a] bg-[#161616] p-3 text-sm text-zinc-300"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <section id="about" className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
            <Card className="h-full min-h-96 bg-gradient-to-b from-[#1a1a1a] to-[#101010]">
              <CardTitle className="text-3xl">About</CardTitle>
              <CardDescription className="mt-3 max-w-md text-base">
                Product-minded engineer blending design precision with AI-first architecture.
              </CardDescription>
              <div className="mt-10 h-64 rounded-2xl border border-[#2a2a2a] bg-[linear-gradient(160deg,#1c1c1c,#111)]" />
            </Card>
            <Card>
              <CardTitle className="text-3xl">Timeline</CardTitle>
              <div className="mt-6 space-y-4">
                {["Software Engineer", "AI Engineer", "Backend", "Frontend", "DevOps", "Automation"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#2a2a2a] bg-[#111111] px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 text-[#4F8CFF]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileInView={{ opacity: [0, 1], y: [14, 0] }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-4"
                  >
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-sm text-zinc-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </section>

          <section id="tech" className="mx-auto w-full max-w-6xl space-y-6">
            <h2 className="text-4xl font-black">Tech Stack Dashboard</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(skillGroups).map(([group, tech]) => (
                <Card key={group} className="space-y-4">
                  <CardTitle>{group}</CardTitle>
                  <div className="flex flex-wrap gap-3">
                    {tech.map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ y: -6, rotateX: 6, rotateY: -6, boxShadow: "0 0 0 1px #4F8CFF, 12px 12px 0 #0b0b0b" }}
                        className="rounded-2xl border-2 border-[#2a2a2a] bg-[#111111] px-4 py-2 text-sm"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="projects" className="mx-auto w-full max-w-6xl space-y-6">
            <h2 className="text-4xl font-black">Selected Projects</h2>
            <div className="grid gap-6">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  whileHover={{ y: -8, rotateX: 2 }}
                  className="glow-card rounded-3xl border-2 border-[#2a2a2a] bg-[#161616] p-6"
                >
                  <div className="grid gap-6 md:grid-cols-5">
                    <div className="md:col-span-2 overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#101010]">
                      <motion.div whileHover={{ scale: 1.05 }} className="h-full min-h-44 w-full bg-[linear-gradient(130deg,#1d1d1d,#0e0e0e)]" />
                    </div>
                    <div className="space-y-4 md:col-span-3">
                      <p className="inline-flex rounded-full border border-[#355ea8] bg-[#4F8CFF]/15 px-3 py-1 text-xs text-[#88b3ff]">
                        {project.status}
                      </p>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-zinc-300">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {[project.category, ...project.tech].map((tag) => (
                          <span key={tag} className="rounded-xl border border-[#2a2a2a] bg-[#111111] px-3 py-1 text-xs text-zinc-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-1 text-sm text-zinc-400">
                        {project.features.map((feature) => (
                          <li key={feature}>• {feature}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <MagneticLink href="#" className={buttonVariants({ variant: "secondary" })}>
                          <GitBranch className="mr-2 h-4 w-4" /> GitHub
                        </MagneticLink>
                        <MagneticLink href="#" className={buttonVariants({ variant: "secondary" })}>
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </MagneticLink>
                        <MagneticLink href="#" className={buttonVariants({ variant: "ghost" })}>
                          Case Study
                        </MagneticLink>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="experience" className="mx-auto w-full max-w-6xl space-y-6">
            <h2 className="text-4xl font-black">Experience</h2>
            <div className="relative space-y-6 border-l-2 border-[#2a2a2a] pl-6">
              <motion.span
                className="absolute left-[-2px] top-0 h-full w-0.5 bg-[#4F8CFF]"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
              />
              {experiences.map((item) => (
                <Card key={item.role} className="relative">
                  <span className="absolute -left-9 top-8 h-4 w-4 rounded-full border-2 border-[#4F8CFF] bg-[#090909]" />
                  <p className="text-sm text-zinc-400">{item.period}</p>
                  <CardTitle className="mt-2">{item.role}</CardTitle>
                  <CardDescription className="mt-2 text-base">{item.detail}</CardDescription>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl space-y-6">
            <h2 className="text-4xl font-black">Certificates</h2>
            <div className="flex snap-x gap-4 overflow-x-auto pb-2">
              {certificates.map((certificate) => (
                <Card key={certificate.title} className="min-w-[280px] snap-start">
                  <CardTitle>{certificate.title}</CardTitle>
                  <CardDescription className="mt-2">{certificate.issuer} • {certificate.year}</CardDescription>
                  <a href="#" className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "mt-4")}>Verification</a>
                </Card>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl space-y-6">
            <h2 className="text-4xl font-black">GitHub Intelligence</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardTitle>Contribution Graph</CardTitle>
                <div className="mt-4 grid grid-cols-20 gap-1">
                  {contributionCells.map((value, index) => (
                    <span
                      key={`${value}-${index}`}
                      className="h-3 rounded-sm"
                      style={{ backgroundColor: `rgba(79, 140, 255, ${0.12 + value * 0.88})` }}
                    />
                  ))}
                </div>
              </Card>
              <Card className="space-y-3">
                <CardTitle>Live Stats</CardTitle>
                {["Pinned Repositories", "Language Distribution", "Commit Activity", "Open Source Impact"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#2a2a2a] bg-[#111111] px-4 py-3 text-zinc-300">
                    {item}
                  </div>
                ))}
              </Card>
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl space-y-6">
            <h2 className="text-4xl font-black">From the Blog</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.title} className="space-y-4">
                  <div className="h-32 rounded-2xl border border-[#2a2a2a] bg-[#101010]" />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#4F8CFF]">{article.category}</p>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.read} read</CardDescription>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto w-full max-w-6xl">
            <Card className="space-y-8 p-8 md:p-10">
              <h2 className="text-4xl font-black">Let&apos;s Build Something Extraordinary.</h2>
              <form className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Name"
                  className="rounded-2xl border-2 border-[#2a2a2a] bg-[#111111] px-4 py-3 outline-none focus:border-[#4F8CFF]"
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="rounded-2xl border-2 border-[#2a2a2a] bg-[#111111] px-4 py-3 outline-none focus:border-[#4F8CFF]"
                />
                <textarea
                  placeholder="Tell me about your idea"
                  className="min-h-32 rounded-2xl border-2 border-[#2a2a2a] bg-[#111111] px-4 py-3 outline-none focus:border-[#4F8CFF] md:col-span-2"
                />
                <Button className="md:col-span-2" size="lg">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <div className="flex flex-wrap gap-3">
                <MagneticLink href="mailto:hello@example.com" className={buttonVariants({ variant: "secondary" })}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </MagneticLink>
                <MagneticLink href="#" className={buttonVariants({ variant: "secondary" })}>
                  <Link2 className="mr-2 h-4 w-4" /> LinkedIn
                </MagneticLink>
                <MagneticLink href="#" className={buttonVariants({ variant: "secondary" })}>
                  <GitBranch className="mr-2 h-4 w-4" /> GitHub
                </MagneticLink>
                <MagneticLink href="#" className={buttonVariants({ variant: "secondary" })}>
                  <MessageCircle className="mr-2 h-4 w-4" /> Telegram
                </MagneticLink>
                <MagneticLink href="#" className={buttonVariants({ variant: "ghost" })}>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </MagneticLink>
              </div>
            </Card>
          </section>
        </main>

        <footer className="mx-auto mt-20 flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-[#2a2a2a] px-6 py-8 text-sm text-zinc-400">
          <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            RG
          </motion.p>
          <p>&ldquo;The future belongs to builders.&rdquo;</p>
          <div className="flex gap-3">
            <Bot className="h-4 w-4" />
            <AtSign className="h-4 w-4" />
            <Cpu className="h-4 w-4" />
            <Database className="h-4 w-4" />
            <Cloud className="h-4 w-4" />
            <Briefcase className="h-4 w-4" />
            <Layers className="h-4 w-4" />
          </div>
        </footer>
      </div>
    </>
  );
}
