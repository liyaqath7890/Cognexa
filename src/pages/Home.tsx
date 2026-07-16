import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactCountUp from 'react-countup';
import { 
  ArrowRight, Sparkles, Zap, Globe, Users, CheckCircle2, Star, ArrowUpRight
} from 'lucide-react';
import Button from '@/components/Button';
import { GlowCard, AnimatedCard } from '@/components/Card';
import Badge from '@/components/Badge';
import Accordion, { AccordionItem } from '@/components/Accordion';
import PageBackground from '@/components/PageBackground';
import { partners } from '@/mock/partners';
import { products } from '@/mock/products';
import { courses } from '@/mock/courses';
import { DevIllustration, SaaSIllustration, AcademyIllustration } from '@/components/Illustration';

const CountUp = (ReactCountUp as any).default || ReactCountUp;

export default function Home() {
  const stats = [
    { value: 15, suffix: 'K+', label: 'Global Students' },
    { value: 99.4, suffix: '%', label: 'Success Rate' },
    { value: 10, suffix: '+', label: 'SaaS Platforms' },
    { value: 40, suffix: '+', label: 'Partner Brands' }
  ];

  const whyCognexa = [
    {
      icon: Zap,
      title: "Production Scaling",
      desc: "Our modules handle millions of database transactions daily. We teach and build systems that don't fail under stress."
    },
    {
      icon: Globe,
      title: "Multi-Tenant Architecture",
      desc: "All SaaS products operate on secure isolated schemas, ensuring high velocity scaling and robust compliance integrations."
    },
    {
      icon: Users,
      title: "Elite Developer Pools",
      desc: "We screen and select the top 2% of engineering talent across universities, putting them through rigorous production sprint simulations."
    }
  ];

  const faqs = [
    {
      q: "What makes Cognexa Technologies a premium software company?",
      a: "Cognexa runs a unique dual-core operation: we engineer state-of-the-art multi-tenant SaaS platforms for global enterprises while incubating elite frontend, full stack, and AI engineering talent. Our standard of execution matches companies like Apple, Stripe, and Linear."
    },
    {
      q: "How do the student internships work?",
      a: "Our internships are immersive. Students are treated as developers, submitting code reviews to senior leaders, learning system design, and building real modules. Outstanding developers earn cryptographic Letters of Recommendation (LOR) and direct job referrals."
    },
    {
      q: "Can we request custom modifications for the SaaS ERP platforms?",
      a: "Yes. Our architectures (School ERP, PIM, CRM, Inventory, HRMS) are designed as highly flexible microservices. Enterprises can request specific custom features, third-party hooks, and isolated hosting pods. Book a demo to learn more."
    },
    {
      q: "Is there support for recruiters?",
      a: "Absolutely. Recruiters can verify candidate cryptographic hashes directly on our ledger to review candidate certificates, actual code submissions, code quality ratings, and mentor reviews."
    }
  ];

  return (
    <PageBackground pattern="mesh">
      <div className="relative overflow-hidden pt-16 text-left">
        
        {/* 1. Hero Section */}
        <section className="relative min-h-[92vh] flex flex-col justify-center px-6 py-20 z-10">
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="primary" className="py-1 px-3">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 inline animate-pulse" />
                  Next-Gen Software Ecosystem
                </Badge>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-hero-title tracking-tight"
              >
                Build.<br />
                Learn.<br />
                <span className="text-gradient-purple text-glow">Innovate.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-subtitle max-w-xl leading-relaxed"
              >
                The digital core of enterprise scaling. We build state-of-the-art multi-tenant SaaS modules, incubate senior engineering talent, and connect placements with top global companies.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/products">
                  <Button variant="primary" size="lg" className="flex items-center space-x-2">
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/internships">
                  <Button variant="secondary" size="lg">
                    Join Internship
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" size="lg">
                    Explore Courses
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Premium Illustration */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <DevIllustration />
            </div>
          </div>

          {/* Hero Statistics Footer */}
          <div className="max-w-[1440px] mx-auto w-full mt-16 pt-12 border-t border-border-theme grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-left space-y-1">
                <span className="text-3xl font-display font-black text-text-main flex items-baseline">
                  <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2} />
                  <span className="text-primary ml-0.5">{stat.suffix}</span>
                </span>
                <p className="text-[10px] text-text-muted uppercase font-bold tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Partners Infinite Marquee */}
        <section className="py-12 border-y border-border-theme bg-background-alt overflow-hidden relative z-10">
          <div className="max-w-[1440px] mx-auto px-6">
            <p className="text-center text-[10px] uppercase tracking-widest text-primary font-black mb-6">
              Empowering Teams Globally
            </p>
            <div className="relative flex overflow-x-hidden">
              <div className="flex space-x-16 animate-marquee whitespace-nowrap text-text-muted font-display font-bold text-lg">
                {partners.concat(partners).map((partner, index) => (
                  <span key={index} className="hover:text-primary transition duration-300 cursor-default">
                    // {partner.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Company Overview */}
        <section className="py-24 px-6 relative z-10 bg-background-alt border-b border-border-theme">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="accent">Enterprise Core</Badge>
              <h2 className="font-section-title">Engineering Scale Software and Talents</h2>
              <p className="font-body leading-relaxed">
                Cognexa Technologies operates as a dual-core technical company. We design, host, and maintain highly modular B2B enterprise software platforms handling business processes, warehouses, clinical networks, and construction management. 
              </p>
              <p className="font-body text-text-muted leading-relaxed font-semibold">
                Simultaneously, we run an academy that trains students directly inside actual engineering sandboxes, validating skills on real products before referring them to global brands.
              </p>
              <div className="pt-4">
                <Link to="/about">
                  <Button variant="secondary" size="md" className="space-x-1">
                    <span>Learn Our Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <SaaSIllustration />
            </div>
          </div>
        </section>

        {/* 4. Why Cognexa */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-[1440px] mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <Badge variant="primary">Why Cognexa</Badge>
              <h2 className="font-section-title">Built for High Stakes Operations</h2>
              <p className="text-sm text-text-muted font-semibold">Our technologies, systems, and teaching standards are crafted for durability, precision, and performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyCognexa.map((item, index) => {
                const Icon = item.icon;
                return (
                  <GlowCard key={index} className="p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="p-3 bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-card-title mb-3">{item.title}</h3>
                      <p className="text-xs text-text-sub leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Products Teaser */}
        <section className="py-24 border-t border-border-theme bg-background-alt px-6 relative z-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <Badge variant="accent">Flagship SaaS</Badge>
                <h2 className="font-section-title mt-3">Enterprise Systems Suite</h2>
              </div>
              <Link to="/products" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary flex items-center space-x-1.5 group">
                <span>View All 10 SaaS Modules</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.slice(0, 3).map((product) => (
                <GlowCard key={product.id} className="flex flex-col h-full p-8 justify-between">
                  <div className="space-y-4">
                    <h3 className="font-card-title">{product.name}</h3>
                    <p className="text-xs text-text-sub leading-relaxed min-h-[50px] font-semibold">{product.tagline}</p>
                    
                    <div className="border-t border-border-theme pt-4 space-y-2">
                      {product.features.slice(0, 2).map((feat, index) => (
                        <div key={index} className="flex items-start space-x-2 text-xs text-text-sub font-semibold">
                          <CheckCircle2 className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feat.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-border-theme pt-4">
                    <span className="text-[10px] text-text-muted font-bold uppercase">Enterprise Modules</span>
                    <Link to={`/products?id=${product.id}`}>
                      <Button variant="secondary" size="sm" className="flex items-center space-x-1">
                        <span>Explore Spec</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Courses Highlights */}
        <section className="py-24 px-6 border-b border-border-theme relative z-10">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <Badge variant="primary">Academy Pathways</Badge>
                <h2 className="font-section-title mt-3">Featured Bootcamps</h2>
              </div>
              <Link to="/courses" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary flex items-center space-x-1.5 group">
                <span>Explore Curriculum Catalogs</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.slice(0, 4).map((course) => (
                <AnimatedCard key={course.id} className="p-6 flex flex-col justify-between hover:border-primary/30">
                  <div className="space-y-4">
                    <Badge variant="gray">{course.level}</Badge>
                    <h3 className="text-base font-display font-bold text-text-main leading-snug">{course.title}</h3>
                    <div className="flex items-center space-x-1.5 text-xs text-yellow-600 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{course.rating}</span>
                      <span className="text-text-muted font-medium">({course.studentsCount} Enrolled)</span>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-border-theme pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-text-muted uppercase font-bold">Duration</p>
                      <p className="text-xs font-bold text-text-main">{course.duration}</p>
                    </div>
                    <Link to="/courses">
                      <Button variant="primary" size="sm">Enroll</Button>
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Internships & Placement Pathway */}
        <section className="py-24 px-6 bg-background-alt border-b border-border-theme relative z-10">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <AcademyIllustration />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="secondary">Placement Internships</Badge>
              <h2 className="font-section-title">Rigorous Training. Cryptographic Certifications.</h2>
              <p className="font-body leading-relaxed">
                Our internships are structured as actual developer work cycles. We offer Industry, Virtual, and Offline programs. Interns are paired with senior guides, commit code, build enterprise SaaS modules, and resolve technical issues.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-text-sub font-semibold">
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-primary" /> <span>Cryptographic LOR Verification</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-primary" /> <span>Mock System Design Boards</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-primary" /> <span>Resume Reviews by Architects</span></div>
                <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-primary" /> <span>Direct HRMS Placement referrals</span></div>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/internships">
                  <Button variant="primary" size="md">
                    Explore Internship Guide
                  </Button>
                </Link>
                <Link to="/internships">
                  <Button variant="secondary" size="md">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ Accordions */}
        <section className="py-24 px-6 relative z-10">
          <div className="max-w-[1440px] mx-auto space-y-16">
            <div className="text-center space-y-4">
              <Badge variant="accent">FAQ Desk</Badge>
              <h2 className="font-section-title">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <Accordion>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} title={faq.q}>
                    <p className="text-sm text-text-sub leading-relaxed text-left font-sans">{faq.a}</p>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 9. Bottom CTA */}
        <section className="py-24 px-6 relative z-10 bg-background-alt">
          <div className="max-w-5xl mx-auto glass-panel p-12 rounded-[24px] text-center space-y-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-main leading-tight">Accelerate Your Engineering Career</h2>
            <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
              Gain production experience building active projects and secure referrals into Google, Stripe, Linear, and top scale startups.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/internships">
                <Button variant="primary" size="lg" className="flex items-center space-x-2">
                  <span>Register for Internship</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg">Talk to Consultant</Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageBackground>
  );
}
