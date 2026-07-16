import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Trophy, Gamepad2, ArrowRight } from 'lucide-react';
import Badge from '@/components/Badge';
import { GlowCard } from '@/components/Card';
import Button from '@/components/Button';
import { GamesIllustration } from '@/components/Illustration';
import PageBackground from '@/components/PageBackground';

export default function Games() {
  const gamesList = [
    {
      title: "CodeDash - Runner Game",
      tag: "Runtime platformer",
      desc: "Control a compiler engine jumping over SyntaxErrors and NullPointers. Tap elements at the correct execution step to speed up your code execution.",
      color: "#6C3BFF",
      icon: "🏃"
    },
    {
      title: "RegexMaze - Puzzle Game",
      tag: "Pattern Matching",
      desc: "Guide strings through a complex algorithmic maze by structuring valid Regular Expressions. Solve escape characters challenges to unlock gates.",
      color: "#8A5BFF",
      icon: "🧩"
    },
    {
      title: "NodeCrush - Candy Matcher",
      tag: "Framework Matcher",
      desc: "Connect three or more matching database instances, REST routers, or node servers. Create clean aggregation pipelines for maximum data throughput.",
      color: "#B794FF",
      icon: "🍬"
    },
    {
      title: "NeuralConnect - AI Simulation",
      tag: "Neural Weights",
      desc: "Route activation nodes inside deep neural layers. Adjust synaptic weights manually to classify images, matching target test parameters.",
      color: "#10B981",
      icon: "🧠"
    },
    {
      title: "CSSFlexboxArena - Layouts",
      tag: "Visual alignments",
      desc: "Align floating containers inside isometric grids before times runs out. Master flex-direction, justify-content, and order properties.",
      color: "#F59E0B",
      icon: "🎯"
    }
  ];

  return (
    <PageBackground pattern="mesh">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="accent">Cognexa Arena</Badge>
              <h1 className="font-hero-title">
                Gamified Software <span className="text-gradient-purple text-glow">Engineering</span>
              </h1>
              <p className="font-subtitle max-w-xl leading-relaxed">
                We are constructing an arena where students solve compilers, regular expressions, framework clusters, and neural weight routing through interactable browser games.
              </p>
              <div className="pt-2">
                <Button variant="primary" size="lg" className="flex items-center space-x-2">
                  <span>Join Beta Playtest</span>
                  <Sparkles className="w-4.5 h-4.5 text-white" />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <GamesIllustration />
            </div>
          </div>

          {/* Games list cards */}
          <section className="space-y-12 pt-12 border-t border-gray-200">
            <div className="text-center space-y-2">
              <Badge variant="primary">Launch Catalogs</Badge>
              <h2 className="font-section-title">Upcoming Games Pool</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gamesList.map((game, idx) => (
                <GlowCard key={idx} className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-8 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Badge variant="gray">{game.tag}</Badge>
                      <span className="text-2xl">{game.icon}</span>
                    </div>

                    <h3 className="font-card-title text-lg">{game.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">{game.desc}</p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-bold uppercase tracking-wider">Estimated Q3 2026</span>
                    <span className="text-primary font-bold flex items-center space-x-1 hover:text-secondary cursor-pointer transition">
                      <span>Beta Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
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
