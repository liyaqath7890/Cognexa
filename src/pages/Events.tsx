import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Video, Award } from 'lucide-react';
import Badge from '@/components/Badge';
import { GlowCard } from '@/components/Card';
import Button from '@/components/Button';
import PageBackground from '@/components/PageBackground';
import { events } from '@/mock/events';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Conference', 'Hackathon', 'Webinar', 'Workshop'];

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(e => e.type === activeCategory);

  // Dynamic badge selector for different event types
  const getEventBadgeVariant = (type: string) => {
    switch (type) {
      case 'Conference': return 'primary';
      case 'Hackathon': return 'accent';
      case 'Webinar': return 'secondary';
      case 'Workshop': return 'success';
      default: return 'gray';
    }
  };

  return (
    <PageBackground pattern="neural">
      <div className="min-h-screen pt-32 pb-24 px-6 relative bg-white text-left">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary">Global Gatherings</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-gray-900 leading-tight">
              Sprints, Summits & <span className="text-gradient-purple text-glow">Hackathons</span>
            </h1>
            <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
              Connect with leading software architects, explore next-gen AI frameworks, and challenge your scaling capabilities in our live build events.
            </p>
          </div>

          {/* Categories Filter Toolbar */}
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar justify-start md:justify-center border-b border-gray-100">
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

          {/* Events Grid layout */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredEvents.map((ev, index) => (
                  <motion.div
                    key={ev.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <GlowCard className="flex flex-col justify-between h-full bg-white border border-gray-150/50 p-8 rounded-3xl shadow-sm relative overflow-hidden group">
                      <div className="space-y-6">
                        
                        {/* Event Header metadata */}
                        <div className="flex justify-between items-center">
                          <Badge variant={getEventBadgeVariant(ev.type)}>{ev.type}</Badge>
                          <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-bold uppercase tracking-wider">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span>{ev.date}</span>
                          </div>
                        </div>

                        {/* Event details */}
                        <div className="space-y-3">
                          <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {ev.title}
                          </h3>
                          <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                            {ev.description}
                          </p>
                        </div>

                        {/* Speaker details */}
                        <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                          <User className="w-4 h-4 text-primary" />
                          <span className="text-xs text-gray-500 font-semibold">
                            Led by: <span className="text-gray-900 font-bold">{ev.speaker}</span>
                          </span>
                        </div>

                      </div>

                      {/* CTA block */}
                      <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="flex items-center space-x-1 text-xs text-gray-500 font-bold uppercase tracking-wider">
                          <Video className="w-3.5 h-3.5 text-green-500 animate-pulse" />
                          <span>Virtual Live Stream</span>
                        </span>
                        
                        <a href={ev.registrationUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="space-x-1">
                            <span>Register Seat</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </a>
                      </div>

                    </GlowCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16 space-y-4">
              <p className="text-gray-500 text-sm">No events scheduled under this category currently.</p>
              <Button variant="outline" size="sm" onClick={() => setActiveCategory('All')}>
                Reset Filter
              </Button>
            </div>
          )}

          {/* Incubator call out */}
          <div className="relative rounded-3xl p-8 md:p-12 bg-white border border-primary/10 shadow-sm text-center max-w-3xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900">Have a project to submit or speak on?</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-xl mx-auto font-semibold">
                We regularly open speaking slots for industry developers, core framework contributors, and students who show outstanding roadmap execution inside the academy.
              </p>
            </div>
            <a href="mailto:m7338ohd@gmail.com">
              <Button variant="primary" size="md">
                Contact Program Panel
              </Button>
            </a>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
