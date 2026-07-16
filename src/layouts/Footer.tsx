import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/urls';
import Logo from '@/components/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-theme bg-background-alt relative z-10 pt-20 pb-10">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">
        
        {/* Info Column */}
        <div className="lg:col-span-2 space-y-6">
          <Link to="/" className="flex items-center group">
            <Logo size="md" />
          </Link>
          <p className="text-xs text-text-sub max-w-sm leading-relaxed font-semibold">
            Cognexa Technologies is a premium global tech enterprise specializing in multi-tenant SaaS products, AI research, cloud education, and student placements.
          </p>
          <div className="flex space-x-3">
            <a 
              href={SOCIAL_LINKS.WHATSAPP} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full bg-bg-card hover:bg-green-600/10 text-text-muted hover:text-green-500 transition-all border border-border-theme" 
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4.5 h-4.5" />
            </a>
            <a 
              href={SOCIAL_LINKS.LINKEDIN} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full bg-bg-card hover:bg-primary/10 text-text-muted hover:text-primary transition-all border border-border-theme" 
              aria-label="LinkedIn"
            >
              <span className="text-xs font-bold font-display leading-none block">in</span>
            </a>
            <a 
              href={SOCIAL_LINKS.GITHUB} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full bg-bg-card hover:bg-surface-hover text-text-muted hover:text-text-main transition-all border border-border-theme" 
              aria-label="GitHub"
            >
              <span className="text-xs font-bold font-display leading-none block">git</span>
            </a>
          </div>
        </div>

        {/* Sitemap: SaaS Products */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-text-main">SaaS Products</h4>
          <ul className="space-y-2.5 text-xs text-text-sub font-semibold">
            <li><Link to="/products" className="hover:text-primary transition-colors">School ERP</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Product Information (PIM)</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Multi-Warehouse Inventory</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Sales CRM</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">HRMS & Payroll</Link></li>
          </ul>
        </div>

        {/* Sitemap: Academy */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-text-main">Academy & Careers</h4>
          <ul className="space-y-2.5 text-xs text-text-sub font-semibold">
            <li><Link to="/academy" className="hover:text-primary transition-colors">Academy Overview</Link></li>
            <li><Link to="/courses" className="hover:text-primary transition-colors">Featured Courses</Link></li>
            <li><Link to="/internships" className="hover:text-primary transition-colors">Internships Program</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers (Hiring)</Link></li>
            <li><Link to="/games" className="hover:text-primary transition-colors">Educational Games</Link></li>
          </ul>
        </div>

        {/* Sitemap: Contact */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-text-main">Support & Contact</h4>
          <ul className="space-y-3.5 text-xs text-text-sub font-semibold">
            <li className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <a href="tel:+917338669552" className="hover:text-primary transition-colors">+91 7338669552</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <a href="mailto:m7338ohd@gmail.com" className="hover:text-primary transition-colors">m7338ohd@gmail.com</a>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="w-3.5 h-3.5 text-primary mt-0.5" />
              <span>Bangalore, Karnataka, India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Under Section */}
      <div className="max-w-[1440px] mx-auto px-6 mt-16 pt-8 border-t border-border-theme flex flex-col md:flex-row justify-between items-center text-xs text-text-muted gap-4 font-semibold">
        <p>© {currentYear} Cognexa Technologies. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/student/dashboard" className="hover:text-primary transition-colors">Portal</Link>
        </div>
      </div>
    </footer>
  );
}
