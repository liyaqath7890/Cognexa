import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, CheckCircle, Calendar, GraduationCap, 
  ShieldCheck, ArrowRight, UserCheck 
} from 'lucide-react';
import { InternshipService } from '@/services/InternshipService';
import { InternshipTrack, internshipPerksDetailed } from '@/mock/internships';
import Button from '@/components/Button';
import { GlowCard, AnimatedCard } from '@/components/Card';
import Badge from '@/components/Badge';
import Modal from '@/components/Modal';
import PageBackground from '@/components/PageBackground';

export default function Internships() {
  const [internshipsList, setInternshipsList] = useState<InternshipTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTrack, setActiveTrack] = useState<InternshipTrack | null>(null);

  useEffect(() => {
    const fetchInternships = async () => {
      const data = await InternshipService.getAllInternships();
      setInternshipsList(data);
      setLoading(false);
    };
    fetchInternships();
  }, []);

  return (
    <PageBackground pattern="network">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="primary">Industrial Internships</Badge>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-gray-900 leading-tight">
            Accelerate Career Experience at <span className="text-gradient-purple text-glow">Scale</span>
          </h1>
          <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
            Gain production experience working on global enterprise SaaS. Complete code sprints, pass review metrics, and earn recommendations into top organizations.
          </p>
        </div>

        {/* Tracks Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 rounded-2xl bg-gray-50 animate-pulse border border-gray-150/50" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internshipsList.map((track) => (
              <GlowCard key={track.id} className="flex flex-col justify-between h-full bg-white border border-gray-150/50 shadow-sm rounded-3xl p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{track.format}</Badge>
                    <span className="text-xs font-semibold text-gray-500 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{track.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-gray-900">{track.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed min-h-[50px] font-semibold">{track.description}</p>
                  
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {track.perks.slice(0, 2).map((perk, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-gray-600 font-semibold">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 justify-center"
                    onClick={() => setActiveTrack(track)}
                  >
                    Details
                  </Button>
                  <a href="https://forms.gle/cognexaInternshipApply" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="primary" size="sm" className="w-full justify-center">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </GlowCard>
            ))}
          </div>
        )}

        {/* Perks Highlights Panel */}
        <div className="space-y-12 pt-12 border-t border-gray-200">
          <div className="text-center space-y-3">
            <Badge variant="accent">Career Support</Badge>
            <h2 className="text-3xl font-display font-bold text-gray-900">Full Career Placement Shell</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6">
              <UserCheck className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-sm text-gray-800 mb-2">1-on-1 Mock Panels</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">{internshipPerksDetailed.mockInterviews}</p>
            </AnimatedCard>

            <AnimatedCard className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-sm text-gray-800 mb-2">Resume Optimization</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">{internshipPerksDetailed.resumeReviews}</p>
            </AnimatedCard>

            <AnimatedCard className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-sm text-gray-800 mb-2">Referrals Syndication</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">{internshipPerksDetailed.placementGuidance}</p>
            </AnimatedCard>

            <AnimatedCard className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6">
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-bold text-sm text-gray-800 mb-2">Cryptographic LOR</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">{internshipPerksDetailed.lor}</p>
            </AnimatedCard>
          </div>
        </div>

        {/* Student Journey */}
        <div className="space-y-12 pt-12 border-t border-gray-200 text-left">
          <div className="text-center space-y-3">
            <Badge variant="primary">Onboarding Path</Badge>
            <h2 className="text-3xl font-display font-bold text-gray-900">Student Internship Journey</h2>
          </div>
          
          <div className="relative border-l border-primary/20 ml-4 md:ml-8 pl-8 space-y-8">
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-white" />
              <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Step 1: Code Sandbox Registration</h4>
              <p className="text-xs text-gray-500 max-w-2xl font-semibold mt-1">Create your profile inside the Cognexa student portal. Complete the algorithms questionnaire and diagnostic test.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-white" />
              <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Step 2: Microservice Sprints Assignment</h4>
              <p className="text-xs text-gray-500 max-w-2xl font-semibold mt-1">Upon screening approval, you are assigned a sandbox project with specific GitHub repository access and mentor leads.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-white" />
              <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">Step 3: Systems Review & Certification</h4>
              <p className="text-xs text-gray-500 max-w-2xl font-semibold mt-1">Complete weekly milestones. Mentors run manual and automated code checks. On completion, earn cryptographic certificates.</p>
            </div>
          </div>
        </div>

        {/* Internship FAQ */}
        <div className="space-y-8 pt-12 border-t border-gray-200 text-left max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <Badge variant="accent">Help Center</Badge>
            <h2 className="text-3xl font-display font-bold text-gray-900">Internships FAQ</h2>
          </div>
          
          <div className="space-y-4">
            <div className="p-5 bg-white border border-gray-150/50 shadow-sm rounded-3xl">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-2">Is the internship paid?</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">Yes, industry-track and custom-offline internships carry stipends tied to sprint milestones and code review approvals.</p>
            </div>
            <div className="p-5 bg-white border border-gray-150/50 shadow-sm rounded-3xl">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-2">What is a Cryptographic Letter of Recommendation (LOR)?</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-semibold">It is a digital document verified by cryptographic signatures, storing your actual code performance metrics, attendance, and project review logs so that recruiters can verify your skills with complete trust.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Track Details Modal */}
      <Modal
        isOpen={activeTrack !== null}
        onClose={() => setActiveTrack(null)}
        title={activeTrack?.title}
      >
        {activeTrack && (
          <div className="space-y-8 pt-4 text-left">
            
            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Overview</h4>
              <p className="text-sm text-gray-650 leading-relaxed font-semibold">{activeTrack.description}</p>
            </div>

            {/* Eligibility */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Eligibility</h4>
              <p className="text-xs text-gray-600 bg-gray-50 border border-gray-200 p-3 rounded-lg leading-relaxed font-semibold">
                {activeTrack.eligibility}
              </p>
            </div>

            {/* Deliverables & Perks */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">What You Gain</h4>
              <ul className="space-y-2 text-xs text-gray-600 font-semibold">
                {activeTrack.perks.map((perk, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Internship Timeline */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Sprints Roadmap</h4>
              <div className="relative border-l border-gray-200 pl-6 ml-3 space-y-6">
                {activeTrack.timeline.map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white" />
                    <div className="space-y-1">
                      <h5 className="font-bold text-gray-800 text-xs">{item.step}</h5>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-semibold">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <div className="pt-4 border-t border-gray-150">
              <a href="https://forms.gle/cognexaInternshipApply" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="primary" className="w-full justify-center">
                  Apply for Track via Registration Form
                </Button>
              </a>
            </div>

          </div>
        )}
      </Modal>

      </div>
    </PageBackground>
  );
}
