import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, Eye, Shield, Briefcase, 
  Cpu, Users, Landmark, Code2, Server, Star
} from 'lucide-react';
import Badge from '@/components/Badge';
import { GlowCard } from '@/components/Card';
import PageBackground from '@/components/PageBackground';
import { 
  NetworkIllustration, 
  LaptopIllustration 
} from '@/components/Illustration';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Unyielding Security",
      desc: "All multi-tenant architectures are engineered with isolated schemas and compliance pipelines."
    },
    {
      icon: Cpu,
      title: "Architectural Velocity",
      desc: "We prioritize load speed, clean components, compiler safety, and minimal re-render profiles."
    },
    {
      icon: Users,
      title: "Educational Incubator",
      desc: "Bridging the gap between theory and code. We train developers in real production environments."
    }
  ];

  const milestones = [
    { year: "2024", title: "Studio Inception", desc: "Cognexa was founded as a high-end software consulting studio, deploying custom logistics systems." },
    { year: "2025", title: "Flagship ERP Release", desc: "Launched School ERP and PIM platforms, serving over 30 education networks and commerce clients." },
    { year: "2026", title: "Academy & Global referrals", desc: "Incubated over 15,000 developers globally, establishing cryptographic credentials systems and top referrals." }
  ];

  const leadership = [
    {
      name: "Dr. Aryan Sharma",
      role: "Chief Software Architect",
      bio: "Former systems architect at Stripe. Specializes in multi-tenant data structures, database optimization, and high availability systems.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150"
    },
    {
      name: "Liam Chen",
      role: "Principal Frontend Architect",
      bio: "Visual design Lead with 10+ years experience building polished user interfaces, React compiler workflows, and Framer animation frameworks.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    }
  ];

  const technologies = [
    { name: "React 19", category: "Core Library", icon: Code2 },
    { name: "TypeScript", category: "Compiler Safety", icon: Shield },
    { name: "Tailwind CSS", category: "Styling Framework", icon: Cpu },
    { name: "Framer Motion", category: "Physics Animations", icon: Star },
    { name: "Node.js & Go", category: "Backend Microservices", icon: Server },
    { name: "PostgreSQL", category: "Relational Ledger", icon: Landmark }
  ];

  return (
    <PageBackground pattern="circuit">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-background-alt">
        
        <div className="max-w-[1440px] mx-auto space-y-24">
          
          {/* 1. Hero Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="secondary">Company Profile</Badge>
              <h1 className="font-hero-title">
                An Enterprise Software Studio & <span className="text-gradient-purple text-glow">Incubator</span>
              </h1>
              <p className="font-subtitle max-w-xl leading-relaxed">
                At Cognexa Technologies, we do not follow standard patterns. We engineer multi-tenant software suites that power organizations, while training next-generation software developers to build with excellence.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <NetworkIllustration />
            </div>
          </div>

          {/* 2. Company Story, Vision, Mission */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6 border-t border-border-theme">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="accent">Our History</Badge>
              <h2 className="font-section-title">Born Out of Architectural Necessity</h2>
              <p className="font-body leading-relaxed">
                Cognexa was born in 2024 to address a persistent gap in the technology industry: enterprise software systems were either overly generic templates, or took years of custom engineering to compile. 
              </p>
              <p className="font-body text-text-muted leading-relaxed font-semibold">
                We engineered a suite of 10 microservice SaaS modules (including School ERP, CRM, and Inventory managers) built on isolated schemas. Simultaneously, to resource these platforms with elite developers, we founded our Academy, creating a direct path from university cohorts to top production environments.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <GlowCard className="p-8 space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Eye className="w-6 h-6" />
                  <h3 className="font-card-title">Our Vision</h3>
                </div>
                <p className="text-sm text-text-sub leading-relaxed font-semibold">
                  To be the leading global standard for enterprise-grade SaaS systems architecture, bridging the gap between state-of-the-art product delivery and elite university software engineering talent.
                </p>
              </GlowCard>

              <GlowCard className="p-8 space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Compass className="w-6 h-6" />
                  <h3 className="font-card-title">Our Mission</h3>
                </div>
                <p className="text-sm text-text-sub leading-relaxed font-semibold">
                  To design and deploy secure, isolated-schema B2B platforms that scale businesses, while resourcing these platforms with elite developers through high-stakes sandbox training.
                </p>
              </GlowCard>
            </div>
          </section>

          {/* 3. Core Values */}
          <section className="space-y-12">
            <div className="text-center space-y-3">
              <Badge variant="primary">Core Beliefs</Badge>
              <h2 className="font-section-title">Values That Guide Our Development</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, index) => {
                const Icon = val.icon;
                return (
                  <GlowCard key={index} className="p-8">
                    <div className="p-3 bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-card-title mb-3">{val.title}</h3>
                    <p className="text-sm text-text-sub leading-relaxed font-semibold">{val.desc}</p>
                  </GlowCard>
                );
              })}
            </div>
          </section>

          {/* 4. Journey Timeline */}
          <section className="space-y-16">
            <div className="text-center space-y-3">
              <Badge variant="secondary">Milestone Timeline</Badge>
              <h2 className="font-section-title">Our Chronological Timeline</h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20"></div>

              <div className="space-y-12">
                {milestones.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className={`flex flex-col md:flex-row items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="absolute left-6 md:left-1/2 -translate-x-[7px] w-4 h-4 rounded-full bg-primary border-2 border-bg-dark z-10"></div>
                    
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className="p-6 glass-panel">
                        <span className="text-sm font-black text-primary">{item.year}</span>
                        <h4 className="font-card-title text-base mt-1 mb-2">{item.title}</h4>
                        <p className="text-xs text-text-sub leading-relaxed font-semibold">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Technology Stack */}
          <section className="space-y-12 pt-6 border-t border-border-theme">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <LaptopIllustration />
              </div>
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <Badge variant="accent">Development Suite</Badge>
                  <h2 className="font-section-title mt-2">The Cognexa Tech Ecosystem</h2>
                  <p className="text-sm text-text-muted mt-2 font-semibold">We build and teach with production-grade engineering blocks ensuring rapid compilation, safety, and responsiveness.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {technologies.map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <div key={i} className="p-4 bg-bg-card border border-border-theme rounded-2xl flex items-center space-x-3 hover:border-primary/30 transition">
                        <div className="p-2 bg-primary/10 rounded-xl text-primary">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-xs font-bold text-text-main leading-none">{tech.name}</h4>
                          <span className="text-[9px] text-text-muted font-bold uppercase">{tech.category}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* 6. Leadership */}
          <section className="space-y-12 pt-6 border-t border-border-theme">
            <div className="text-center space-y-3">
              <Badge variant="primary">Architects</Badge>
              <h2 className="font-section-title">Our Engineering Leadership</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((lead, i) => (
                <GlowCard key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                  <img src={lead.image} alt={lead.name} className="w-20 h-20 rounded-full border-2 border-primary/20 object-cover shadow-sm" />
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-card-title text-lg leading-none">{lead.name}</h3>
                      <span className="text-xs text-primary font-bold">{lead.role}</span>
                    </div>
                    <p className="text-xs text-text-sub leading-relaxed font-semibold">{lead.bio}</p>
                  </div>
                </GlowCard>
              ))}
            </div>
          </section>

        </div>
      </div>
    </PageBackground>
  );
}
