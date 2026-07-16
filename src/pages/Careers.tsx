import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { GOOGLE_FORMS } from '@/constants/urls';
import Button from '@/components/Button';
import { GlowCard, AnimatedCard } from '@/components/Card';
import Badge from '@/components/Badge';
import { DevIllustration } from '@/components/Illustration';
import PageBackground from '@/components/PageBackground';

export default function Careers() {
  const jobs = [
    {
      id: "job-1",
      title: "Associate Software Engineer (React / TypeScript)",
      dept: "Engineering",
      location: "Pune, India (Hybrid)",
      type: "Full-Time",
      desc: "Implement responsive interfaces, clean state machines, and hook structures for our PIM and Inventory dashboards using React 19 and Tailwind CSS."
    },
    {
      id: "job-2",
      title: "Senior Full Stack Architect (MERN / Go)",
      dept: "Engineering",
      location: "Bangalore, India (Hybrid)",
      type: "Full-Time",
      desc: "Architect scalable, multi-tenant databases, microservices APIs, and secure queue brokers handling high concurrent connection streams."
    },
    {
      id: "job-3",
      title: "AI Research Associate (Deep Learning)",
      dept: "AI Innovation Labs",
      location: "Remote",
      type: "Full-Time / Contract",
      desc: "Develop and fine-tune NLP embeddings and semantic ranking engines powering candidate-matching automation tools."
    }
  ];

  const workflow = [
    { step: "1. Resume Screening", desc: "Our semantic ranking engines sift profiles matching contextual developer attributes." },
    { step: "2. Technical Quiz", desc: "Short code challenge analyzing algorithm efficiency and clean syntax styles." },
    { step: "3. Systems Panel", desc: "A live architecture board session mapping database isolation, REST endpoints, and load logic." },
    { step: "4. Offer Release", desc: "Review packages, cultural alignment expectations, and sprint onboarding details." }
  ];

  return (
    <PageBackground pattern="dots">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="secondary">Join the Cohort</Badge>
              <h1 className="font-hero-title">
                Build Software That Matters, <span className="text-gradient-purple text-glow">Directly</span>
              </h1>
              <p className="font-subtitle max-w-xl leading-relaxed">
                We are engineering a global digital ecosystem of multi-tenant SaaS tools and education tracks. Join a collaborative group that values code quality, performance optimization, and architectural scaling.
              </p>
            </div>
            <div className="lg:col-span-5">
              <DevIllustration />
            </div>
          </div>

          {/* Workflow Timeline */}
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <Badge variant="accent">Our Pipeline</Badge>
              <h2 className="font-section-title">The Hiring Journey</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {workflow.map((flow, i) => (
                <AnimatedCard key={i} className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6 space-y-3">
                  <h4 className="font-display font-bold text-sm text-gray-800">{flow.step}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{flow.desc}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <Badge variant="primary">Job Registry</Badge>
              <h2 className="font-section-title">Open Roles</h2>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {jobs.map((job) => (
                <GlowCard key={job.id} className="p-8 bg-white border border-gray-150/50 shadow-sm rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-3 text-left max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="gray">{job.dept}</Badge>
                      <Badge variant="accent">{job.type}</Badge>
                    </div>
                    <h3 className="font-card-title text-lg">{job.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">{job.desc}</p>
                    
                    <div className="flex flex-wrap gap-4 text-[10px] text-gray-400 pt-2 font-bold uppercase tracking-wider">
                      <span className="flex items-center space-x-1"><MapPin className="w-3.5 h-3.5 text-primary" /> <span>{job.location}</span></span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-full md:w-auto">
                    <a href={GOOGLE_FORMS.INTERNSHIP_APPLY} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className="w-full justify-center space-x-1.5 py-3">
                        <span>Apply For Role</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
