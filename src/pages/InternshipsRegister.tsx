import React, { useState } from 'react';
import { 
  CheckCircle, ShieldCheck, HelpCircle, Send, UserCheck 
} from 'lucide-react';
import { useToast } from '@/contexts/ToastContext';
import Button from '@/components/Button';
import { GlowCard, AnimatedCard } from '@/components/Card';
import Badge from '@/components/Badge';
import { Input, TextArea } from '@/components/Input';
import PageBackground from '@/components/PageBackground';
import { ProgrammingIllustration } from '@/components/Illustration';

export default function InternshipsRegister() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    collegeName: '',
    academicYear: 'Third Year',
    preferredDomain: 'MERN Stack',
    resumeLink: '',
    statementOfIntent: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.collegeName || !formData.resumeLink) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      
      // Save application details in local storage logs
      const currentApplications = JSON.parse(localStorage.getItem('cognexa_intern_applications') || '[]');
      const newApp = {
        id: `APP-${Math.floor(1000 + Math.random() * 9000)}`,
        ...formData,
        dateApplied: new Date().toLocaleDateString()
      };
      
      localStorage.setItem('cognexa_intern_applications', JSON.stringify([...currentApplications, newApp]));
      
      showToast("Application submitted successfully!", "success");
      setFormData({
        name: '',
        email: '',
        phone: '',
        collegeName: '',
        academicYear: 'Third Year',
        preferredDomain: 'MERN Stack',
        resumeLink: '',
        statementOfIntent: ''
      });
    }, 1000);
  };

  const timelineSteps = [
    { step: "1. Candidate Screening", desc: "Our recruitment committee evaluates submitted profiles and portfolio references." },
    { step: "2. Technical Review", desc: "Short code challenge assessing algorithm speed, clean structure, and logic rules." },
    { step: "3. Systems Assessment", desc: "Discussion board panel reviewing REST configurations and schema structures." },
    { step: "4. Cohort Placement", desc: "Assigned active database repository access keys and paired with a senior mentor." }
  ];

  const benefits = [
    { title: "Direct SaaS Sprints", desc: "Work on live enterprise architectures: databases, payment webhooks, and routing APIs." },
    { title: "Personal Tech Lead Mentor", desc: "One-on-one code reviews, weekly status syncs, and visual architecture boards reviews." },
    { title: "Cryptographic Credentials", desc: "Earn verifiable certificates signed on our public ledger showing performance metrics." },
    { title: "Corporate Referrals", desc: "Direct referrals to global technology firms like Vercel, Google, and Stripe." }
  ];

  const faqs = [
    { q: "Is the internship remote or on-site?", a: "We offer both! Virtual (remote) and Offline (Bangalore headquarter office) cohorts are provisioned based on student preference." },
    { q: "What is the typical duration?", a: "Standard tracks span 3 months, while advanced AI Deep Learning tracks extend to 6 months." },
    { q: "Do I need prior experience?", a: "Basic programming knowledge (HTML/JS/OOP) is required. The program is designed to build production skills from there." }
  ];

  return (
    <PageBackground pattern="glass">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Hero segment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="primary">Industrial Sprints</Badge>
              <h1 className="font-hero-title text-gray-900">
                Incubate Skills Inside <span className="text-gradient-purple text-glow">Production</span>
              </h1>
              <p className="font-subtitle max-w-xl leading-relaxed">
                Apply to join our upcoming engineering cohort. Deploy active code, resolve microservices tasks, pass code checks, and earn cryptographic recommendations.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <ProgrammingIllustration />
            </div>
          </div>

          {/* Core Benefits */}
          <section className="space-y-12 pt-12 border-t border-gray-200">
            <div className="text-center space-y-3">
              <Badge variant="secondary">Program Advantages</Badge>
              <h2 className="font-section-title text-center text-gray-900">Why Join Cognexa</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, idx) => (
                <GlowCard key={idx} className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6 space-y-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h4 className="font-card-title text-base">{b.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{b.desc}</p>
                </GlowCard>
              ))}
            </div>
          </section>

          {/* Timeline & Steps */}
          <section className="space-y-12 pt-12 border-t border-gray-200">
            <div className="text-center space-y-3">
              <Badge variant="accent">Timeline Roadmap</Badge>
              <h2 className="font-section-title text-center text-gray-900 font-bold">Onboarding Timeline</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {timelineSteps.map((step, idx) => (
                <AnimatedCard key={idx} className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6 space-y-2">
                  <span className="text-xs font-bold text-primary font-mono block">{step.step}</span>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">{step.desc}</p>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* Registration Form Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-gray-200 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="primary">Apply Registry</Badge>
              <h2 className="font-section-title text-gray-900">Enrollment Form</h2>
              <p className="font-body text-gray-600 leading-relaxed font-semibold">
                Please provide accurate contact coordinates, preferred track domain, and a link to your digital portfolio/resume.
              </p>
              <div className="space-y-4 pt-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                <div className="flex items-center space-x-2">
                  <UserCheck className="w-5 h-5 text-primary" />
                  <span>Verify credentials through local storage keys</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>Secure SSL submission endpoints</span>
                </div>
              </div>
            </div>

            {/* Registration Form Card */}
            <div className="lg:col-span-7">
              <GlowCard className="bg-white p-8 border border-gray-150/50 shadow-md rounded-3xl space-y-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      label="Candidate Name *" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="e.g. John Doe"
                      required
                    />
                    <Input 
                      label="Email Address *" 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="e.g. john@student.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      label="Phone Number" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="10-digit number"
                    />
                    <Input 
                      label="College Name *" 
                      name="collegeName" 
                      value={formData.collegeName} 
                      onChange={handleChange} 
                      placeholder="University name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {/* Academic Year Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-gray-450 uppercase font-bold tracking-wider">Academic Year</label>
                      <select 
                        name="academicYear" 
                        value={formData.academicYear} 
                        onChange={handleChange}
                        className="w-full p-2.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/45"
                      >
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Final Year">Final Year</option>
                      </select>
                    </div>

                    {/* Preferred Domain */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-gray-450 uppercase font-bold tracking-wider">Preferred Domain</label>
                      <select 
                        name="preferredDomain" 
                        value={formData.preferredDomain} 
                        onChange={handleChange}
                        className="w-full p-2.5 text-xs text-gray-700 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/45"
                      >
                        <option value="MERN Stack">MERN Stack</option>
                        <option value="Java Full Stack">Java Full Stack</option>
                        <option value="React Specialization">React Specialization</option>
                        <option value="QA / Software Testing">QA / Software Testing</option>
                      </select>
                    </div>
                  </div>

                  <Input 
                    label="Link to Resume / Portfolio *" 
                    name="resumeLink" 
                    value={formData.resumeLink} 
                    onChange={handleChange} 
                    placeholder="GitHub URL, Google Drive or LinkedIn Link"
                    required
                  />

                  <TextArea 
                    label="Statement of Intent" 
                    name="statementOfIntent" 
                    value={formData.statementOfIntent} 
                    onChange={handleChange} 
                    placeholder="Briefly share why you are interested in this production sandbox..."
                  />

                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full justify-center space-x-2 py-3 mt-4"
                    isLoading={loading}
                  >
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </GlowCard>
            </div>
          </section>

          {/* FAQs List */}
          <section className="space-y-8 pt-12 border-t border-gray-200 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <Badge variant="accent">Help Center</Badge>
              <h2 className="font-section-title text-center text-gray-900 font-bold">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-white border border-gray-150/50 shadow-sm rounded-3xl text-left space-y-2">
                  <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                    <HelpCircle className="w-4 h-4 text-primary" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-gray-555 leading-relaxed pl-6 font-semibold">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </PageBackground>
  );
}
