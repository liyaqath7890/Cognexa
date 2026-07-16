import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, ArrowRight, ShieldCheck, ChevronLeft, 
  PlayCircle, Layers, Settings, Monitor
} from 'lucide-react';
import { ProductService } from '@/services/ProductService';
import { ProductData } from '@/mock/products';
import { GOOGLE_FORMS } from '@/constants/urls';
import Button from '@/components/Button';
import { GlowCard } from '@/components/Card';
import Badge from '@/components/Badge';
import PageBackground from '@/components/PageBackground';
import { 
  DevIllustration, 
  AIResearchIllustration, 
  SaaSIllustration, 
  LaptopIllustration, 
  NetworkIllustration, 
  SecurityIllustration, 
  ProgrammingIllustration, 
  AnalyticsIllustration,
  ERPIllustration,
  AcademyIllustration,
  PIMIllustration,
  InventoryIllustration,
  CRMIllustration,
  HRMSIllustration,
  LMSIllustration,
  HospitalERPIllustration,
  RestaurantERPIllustration,
  ConstructionERPIllustration,
  AIJobPlatformIllustration
} from '@/components/Illustration';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeProductId = searchParams.get('id');

  const [productsList, setProductsList] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getAllProducts();
      setProductsList(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const categories = [
    'All', 
    'EdTech & Operations', 
    'Commerce Technology', 
    'Supply Chain', 
    'Sales & Marketing', 
    'Operations & HR', 
    'Healthcare', 
    'Hospitality & Retail', 
    'Industrial & Construction', 
    'AI & Talent Technologies'
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? productsList 
    : productsList.filter(p => p.category === selectedCategory);

  // Dedicated Product SVG Illustration Mapping
  const getProductIllustration = (id: string) => {
    switch (id) {
      case 'school-erp':
        return <ERPIllustration />;
      case 'pim':
        return <PIMIllustration />;
      case 'inventory':
        return <InventoryIllustration />;
      case 'crm':
        return <CRMIllustration />;
      case 'hrms':
        return <HRMSIllustration />;
      case 'lms':
        return <LMSIllustration />;
      case 'hospital-erp':
        return <HospitalERPIllustration />;
      case 'restaurant-erp':
        return <RestaurantERPIllustration />;
      case 'construction-erp':
        return <ConstructionERPIllustration />;
      case 'ai-job-platform':
        return <AIJobPlatformIllustration />;
      default:
        return <SaaSIllustration />;
    }
  };

  // Target Customer segments
  const getTargetCustomers = (id: string) => {
    switch (id) {
      case 'school-erp': return ["K-12 Private Schools", "Higher Education Colleges", "Global Academy Networks"];
      case 'pim': return ["E-Commerce Founders", "Retail Brands", "Multi-channel Distributors"];
      case 'inventory': return ["Warehouse Supervisors", "Supply Chain Logistics Leads", "Drop-shipping Operators"];
      case 'crm': return ["Inside Sales Teams", "Startup Founders", "B2B Sales Consultancies"];
      case 'hrms': return ["HR Operations Managers", "Payroll Comptrollers", "Scale Startups (50-500 staff)"];
      case 'lms': return ["Corporate L&D Departments", "Professional Training Centers", "EdTech Instructors"];
      case 'hospital-erp': return ["Private Clinical Outposts", "Multi-specialty Hospitals", "Diagnostic Networks"];
      case 'restaurant-erp': return ["Boutique Cafes", "Quick Service Outlets (QSR)", "Multi-outlet Franchise Owners"];
      case 'construction-erp': return ["General Contractors", "Real Estate Developers", "Site Engineering Audit Teams"];
      case 'ai-job-platform': return ["Talent Acquisition Heads", "Recruitment Staff Agencies", "Incubation HR Managers"];
      default: return ["SMB Business Owners", "Enterprise Managers"];
    }
  };

  // Modules metadata mock
  const getProductModules = (id: string) => {
    switch (id) {
      case 'school-erp': return ["Academics Master", "Smart Fee Ledger", "AI Timetable Generation", "Parent-Teacher portal"];
      case 'pim': return ["Multi-channel syndicator", "Digital Asset manager", "Category mapper", "Automated Translator"];
      case 'inventory': return ["Multi-warehouse routing", "Barcode scanner logs", "Automatic reorder signals", "Order fulfillment"];
      case 'crm': return ["Drag deal pipeline", "Unified email sync", "AI lead scoring", "Team chat threads"];
      case 'hrms': return ["Attendance log sheet", "Salary payroll slips", "Employee roster", "Performance indicators"];
      case 'lms': return ["Curriculum builder", "Video lecture player", "Sprints assignment logs", "Cryptographic certificates"];
      case 'hospital-erp': return ["Patient case history", "Doctor appointments", "Pharmacy inventories", "Billing checkout"];
      case 'restaurant-erp': return ["Kitchen KDS display", "Waiter POS interface", "Table bookings calendar", "Z-reports logs"];
      case 'construction-erp': return ["Site blueprints registry", "Material logs sheet", "Subcontractor manager", "Equipment audits"];
      case 'ai-job-platform': return ["Resume semantic matching", "AI Candidate screener", "Recruiter pipeline", "Application tracker"];
      default: return ["Core Database Ledger", "User Permissions manager", "Security logs", "Webhooks portal"];
    }
  };

  // Technologies list
  const getProductTechs = (id: string) => {
    return ["React 19 & TS", "NodeJS / NestJS", "PostgreSQL", "Redis cache", "Isolated schema"];
  };

  // Dedicated Product Spec Page View
  if (activeProductId) {
    const product = productsList.find(p => p.id === activeProductId);
    if (!product) {
      return (
        <div className="min-h-screen bg-white pt-32 pb-24 text-center">
          <h2 className="text-xl text-gray-800 font-display font-bold">Product Spec Not Found</h2>
          <button onClick={() => setSearchParams({})} className="text-primary hover:underline mt-4 inline-block cursor-pointer font-bold uppercase tracking-wider text-xs">
            Back to SaaS Suite
          </button>
        </div>
      );
    }

    return (
      <PageBackground pattern="blueprint">
        <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-white">
          
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Back to index Link */}
            <button 
              onClick={() => setSearchParams({})}
              className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition cursor-pointer border-none bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Suite Index</span>
            </button>

            {/* Product Hero block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="secondary">{product.category}</Badge>
                <h1 className="font-hero-title leading-tight">{product.name}</h1>
                <p className="font-subtitle max-w-xl leading-relaxed">{product.tagline}</p>
                
                <div className="pt-2">
                  <a href={GOOGLE_FORMS.PRODUCT_DEMO} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="lg" className="flex items-center space-x-2">
                      <span>Request Live Demo</span>
                      <PlayCircle className="w-5 h-5 fill-white/10" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                {getProductIllustration(product.id)}
              </div>
            </div>

            {/* System Overview & Specs */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-gray-200">
              <div className="space-y-6">
                <Badge variant="accent">Platform Overview</Badge>
                <h2 className="font-section-title">How it Operates</h2>
                <p className="font-body leading-relaxed">{product.overview}</p>
                
                {/* Target Audience */}
                <div className="space-y-3 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center space-x-2">
                    <Layers className="w-4 h-4" />
                    <span>Ideal Operational Profile</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {getTargetCustomers(product.id).map((cust, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-700 font-semibold">
                        {cust}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-modules List */}
                <div className="space-y-3 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>System Sub-modules Included</span>
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-600 font-semibold">
                    {getProductModules(product.id).map((mod, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <Badge variant="primary">Core Specifications</Badge>
                <h2 className="font-section-title">System Architecture</h2>
                <div className="grid grid-cols-1 gap-4">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="p-5 bg-white border border-gray-150/50 shadow-sm rounded-2xl space-y-2 hover:border-primary/30 transition">
                      <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>{feat.title}</span>
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-semibold">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Workflow Pipeline */}
            <section className="py-12 border-t border-gray-200 space-y-8">
              <div className="text-center space-y-2">
                <Badge variant="secondary">Operational Flow</Badge>
                <h2 className="font-section-title">Provisioning & Integration Workflow</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-gray-600 font-semibold">
                <div className="p-5 bg-white border border-gray-150/50 shadow-sm rounded-2xl text-left space-y-2">
                  <span className="text-[10px] text-primary font-bold uppercase">1. Spec Assessment</span>
                  <p className="text-[11px] leading-relaxed text-gray-500 font-semibold">Map existing data directories, staff access structures, and API hooks constraints.</p>
                </div>
                <div className="p-5 bg-white border border-gray-150/50 shadow-sm rounded-2xl text-left space-y-2">
                  <span className="text-[10px] text-primary font-bold uppercase">2. Sandbox Provisioning</span>
                  <p className="text-[11px] leading-relaxed text-gray-500 font-semibold">Initialize isolated schema db instances, secure SSL routes, and dashboard roles.</p>
                </div>
                <div className="p-5 bg-white border border-gray-150/50 shadow-sm rounded-2xl text-left space-y-2">
                  <span className="text-[10px] text-primary font-bold uppercase">3. Data Migration</span>
                  <p className="text-[11px] leading-relaxed text-gray-500 font-semibold">Migrate historical records, configure sub-admins, and deploy third-party webhooks.</p>
                </div>
                <div className="p-5 bg-white border border-gray-150/50 shadow-sm rounded-2xl text-left space-y-2">
                  <span className="text-[10px] text-primary font-bold uppercase">4. Sprints Launch</span>
                  <p className="text-[11px] leading-relaxed text-gray-500 font-semibold">Deploy and hand over live interfaces, with automated monthly database syncs.</p>
                </div>
              </div>
            </section>

            {/* Business Benefits Grid */}
            <section className="py-12 border-t border-gray-200 space-y-8">
              <div className="text-center space-y-2">
                <Badge variant="secondary">Value Metrics</Badge>
                <h2 className="font-section-title">Business Deliverables</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {product.benefits.map((benefit, idx) => (
                  <GlowCard key={idx} className="bg-white border border-gray-150/50 shadow-sm rounded-3xl p-8 space-y-4">
                    <div className="p-2.5 bg-green-500/10 rounded-full w-10 h-10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-semibold">{benefit}</p>
                  </GlowCard>
                ))}
              </div>
            </section>

            {/* Technology Stack & Simulated Dashboard Screenshot */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-gray-200">
              <div className="space-y-6">
                <Badge variant="primary">Tech Specs</Badge>
                <h2 className="font-section-title">System Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {getProductTechs(product.id).map((t, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700 font-mono font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center space-x-2">
                  <Monitor className="w-4 h-4" />
                  <span>Module View Mockup</span>
                </h3>
                {/* Simulated Glass render screenshot */}
                <div className="w-full h-44 rounded-2xl bg-white border border-gray-200 p-4 flex flex-col justify-between relative overflow-hidden shadow-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-[10px] text-gray-400 font-mono font-bold">cognexa-terminal-dashboard:/{product.id}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div className="space-y-2 py-4">
                    <div className="w-full bg-gray-100 h-2.5 rounded" />
                    <div className="w-[80%] bg-gray-100 h-2.5 rounded" />
                    <div className="w-[50%] bg-gray-100 h-2.5 rounded" />
                  </div>
                  <span className="text-[9px] text-gray-500 uppercase font-black tracking-widest text-right">System Normal</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </PageBackground>
    );
  }

  // Main Products Catalog Index View
  return (
    <PageBackground pattern="blueprint">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="accent">Cognexa SaaS Suite</Badge>
            <h1 className="font-hero-title">
              Enterprise Solutions for Modern <span className="text-gradient-purple text-glow">Scale</span>
            </h1>
            <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
              Enhance administrative operations with our 10 secure, multi-tenant cloud platforms. Designed for schools, e-commerce, clinics, sites, and recruiters.
            </p>
          </div>

          {/* Categories Scroller */}
          <div className="flex overflow-x-auto pb-4 gap-2.5 no-scrollbar border-b border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-full border whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'bg-transparent text-gray-500 border-gray-200 hover:text-primary hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-64 rounded-2xl bg-gray-50 animate-pulse border border-gray-150/50" />
              ))}
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlowCard className="flex flex-col justify-between h-full bg-white border border-gray-150/50 shadow-sm rounded-3xl p-8">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <Badge variant="gray">{product.category}</Badge>
                          <span className="text-[9px] font-black text-primary tracking-widest uppercase">SAAS MODULE</span>
                        </div>
                        
                        <h3 className="font-card-title">{product.name}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed min-h-[50px] font-semibold">{product.tagline}</p>
                        
                        <div className="pt-4 border-t border-gray-100 space-y-2">
                          {product.features.slice(0, 2).map((feat, index) => (
                            <div key={index} className="flex items-start space-x-2 text-xs text-gray-600 font-semibold">
                              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feat.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[10px] text-gray-400 font-bold uppercase">Enterprise Suite</span>
                        <button
                          onClick={() => setSearchParams({ id: product.id })}
                          className="cursor-pointer border-none bg-transparent p-0"
                        >
                          <Button 
                            variant="secondary" 
                            size="sm"
                            className="flex items-center space-x-1"
                          >
                            <span>Explore Spec</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </button>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </div>
    </PageBackground>
  );
}
