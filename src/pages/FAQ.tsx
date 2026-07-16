import React, { useState } from 'react';
import { faqs } from '@/mock/faq';
import Badge from '@/components/Badge';
import Accordion, { AccordionItem } from '@/components/Accordion';
import PageBackground from '@/components/PageBackground';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'General', 'Products', 'Academy', 'Internships'];
  
  const filteredFAQs = activeCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <PageBackground pattern="mesh">
      <div className="min-h-screen pt-32 pb-24 px-6 relative bg-white text-left">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="text-center space-y-6">
            <Badge variant="secondary">Knowledge Base</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-gray-900 leading-tight">
              Frequently Asked <span className="text-gradient-purple text-glow">Questions</span>
            </h1>
            <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
              Have questions regarding SaaS setups, student portfolios, reference validations, or pricing plans? Locate swift guide points here.
            </p>
          </div>

          {/* Categories Scroller */}
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar justify-center border-b border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border whitespace-nowrap transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'bg-transparent text-gray-500 border-gray-200 hover:text-primary hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-4">
            <Accordion>
              {filteredFAQs.map((faq) => (
                <AccordionItem key={faq.id} title={faq.question}>
                  <p className="text-sm text-gray-600 leading-relaxed font-semibold font-sans">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
