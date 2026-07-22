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
} from "lucide-react";
import { useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stats = [
  { label: "Years Learning", value: "6+" },
  { label: "Projects Completed", value: "42" },
  { label: "GitHub Commits", value: "2.5K+" },
  { label: "Technologies", value: "30+" },
];

const timeline = [
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
    items: ["Python", "FastAPI", "LangChain", "OpenAI", "MCP", "Docker", "Linux", "GitHub Actions"],
  },
  {
    title: "Full Stack",
    items: ["Next.js", "React", "Tailwind", "TypeScript", "Node.js"],
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud",
    items: ["VPS", "Nginx", "Docker", "CI/CD"],
  },
];

const projects = [
  {
    category: "AI",
    title: "Agentic Support Platform",
    status: "Production",
    desc: "Multi-agent support workspace with memory, retrieval and automated action pipelines.",
    features: ["Intent orchestration", "Autonomous workflow", "Realtime analytics"],
    tech: ["Next.js", "FastAPI", "LangChain", "Redis"],
  },
  {
    category: "Automation",
    title: "Ops Automation Engine",
    status: "Scaling",
    desc: "Event-driven automation system for deployment, observability and incident response.",
    features: ["CI/CD intelligence", "Policy checks", "Self-healing jobs"],
    tech: ["Node.js", "Docker", "GitHub Actions", "PostgreSQL"],
  },
  {
    category: "Web",
    title: "Premium Commerce Core",
    status: "Live",
    desc: "High-performance full-stack platform with search, recommendations and secure checkout.",
    features: ["Headless architecture", "Smart recommendations", "Audit-ready infra"],
    tech: ["React", "TypeScript", "Redis", "Nginx"],
  },
];

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    place: "FutureStack Labs",
    period: "2024 — Present",
    summary: "Leads AI-powered product delivery across platform, backend and automation systems.",
  },
  {
    role: "AI Engineer",
    place: "Neural Systems Co.",
    period: "2022 — 2024",
    summary: "Built production LLM pipelines, retrieval systems and intelligent internal tools.",
  },
  {
    role: "Software Engineer",
    place: "Velocity Digital",
    period: "2020 — 2022",
    summary: "Shipped scalable web products and designed modern developer workflows.",
  },
];

const certificates = [
  "Machine Learning Engineering",
  "Cloud Infrastructure Specialist",
  "Advanced System Design",
];

const blog = [
  { title: "Designing Reliable AI Agents", category: "AI", time: "8 min read" },
  { title: "Neo-Brutal Product Interfaces", category: "Design", time: "6 min read" },
  { title: "CI/CD for High-Velocity Teams", category: "Engineering", time: "10 min read" },
];

