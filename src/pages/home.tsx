import { useRef, useState, type FormEvent } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Brain,
  Database,
  Workflow,
  Smartphone,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Cpu,
  Network,
  Sparkles,
  Star,
  Bot,
  GraduationCap,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Layout } from "@/components/layout";
import { fadeUp, site, staggerContainer } from "@/data/site";
import { projects } from "@/data/projects";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setFormError("");
    const formData = new FormData(e.currentTarget);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
    if (!accessKey) {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;
      window.open(
        `mailto:${site.email}?subject=${encodeURIComponent(subject || "Project enquiry")}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`,
        "_blank",
      );
      setFormState("success");
      formRef.current?.reset();
      return;
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: formData.get("subject") || "New Code Synergy Labs enquiry",
          from_name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFormState("success");
        formRef.current?.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setFormState("error");
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <Layout onHomeSection={scrollTo}>
      <main id="main-content">
        <section
          id="hero"
          className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
        >
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-background/75 z-10" />
            <img
              src={`${import.meta.env.BASE_URL}hero-bg.png`}
              alt="AI software laboratory with neural graphs and code on multiple screens"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              width="1920"
              height="1080"
            />
          </motion.div>

          <div className="absolute inset-0 z-0 opacity-25 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="none">
              <motion.path
                d="M 80 780 Q 280 620 420 380 T 860 160"
                fill="none"
                stroke="#00d4c8"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
              />
              <motion.path
                d="M 140 900 Q 480 740 620 460 T 940 240"
                fill="none"
                stroke="#00d4c8"
                strokeWidth="2"
                strokeDasharray="6,8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 0.4 }}
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center lg:text-left pb-36">
            <div className="w-full lg:w-3/4 max-w-5xl">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08] mb-6"
              >
                <motion.span variants={fadeUp} className="block text-primary">
                  Building
                </motion.span>
                <motion.span variants={fadeUp} className="block">
                  intelligent software
                </motion.span>
                <motion.span variants={fadeUp} className="block text-primary">
                  that scales
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Code Synergy Labs is a software development studio for AI systems, knowledge graphs,
                ERP platforms, and custom products — from Neo4j ingestion layers to multilingual
                voice agents and production web and mobile apps.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 text-lg w-full sm:w-auto rounded-none"
                  onClick={() => scrollTo("contact")}
                >
                  Start a Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 h-14 px-8 text-lg w-full sm:w-auto rounded-none"
                  onClick={() => scrollTo("services")}
                >
                  Explore Our Services
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur z-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
                {[
                  { label: "Projects Delivered", value: "150+" },
                  { label: "Happy Clients", value: "100+" },
                  { label: "Team Members", value: "50+" },
                  { label: "Years of Experience", value: "10+" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.08, duration: 0.5 }}
                    className="p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
                    <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                  <div className="w-8 h-1 bg-primary" />
                  Who We Are
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
                  Software with research-grade depth and product-grade delivery.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Code Synergy Labs was founded by {site.founder} to turn ambitious ideas into
                  reliable digital products. We specialise in AI platforms, graph-backed ingestion,
                  ERP systems, and full-stack applications used in production every day.
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  From Meeting Sense and multilingual voice agents to Education and Industrial ERP,
                  we combine machine learning, Neo4j, and classic engineering — React, Flutter,
                  FastAPI, Django, Laravel, PostgreSQL — so the architecture matches the problem.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <div className="flex items-center gap-4 border-l-4 border-primary pl-6 py-2">
                    <div>
                      <p className="font-bold text-lg">{site.founder}</p>
                      <p className="text-sm text-muted-foreground">Founder &amp; CEO · Code Synergy Labs</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative">
                  <img
                    src={`${import.meta.env.BASE_URL}about-lab.png`}
                    alt="Engineers collaborating in the Code Synergy Labs software studio"
                    className="object-cover w-full h-full"
                    loading="lazy"
                    width="800"
                    height="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="absolute -bottom-8 -left-4 md:-left-8 bg-primary p-8 rounded-xl shadow-2xl">
                  <Brain className="w-12 h-12 text-primary-foreground mb-4" />
                  <p className="text-primary-foreground font-bold text-xl">AI-first engineering</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
                <div className="w-8 h-1 bg-primary" />
                Our Expertise
                <div className="w-8 h-1 bg-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
                Comprehensive Solutions
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI Development",
                  desc: "Machine learning, agentic workflows, and production AI — from prototypes to systems that stay up.",
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Neo4j & Ingestion Layers",
                  desc: "Advanced graph ingestion, entity resolution, and knowledge layers on Neo4j Aura for connected data.",
                },
                {
                  icon: <Bot className="w-8 h-8" />,
                  title: "Voice & Agentic AI",
                  desc: "Multilingual customer-support voice agents and HR insight agents that act with audit trails.",
                },
                {
                  icon: <Workflow className="w-8 h-8" />,
                  title: "ERP Systems",
                  desc: "Education ERP, Industrial ERP, and modular cores for accounts, payroll, inventory, and operations.",
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Web & Mobile Apps",
                  desc: "React, Flutter, and cross-platform products with Auth, APIs, and store-ready delivery.",
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Backend & Data",
                  desc: "PostgreSQL, MySQL, SQL, FastAPI, Django, Laravel, PHP, and secure authentication layers.",
                },
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group"
                >
                  <Card className="bg-card border-border hover:border-primary transition-colors duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                  <div className="w-8 h-1 bg-primary" />
                  Core Capability
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-8">
                  Graph intelligence, not just another chatbot.
                </motion.h2>
                <div className="space-y-6">
                  {[
                    "Neo4j knowledge graphs on Aura",
                    "Advanced ingestion and entity resolution layers",
                    "Machine learning models in production pipelines",
                    "Agentic AI for operations, HR, and support",
                    "Secure Auth across web, mobile, and APIs",
                  ].map((point) => (
                    <motion.div key={point} variants={fadeUp} className="flex items-start gap-4">
                      <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                      <p className="text-lg font-medium">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Sparkles />, title: "Meeting Sense", desc: "Turn conversations into structured, searchable action." },
                  { icon: <Bot />, title: "Voice Agents", desc: "Multilingual support that authenticates and resolves." },
                  { icon: <Layers />, title: "HR Insights", desc: "Agentic workforce intelligence with audit trails." },
                  { icon: <Factory />, title: "Industrial ERP", desc: "Production, inventory, and procurement in sync." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-border bg-background rounded-xl p-6"
                  >
                    <div className="text-primary mb-3">{item.icon}</div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work-preview" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
            >
              <div>
                <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                  <div className="w-8 h-1 bg-primary" />
                  Selected Work
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">
                  Products we have shipped
                </motion.h2>
              </div>
              <Link href="/work" className="text-primary font-bold hover:underline">
                View all work →
              </Link>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 6).map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Card className="h-full bg-card border-border hover:border-primary transition-colors">
                    <CardContent className="p-8">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                        {project.category}
                      </p>
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
                <div className="w-8 h-1 bg-primary" />
                How It Works
                <div className="w-8 h-1 bg-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
                Our 6-Step Process
              </motion.h2>
            </motion.div>
            <div className="relative">
              <div className="absolute top-8 left-0 w-full h-1 bg-border hidden lg:block" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {[
                  { title: "Discover", desc: "We map the problem, users, data, and constraints." },
                  { title: "Architect", desc: "Stack, graph model, APIs, and security are designed first." },
                  { title: "Prototype", desc: "A working slice proves the hardest risk early." },
                  { title: "Build", desc: "Iterative delivery with tests, Auth, and real environments." },
                  { title: "Launch", desc: "Hardening, migration, and go-live with your team." },
                  { title: "Evolve", desc: "Monitoring, model updates, and new modules as you grow." },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative z-10 flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-background border-4 border-border flex items-center justify-center text-xl font-black mb-6 group-hover:border-primary group-hover:text-primary transition-colors">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="py-24 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Cpu />, title: "AI that ships", desc: "Models, graphs, and agents wired into real products." },
                { icon: <ShieldCheck />, title: "Secure by default", desc: "Auth, roles, and audit trails across every layer." },
                { icon: <GraduationCap />, title: "Domain ERPs", desc: "Education and industrial systems, not generic templates." },
                { icon: <Clock />, title: "Long-term partners", desc: "We stay for launch, scale, and the next module." },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col items-center text-center p-6"
                >
                  <div className="text-primary mb-4 p-4 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative h-64 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}stack-banner.png`}
            alt="Data infrastructure with cyan lighting — Code Synergy Labs backend and AI platforms"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <p className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="text-primary">One studio.</span>{" "}
                <span className="text-foreground">Full stack, from graph to UI.</span>
              </p>
            </div>
          </div>
        </div>

        <section id="stack" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-16"
            >
              <motion.div variants={fadeUp} className="text-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
                <div className="w-8 h-1 bg-primary" />
                Technology
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">
                The stack we build with
              </motion.h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AI & Data", items: ["Neo4j", "Aura", "Machine Learning", "Ingestion Layers", "Python"] },
                { title: "Backend", items: ["FastAPI", "Django", "Laravel", "PHP", "Auth"] },
                { title: "Databases", items: ["PostgreSQL", "MySQL", "SQL", "MongoDB"] },
                { title: "Frontend", items: ["React", "Flutter", "TypeScript", "HTML"] },
                { title: "Cloud", items: ["AWS", "Docker", "Azure", "Google Cloud"] },
                { title: "Mobile", items: ["Flutter", "React Native", "Kotlin", "Swift"] },
              ].map((group) => (
                <div key={group.title} className="border border-border rounded-xl p-6 bg-background">
                  <h3 className="font-bold text-lg mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 border-y border-border overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Trusted to ship</h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {[
                  {
                    quote: "Meeting Sense turned messy calls into a searchable system of record. The graph layer was the difference.",
                    author: "Operations Lead, enterprise services",
                  },
                  {
                    quote: "Their multilingual voice agents handle first-line support without sounding scripted. Escalations arrive with full context.",
                    author: "Head of Customer Experience",
                  },
                  {
                    quote: "The Education ERP replaced three disconnected tools. Finance, academics, and parents finally share one source of truth.",
                    author: "Campus Administrator",
                  },
                ].map((item) => (
                  <CarouselItem key={item.author} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <Card className="bg-card border-border h-full">
                      <CardContent className="p-8 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex gap-1 mb-6 text-primary">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-primary" />
                            ))}
                          </div>
                          <p className="text-lg italic text-muted-foreground mb-8">"{item.quote}"</p>
                        </div>
                        <p className="font-bold border-t border-border pt-4">— {item.author}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex justify-center mt-8 gap-4">
                <CarouselPrevious className="static bg-card border-border hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="static bg-card border-border hover:bg-primary hover:text-primary-foreground" />
              </div>
            </Carousel>
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What does Code Synergy Labs specialise in?",
                  a: "AI development (Neo4j knowledge graphs, ingestion layers, machine learning, voice and agentic systems), ERP platforms including Education and Industrial ERP, and custom web and mobile software.",
                },
                {
                  q: "Which technologies do you use?",
                  a: "Backend: FastAPI, Django, Laravel, PHP, Auth, PostgreSQL, MySQL, SQL, Neo4j Aura. Frontend and mobile: React, Flutter, and related stacks. We pick the stack that fits the product, not a single template.",
                },
                {
                  q: "Can you take over an existing product?",
                  a: "Yes. We audit architecture, data, and Auth, then improve or rebuild modules without freezing the business.",
                },
                {
                  q: "Do you work with clients outside Pakistan?",
                  a: "Yes. We deliver remotely for teams internationally, with a primary studio in Lahore.",
                },
                {
                  q: "How do we start?",
                  a: "Share the problem, users, and constraints via the contact form, email, or WhatsApp. We respond with a scoped next step — discovery, prototype, or a build plan.",
                },
              ].map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-bold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black mb-8 max-w-4xl mx-auto tracking-tight">
              Have an idea? Let's turn it into a product that lasts.
            </h2>
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-bold h-16 px-10 text-xl rounded-none"
              onClick={() => scrollTo("contact")}
            >
              Talk to Our Team
            </Button>
          </div>
        </section>

        <section id="contact" className="py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-8">
                  Get in Touch
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Direct Lines</h4>
                      {site.phones.map((phone) => (
                        <p key={phone.href} className="text-muted-foreground mb-1">
                          <a href={phone.href} className="hover:text-primary">
                            {phone.display}
                          </a>
                          <span className="text-xs text-muted-foreground/60 ml-1">({phone.label})</span>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Email</h4>
                      <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-primary block">
                        {site.email}
                      </a>
                      <a href={`mailto:${site.founderEmail}`} className="text-muted-foreground hover:text-primary block">
                        {site.founderEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Studio</h4>
                      <p className="text-muted-foreground">{site.city}</p>
                    </div>
                  </div>
                </motion.div>

                {formState === "success" ? (
                  <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-black mb-2">Message sent</h3>
                    <p className="text-muted-foreground mb-4">
                      We'll reply at <strong>{site.email}</strong> within one business day.
                    </p>
                    <button onClick={() => setFormState("idle")} className="text-sm text-primary hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <motion.form ref={formRef} variants={fadeUp} className="space-y-4" onSubmit={handleContactSubmit}>
                    <Input name="name" placeholder="Your Full Name" required className="bg-background border-border h-12" />
                    <Input name="email" placeholder="Email Address" type="email" required className="bg-background border-border h-12" />
                    <Input name="subject" placeholder="Subject (e.g. AI platform, ERP, mobile app)" className="bg-background border-border h-12" />
                    <Textarea
                      name="message"
                      placeholder="Tell us about the product, users, and timeline"
                      required
                      className="bg-background border-border min-h-[140px] resize-none"
                    />
                    {formState === "error" && (
                      <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                        {formError || "Something went wrong. Please try again or email us directly."}
                      </p>
                    )}
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-none"
                      type="submit"
                      disabled={formState === "loading"}
                    >
                      {formState === "loading" ? "Sending…" : "Send Message →"}
                    </Button>
                  </motion.form>
                )}
              </motion.div>

              <div className="h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.25%2C31.45%2C74.42%2C31.58&layer=mapnik"
                  className="w-full h-full min-h-[400px] border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  title="Code Synergy Labs — Lahore, Pakistan"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
