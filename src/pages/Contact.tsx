import React, { useState } from 'react';
import { 
  Phone, Mail, MessageCircle, QrCode, Send
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/urls';
import { ContactService } from '@/services/ContactService';
import { useToast } from '@/contexts/ToastContext';
import Button from '@/components/Button';
import { GlowCard } from '@/components/Card';
import Badge from '@/components/Badge';
import { Input, TextArea } from '@/components/Input';
import PageBackground from '@/components/PageBackground';

export default function Contact() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    setLoading(true);
    const res = await ContactService.submitContactForm(formData);
    setLoading(false);

    if (res.success) {
      showToast(res.message, "success");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      showToast("Submission failed. Please try again.", "error");
    }
  };

  return (
    <PageBackground pattern="particles">
      <div className="min-h-screen pt-32 pb-24 px-6 relative bg-[#FAF8FF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct Contacts & QR Scanner */}
          <div className="lg:col-span-5 space-y-12 text-left">
            
            {/* Header */}
            <div className="space-y-4">
              <Badge variant="secondary">Contact Center</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 leading-tight">Let's Design Something Great</h1>
              <p className="font-subtitle leading-relaxed">
                Have a project blueprint, custom feature request for SaaS ERPs, or need enrollment advising? Reach out directly.
              </p>
            </div>

            {/* Quick Cards */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white border border-gray-150/50 shadow-sm rounded-2xl">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-450 uppercase font-bold">Call Center</p>
                  <a href={SOCIAL_LINKS.PHONE} className="text-xs font-bold text-gray-800 hover:text-primary transition">+91 7338669552</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white border border-gray-150/50 shadow-sm rounded-2xl">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-450 uppercase font-bold">Email Support</p>
                  <a href={SOCIAL_LINKS.EMAIL} className="text-xs font-bold text-gray-800 hover:text-primary transition">m7338ohd@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white border border-gray-150/50 shadow-sm rounded-2xl">
                <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-gray-450 uppercase font-bold">WhatsApp Direct</p>
                  <a href={SOCIAL_LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-800 hover:text-green-550 transition">Chat Instantly</a>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="glass-panel border border-primary/10 p-6 rounded-3xl bg-white shadow-xl space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-primary/10 rounded-lg"><QrCode className="w-5 h-5 text-primary" /></div>
                <div>
                  <h3 className="font-display font-bold text-sm text-gray-800">Scan to Register</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Training • Internships • Courses</p>
                </div>
              </div>

              {/* Geometric SVG Mock QR Code */}
              <div className="flex justify-center py-4 bg-gray-50 border border-gray-100 rounded-xl">
                <svg className="w-32 h-32 text-gray-800" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="11" y="11" width="13" height="13" />
                  <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="76" y="11" width="13" height="13" />
                  <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="11" y="76" width="13" height="13" />
                  
                  <rect x="40" y="10" width="10" height="5" />
                  <rect x="55" y="5" width="5" height="15" />
                  <rect x="45" y="25" width="15" height="5" />
                  <rect x="40" y="40" width="20" height="20" />
                  <rect x="10" y="40" width="5" height="10" />
                  <rect x="25" y="45" width="10" height="5" />
                  <rect x="70" y="40" width="10" height="5" />
                  <rect x="85" y="45" width="5" height="15" />
                  
                  <rect x="40" y="70" width="10" height="10" />
                  <rect x="55" y="80" width="15" height="5" />
                  <rect x="75" y="70" width="5" height="10" />
                  <rect x="85" y="80" width="10" height="10" />
                </svg>
              </div>
              
              <p className="text-[10px] text-gray-400 text-center leading-relaxed font-bold uppercase">
                Scan points to <span className="text-primary font-black">academy.cognexa.com/register</span> for direct mobile signups.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlowCard className="bg-white p-8 md:p-10 border border-gray-150/50 shadow-md rounded-3xl space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-gray-800">Send Message</h3>
                <p className="text-xs text-gray-500 font-semibold mt-0.5">Connected to secure submission endpoints.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Name *" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your full name"
                    required
                  />
                  <Input 
                    label="Email *" 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Your mail address"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Contact cell number"
                  />
                  <Input 
                    label="Subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Inquiry subject"
                  />
                </div>

                <TextArea 
                  label="Message *" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Details of your request..."
                  required
                />

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full justify-center space-x-2 py-3"
                  isLoading={loading}
                >
                  <span>Submit Form</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </GlowCard>
          </div>

          {/* Google Map Section */}
          <div className="lg:col-span-12 space-y-6 pt-12 border-t border-gray-200 text-left">
            <Badge variant="primary">Map View</Badge>
            <h3 className="font-card-title">Our Headquarters Location</h3>
            <div className="w-full h-80 rounded-3xl overflow-hidden border border-gray-200 relative shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.973413957271!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                allowFullScreen={true} 
                loading="lazy"
                title="Cognexa Bangalore Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </PageBackground>
  );
}
