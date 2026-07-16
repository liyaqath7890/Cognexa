import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, BookOpen, GraduationCap, Users, ShieldCheck, 
  Terminal, Server, Brain, Network, ArrowRight, CheckCircle2, 
  MapPin, Star, Compass, LayoutList
} from 'lucide-react';
import Button from '@/components/Button';
import { GlowCard, AnimatedCard } from '@/components/Card';
import Badge from '@/components/Badge';
import { AcademyIllustration } from '@/components/Illustration';
import PageBackground from '@/components/PageBackground';

export default function Academy() {
  const roadmap = [
    { phase: "Phase 1: Core Systems", topics: ["JavaScript Compilers", "TypeScript Strict Mode", "Data Structures & Algos"] },
    { phase: "Phase 2: Frontend Engineering", topics: ["React 19 Suspense", "Next.js routing", "State machines & Reducers"] },
    { phase: "Phase 3: Database & microservices", topics: ["Schema Isolation", "Mongoose Aggregations", "REST & GraphQL APIs"] },
    { phase: "Phase 4: Cloud & Deployment", topics: ["Docker containers", "AWS routing rules", "CI/CD deployment loops"] }
  ];

  const mentors = [
    {
      name: "Dr. Aryan Sharma",
      title: "Senior Tech Lead / Chief Mentor",
      prev: "Ex-Stripe Architect",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150"
    },
    {
      name: "Sophia Martinez",
      title: "Lead Frontend Instructor",
      prev: "Ex-Vercel Developer",
      rating: "5.0/5",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150"
    }
  ];

  const learningSteps = [
    { step: "01", title: "Interactive Theory", desc: "Short video blocks and compiler checkboards outlining programming logic." },
    { step: "02", title: "Production Sandbox", desc: "Develop actual modules for Cognexa B2B SaaS tools on sandbox servers." },
    { step: "03", title: "Lead Code Reviews", desc: "Submit pull requests. Mentor architects analyze complexity and styles." },
    { step: "04", title: "Cryptographic Refer", desc: "Gain referrals to top technology firms backed by verifiable ledger credentials." }
  ];

  const studentJourney = [
    { title: "Application & Assessment", desc: "Complete initial cognitive algorithms and coding quiz." },
    { title: "Onboarding & Lab Access", desc: "Gain sandbox credentials, developer terminals, and mentor chats." },
    { title: "Project Milestones", desc: "Complete 4 production-grade projects validated by strict code linters." },
    { title: "Cryptographic Release", desc: "Receive verifiable certificate and direct referral syndication." }
  ];

  return (
    <PageBackground pattern="dots">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="secondary">Cognexa Incubation</Badge>
              <h1 className="font-hero-title">
                Bridging Academics and <span className="text-gradient-purple text-glow">Scale Engineering</span>
              </h1>
              <p className="font-subtitle max-w-xl leading-relaxed">
                Cognexa Academy is not a school; it is an industrial sandbox. Students construct actual modular SaaS portals, review database isolation, and build with senior Leads.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/courses">
                  <Button variant="primary" size="lg" className="flex items-center space-x-2">
                    <span>Explore Course Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/internships">
                  <Button variant="secondary" size="lg">
                    Placement Internships
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center">
              <AcademyIllustration />
            </div>
          </div>

          {/* Learning Process */}
          <section className="space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <Badge variant="accent">Our Pedagogy</Badge>
              <h2 className="font-section-title">How We Guide Development</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningSteps.map((step, i) => (
                <GlowCard key={i} className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-8 space-y-4">
                  <div className="text-3xl font-display font-black text-primary">{step.step}</div>
                  <h3 className="font-card-title text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-semibold">{step.desc}</p>
                </GlowCard>
              ))}
            </div>
          </section>

          {/* Course Roadmap */}
          <section className="space-y-12 pt-6 border-t border-gray-200">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <Badge variant="primary">Academy Path</Badge>
              <h2 className="font-section-title">Structured Learning Roadmap</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {roadmap.map((phase, idx) => (
                <AnimatedCard key={idx} className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6 space-y-4 text-left">
                  <h4 className="text-xs font-bold uppercase text-primary tracking-wide">{phase.phase}</h4>
                  <ul className="space-y-2 text-xs text-gray-600 font-semibold">
                    {phase.topics.map((t, idx2) => (
                      <li key={idx2} className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* Mentors Section */}
          <section className="space-y-12 pt-6 border-t border-gray-200">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <Badge variant="secondary">Academic Faculty</Badge>
              <h2 className="font-section-title">Direct Guidance from Industry Architects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mentors.map((men, i) => (
                <GlowCard key={i} className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-8 flex items-start space-x-6">
                  <img src={men.image} alt={men.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 shadow-sm" />
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-card-title text-base leading-none">{men.name}</h3>
                      <span className="text-[10px] text-primary font-bold uppercase">{men.title}</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold">Previous background: <span className="text-gray-900 font-bold">{men.prev}</span></p>
                    <div className="flex items-center text-xs text-yellow-600 space-x-1 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{men.rating} Instructor Rating</span>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </section>

          {/* Career Guidance & Student Journey */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 border-t border-gray-200 items-start">
            <div className="space-y-6">
              <Badge variant="accent">Placement Syndicate</Badge>
              <h2 className="font-section-title">Career Acceleration Pipeline</h2>
              <p className="font-body leading-relaxed">
                We do not rely on basic job boards. We provide active candidate telemetry directly to HRMS teams in partner technology firms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1"><Compass className="w-4.5 h-4.5" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Weekly Systems Design Clinics</h4>
                    <p className="text-xs text-gray-500 font-semibold mt-0.5">Collaborative board sessions mapping architecture metrics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1"><LayoutList className="w-4.5 h-4.5" /></div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Resume ATS Optimization</h4>
                    <p className="text-xs text-gray-500 font-semibold mt-0.5">Restructuring code snippets to pass automatic parser screen checks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-card-title">Your Incubator Journey</h3>
              <div className="space-y-4 relative pl-4 border-l border-primary/20">
                {studentJourney.map((j, idx) => (
                  <div key={idx} className="relative space-y-1">
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
                    <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide">{j.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">{j.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Verification Certificate */}
          <div className="glass-panel border border-primary/10 p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white shadow-xl">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="secondary">Ledger Verification</Badge>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900">Cryptographic Certificate Credentials</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-semibold">
                Every academy graduate receives an isolated cryptographic signature token. Recruiter networks can verify the syllabus modules completed, projects certified, and lead developer ratings instantly on the ledger.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 border border-green-500/20 bg-green-500/5 rounded-2xl flex items-center space-x-3">
                <ShieldCheck className="w-10 h-10 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-850 uppercase">Syllabus Standard</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5 font-bold uppercase">Integrates with modern HRMS platforms</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
