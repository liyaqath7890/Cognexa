import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Trophy, ArrowRight } from 'lucide-react';
import Badge from '@/components/Badge';
import { GlowCard } from '@/components/Card';
import Button from '@/components/Button';
import PageBackground from '@/components/PageBackground';
import { testimonials } from '@/mock/testimonials';

export default function SuccessStories() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'SaaS Customers', 'Academy Alumni'];

  // Map testimonials to categories manually based on company and content clues
  const getTestimonialCategory = (id: string) => {
    if (id === 'test-1') return 'Academy Alumni';
    return 'SaaS Customers';
  };

  const filteredTestimonials = activeCategory === 'All'
    ? testimonials
    : testimonials.filter(t => getTestimonialCategory(t.id) === activeCategory);

  return (
    <PageBackground pattern="mesh">
      <div className="min-h-screen pt-32 pb-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="accent">Impact & Validation</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-gray-900 leading-tight">
              Real Teams. Real <span className="text-gradient-purple text-glow">Achievements.</span>
            </h1>
            <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
              Explore how global SaaS enterprises scale operations and top university graduates transition into elite software engineering careers with Cognexa.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar justify-center border-b border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold rounded-lg border whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'bg-transparent text-gray-500 border-gray-200 hover:text-primary hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Testimonial Wall Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <GlowCard className="flex flex-col justify-between h-full bg-white border border-gray-150/50 shadow-sm rounded-3xl p-8 relative overflow-hidden group">
                    <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/5 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
                    
                    <div className="space-y-6">
                      {/* Category Badge & Rating */}
                      <div className="flex justify-between items-center">
                        <Badge variant={getTestimonialCategory(item.id) === 'Academy Alumni' ? 'accent' : 'primary'}>
                          {getTestimonialCategory(item.id)}
                        </Badge>
                        <div className="flex space-x-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                          ))}
                        </div>
                      </div>

                      {/* Content text */}
                      <p className="text-sm text-gray-600 leading-relaxed font-sans italic font-semibold">
                        "{item.content}"
                      </p>
                    </div>

                    {/* Author block */}
                    <div className="flex items-center space-x-4 pt-6 mt-8 border-t border-gray-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 rounded-xl object-cover border border-primary/10 shadow-sm"
                      />
                      <div>
                        <h4 className="text-sm font-display font-bold text-gray-900 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-500 font-bold">
                          {item.role} @ <span className="text-primary">{item.company}</span>
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Impact Stats CTA Block */}
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-white border border-gray-200 shadow-md">
            <div className="absolute top-0 right-0 w-[30%] h-[100%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 text-left space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center space-x-1.5">
                  <Trophy className="w-4.5 h-4.5" />
                  <span>ISO 9001:2015 Certifications & Audits Passed</span>
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-black text-gray-900">
                  Join our list of high-velocity teams and professionals
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-2xl font-semibold">
                  Whether you are scaling operational ERPs, streamlining catalogs with PIM systems, or training engineers inside code sprints, Cognexa delivers verifiably premium software tools and resources.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a href="https://forms.gle/cognexaProductDemo" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="primary" className="w-full justify-center">
                    <span>Book SaaS Demo</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </a>
                <a href="https://forms.gle/cognexaProductDemo" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full justify-center">
                    <span>Apply for Academy</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
