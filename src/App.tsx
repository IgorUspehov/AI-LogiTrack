import { useState, useEffect, useRef } from 'react';
import {
  Truck, FileText, Mail, Brain, MapPin, Database,
  Shield, DollarSign, Zap, GitBranch, Server,
  ChevronRight, ArrowRight, Menu, X, CheckCircle,
  Clock, AlertTriangle, TrendingUp, Lock, Globe,
  Package, Route, Cpu, HardDrive, Container,
  Send, ExternalLink, Star, Users, Building2,
  ChevronDown
} from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Technology', href: '#technology' },
    { label: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md border-b border-white/5 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center group-hover:bg-accent-400 transition-colors">
              <Route className="w-4.5 h-4.5 text-white" size={18} />
            </div>
            <span className="font-semibold text-white text-base tracking-tight">
              AI-<span className="text-accent-400">LogiTrack</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-steel-300 hover:text-white rounded-md hover:bg-white/5 transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium bg-accent-500 hover:bg-accent-400 text-white rounded-lg transition-all duration-200 shadow-lg shadow-accent-500/20"
            >
              Get in Touch
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-steel-300 hover:text-white transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-b border-white/5">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-steel-300 hover:text-white rounded-md hover:bg-white/5 transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2.5 text-sm font-medium bg-accent-500 text-white rounded-lg text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full mb-8 text-accent-300 text-xs font-medium tracking-wide">
            <Shield size={12} />
            <span>100% GDPR-konform &bull; Vollständig lokal betrieben &bull; Made in Germany</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            AI-Powered Logistics
            <br />
            <span className="text-gradient">Automation</span> for German
            <br />
            Transport Companies
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 leading-relaxed mb-10 max-w-2xl">
            Process transport requests, extract shipment data, and calculate optimal routes
            locally with complete GDPR compliance. No data leaves your infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-accent-500/25 text-sm"
            >
              Start Pilot Project
              <ArrowRight size={16} />
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-steel-200 font-medium rounded-lg transition-all duration-200 text-sm"
            >
              View Architecture
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '100%', label: 'Local Processing' },
              { value: 'GDPR', label: 'Compliant by Design' },
              { value: '0€', label: 'Google Maps Costs' },
              { value: 'OSS', label: 'Open Source Stack' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-white/3 border border-white/6 rounded-xl">
                <div className="text-2xl font-bold text-accent-400 mb-1">{stat.value}</div>
                <div className="text-xs text-steel-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#problem" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel-400 hover:text-white transition-colors animate-bounce">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}

function ProblemSection() {
  const { ref, inView } = useInView();

  const problems = [
    {
      icon: Clock,
      title: 'Manual Document Processing',
      desc: 'Transport orders arrive via email and PDF — staff spend hours manually extracting addresses, weights, and delivery windows.',
    },
    {
      icon: AlertTriangle,
      title: 'GDPR & Data Sovereignty Risk',
      desc: 'Cloud-based AI tools send sensitive shipment data to foreign servers, creating legal liability under German and EU data protection law.',
    },
    {
      icon: DollarSign,
      title: 'Expensive Routing APIs',
      desc: 'Google Maps and HERE Maps charge per-request fees that scale painfully with transport volume, eating into thin margins.',
    },
    {
      icon: TrendingUp,
      title: 'Suboptimal Route Planning',
      desc: 'Manual route planning by dispatchers leads to unnecessary mileage, fuel waste, and missed delivery time windows.',
    },
  ];

  return (
    <section id="problem" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-6 text-red-400 text-xs font-medium">
              <AlertTriangle size={12} />
              The Problem
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Small logistics firms face real operational bottlenecks
            </h2>
            <p className="text-steel-300 text-base leading-relaxed">
              German SME transport companies operate in a complex environment — tight regulations, rising costs,
              and growing shipment volumes with limited IT resources.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <div
                key={p.title}
                className={`p-6 bg-navy-800 border border-white/6 rounded-xl card-glow transition-all duration-300 card-glow-hover
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <p.icon className="text-red-400" size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-steel-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const { ref, inView } = useInView();

  const solutions = [
    {
      icon: Mail,
      step: '01',
      title: 'Ingest from Email & PDF',
      desc: 'Automatically monitor inboxes and upload folders. AI-LogiTrack reads incoming transport requests from any format.',
    },
    {
      icon: Brain,
      step: '02',
      title: 'Local LLM Extraction',
      desc: 'DeepSeek-R1 or Llama 3, running via Ollama on your own server, extracts structured shipment data — no cloud, no data transfer.',
    },
    {
      icon: Route,
      step: '03',
      title: 'Optimal Route Calculation',
      desc: 'OSRM and OpenStreetMap compute truck-optimized multi-stop routes in milliseconds, respecting weight and dimension limits.',
    },
    {
      icon: Database,
      step: '04',
      title: 'Persistent PostgreSQL Storage',
      desc: 'All shipments, routes, and historical data stored locally in PostgreSQL with pgvector for semantic search capabilities.',
    },
  ];

  return (
    <section id="solution" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6 text-accent-300 text-xs font-medium">
              <Zap size={12} />
              The Solution
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              End-to-end automation, entirely on your infrastructure
            </h2>
            <p className="text-steel-300 text-base leading-relaxed">
              AI-LogiTrack brings enterprise-grade logistics intelligence to SME transport firms
              without sacrificing data sovereignty or compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className={`relative p-6 bg-navy-800 border border-white/6 rounded-xl card-glow transition-all duration-500 card-glow-hover group
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-5xl font-black text-white/4 absolute top-4 right-4 leading-none select-none">{s.step}</div>
                <div className="w-10 h-10 bg-accent-500/15 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-500/25 transition-colors">
                  <s.icon className="text-accent-400" size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-steel-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection() {
  const { ref, inView } = useInView(0.1);

  const nodes = [
    { icon: Mail, label: 'Email / PDF', sublabel: 'Transport requests', color: 'bg-sky-500/15 border-sky-500/30 text-sky-400' },
    { icon: Brain, label: 'Local AI', sublabel: 'Ollama + LLM', color: 'bg-accent-500/15 border-accent-500/30 text-accent-400' },
    { icon: Package, label: 'JSON Payload', sublabel: 'Structured data', color: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
    { icon: MapPin, label: 'Routing Engine', sublabel: 'OSRM + OSM', color: 'bg-orange-500/15 border-orange-500/30 text-orange-400' },
    { icon: Database, label: 'PostgreSQL', sublabel: 'pgvector storage', color: 'bg-violet-500/15 border-violet-500/30 text-violet-400' },
  ];

  return (
    <section id="architecture" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6 text-accent-300 text-xs font-medium">
              <Server size={12} />
              System Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Fully local data pipeline
            </h2>
            <p className="text-steel-300 text-base leading-relaxed">
              Every component runs on your premises. Zero external API calls, zero data exposure —
              designed for German Datenschutz requirements from the ground up.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="relative bg-navy-950 border border-white/6 rounded-2xl p-8 lg:p-12 overflow-hidden card-glow mb-8">
            <div className="absolute inset-0 bg-dots opacity-50" />

            {/* Pipeline - Desktop */}
            <div className="relative hidden lg:flex items-center justify-between gap-2">
              {nodes.map((node, i) => (
                <div key={node.label} className="flex items-center gap-2 flex-1">
                  <div
                    className={`flex-1 flex flex-col items-center gap-3 p-5 border rounded-xl bg-navy-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}
                    style={{ transitionDelay: `${i * 120 + 200}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${node.color}`}>
                      <node.icon size={22} />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm mb-0.5">{node.label}</div>
                      <div className="text-steel-400 text-xs">{node.sublabel}</div>
                    </div>
                  </div>
                  {i < nodes.length - 1 && (
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 w-8">
                      <div className="h-0.5 w-full bg-gradient-to-r from-white/10 to-accent-500/40 relative overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-400 to-transparent animate-slide-right" />
                      </div>
                      <ArrowRight size={12} className="text-accent-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pipeline - Mobile */}
            <div className="lg:hidden flex flex-col gap-3">
              {nodes.map((node, i) => (
                <div key={node.label}>
                  <div
                    className={`flex items-center gap-4 p-4 border border-white/8 rounded-xl bg-navy-900 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} transition-all duration-500`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${node.color}`}>
                      <node.icon size={18} />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{node.label}</div>
                      <div className="text-steel-400 text-xs">{node.sublabel}</div>
                    </div>
                  </div>
                  {i < nodes.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="w-0.5 h-4 bg-accent-500/30 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Details */}
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Lock,
                title: 'No Data Leaves Your Network',
                desc: 'Every AI inference, every geocoding request, every route calculation happens on your server. Your shipment data never touches external APIs.',
              },
              {
                icon: Cpu,
                title: 'FastAPI Backend',
                desc: 'A lightweight, async Python API orchestrates the full pipeline — document intake, LLM inference, routing calls, and database writes — with full observability.',
              },
              {
                icon: Container,
                title: 'Docker Compose Deployment',
                desc: 'The entire stack ships as a single Docker Compose configuration. Stand it up in under 30 minutes on any Linux server with a modern GPU.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`p-6 bg-navy-800 border border-white/6 rounded-xl card-glow-hover transition-all duration-500 cursor-default
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100 + 600}ms` }}
              >
                <div className="w-9 h-9 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-accent-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-steel-300 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref, inView } = useInView();

  const benefits = [
    {
      icon: Shield,
      title: '100% Local Processing',
      desc: 'All AI inference runs on your hardware via Ollama. No shipment data, customer addresses, or business logic ever reaches a third-party server.',
      tag: 'Privacy First',
      tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
    {
      icon: Lock,
      title: 'GDPR Compliant',
      desc: 'Built from scratch for the German regulatory environment. Satisfies Art. 25 GDPR (Privacy by Design) and eliminates cross-border data transfer risks.',
      tag: 'Regulatory',
      tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    },
    {
      icon: DollarSign,
      title: 'No Google Maps Costs',
      desc: 'OpenStreetMap and OSRM provide truck-routing data entirely free of charge. Route 10 or 10,000 stops per day — the cost is the same: zero.',
      tag: 'Cost Savings',
      tagColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    },
    {
      icon: Zap,
      title: 'Fast Route Optimization',
      desc: 'OSRM pre-computes the road network, enabling sub-second multi-stop route optimization. Dispatchers get results faster than manual planning ever could.',
      tag: 'Performance',
      tagColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    },
    {
      icon: GitBranch,
      title: 'Open Source Infrastructure',
      desc: 'Every component — Ollama, OSRM, PostgreSQL, FastAPI — is open source with active communities and no vendor lock-in. You own your stack.',
      tag: 'Vendor Freedom',
      tagColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6 text-accent-300 text-xs font-medium">
              <Star size={12} />
              Key Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for the realities of German logistics
            </h2>
            <p className="text-steel-300 text-base leading-relaxed">
              Every design decision in AI-LogiTrack was made with German SME transport companies in mind —
              regulatory, operational, and financial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`p-6 bg-navy-800 border border-white/6 rounded-xl card-glow card-glow-hover transition-all duration-500 cursor-default group
                  ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-accent-500/10 rounded-lg flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                    <b.icon size={20} className="text-accent-400" />
                  </div>
                  <span className={`px-2 py-0.5 text-xs font-medium border rounded-full ${b.tagColor}`}>{b.tag}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-xs text-steel-300 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const { ref, inView } = useInView();

  const categories = [
    {
      label: 'AI & Inference',
      techs: [
        { name: 'Ollama', desc: 'Local LLM runtime' },
        { name: 'DeepSeek-R1', desc: 'Reasoning model' },
        { name: 'Llama 3', desc: 'General purpose LLM' },
      ],
      icon: Brain,
      color: 'text-accent-400 bg-accent-500/10 border-accent-500/20',
    },
    {
      label: 'Backend & API',
      techs: [
        { name: 'FastAPI', desc: 'Python async API' },
        { name: 'Docker', desc: 'Container orchestration' },
        { name: 'Python 3.12', desc: 'Runtime environment' },
      ],
      icon: Server,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      label: 'Database',
      techs: [
        { name: 'PostgreSQL', desc: 'Primary data store' },
        { name: 'pgvector', desc: 'Vector similarity search' },
        { name: 'SQLAlchemy', desc: 'ORM & migrations' },
      ],
      icon: HardDrive,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      label: 'Routing & Maps',
      techs: [
        { name: 'OSRM', desc: 'Route engine (self-hosted)' },
        { name: 'OpenStreetMap', desc: 'Free map data' },
        { name: 'Nominatim', desc: 'Geocoding service' },
      ],
      icon: MapPin,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    },
  ];

  return (
    <section id="technology" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6 text-accent-300 text-xs font-medium">
              <Cpu size={12} />
              Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Battle-tested open source components
            </h2>
            <p className="text-steel-300 text-base leading-relaxed">
              AI-LogiTrack is assembled from proven, production-grade open source projects —
              no experimental dependencies, no proprietary lock-in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                className={`p-6 bg-navy-950 border border-white/6 rounded-xl card-glow transition-all duration-500 card-glow-hover
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${cat.color}`}>
                    <cat.icon size={16} />
                  </div>
                  <span className="text-white font-semibold text-sm">{cat.label}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {cat.techs.map(tech => (
                    <div key={tech.name} className="flex items-center justify-between p-2.5 bg-navy-800 rounded-lg border border-white/4">
                      <span className="text-white text-xs font-medium font-mono">{tech.name}</span>
                      <span className="text-steel-400 text-xs">{tech.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* All techs pills */}
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {['FastAPI', 'Ollama', 'DeepSeek-R1', 'Llama 3', 'PostgreSQL', 'pgvector', 'Docker', 'OpenStreetMap', 'OSRM', 'Nominatim', 'Python 3.12', 'SQLAlchemy', 'Pydantic', 'Docker Compose'].map(tech => (
              <span
                key={tech}
                className="px-3 py-1 bg-navy-800 border border-white/8 text-steel-300 text-xs rounded-full font-mono hover:border-accent-500/30 hover:text-white transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const { ref, inView } = useInView(0.1);

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Core Pipeline',
      status: 'completed',
      statusLabel: 'In Progress',
      items: [
        'Email & PDF document ingestion',
        'LLM-based data extraction via Ollama',
        'OSRM multi-stop route calculation',
        'PostgreSQL + pgvector storage',
        'FastAPI REST interface',
        'Docker Compose deployment',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Operator Dashboard',
      status: 'upcoming',
      statusLabel: 'Planned',
      items: [
        'Web UI for dispatchers',
        'Interactive route map view',
        'Shipment status tracking',
        'Manual override & editing',
        'Export to PDF / CSV',
        'Role-based access control',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Fleet Intelligence',
      status: 'future',
      statusLabel: 'Roadmap',
      items: [
        'Vehicle capacity constraints',
        'Time-window optimization',
        'Driver schedule integration',
        'ETA prediction & alerts',
        'Historical analytics',
        'API integrations (TMS/ERP)',
      ],
    },
  ];

  const statusColors = {
    completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    upcoming: 'bg-accent-500/10 text-accent-400 border-accent-500/20',
    future: 'bg-steel-300/10 text-steel-300 border-steel-300/20',
  };

  const borderColors = {
    completed: 'border-emerald-500/30',
    upcoming: 'border-accent-500/30',
    future: 'border-white/8',
  };

  return (
    <section id="roadmap" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6 text-accent-300 text-xs font-medium">
              <TrendingUp size={12} />
              Product Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Transparent development trajectory
            </h2>
            <p className="text-steel-300 text-base leading-relaxed">
              AI-LogiTrack is actively developed. The roadmap reflects real priorities shaped by early
              pilot feedback from German transport operators.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {phases.map((phase, i) => (
              <div
                key={phase.phase}
                className={`p-6 bg-navy-800 border rounded-xl transition-all duration-500 card-glow-hover cursor-default
                  ${borderColors[phase.status as keyof typeof borderColors]}
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-steel-400 text-xs font-medium mb-1">{phase.phase}</div>
                    <h3 className="text-white font-semibold">{phase.title}</h3>
                  </div>
                  <span className={`px-2.5 py-0.5 text-xs font-medium border rounded-full ${statusColors[phase.status as keyof typeof statusColors]}`}>
                    {phase.statusLabel}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-steel-300">
                      <CheckCircle
                        size={13}
                        className={phase.status === 'completed' ? 'text-emerald-400 flex-shrink-0' :
                          phase.status === 'upcoming' ? 'text-accent-400 flex-shrink-0' : 'text-steel-600 flex-shrink-0'}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1200);
  };

  return (
    <section id="contact" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full mb-6 text-accent-300 text-xs font-medium">
                <Users size={12} />
                Get Involved
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Available for Pilot Projects and Part-Time Collaboration
              </h2>
              <p className="text-steel-300 text-base leading-relaxed mb-8">
                AI-LogiTrack is actively seeking pilot companies to refine the platform in real operational
                environments, and engineering collaborators interested in building open-source logistics infrastructure.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Building2,
                    title: 'Pilot Company',
                    desc: 'Run AI-LogiTrack alongside your existing systems. Provide feedback that shapes the product. Get dedicated setup support.',
                  },
                  {
                    icon: GitBranch,
                    title: 'Part-Time Collaborator',
                    desc: 'Contribute to a real-world open source logistics platform. Python, FastAPI, LLM tooling, or frontend work available.',
                  },
                  {
                    icon: Globe,
                    title: 'Open Source Community',
                    desc: 'Star the repository, open issues, submit PRs. All contributions welcome — documentation, testing, or features.',
                  },
                ].map(item => (
                  <div key={item.title} className="flex gap-4 p-4 bg-navy-800 border border-white/6 rounded-xl">
                    <div className="w-9 h-9 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-accent-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-1">{item.title}</div>
                      <div className="text-steel-300 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-navy-950 border border-white/6 rounded-2xl p-8 card-glow">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Message received</h3>
                  <p className="text-steel-300 text-sm">Thank you for your interest. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Send a message</h3>
                    <p className="text-steel-400 text-sm">We typically respond within 48 hours.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-steel-300 text-xs font-medium mb-1.5">Full Name</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Max Mustermann"
                        className="w-full px-3.5 py-2.5 bg-navy-800 border border-white/10 rounded-lg text-white text-sm placeholder-steel-500 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-steel-300 text-xs font-medium mb-1.5">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        placeholder="Musterfirma GmbH"
                        className="w-full px-3.5 py-2.5 bg-navy-800 border border-white/10 rounded-lg text-white text-sm placeholder-steel-500 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-steel-300 text-xs font-medium mb-1.5">Email Address</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="max@musterfirma.de"
                      className="w-full px-3.5 py-2.5 bg-navy-800 border border-white/10 rounded-lg text-white text-sm placeholder-steel-500 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-steel-300 text-xs font-medium mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your transport volumes, current tools, and how AI-LogiTrack could help..."
                      className="w-full px-3.5 py-2.5 bg-navy-800 border border-white/10 rounded-lg text-white text-sm placeholder-steel-500 focus:outline-none focus:border-accent-500/60 focus:ring-1 focus:ring-accent-500/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-accent-500 hover:bg-accent-400 disabled:bg-accent-600 text-white font-medium rounded-lg transition-all text-sm shadow-lg shadow-accent-500/20"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-accent-500 rounded-md flex items-center justify-center">
                <Route size={15} className="text-white" />
              </div>
              <span className="font-semibold text-white text-sm">
                AI-<span className="text-accent-400">LogiTrack</span>
              </span>
            </div>
            <p className="text-steel-400 text-xs leading-relaxed max-w-xs">
              GDPR-compliant AI logistics automation for German transport companies.
              100% local. 100% open source.
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2">
            <div className="flex items-center gap-1.5 text-xs text-steel-400">
              <Shield size={12} className="text-accent-400" />
              GDPR Compliant &bull; DSGVO-konform
            </div>
            <div className="flex items-center gap-1.5 text-xs text-steel-400">
              <Lock size={12} className="text-emerald-400" />
              100% Local Processing
            </div>
            <div className="text-xs text-steel-500 mt-1">
              &copy; {new Date().getFullYear()} AI-LogiTrack. Open Source Project.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 font-sans">
      <NavBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ArchitectureSection />
        <BenefitsSection />
        <TechStackSection />
        <RoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
