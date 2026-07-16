import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Clock, Award, BookOpen, User, 
  ChevronRight, Search, CheckCircle, Tag, Layers
} from 'lucide-react';
import { CourseService } from '@/services/CourseService';
import { CourseData } from '@/mock/courses';
import { GOOGLE_FORMS } from '@/constants/urls';
import Button from '@/components/Button';
import { GlowCard } from '@/components/Card';
import Badge from '@/components/Badge';
import Modal from '@/components/Modal';
import PageBackground from '@/components/PageBackground';
import { 
  ProgrammingIllustration, 
  LaptopIllustration, 
  SaaSIllustration, 
  SecurityIllustration, 
  NetworkIllustration,
  AcademyIllustration
} from '@/components/Illustration';

export default function Courses() {
  const [coursesList, setCoursesList] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [activeCourse, setActiveCourse] = useState<CourseData | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await CourseService.getAllCourses();
      setCoursesList(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  const filteredCourses = coursesList.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.mentor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  // Dynamic Course Illustration Selector
  const getCourseIllustration = (id: string) => {
    switch (id) {
      case 'mern-stack':
      case 'react':
      case 'javascript':
      case 'typescript':
      case 'rest-apis':
      case 'authentication':
        return <ProgrammingIllustration />;
      case 'java-full-stack':
      case 'java':
      case 'system-design':
        return <LaptopIllustration />;
      case 'nodejs':
      case 'expressjs':
      case 'postgresql':
      case 'mongodb':
      case 'docker':
      case 'deployment':
        return <SaaSIllustration />;
      case 'software-testing':
      case 'manual-testing':
      case 'automation-testing':
        return <SecurityIllustration />;
      case 'git-github':
      case 'cloud-basics':
        return <NetworkIllustration />;
      default:
        return <AcademyIllustration />;
    }
  };

  return (
    <PageBackground pattern="dots">
      <div className="min-h-screen pt-32 pb-24 px-6 relative text-left bg-white">
        
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <Badge variant="secondary">Bootcamp Registry</Badge>
            <h1 className="font-hero-title">
              Curriculums Designed by <span className="text-gradient-purple text-glow">Architects</span>
            </h1>
            <p className="font-subtitle max-w-xl mx-auto leading-relaxed">
              Master full stack web systems, system architectures, DevOps orchestration, and artificial intelligence models with line-by-line code reviews.
            </p>
          </div>

          {/* Filters Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-b border-gray-100 pb-6">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-450" />
              <input
                type="text"
                placeholder="Search course or mentor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-primary/45 focus:outline-none"
              />
            </div>

            {/* Level Tabs */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border whitespace-nowrap transition cursor-pointer ${
                    selectedLevel === lvl
                      ? 'bg-primary/10 text-primary border-primary/30'
                      : 'bg-transparent text-gray-500 border-gray-200 hover:text-primary hover:border-primary/50'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Listing Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-72 rounded-2xl bg-gray-50 animate-pulse border border-gray-150/50" />
              ))}
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course) => (
                  <motion.div
                    layout
                    key={course.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlowCard className="flex flex-col justify-between h-full bg-white border border-gray-150/50 shadow-sm rounded-3xl p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <Badge variant="gray">{course.level}</Badge>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">COHORT SPEC</span>
                        </div>

                        <div className="flex justify-between items-start gap-4">
                          <div className="space-y-2">
                            <h3 className="font-card-title text-xl leading-snug">{course.title}</h3>
                            <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-semibold">
                              <User className="w-3.5 h-3.5 text-primary" />
                              <span>{course.mentor}</span>
                            </div>
                          </div>
                          <div className="w-16 h-16 flex-shrink-0">
                            {getCourseIllustration(course.id)}
                          </div>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {course.technologies.slice(0, 3).map((t, idx) => (
                            <span key={idx} className="px-2.5 py-0.5 rounded bg-gray-50 border border-gray-200 text-[9px] text-gray-700 font-mono font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-xs text-gray-500 leading-relaxed min-h-[40px] font-semibold">{course.description}</p>
                      </div>

                      <div className="mt-8 border-t border-gray-100 pt-4 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Duration</p>
                          <p className="text-xs font-bold text-gray-800">{course.duration}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => setActiveCourse(course)}>
                            Syllabus
                          </Button>
                          <a href={GOOGLE_FORMS.INTERNSHIP_APPLY} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" size="sm">Enroll</Button>
                          </a>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Expandable Syllabus Drawer Modal */}
          <Modal
            isOpen={activeCourse !== null}
            onClose={() => setActiveCourse(null)}
            title={`${activeCourse?.title} - Syllabus Specifications`}
          >
            {activeCourse && (
              <div className="space-y-8 pt-4 text-left">
                
                {/* Certificate details */}
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                  <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase">
                    <Award className="w-5 h-5" />
                    <span>Cryptographic Credential Earned</span>
                  </div>
                  <p className="text-xs text-gray-750 font-bold">{activeCourse.certificate}</p>
                </div>

                {/* Course Metadata */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Lead Mentor Architect</span>
                    <p className="text-gray-800 font-bold">{activeCourse.mentor}</p>
                    <span className="text-[9px] text-gray-500 font-semibold">{activeCourse.mentorTitle}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Class Level & Duration</span>
                    <p className="text-gray-850 font-bold">{activeCourse.level} • {activeCourse.duration}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase font-bold flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-primary" />
                    <span>Technologies covered</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCourse.technologies.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded bg-gray-50 border border-gray-200 text-xs text-gray-700 font-mono font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modules Curriculum Sprints */}
                <div className="space-y-4">
                  <span className="text-[10px] text-gray-400 uppercase font-bold flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>Curriculum Sprint Roadmap</span>
                  </span>
                  <div className="relative border-l border-gray-200 pl-6 ml-3 space-y-6">
                    {activeCourse.curriculum.map((mod, idx) => (
                      <div key={idx} className="relative">
                        <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white" />
                        <div className="space-y-2">
                          <div className="flex justify-between items-baseline gap-2">
                            <h5 className="font-bold text-gray-800 text-xs">{mod.title}</h5>
                            <Badge variant="gray" className="text-[9px] font-mono px-1.5 py-0.5">{mod.duration}</Badge>
                          </div>
                          <ul className="grid grid-cols-2 gap-1 text-[11px] text-gray-500 font-semibold">
                            {mod.topics.map((top, tIdx) => (
                              <li key={tIdx} className="flex items-center space-x-1.5">
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                <span>{top}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-150">
                  <a href={GOOGLE_FORMS.INTERNSHIP_APPLY} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-full justify-center space-x-2 py-3">
                      <span>Enroll in {activeCourse.title}</span>
                      <ChevronRight className="w-4.5 h-4.5" />
                    </Button>
                  </a>
                </div>

              </div>
            )}
          </Modal>

        </div>
      </div>
    </PageBackground>
  );
}
