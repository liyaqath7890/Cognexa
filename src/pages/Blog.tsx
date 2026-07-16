import React, { useState } from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { blogs } from '@/mock/blogs';
import Badge from '@/components/Badge';
import { GlowCard } from '@/components/Card';
import Button from '@/components/Button';
import PageBackground from '@/components/PageBackground';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'AI', 'Technology', 'Programming', 'Career', 'Industry News'];
  
  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory);

  return (
    <PageBackground pattern="mesh">
      <div className="min-h-screen pt-32 pb-24 px-6 relative bg-white text-left">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="accent">Cognexa Press</Badge>
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-gray-900 leading-tight">
              Insights on Tech, AI & <span className="text-gradient-purple text-glow">Scale Engineering</span>
            </h1>
            <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
              Discover developer documentation updates, React compiler benches, deep learning tutorials, and roadmap tips compiled by our tech lead teams.
            </p>
          </div>

          {/* Categories Toolbar */}
          <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar border-b border-gray-100">
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

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <GlowCard key={post.id} className="flex flex-col justify-between h-full bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="gray">{post.category}</Badge>
                    <span className="text-[10px] text-gray-405 font-bold uppercase">{post.date}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-gray-900 leading-snug">{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed min-h-[60px] font-semibold">{post.excerpt}</p>
                  
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100 text-xs text-gray-450 font-semibold">
                    <div className="flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Button variant="outline" size="sm" className="w-full justify-center space-x-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </GlowCard>
            ))}
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
