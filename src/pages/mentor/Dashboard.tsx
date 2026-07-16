import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Users, FolderGit, ClipboardList, CheckCircle2, 
  MessageSquare, Star, ArrowRight, UserCheck, Award, User, Clock, Save
} from 'lucide-react';
import { MentorService, MentorStudent, SubmissionToReview } from '@/services/MentorService';
import { useToast } from '@/contexts/ToastContext';
import Button from '@/components/Button';
import { GlowCard } from '@/components/Card';
import Badge from '@/components/Badge';
import { TextArea, Input } from '@/components/Input';

export default function MentorDashboard() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') || 'overview';
  const { showToast } = useToast();

  const [students, setStudents] = useState<MentorStudent[]>([]);
  const [submissions, setSubmissions] = useState<SubmissionToReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState<Record<string, string>>({});

  // Mentor profile state
  const [profile, setProfile] = useState({
    name: "Dr. Aryan Sharma",
    role: "Senior Systems Architect / Mentor",
    email: "aryan.sharma@mentor.cognexa.com",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
    bio: "Ex-Stripe Systems Lead. Hand-holding junior developers through high-stress database architectures.",
    experience: "12 Years in SaaS & Distributed Databases"
  });

  useEffect(() => {
    const fetchData = async () => {
      const s = await MentorService.getStudents();
      const sub = await MentorService.getSubmissionsForReview();
      setStudents(s);
      setSubmissions(sub);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleFeedbackChange = (id: string, text: string) => {
    setFeedback((prev) => ({ ...prev, [id]: text }));
  };

  const submitFeedback = (id: string) => {
    if (!feedback[id]) {
      showToast("Please enter feedback before submitting.", "error");
      return;
    }
    showToast(`Feedback submitted for review #${id}`, "success");
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
  };

  // Log attendance simulator
  const toggleAttendance = (studentId: string) => {
    setStudents((prev) => 
      prev.map((s) => {
        if (s.id === studentId) {
          const nextAtt = s.attendance >= 100 ? 90 : s.attendance + 2;
          showToast(`Updated attendance for ${s.name} to ${nextAtt}%`, "success");
          return { ...s, attendance: nextAtt };
        }
        return s;
      })
    );
  };

  // Issue Certificate action
  const issueCertificate = (studentName: string) => {
    showToast(`Cryptographic Certificate generated for ${studentName}`, "success");
  };

  if (loading) {
    return <div className="text-gray-400 text-xs uppercase animate-pulse">Loading mentor environment...</div>;
  }

  return (
    <div className="space-y-8 text-left">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="font-card-title text-white">Mentor Workspace</h1>
          <p className="text-xs text-gray-400">Assigned Cohorts: 3 • Active Reviews Pending: {submissions.length}</p>
        </div>
        <Badge variant="secondary" className="py-1 px-3">Senior Tech Lead</Badge>
      </div>

      {/* 1. OVERVIEW */}
      {tab === 'overview' && (
        <div className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-primary/20 rounded-xl"><Users className="w-5 h-5 text-primary" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Students Assigned</h4>
                <p className="text-xl font-bold text-white">{students.length}</p>
              </div>
            </GlowCard>

            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-secondary/20 rounded-xl"><FolderGit className="w-5 h-5 text-secondary" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Pending Reviews</h4>
                <p className="text-xl font-bold text-white">{submissions.length}</p>
              </div>
            </GlowCard>

            <GlowCard className="bg-[#11142A]/40 flex items-center space-x-4 p-5 border-white/5">
              <div className="p-3 bg-accent/20 rounded-xl"><UserCheck className="w-5 h-5 text-accent" /></div>
              <div>
                <h4 className="text-[10px] text-gray-500 uppercase font-bold">Graduation Referrals</h4>
                <p className="text-xl font-bold text-white">2 Issued</p>
              </div>
            </GlowCard>
          </div>
        </div>
      )}

      {/* 2. STUDENT REGISTRY */}
      {tab === 'students' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Managed Students</h2>
          <div className="grid grid-cols-1 gap-4">
            {students.map((student) => (
              <GlowCard key={student.id} className="bg-[#11142A]/30 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-white/5">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-white text-base">{student.name}</h3>
                  <p className="text-xs text-gray-400">Class: <span className="text-primary font-semibold">{student.course}</span></p>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
                  <div className="text-right">
                    <p className="text-[10px] text-gray-500 uppercase">Attendance</p>
                    <p className="font-bold text-white">{student.attendance}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-500 uppercase">Project</p>
                    <p className="font-bold text-white">{student.projectStatus}</p>
                  </div>
                  <Badge variant="gray">{student.lastActive}</Badge>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 3. PROJECT REVIEWS & ASSIGNMENTS */}
      {(tab === 'projects' || tab === 'assignments') && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Code Review Queue</h2>
          {submissions.length === 0 ? (
            <div className="p-8 border border-white/5 bg-[#11142A]/20 rounded-2xl text-center text-gray-500 text-xs">
              All student repositories reviewed and merged!
            </div>
          ) : (
            <div className="space-y-6">
              {submissions.map((sub) => (
                <GlowCard key={sub.id} className="bg-[#11142A]/30 p-6 space-y-4 border-white/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display font-bold text-white text-sm">{sub.projectName}</h3>
                      <p className="text-xs text-gray-400">Student: {sub.studentName} • Course: {sub.courseTitle}</p>
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase">{sub.submittedAt}</span>
                  </div>

                  <div className="space-y-3">
                    <TextArea
                      placeholder="Add system review comments..."
                      value={feedback[sub.id] || ''}
                      onChange={(e) => handleFeedbackChange(sub.id, e.target.value)}
                    />
                    <div className="flex justify-end gap-2">
                      <Button variant="glass" size="sm" onClick={() => submitFeedback(sub.id)}>
                        Approve & Merge
                      </Button>
                      <Button variant="secondary" size="sm" onClick={() => submitFeedback(sub.id)}>
                        Submit Review
                      </Button>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 4. ATTENDANCE LOG */}
      {tab === 'attendance' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Attendance Log Sheet</h2>
          <div className="space-y-4">
            {students.map((student) => (
              <GlowCard key={student.id} className="bg-[#11142A]/30 p-5 flex justify-between items-center border-white/5">
                <div>
                  <h4 className="text-xs font-bold text-white">{student.name}</h4>
                  <p className="text-[10px] text-gray-500">{student.course}</p>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-xs text-white font-semibold">{student.attendance}% Attendance</span>
                  <Button variant="glass" size="sm" onClick={() => toggleAttendance(student.id)}>
                    Log Daily Clock-in
                  </Button>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 5. ISSUE CERTIFICATES */}
      {tab === 'certificates' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Graduation Certificates Control</h2>
          <div className="space-y-4">
            {students.map((student) => (
              <GlowCard key={student.id} className="bg-[#11142A]/30 p-5 flex justify-between items-center border-white/5">
                <div>
                  <h4 className="text-xs font-bold text-white">{student.name}</h4>
                  <p className="text-[10px] text-gray-500">Project Status: <span className="text-primary font-bold">{student.projectStatus}</span></p>
                </div>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="space-x-1.5"
                  onClick={() => issueCertificate(student.name)}
                  disabled={student.projectStatus !== 'Approved'}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Issue Certificate</span>
                </Button>
              </GlowCard>
            ))}
          </div>
        </div>
      )}

      {/* 6. PROFILE */}
      {tab === 'profile' && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-lg font-display font-semibold text-white">Mentor Profile Configuration</h2>
          <GlowCard className="bg-[#11142A]/40 border-white/5 p-8 max-w-2xl">
            <form onSubmit={(e) => { e.preventDefault(); showToast("Mentor settings updated.", "success"); }} className="space-y-4">
              <div className="flex items-center space-x-4 border-b border-white/5 pb-4">
                <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-full border border-primary/40 object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-white">{profile.name}</h4>
                  <span className="text-[10px] text-gray-500 uppercase">{profile.role}</span>
                </div>
              </div>

              <Input 
                label="Full Name" 
                value={profile.name} 
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                required
              />

              <Input 
                label="Professional Domain Experience" 
                value={profile.experience} 
                onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
                required
              />

              <TextArea 
                label="Biography Description" 
                value={profile.bio} 
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              />

              <div className="pt-2">
                <Button type="submit" variant="secondary" className="space-x-1.5 py-2.5">
                  <Save className="w-4 h-4" />
                  <span>Save Mentor settings</span>
                </Button>
              </div>
            </form>
          </GlowCard>
        </div>
      )}

    </div>
  );
}
