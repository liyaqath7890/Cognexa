import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  BookOpen, Briefcase, Award, FolderGit, 
  User, CheckCircle2, Clock, Bell, Settings, 
  Download, Play, Upload, Save, Lock, ArrowRight, ShieldCheck
} from 'lucide-react';
import { useToast } from '@/contexts/ToastContext';
import Button from '@/components/Button';
import { GlowCard } from '@/components/Card';
import Badge from '@/components/Badge';
import { Input, TextArea } from '@/components/Input';

interface StudentProfile {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  avatar: string;
  bio?: string;
  skills?: string;
}

export default function StudentDashboard() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'overview';
  const { showToast } = useToast();

  // Local Storage State Hook
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  
  // Mock interactive datasets mapped to student state
  const [courses, setCourses] = useState([
    { id: "mern-stack", title: "Full Stack Development with MERN", progress: 68, mentor: "Dr. Aryan Sharma", nextLesson: "Module 3: Mongoose Complex Aggregations", attendanceRate: 92 },
    { id: "react-19", title: "React 19 & Next.js Deep Dive", progress: 25, mentor: "Liam Chen", nextLesson: "Module 1: New Suspense Architecture", attendanceRate: 100 },
    { id: "devops", title: "DevOps & Cloud Orchestration", progress: 10, mentor: "Sophia Martinez", nextLesson: "Module 1: Docker Containerization rules", attendanceRate: 85 }
  ]);

  const [internships, setInternships] = useState([
    { id: "saas-engineering", title: "Enterprise SaaS Industry Internship", status: "In Progress", duration: "3 Months", mentor: "Dr. Aryan Sharma", lorStatus: "Requested" }
  ]);

  const [assignments, setAssignments] = useState([
    { id: "assign-1", title: "Build MVC REST Server API", courseTitle: "Full Stack Development with MERN", dueDate: "July 25, 2026", status: "Pending", grade: "" },
    { id: "assign-2", title: "React Hooks Optimization Challenge", courseTitle: "React 19 & Next.js Deep Dive", dueDate: "July 12, 2026", status: "Graded", grade: "A+" }
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, title: "Linter check completed", message: "Your repo for MVC REST Server passed ESLint checks cleanly.", date: "Today" },
    { id: 2, title: "Assignment Graded", message: "Mentor Liam Chen graded React Hooks Challenge as A+.", date: "Yesterday" },
    { id: 3, title: "System Sync complete", message: "Secure sandbox schema initialized successfully.", date: "3 days ago" }
  ]);

  const [downloads] = useState([
    { title: "MERN Core Architecture syllabus.pdf", size: "2.4 MB" },
    { title: "Enterprise database schema isolations.pdf", size: "1.8 MB" },
    { title: "React 19 Suspense cheat-sheet.pdf", size: "850 KB" }
  ]);

  // Active sandbox player mockup
  const [playingCourse, setPlayingCourse] = useState<string | null>(null);
  
  // Settings Form State
  const [passwordForm, setPasswordForm] = useState({ oldPassword: '', newPassword: '' });

  // Sync profile details on load
  useEffect(() => {
    const session = localStorage.getItem('cognexa_current_student');
    if (session) {
      const parsed = JSON.parse(session);
      // Ensure fallbacks for editable bio/skills
      setProfile({
        ...parsed,
        bio: parsed.bio || "Full stack engineering student focusing on clean architectures and secure systems.",
        skills: parsed.skills || "React 19, TypeScript, Node.js, Express, PostgreSQL"
      });
    }
  }, []);

  // Update profile handler
  const saveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    // Save to session
    localStorage.setItem('cognexa_current_student', JSON.stringify(profile));

    // Update inside accounts catalog list
    const storedAccounts = JSON.parse(localStorage.getItem('cognexa_student_accounts') || '[]');
    const updatedAccounts = storedAccounts.map((acc: any) => 
      acc.email === profile.email ? { ...acc, name: profile.name, bio: profile.bio, skills: profile.skills } : acc
    );
    localStorage.setItem('cognexa_student_accounts', JSON.stringify(updatedAccounts));
    showToast("Profile telemetry saved to storage.", "success");
  };

  // Launch mock player action
  const playLesson = (courseId: string) => {
    setPlayingCourse(courseId);
    showToast("Booting compiler video player...", "info");
  };

  const advanceProgress = (courseId: string) => {
    setCourses((prev) => 
      prev.map((c) => {
        if (c.id === courseId) {
          const nextProg = Math.min(c.progress + 10, 100);
          showToast(`Lesson completed! Progress is now ${nextProg}%`, "success");
          return { ...c, progress: nextProg };
        }
        return c;
      })
    );
  };

  // File submit mockup
  const submitAssignment = (assignId: string) => {
    setAssignments((prev) => 
      prev.map((a) => {
        if (a.id === assignId) {
          showToast(`Assignment ${a.title} submitted to reviewer.`, "success");
          return { ...a, status: "Submitted" };
        }
        return a;
      })
    );
  };

  // Change password handler
  const changePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile || !passwordForm.newPassword) return;

    const storedAccounts = JSON.parse(localStorage.getItem('cognexa_student_accounts') || '[]');
    const updatedAccounts = storedAccounts.map((acc: any) => 
      acc.email === profile.email ? { ...acc, password: passwordForm.newPassword } : acc
    );
    localStorage.setItem('cognexa_student_accounts', JSON.stringify(updatedAccounts));
    showToast("Security security code updated.", "success");
    setPasswordForm({ oldPassword: '', newPassword: '' });
  };

  // Trigger browser print for cryptographic certificate
  const printCertificate = () => {
    window.print();
  };

  if (!profile) {
    return <div className="text-gray-400 text-xs uppercase animate-pulse">Loading dashboard telemetry...</div>;
  }

  return (
    <div className="space-y-8 text-left max-w-5xl mx-auto">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="font-card-title text-white">Welcome back, {profile.name}</h1>
          <p className="text-xs text-gray-500">Student ID: {profile.id} • Registered email: {profile.email}</p>
        </div>
        <Badge variant="primary" className="py-1 px-3">Active Cohort Developer</Badge>
      </div>

      {/* 1. OVERVIEW VIEW */}
      {tab === 'overview' && (
        <div className="space-y-8 animate-fade-in">
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-primary/20 rounded-xl"><BookOpen className="w-5 h-5 text-primary" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Incubated Courses</h4>
                <p className="text-xl font-bold text-white">{courses.length}</p>
              </div>
            </GlowCard>

            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-secondary/20 rounded-xl"><Briefcase className="w-5 h-5 text-secondary" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">SaaS Internships</h4>
                <p className="text-xl font-bold text-white">{internships.length}</p>
              </div>
            </GlowCard>

            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-accent/20 rounded-xl"><FolderGit className="w-5 h-5 text-accent" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Pending Tasks</h4>
                <p className="text-xl font-bold text-white">
                  {assignments.filter(a => a.status === 'Pending').length}
                </p>
              </div>
            </GlowCard>
          </div>

          {/* Enrolled Courses Progress */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Academic Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course) => (
                <GlowCard key={course.id} className="bg-[#11142A]/20 p-6 space-y-4 border-white/5">
                  <div className="flex justify-between items-start">
                    <h4 className="font-display font-semibold text-sm text-white">{course.title}</h4>
                    <span className="text-xs text-primary font-bold">{course.progress}%</span>
                  </div>
                  
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500" style={{ width: `${course.progress}%` }}></div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-gray-500 pt-2 border-t border-white/5">
                    <span>Lead: {course.mentor}</span>
                    <span>Attendance: {course.attendanceRate}%</span>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. COURSES TAB */}
      {tab === 'courses' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Course Player Terminal</h2>
          
          {playingCourse && (
            <GlowCard className="bg-[#11142A]/60 border-[#6C3BFF]/40 p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-bold uppercase text-white tracking-wide">
                  Now playing: {courses.find(c => c.id === playingCourse)?.title}
                </h3>
                <button 
                  onClick={() => setPlayingCourse(null)}
                  className="text-xs text-red-400 hover:text-red-300 font-bold"
                >
                  Close Player
                </button>
              </div>

              {/* Video simulator */}
              <div className="w-full h-64 bg-black rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent flex flex-col items-center justify-center space-y-3 z-10">
                  <Play className="w-12 h-12 text-[#B794FF] animate-pulse" />
                  <span className="text-xs text-gray-400 font-display uppercase tracking-widest">Streaming lesson compilation...</span>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" size="sm" onClick={() => advanceProgress(playingCourse)}>
                  Complete Current Segment (+10% Progress)
                </Button>
              </div>
            </GlowCard>
          )}

          <div className="space-y-4">
            {courses.map((course) => (
              <GlowCard key={course.id} className="bg-[#11142A]/30 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-white/5">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-white text-base">{course.title}</h3>
                  <p className="text-xs text-gray-400">Next Sprint: <span className="text-secondary">{course.nextLesson}</span></p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-[10px] text-gray-500 uppercase">Syllabus Progress</p>
                    <p className="text-xs font-semibold text-white">{course.progress}%</p>
                  </div>
                  <Button variant="glass" size="sm" onClick={() => playLesson(course.id)}>Launch Player</Button>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 3. INTERNSHIPS TAB */}
      {tab === 'internships' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">SaaS Internships Panel</h2>
          <div className="space-y-4">
            {internships.map((track) => (
              <GlowCard key={track.id} className="bg-[#11142A]/30 p-6 space-y-4 border-white/5">
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-bold text-white text-base">{track.title}</h3>
                  <Badge variant={track.status === 'In Progress' ? 'primary' : 'success'}>{track.status}</Badge>
                </div>
                <p className="text-xs text-gray-400">Duration: {track.duration} • Assigned Mentor Architect: {track.mentor}</p>
                
                {/* Visual checkpoint steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[10px] text-gray-500 uppercase font-bold text-center">
                  <div className="p-2 bg-white/5 rounded border border-primary/20 text-[#B794FF]">1. Spec Onboarded</div>
                  <div className="p-2 bg-white/5 rounded border border-white/5">2. Sprint Review</div>
                  <div className="p-2 bg-white/5 rounded border border-white/5">3. Merge Approval</div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Cryptographic Letter of Recommendation (LOR)</span>
                  <Badge variant="warning">{track.lorStatus}</Badge>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 4. CERTIFICATES TAB */}
      {tab === 'certificates' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Signed Cryptographic Credentials</h2>
          
          {/* Certificate Print Preview */}
          <div 
            id="print-certificate"
            className="w-full max-w-2xl border-4 border-[#8A5BFF]/60 bg-[#11142A] p-6 md:p-10 rounded-3xl relative overflow-hidden space-y-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C3BFF]/5 to-transparent pointer-events-none"></div>
            
            {/* Header branding */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left gap-4">
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-widest uppercase">Cognexa Technologies</h3>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Verifiable Academy Credentials Ledger</span>
              </div>
              <ShieldCheck className="w-12 h-12 text-[#B794FF] flex-shrink-0" />
            </div>

            {/* Main credentials text */}
            <div className="space-y-4 text-center py-6">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">This certifies that developer</span>
              <h2 className="text-3xl font-display font-extrabold text-white text-gradient-purple">{profile.name}</h2>
              <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                has successfully compiled all projects, resolved strict lint checklists, and completed curriculum sprints for
              </p>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Full Stack Systems Engineering</h4>
            </div>

            {/* Cryptographic hash ledger code */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-[9px] text-gray-500 pt-6 border-t border-white/5 font-mono gap-4 w-full text-center sm:text-left">
              <div>
                <p>CREDENTIAL HASH: sha256:0x{profile.id}a90c2b1875e39d5b</p>
                <p>DATE ISSUED: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="text-center sm:text-right">
                <p>SIGNATURE KEY: COGNEXA-ACADEMY-SECURE</p>
                <p>STATUS: VERIFIED LEDGER ACTIVE</p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-start">
            <Button variant="secondary" size="md" className="space-x-1.5" onClick={printCertificate}>
              <Download className="w-4 h-4" />
              <span>Print / Download Certificate</span>
            </Button>
          </div>
        </div>
      )}

      {/* 5. PROJECTS & TASKS TAB */}
      {tab === 'projects' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Active Sprints & Project Uploads</h2>
          <div className="space-y-4">
            {assignments.map((assign) => (
              <GlowCard key={assign.id} className="bg-[#11142A]/30 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-white/5">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-white text-sm">{assign.title}</h3>
                  <p className="text-[10px] text-gray-500">{assign.courseTitle}</p>
                  <p className="text-[10px] text-[#B794FF]">Due target: {assign.dueDate}</p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-[10px] text-gray-500 uppercase">Review Status</p>
                    <p className={`text-xs font-semibold ${assign.status === 'Graded' ? 'text-green-400' : 'text-yellow-400'}`}>{assign.status}</p>
                  </div>
                  {assign.grade && (
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center font-bold text-green-400 text-xs">
                      {assign.grade}
                    </div>
                  )}
                  {assign.status === 'Pending' ? (
                    <Button variant="glass" size="sm" className="space-x-1.5" onClick={() => submitAssignment(assign.id)}>
                      <Upload className="w-3.5 h-3.5" />
                      <span>Submit Code</span>
                    </Button>
                  ) : (
                    <Badge variant="gray">Locked</Badge>
                  )}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 6. PROFILE TAB */}
      {tab === 'profile' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Student Developer Profile</h2>
          <GlowCard className="bg-[#11142A]/40 border-white/5 p-8 max-w-2xl">
            <form onSubmit={saveProfile} className="space-y-4">
              <div className="flex items-center space-x-4 border-b border-white/5 pb-4">
                <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-full border border-primary/40 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white">{profile.name}</h4>
                  <span className="text-[10px] text-gray-500 uppercase">ID: {profile.id}</span>
                </div>
              </div>

              <Input 
                label="Display Name" 
                value={profile.name} 
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                placeholder="Your name"
                required
              />

              <TextArea 
                label="Developer Bio" 
                value={profile.bio} 
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                placeholder="A short summary of your tech stack interests..."
              />

              <Input 
                label="Core Technologies & Frameworks" 
                value={profile.skills} 
                onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                placeholder="React 19, TypeScript, etc."
              />

              <div className="pt-2">
                <Button type="submit" variant="secondary" className="space-x-1.5 py-2.5">
                  <Save className="w-4 h-4" />
                  <span>Save Profile</span>
                </Button>
              </div>
            </form>
          </GlowCard>
        </div>
      )}

      {/* 7. DOWNLOADS TAB */}
      {tab === 'downloads' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Syllabus PDF Materials</h2>
          <div className="space-y-4">
            {downloads.map((doc, idx) => (
              <GlowCard key={idx} className="bg-[#11142A]/30 p-5 flex justify-between items-center border-white/5">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white">{doc.title}</h4>
                  <span className="text-[10px] text-gray-500 uppercase">{doc.size}</span>
                </div>
                <Button variant="glass" size="sm" className="space-x-1" onClick={() => showToast(`Downloaded ${doc.title}`, "success")}>
                  <Download className="w-3.5 h-3.5" />
                  <span>Get PDF</span>
                </Button>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 8. NOTIFICATIONS TAB */}
      {tab === 'notifications' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Workspace Alerts</h2>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div key={notif.id} className="p-5 bg-[#11142A]/40 border border-white/5 rounded-2xl flex items-start space-x-3.5 hover:border-[#6C3BFF]/20 transition">
                <div className="p-2 bg-[#6C3BFF]/20 rounded-lg mt-0.5"><Bell className="w-4.5 h-4.5 text-[#B794FF]" /></div>
                <div className="space-y-1 text-left">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{notif.title}</h4>
                    <span className="text-[9px] text-gray-500 uppercase font-bold">{notif.date}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{notif.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9. SETTINGS TAB */}
      {tab === 'settings' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Portal Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlowCard className="bg-[#11142A]/40 border-white/5 p-6 space-y-4">
              <h3 className="font-card-title text-white text-base">Change Security Credentials</h3>
              <form onSubmit={changePassword} className="space-y-3">
                <Input 
                  label="Current Password" 
                  type="password" 
                  value={passwordForm.oldPassword} 
                  onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
                  placeholder="Old key code"
                  required
                />
                <Input 
                  label="New Password" 
                  type="password" 
                  value={passwordForm.newPassword} 
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  placeholder="New key code"
                  required
                />
                <Button type="submit" variant="secondary" className="w-full justify-center text-xs py-2.5 space-x-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Update Password</span>
                </Button>
              </form>
            </GlowCard>

            <GlowCard className="bg-[#11142A]/40 border-white/5 p-6 space-y-4">
              <h3 className="font-card-title text-white text-base">Account Maintenance</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Ensure local storage records are cleared before submitting credentials to recruiters.</p>
              <div className="pt-2">
                <Button 
                  variant="glow" 
                  className="w-full justify-center text-xs py-2.5" 
                  onClick={() => {
                    localStorage.removeItem('cognexa_current_student');
                    showToast("Session cleared successfully.", "success");
                    window.location.reload();
                  }}
                >
                  Clear Account Session
                </Button>
              </div>
            </GlowCard>
          </div>
        </div>
      )}

    </div>
  );
}