function Section({ id, title, icon: Icon, children }: { id: string; title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section id={id} className="section-shell mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
      <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="mb-6 flex items-center gap-3">
          <Icon className="h-5 w-5 text-[#4f8cff]" />
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        </div>
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
    <main className="relative overflow-x-hidden bg-[#090909] text-white">
      <motion.div className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[#4f8cff]" style={{ scaleX: progress }} />
      <div className="grid-bg" />
      <div className="particles" />
      <div className="spotlight" />

      <section className="section-shell relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-22 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="mb-6 border-[#365ea8] bg-[#4f8cff]/12 text-[#95b7ff]">AI Engineer • Full Stack Developer</Badge>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Building Intelligent Products for the Future.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-400">
              I build AI Agents, Full Stack Applications, Automation Systems, and Scalable Web Platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="brutal-card rounded-[24px] p-5"
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { icon: Code2, title: "VSCode", sub: "Realtime coding" },
                { icon: Server, title: "Terminal", sub: "Linux + Docker" },
                { icon: GitGraph, title: "GitHub Graph", sub: "CI/CD pipelines" },
                { icon: Bot, title: "AI Nodes", sub: "Agent architecture" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4, rotateX: 3, rotateY: -3 }}
                  className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-4"
                >
                  <item.icon className="mb-2 h-5 w-5 text-[#4f8cff]" />
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-zinc-400">{item.sub}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-[#2a2a2a] bg-[#0e0e0e] p-4 font-mono text-xs text-zinc-400">
              <p>{"> docker compose up -d"}</p>
              <p className="mt-1">{"> npx agents run --mode production"}</p>
              <p className="mt-1 text-[#4f8cff]">✓ Systems operational</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About" icon={Sparkles}>
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <Card className="overflow-hidden rounded-[24px]">
            <CardContent className="h-full bg-gradient-to-b from-[#1b1b1b] to-[#0f0f0f] p-0">
              <div className="flex h-full min-h-[380px] items-center justify-center text-sm text-zinc-500">Portrait Placeholder</div>
            </CardContent>
          </Card>
          <div className="grid gap-6">
            <Card>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {timeline.map((item) => (
                    <div key={item} className="rounded-2xl border border-[#2a2a2a] bg-[#111111] px-4 py-3 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div key={stat.label} whileHover={{ y: -4 }} className="brutal-card rounded-[18px] p-4">
                  <p className="text-2xl font-bold text-[#4f8cff]">{stat.value}</p>
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="stack" title="Tech Stack" icon={Cpu}>
        <div className="grid gap-5 md:grid-cols-2">
          {stackGroups.map((group) => (
            <Card key={group.title}>
              <CardContent>
                <h3 className="mb-4 text-xl font-bold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -4, rotateX: 6, rotateY: -4 }}
                      className="rounded-xl border border-[#2a2a2a] bg-[#111111] px-3 py-2 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" icon={Layers}>
        <div className="grid gap-6">
          {projects.map((project) => (
            <motion.div key={project.title} whileHover={{ y: -6 }}>
              <Card>
                <CardContent className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge>{project.category}</Badge>
                      <Badge className="border-[#365ea8] bg-[#4f8cff]/12 text-[#95b7ff]">{project.status}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-zinc-400">{project.desc}</p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <BadgeCheck className="h-4 w-4 text-[#4f8cff]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-[#2a2a2a] bg-[#101010] p-4">
                    <div className="mb-4 h-36 rounded-xl border border-[#2a2a2a] bg-[linear-gradient(140deg,#1b1b1b,#101010)]" />
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">GitHub</Button>
                      <Button variant="outline" size="sm">Live Demo</Button>
                      <Button size="sm">Case Study</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" icon={ChartNoAxesCombined}>
        <div className="relative ml-3 border-l-2 border-[#2a2a2a] pl-8">
          {experiences.map((item) => (
            <motion.div key={item.role} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mb-6">
              <span className="absolute -left-[41px] top-7 h-3.5 w-3.5 rounded-full border-2 border-[#2a2a2a] bg-[#4f8cff]" />
              <Card>
                <CardContent>
                  <p className="text-sm text-zinc-500">{item.period}</p>
                  <h3 className="mt-1 text-xl font-bold">{item.role}</h3>
                  <p className="text-sm text-[#95b7ff]">{item.place}</p>
                  <p className="mt-2 text-zinc-400">{item.summary}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="certificates" title="Certificates" icon={BadgeCheck}>
        <div className="grid gap-4 md:grid-cols-3">
          {certificates.map((cert) => (
            <motion.div key={cert} whileHover={{ y: -4 }}>
              <Card>
                <CardContent>
                  <div className="mb-4 h-36 rounded-2xl border border-[#2a2a2a] bg-[#0f0f0f]" />
                  <h3 className="font-semibold">{cert}</h3>
                  <p className="text-sm text-zinc-500">Issuer Logo Placeholder</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    Verify Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="github" title="GitHub" icon={GitGraph}>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card>
            <CardContent>
              <h3 className="mb-3 font-semibold">Contribution Graph</h3>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 84 }).map((_, i) => (
                  <div key={i} className={`h-3 rounded ${i % 5 === 0 ? "bg-[#4f8cff]/70" : "bg-[#1f1f1f]"}`} />
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-4">
            {["Repositories: 78", "Commit Activity: High", "Top Language: TypeScript", "Streak: 148 days"].map((item) => (
              <Card key={item}>
                <CardContent className="text-sm text-zinc-300">{item}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="blog" title="Blog" icon={BookOpen}>
        <div className="grid gap-4 md:grid-cols-3">
          {blog.map((post) => (
            <Card key={post.title}>
              <CardContent>
                <div className="mb-4 h-32 rounded-2xl border border-[#2a2a2a] bg-[#101010]" />
                <Badge>{post.category}</Badge>
                <h3 className="mt-3 font-semibold">{post.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{post.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" icon={Mail}>
        <Card>
          <CardContent className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h3 className="text-3xl font-bold">Let&apos;s Build Something Extraordinary.</h3>
              <p className="mt-3 text-zinc-400">Open to AI product collaborations, consulting, and high-impact engineering roles.</p>
              <div className="mt-6 space-y-3 text-sm text-zinc-300">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#4f8cff]" />hello@portfolio.dev</p>
                <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-[#4f8cff]" />linkedin.com/in/ai-engineer</p>
                <p className="flex items-center gap-2"><GitGraph className="h-4 w-4 text-[#4f8cff]" />github.com/ai-engineer</p>
                <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#4f8cff]" />@telegram_handle</p>
              </div>
              <Button variant="outline" className="mt-6">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </div>
            <form className="grid gap-3">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Tell me about your idea..." />
              <Button>Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </Section>

      <footer className="section-shell border-t border-[#2a2a2a] bg-[#090909]/95">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Brain className="h-4 w-4 text-[#4f8cff]" />
            <span>The future belongs to builders.</span>
          </div>
          <div className="flex items-center gap-2">
            {[GitGraph, Globe, ExternalLink, Cloud, ArrowUpRight].map((Icon, idx) => (
              <motion.a
                key={idx}
                whileHover={{ y: -3 }}
                href="#"
                className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-2 text-zinc-300"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
