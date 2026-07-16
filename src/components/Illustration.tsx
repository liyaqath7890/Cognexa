import React from 'react';
import { motion } from 'framer-motion';

// Page-level illustration assets
import heroImg from '@/assets/images/hero.png';
import productsImg from '@/assets/images/products.png';
import academyImg from '@/assets/images/academy.png';
import aboutImg from '@/assets/images/about.png';
import careersImg from '@/assets/images/careers.png';
import pricingImg from '@/assets/images/pricing.png';
import contactImg from '@/assets/images/contact.png';
import gamesImg from '@/assets/images/games.png';
import coursesImg from '@/assets/images/courses.png';
import internshipsImg from '@/assets/images/internships.png';

// Product-specific illustration assets
import schoolErpImg from '@/assets/images/school_erp.png';
import pimImg from '@/assets/images/pim.png';
import inventoryImg from '@/assets/images/inventory.png';
import crmImg from '@/assets/images/crm.png';
import hrmsImg from '@/assets/images/hrms.png';
import lmsImg from '@/assets/images/lms.png';
import hospitalErpImg from '@/assets/images/hospital_erp.png';
import restaurantErpImg from '@/assets/images/restaurant_erp.png';
import constructionErpImg from '@/assets/images/construction_erp.png';
import aiJobPlatformImg from '@/assets/images/ai_job_platform.png';

// Shared image wrapper
// Render transparent PNGs natively with true design colors. No screen/multiply or invert hacks.
function IllustrationImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const checkDark = () => {
      const darkClass = document.documentElement.classList.contains('dark');
      setIsDark(darkClass);
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      {/* Ambient glow behind the illustration */}
      <div
        className="absolute inset-0 m-auto w-2/3 h-2/3 rounded-full blur-[90px] pointer-events-none"
        style={{ background: 'var(--glow, rgba(108,59,255,0.15))' }}
      />

      <motion.img
        src={src}
        alt={alt}
        className="relative z-10 w-full max-w-[480px] h-auto object-contain select-none"
        style={{
          filter: isDark
            ? 'drop-shadow(0 12px 40px rgba(255,255,255,0.1))'
            : 'drop-shadow(0 12px 40px rgba(108,59,255,0.18))'
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        draggable={false}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Named Page Illustrations
// ─────────────────────────────────────────────

/** Home / Hero section */
export function DevIllustration() {
  return <IllustrationImage src={heroImg} alt="Cognexa enterprise software ecosystem" />;
}

/** Products page main hero */
export function SaaSIllustration() {
  return <IllustrationImage src={productsImg} alt="Cognexa SaaS product suite" />;
}

/** Academy / Courses page hero */
export function AcademyIllustration() {
  return <IllustrationImage src={academyImg} alt="Cognexa Academy learning platform" />;
}

/** About page */
export function NetworkIllustration() {
  return <IllustrationImage src={aboutImg} alt="Cognexa global technology network" />;
}

/** Careers page */
export function CareersIllustration() {
  return <IllustrationImage src={careersImg} alt="Cognexa careers and hiring" />;
}

/** Contact page */
export function ContactIllustration() {
  return <IllustrationImage src={contactImg} alt="Cognexa contact center" />;
}

/** Games page */
export function GamesIllustration() {
  return <IllustrationImage src={gamesImg} alt="Cognexa games arena" />;
}

/** Pricing page */
export function PricingIllustration() {
  return <IllustrationImage src={pricingImg} alt="Cognexa pricing and plan tiers" />;
}

/** Courses page */
export function CoursesIllustration() {
  return <IllustrationImage src={coursesImg} alt="Cognexa developer training courses" />;
}

/** Internships page */
export function InternshipsIllustration() {
  return <IllustrationImage src={internshipsImg} alt="Cognexa software engineering internships" />;
}

// ─────────────────────────────────────────────
// Named Product-specific Illustrations
// ─────────────────────────────────────────────

export function ERPIllustration() {
  return <IllustrationImage src={schoolErpImg} alt="Cognexa School ERP platform" />;
}

export function PIMIllustration() {
  return <IllustrationImage src={pimImg} alt="Cognexa PIM platform" />;
}

export function InventoryIllustration() {
  return <IllustrationImage src={inventoryImg} alt="Cognexa Inventory management" />;
}

export function CRMIllustration() {
  return <IllustrationImage src={crmImg} alt="Cognexa CRM platform" />;
}

export function HRMSIllustration() {
  return <IllustrationImage src={hrmsImg} alt="Cognexa HRMS portal" />;
}

export function LMSIllustration() {
  return <IllustrationImage src={lmsImg} alt="Cognexa LMS engine" />;
}

export function HospitalERPIllustration() {
  return <IllustrationImage src={hospitalErpImg} alt="Cognexa Hospital ERP" />;
}

export function RestaurantERPIllustration() {
  return <IllustrationImage src={restaurantErpImg} alt="Cognexa Restaurant POS ERP" />;
}

export function ConstructionERPIllustration() {
  return <IllustrationImage src={constructionErpImg} alt="Cognexa Construction site ERP" />;
}

export function AIJobPlatformIllustration() {
  return <IllustrationImage src={aiJobPlatformImg} alt="Cognexa AI Job and recruitment platform" />;
}

// ─────────────────────────────────────────────
// Legacy / Fallback Aliases to preserve imports
// ─────────────────────────────────────────────

export function LaptopIllustration() {
  return <IllustrationImage src={inventoryImg} alt="Cognexa SaaS platform" />;
}

export function ProgrammingIllustration() {
  return <IllustrationImage src={lmsImg} alt="Cognexa programming courses" />;
}

export function AnalyticsIllustration() {
  return <IllustrationImage src={constructionErpImg} alt="Cognexa analytics dashboard" />;
}

export function SecurityIllustration() {
  return <IllustrationImage src={hrmsImg} alt="Cognexa secure gateway" />;
}

export function AIIllustration() {
  return <IllustrationImage src={heroImg} alt="Cognexa AI solutions" />;
}

export function DeviceIllustration() {
  return <IllustrationImage src={productsImg} alt="Cognexa cross-device platform" />;
}

export function AIResearchIllustration() {
  return <IllustrationImage src={aiJobPlatformImg} alt="Cognexa AI research" />;
}

export function DashboardIllustration() {
  return <IllustrationImage src={productsImg} alt="Cognexa dashboard" />;
}
