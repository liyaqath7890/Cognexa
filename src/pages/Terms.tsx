import React, { useState } from 'react';
import { ShieldCheck, Info, FileText, Scale } from 'lucide-react';
import Badge from '@/components/Badge';
import PageBackground from '@/components/PageBackground';

export default function Terms() {
  const [activeSection, setActiveSection] = useState<string>('scope');

  const sections = [
    { id: 'scope', label: '1. Licensing & Scope' },
    { id: 'sla', label: '2. SLA & Guarantee' },
    { id: 'use', label: '3. Acceptable Use' },
    { id: 'ip', label: '4. Intellectual Property' },
    { id: 'liability', label: '5. Liability & Arbitration' }
  ];

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // accounting for navigation headers
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <PageBackground pattern="blueprint">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="border-b border-gray-150 pb-10 space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="w-5 h-5 text-primary" />
              <Badge variant="gray">Operational Guidelines</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-gray-900 leading-tight">
              Terms of <span className="text-gradient-purple text-glow">Service</span>
            </h1>
            <p className="font-subtitle max-w-2xl leading-relaxed">
              Last updated: July 16, 2026. Review standard subscription licenses, support SLAs, and code delivery guarantees.
            </p>
          </div>

          {/* Main Content Layout split grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Navigation (Sticky) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-6 hidden lg:block bg-gray-50 border border-gray-200 p-6 rounded-3xl">
              <span className="text-xs uppercase font-bold tracking-widest text-gray-500 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Agreement Sections</span>
              </span>
              <nav className="flex flex-col space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleScrollTo(sec.id)}
                    className={`text-left px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer border-none bg-transparent ${
                      activeSection === sec.id
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-gray-550 hover:bg-gray-100 hover:text-primary font-medium'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Document Details Block */}
            <article className="lg:col-span-8 space-y-12 text-sm text-gray-600 leading-relaxed font-sans font-semibold">
              
              {/* Section 1 */}
              <section id="scope" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-display font-bold text-gray-900 flex items-center space-x-2">
                  <span className="text-primary font-mono font-bold">1.</span>
                  <span>Scope of Licensing & SaaS Subscriptions</span>
                </h2>
                <div className="space-y-3">
                  <p>
                    Cognexa Technologies grants you a revocable, non-exclusive, non-transferable, limited license to access and use our SaaS modules (School ERP, PIM, CRM, Inventory, HRMS) in strict accordance with these terms.
                  </p>
                  <p>
                    Operational subscriptions are billed on a monthly or annual cadence. All subscriptions automatically renew unless terminated in writing at least thirty (30) days prior to the expiration of the current billing cycle.
                  </p>
                </div>
                <div className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-xl space-y-1">
                  <span className="text-xs font-bold text-gray-800 flex items-center space-x-1.5">
                    <Info className="w-4 h-4 text-primary" />
                    <span>Usage Compliance Note</span>
                  </span>
                  <p className="text-xs text-gray-500 font-semibold font-sans">
                    SaaS instances run on physically or logically isolated schemas to preserve database isolation guidelines. License sharing across distinct corporate entities is strictly prohibited.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="sla" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-display font-bold text-gray-900 flex items-center space-x-2">
                  <span className="text-primary font-mono font-bold">2.</span>
                  <span>Service Level Agreement (SLA) Guarantee</span>
                </h2>
                <div className="space-y-3">
                  <p>
                    We guarantee a monthly service availability uptime of **99.9%** for all production instances. SLA logs are compiled on our ledger and are verifiably auditable by client systems.
                  </p>
                  <p>
                    In the event of an unplanned outage falling below the guaranteed threshold, client accounts are eligible for credit calculations equal to 10% of their monthly subscription billing fee for each full hour of continuous downtime.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="use" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-display font-bold text-gray-900 flex items-center space-x-2">
                  <span className="text-primary font-mono font-bold">3.</span>
                  <span>Acceptable Use Policies & Telemetry</span>
                </h2>
                <div className="space-y-3">
                  <p>
                    You agree not to modify, reverse-engineer, decompile, or bypass security barriers on any SaaS service. Bots, scraping, or automatic queries exceeding 120 calls per minute are banned unless authorized by custom API rate limits.
                  </p>
                  <p>
                    Operational telemetry is logged to improve performance indices, secure networks, and verify transactions. No personal identifier information is sent in telemetry logs.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="ip" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-display font-bold text-gray-900 flex items-center space-x-2">
                  <span className="text-primary font-mono font-bold">4.</span>
                  <span>Intellectual Property & Code Integrity</span>
                </h2>
                <div className="space-y-3">
                  <p>
                    All original codes, components, structures, styling layouts, illustrations, and database schema designs are the exclusive property of Cognexa Technologies.
                  </p>
                  <p>
                    Academy training portfolios and cryptographic verification hashes belong to their respective student developers under shared distribution rules.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="liability" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-display font-bold text-gray-900 flex items-center space-x-2">
                  <span className="text-primary font-mono font-bold">5.</span>
                  <span>Liability Disclaimers & Arbitration</span>
                </h2>
                <div className="space-y-3">
                  <p>
                    SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY REPRESENTATION OR WARRANTY OF ANY KIND. COGNEXA'S MAXIMUM LIABILITY SHALL NOT EXCEED THE TOTAL SUM RECEIVED FROM YOU IN THE THREE (3) MONTHS PRECEDING THE CLAIM EVENT.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of this agreement will be settled through binding arbitration in accordance with standard corporate mediation rules.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 bg-emerald-500/5 p-4 rounded-r-xl space-y-1">
                  <span className="text-xs font-bold text-gray-800 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Security Assurance</span>
                  </span>
                  <p className="text-xs text-gray-500 font-semibold font-sans">
                    Cognexa structures code bases to ISO 27001 cybersecurity rules. Weekly automated audits check dependencies and resolve container vulnerabilities promptly.
                  </p>
                </div>
              </section>

            </article>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
