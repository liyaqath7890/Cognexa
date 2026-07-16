import React, { useState } from 'react';
import { Search, ShieldAlert, Lock, Database, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import Badge from '@/components/Badge';
import PageBackground from '@/components/PageBackground';

interface PrivacySection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: string[];
}

export default function Privacy() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const privacySections: PrivacySection[] = [
    {
      id: 'collection',
      title: '1. Information We Collect',
      icon: Database,
      content: [
        'We collect operational telemetry, configuration profiles, subscription metrics, and system log details.',
        'Contact names, support communications, emails, and billing tokens are gathered during enterprise registration processes.',
        'We do not compile, inspect, or process transactional databases belonging to client ERP and PIM platforms unless explicitly permitted under integration tickets.'
      ]
    },
    {
      id: 'usage',
      title: '2. How We Use Information',
      icon: RefreshCw,
      content: [
        'To deliver, troubleshoot, maintain, and audit multi-tenant SaaS products and features.',
        'To analyze anonymized performance indices and compile SLA logs.',
        'To monitor access behaviors and identify anomalous network queries, ensuring instance security.'
      ]
    },
    {
      id: 'isolation',
      title: '3. Data Storage & Schema Isolation',
      icon: Lock,
      content: [
        'Client databases operate on dedicated isolated schemas (logical separation) or independent hosting pods (physical separation).',
        'Data is stored on certified cloud networks (AWS and Google Cloud) using AES-256 cryptographic standards for static data storage.',
        'Transport layer security is governed by TLS 1.3 standards, blocking raw cleartext communication channels.'
      ]
    },
    {
      id: 'subprocessors',
      title: '4. Third-Party Sub-Processors',
      icon: Layers,
      content: [
        'Billing operations are securely delegated to Stripe under PCI-DSS compliant protocols.',
        'CDN caching, DNS mapping, and shell deployments are managed via Vercel and Cloudflare.',
        'No telemetry or metadata logs are sold, traded, or distributed to sales syndicates or marketing networks.'
      ]
    },
    {
      id: 'compliance',
      title: '5. Compliance & Security Certifications',
      icon: ShieldCheck,
      content: [
        'Cognexa structures system operations to fulfill SOC2 compliance and ISO 27001 data integrity standards.',
        'School ERP, PIM, and Hospital ERP configurations support isolated deployments designed to satisfy HIPAA compliance guidelines.',
        'Mentorship records and student performance credentials are signed with cryptographic verification keys.'
      ]
    },
    {
      id: 'retention',
      title: '6. Data Retention & Deletion Rights',
      icon: ShieldAlert,
      content: [
        'Upon account termination, client configurations and associated system telemetry are retained for a grace period of 90 days.',
        'After the retention cycle, database rows undergo hard deletes (Sequelize force destroy), leaving only isolated backup snapshots which overwrite every 30 days.',
        'Enterprise users can trigger complete system purge requests at any time by contacting compliance administrators.'
      ]
    }
  ];

  // Filter sections by search query
  const filteredSections = privacySections.filter(sec => {
    const titleMatch = sec.title.toLowerCase().includes(searchQuery.toLowerCase());
    const contentMatch = sec.content.some(paragraph => paragraph.toLowerCase().includes(searchQuery.toLowerCase()));
    return titleMatch || contentMatch;
  });

  return (
    <PageBackground pattern="glass">
      <div className="min-h-screen pt-32 pb-24 px-6 relative bg-white text-left">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header Block */}
          <div className="text-center space-y-6">
            <Badge variant="accent">Security Architecture</Badge>
            <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-gray-900 leading-tight">
              Privacy & Data <span className="text-gradient-purple text-glow">Policies</span>
            </h1>
            <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
              We compile zero tracking scripts. Review how database schemas are isolated, sub-processors audited, and client data managed.
            </p>
          </div>

          {/* Dynamic Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-450" />
            <input
              type="text"
              placeholder="Search policy parameters (e.g. HIPAA, encryption, Stripe)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold focus:ring-2 focus:ring-primary/45 focus:outline-none"
            />
          </div>

          {/* Section details */}
          <div className="space-y-6 pt-6">
            {filteredSections.length > 0 ? (
              filteredSections.map((sec) => {
                const IconComponent = sec.icon;
                return (
                  <div key={sec.id} className="bg-white border border-gray-150/50 p-8 rounded-3xl shadow-sm space-y-4">
                    <div className="flex items-center space-x-3 text-gray-900">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <h3 className="text-lg font-display font-bold">{sec.title}</h3>
                    </div>
                    <div className="space-y-3 pl-12 text-sm text-gray-500 leading-relaxed font-sans font-semibold">
                      {sec.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-gray-400 text-sm font-semibold">
                No policy matches found for "{searchQuery}". Try searching for terms like "SaaS", "HIPAA", or "Stripe".
              </div>
            )}
          </div>

          {/* Compliance Contact Footer */}
          <div className="border-t border-gray-200 pt-8 text-center text-xs text-gray-400 space-y-2 font-mono font-bold uppercase tracking-wider">
            <p>For official data isolation queries or SOC2 audit requests, contact compliance@cognexa.com.</p>
            <p>© 2026 Cognexa Technologies. All operational parameters fully audited.</p>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
