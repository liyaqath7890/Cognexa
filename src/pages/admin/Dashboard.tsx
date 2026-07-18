import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  TrendingUp, Users, BookOpen, Shield, 
  DollarSign, Activity, Settings, ArrowRight, 
  Trash2, Plus, Edit, ShieldCheck, Heart, Radio, Save
} from 'lucide-react';
import { AdminService, AdminTelemetry, PaymentLog } from '@/services/AdminService';
import { useToast } from '@/contexts/ToastContext';
import Button from '@/components/Button';
import { GlowCard } from '@/components/Card';
import Badge from '@/components/Badge';
import { Input } from '@/components/Input';

export default function AdminDashboard() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'overview';
  const { showToast } = useToast();

  const [telemetry, setTelemetry] = useState<AdminTelemetry | null>(null);
  const [payments, setPayments] = useState<PaymentLog[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock datasets for Admin tables
  const [students, setStudents] = useState([
    { id: "STU-8872", name: "Alex Johnson", email: "alex.j@gmail.com", course: "MERN Stack", status: "Active" },
    { id: "STU-9912", name: "Sarah Connor", email: "sarah.c@gmail.com", course: "React 19 Deep Dive", status: "Active" },
    { id: "STU-4409", name: "Bruce Wayne", email: "bwayne@wayne.co", course: "DevOps & Cloud", status: "Inactive" }
  ]);

  const [courses, setCourses] = useState([
    { id: "mern", name: "Full Stack Development with MERN", price: "$299", activeStudents: 140 },
    { id: "react", name: "React 19 & Next.js Deep Dive", price: "$199", activeStudents: 85 },
    { id: "devops", name: "DevOps & Cloud Orchestration", price: "$249", activeStudents: 42 }
  ]);

  const [internships, setInternships] = useState([
    { id: "saas", title: "Enterprise SaaS Industry Internship", openPositions: 15, duration: "3 Months" },
    { id: "ai", title: "AI Research Deep Learning Internship", openPositions: 8, duration: "6 Months" }
  ]);

  const [blogs, setBlogs] = useState([
    { id: 1, title: "React 19 Suspense Architecture Analysis", author: "Liam Chen", status: "Published" },
    { id: 2, title: "Database isolation strategies in microservices", author: "Dr. Aryan Sharma", status: "Draft" }
  ]);

  const [certificates, setCertificates] = useState([
    { id: "CERT-90A8", name: "Alex Johnson", course: "MERN Stack", hash: "sha256:0x8872a90c2b..." },
    { id: "CERT-33C2", name: "Sarah Connor", course: "React 19 Deep Dive", hash: "sha256:0x9912c41d1a..." }
  ]);

  // Form states for adding items
  const [newStudent, setNewStudent] = useState({ name: '', email: '', course: '' });
  const [newCourse, setNewCourse] = useState({ name: '', price: '' });

  useEffect(() => {
    const fetchData = async () => {
      const tel = await AdminService.getTelemetry();
      const pay = await AdminService.getPaymentsHistory();
      setTelemetry(tel);
      setPayments(pay);
      setLoading(false);
    };
    fetchData();
  }, []);

  const addStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.email) return;
    const added = {
      id: `STU-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newStudent.name,
      email: newStudent.email,
      course: newStudent.course || "MERN Stack",
      status: "Active"
    };
    setStudents([...students, added]);
    showToast(`Added student ${added.name}`, "success");
    setNewStudent({ name: '', email: '', course: '' });
  };

  const removeStudent = (id: string) => {
    setStudents(students.filter(s => s.id !== id));
    showToast(`Removed student record ${id}`, "success");
  };

  const addCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourse.name || !newCourse.price) return;
    const added = {
      id: `crs-${Math.floor(100 + Math.random() * 900)}`,
      name: newCourse.name,
      price: newCourse.price,
      activeStudents: 0
    };
    setCourses([...courses, added]);
    showToast(`Configured course ${added.name}`, "success");
    setNewCourse({ name: '', price: '' });
  };

  const toggleBlogPublish = (id: number) => {
    setBlogs(blogs.map(b => b.id === id ? { ...b, status: b.status === 'Published' ? 'Draft' : 'Published' } : b));
    showToast("Blog publication state swapped.", "success");
  };

  if (loading || !telemetry) {
    return <div className="text-gray-400 text-xs uppercase animate-pulse">Synchronizing system telemetry...</div>;
  }

  return (
    <div className="space-y-8 text-left">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="font-card-title text-white">System Controls</h1>
          <p className="text-xs text-gray-400">Database Pods: 4 • Server Status: Operational • Server Uptime: {telemetry.uptimeRate}</p>
        </div>
        <Badge variant="warning" className="py-1 px-3">Super Admin</Badge>
      </div>

      {/* 1. OVERVIEW & ANALYTICS */}
      {tab === 'overview' && (
        <div className="space-y-8 animate-fade-in">
          {/* Telemetry Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-primary/20 rounded-xl"><Users className="w-5 h-5 text-primary" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Total Students</h4>
                <p className="text-xl font-bold text-white">{telemetry.totalStudents}</p>
              </div>
            </GlowCard>

            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-secondary/20 rounded-xl"><Users className="w-5 h-5 text-secondary" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Active Mentors</h4>
                <p className="text-xl font-bold text-white">{telemetry.totalMentors}</p>
              </div>
            </GlowCard>

            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-accent/20 rounded-xl"><BookOpen className="w-5 h-5 text-accent" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Active Courses</h4>
                <p className="text-xl font-bold text-white">{telemetry.activeCourses}</p>
              </div>
            </GlowCard>

            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-green-500/20 rounded-xl"><DollarSign className="w-5 h-5 text-green-400" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Monthly MRR</h4>
                <p className="text-xl font-bold text-white">{telemetry.monthlyRevenue}</p>
              </div>
            </GlowCard>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <GlowCard className="lg:col-span-2 space-y-4 border-white/5 bg-[#11142A]/40">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Network Telemetry (Live)</h3>
              
              {/* Animated SVG Network Telemetry simulator */}
              <div className="h-44 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full text-primary" viewBox="0 0 400 150">
                  <path 
                    d="M 10 100 Q 50 20 100 80 T 200 40 T 300 90 T 400 60" 
                    fill="none" 
                    stroke="url(#chart-grad)" 
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="chart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C3BFF" />
                      <stop offset="100%" stopColor="#B794FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-4 left-4 flex items-center space-x-2 text-[10px] uppercase font-bold text-[#B794FF]">
                  <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                  <span>SaaS Clusters Latency: 12ms</span>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="space-y-4 border-white/5 bg-[#11142A]/40">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">SaaS Microservices Load</h3>
              <div className="space-y-3.5 text-xs text-gray-300">
                <div className="flex justify-between items-center">
                  <span>School ERP Pod</span>
                  <Badge variant="success">99.8% Load</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>PIM Commerce</span>
                  <Badge variant="success">99.9% Load</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>AI Screener Engine</span>
                  <Badge variant="success">100% Load</Badge>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      )}

      {/* 2. STUDENT MANAGER */}
      {tab === 'students' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-display font-semibold text-white">Student Manager Roster</h2>
          </div>

          {/* Add Student Form */}
          <GlowCard className="bg-[#11142A]/40 border-white/5 p-6">
            <form onSubmit={addStudent} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
              <Input 
                label="Student Name" 
                value={newStudent.name} 
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                placeholder="Name" 
                required
              />
              <Input 
                label="Student Email" 
                type="email"
                value={newStudent.email} 
                onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                placeholder="Email" 
                required
              />
              <Input 
                label="Assigned Course" 
                value={newStudent.course} 
                onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
                placeholder="Course name" 
              />
              <Button type="submit" variant="secondary" className="w-full justify-center py-2.5 space-x-1">
                <Plus className="w-4 h-4" />
                <span>Add Record</span>
              </Button>
            </form>
          </GlowCard>

          {/* Roster table */}
          <div className="glass-panel border border-white/5 rounded-2xl bg-[#11142A]/20 overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs text-gray-400 min-w-[700px]">
              <thead className="bg-white/5 text-white font-display font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Student ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Syllabus Class</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {students.map((stu) => (
                  <tr key={stu.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 font-bold text-white">{stu.id}</td>
                    <td className="px-6 py-4 text-white font-semibold">{stu.name}</td>
                    <td className="px-6 py-4">{stu.email}</td>
                    <td className="px-6 py-4">{stu.course}</td>
                    <td className="px-6 py-4"><Badge variant={stu.status === 'Active' ? 'success' : 'gray'}>{stu.status}</Badge></td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => removeStudent(stu.id)}
                        className="text-red-400 hover:text-red-300 p-1.5 cursor-pointer"
                        title="Delete Student"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. COURSES CONFIG */}
      {tab === 'courses' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Courses Catalog Builder</h2>
          
          <GlowCard className="bg-[#11142A]/40 border-white/5 p-6">
            <form onSubmit={addCourse} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <Input 
                label="New Course Name" 
                value={newCourse.name} 
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                placeholder="e.g. System Architect Master" 
                required
              />
              <Input 
                label="Pricing fee" 
                value={newCourse.price} 
                onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                placeholder="e.g. $249" 
                required
              />
              <Button type="submit" variant="secondary" className="w-full justify-center py-2.5">
                <span>Configure Course</span>
              </Button>
            </form>
          </GlowCard>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((crs) => (
              <GlowCard key={crs.id} className="bg-[#11142A]/30 border-white/5 space-y-4">
                <h3 className="font-card-title text-white text-base leading-snug">{crs.name}</h3>
                <div className="flex justify-between items-center text-xs pt-4 border-t border-white/5 text-gray-400">
                  <span>Enrolled: {crs.activeStudents}</span>
                  <span className="font-bold text-[#B794FF]">{crs.price}</span>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 4. INTERNSHIPS CONFIG */}
      {tab === 'internships' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Internships Allocation Registry</h2>
          <div className="grid grid-cols-1 gap-4">
            {internships.map((intern) => (
              <GlowCard key={intern.id} className="bg-[#11142A]/30 border-white/5 p-6 flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-white text-base leading-none">{intern.title}</h3>
                  <span className="text-[10px] text-gray-500 uppercase">{intern.duration}</span>
                </div>
                <div className="flex items-center space-x-6 text-xs text-gray-400">
                  <span>Open vacancies: {intern.openPositions}</span>
                  <Button variant="glass" size="sm">Edit Sprints</Button>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 5. PRODUCTS SUITE */}
      {tab === 'products' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">SaaS Products Modules Status</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GlowCard className="bg-[#11142A]/30 border-white/5 p-5 flex justify-between items-center">
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Cognexa School ERP</h4>
                <p className="text-[9px] text-gray-500 mt-1">Multi-tenant EdTech Suite</p>
              </div>
              <Badge variant="success">Operational</Badge>
            </GlowCard>
            <GlowCard className="bg-[#11142A]/30 border-white/5 p-5 flex justify-between items-center">
              <div>
                <h4 className="text-xs font-bold text-white uppercase">Cognexa PIM</h4>
                <p className="text-[9px] text-gray-500 mt-1">Syndicated Commerce Catalog</p>
              </div>
              <Badge variant="success">Operational</Badge>
            </GlowCard>
          </div>
        </div>
      )}

      {/* 6. BLOGS AUTHORING */}
      {tab === 'blogs' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Blogs Publisher Console</h2>
          <div className="space-y-4">
            {blogs.map((blog) => (
              <GlowCard key={blog.id} className="bg-[#11142A]/30 border-white/5 p-5 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-white leading-none">{blog.title}</h4>
                  <span className="text-[9px] text-gray-500 mt-1">Author: {blog.author}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={blog.status === 'Published' ? 'success' : 'warning'}>{blog.status}</Badge>
                  <Button variant="glass" size="sm" onClick={() => toggleBlogPublish(blog.id)}>
                    Toggle Publish
                  </Button>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 7. CERTIFICATES LOG */}
      {tab === 'certificates' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Verifiable Cryptographic Credentials Ledger</h2>
          <div className="glass-panel border border-white/5 rounded-2xl bg-[#11142A]/20 overflow-x-auto no-scrollbar">
            <table className="w-full text-left text-xs text-gray-400 min-w-[750px]">
              <thead className="bg-white/5 text-white font-display font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Certificate ID</th>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Course</th>
                  <th className="px-6 py-4">SHA256 signature hash</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {certificates.map((cert) => (
                  <tr key={cert.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 font-bold text-white">{cert.id}</td>
                    <td className="px-6 py-4 text-white font-semibold">{cert.name}</td>
                    <td className="px-6 py-4">{cert.course}</td>
                    <td className="px-6 py-4 font-mono">{cert.hash}</td>
                    <td className="px-6 py-4 text-center">
                      <Badge variant="success">Active Ledger</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 8. PLATFORM SETTINGS */}
      {tab === 'settings' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Platform Settings Control</h2>
          <GlowCard className="bg-[#11142A]/40 border-white/5 p-6 max-w-2xl space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">System Flags</h3>
              <div className="space-y-3.5 text-xs text-gray-300">
                <div className="flex justify-between items-center">
                  <span>Enforce rigid TypeScript compilation</span>
                  <Badge variant="success">ON</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Isolated database schema checks</span>
                  <Badge variant="success">ON</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Auto backup every 24 hours</span>
                  <Badge variant="success">ON</Badge>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <Button variant="secondary" className="space-x-1.5 py-2.5" onClick={() => showToast("Platform configurations synced.", "success")}>
                <Save className="w-4.5 h-4.5" />
                <span>Save configurations</span>
              </Button>
            </div>
          </GlowCard>
        </div>
      )}

    </div>
  );
}
