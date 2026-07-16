import React from 'react';
import { Check, Info } from 'lucide-react';
import { saasPricing } from '@/mock/pricing';
import { GOOGLE_FORMS } from '@/constants/urls';
import Button from '@/components/Button';
import { GlowCard } from '@/components/Card';
import Badge from '@/components/Badge';
import PageBackground from '@/components/PageBackground';
import { PricingIllustration } from '@/components/Illustration';

export default function Pricing() {
  const comparison = [
    { feature: "Multi-tenant Database isolation", starter: "Shared Schema", enterprise: "Dedicated isolated schema" },
    { feature: "Daily automated backup triggers", starter: "✓", enterprise: "✓" },
    { feature: "Custom API & webhook integrations", starter: "✕", enterprise: "✓ (Unlimited)" },
    { feature: "Dedicated Support Specialist", starter: "Email Support", enterprise: "24/7 Phone & Slack channel" },
    { feature: "Custom Domain Routing", starter: "starter.cognexa.com", enterprise: "Your own custom subdomains" }
  ];

  return (
    <PageBackground pattern="mesh">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Block in Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <Badge variant="accent">Pricing Matrix</Badge>
              <h1 className="font-hero-title">
                Transparent Pricing, Built to <span className="text-gradient-purple text-glow">Scale</span>
              </h1>
              <p className="font-subtitle leading-relaxed">
                Choose a plan that fits your organization. All packages include secure database isolations, SSL handshakes, and monthly automated backup triggers.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <PricingIllustration />
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {saasPricing.map((pkg, i) => (
              <GlowCard 
                key={i} 
                className={`flex flex-col justify-between h-full p-8 md:p-10 bg-white border border-gray-150/50 shadow-sm rounded-3xl ${
                  pkg.popular 
                    ? 'border-primary/40 shadow-md ring-2 ring-primary/5' 
                    : ''
                }`}
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-card-title">{pkg.title}</h3>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed font-semibold">{pkg.description}</p>
                    </div>
                    {pkg.popular && <Badge variant="primary">Popular</Badge>}
                  </div>

                  <div className="flex items-baseline space-x-1.5 pt-4 border-t border-gray-100">
                    <span className="text-4xl md:text-5xl font-display font-black text-gray-900">{pkg.price}</span>
                    <span className="text-xs text-gray-400 font-bold uppercase">{pkg.period}</span>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Included Deliverables</p>
                    <ul className="space-y-2.5 text-xs text-gray-600 font-semibold">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12">
                  <a href={GOOGLE_FORMS.PRODUCT_DEMO} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant={pkg.popular ? 'primary' : 'secondary'} 
                      className="w-full justify-center py-3 text-sm"
                    >
                      {pkg.ctaText}
                    </Button>
                  </a>
                </div>
              </GlowCard>
            ))}
          </div>

          {/* Plan Comparison Table */}
          <section className="space-y-8 pt-16 border-t border-gray-200">
            <div className="text-center space-y-2">
              <Badge variant="secondary">Detailed Audit</Badge>
              <h2 className="font-section-title">Feature Checklist Matrix</h2>
            </div>

            <div className="overflow-hidden border border-gray-200 rounded-3xl max-w-4xl mx-auto bg-white shadow-sm">
              <table className="w-full text-left text-xs text-gray-600">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-800 font-display font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Capability</th>
                    <th className="px-6 py-4">Starter Spec</th>
                    <th className="px-6 py-4">Enterprise Custom</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-semibold text-gray-700">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-gray-900 flex items-center space-x-1.5 font-bold">
                        <Info className="w-3.5 h-3.5 text-primary" />
                        <span>{row.feature}</span>
                      </td>
                      <td className="px-6 py-4">{row.starter}</td>
                      <td className="px-6 py-4 font-bold text-primary">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </PageBackground>
  );
}
