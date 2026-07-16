import React, { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { 
  LayoutDashboard, BookOpen, Briefcase, Award, FolderGit, User, 
  Users, ClipboardList, TrendingUp, DollarSign, Settings, LogOut, 
  Menu, X, Bell, Shield, ArrowLeft
} from 'lucide-react';

interface DashboardLayoutProps {
  role: 'student' | 'mentor' | 'admin';
}

export default function DashboardLayout({ role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Auth Redirect check for Student Portal
  const currentStudent = localStorage.getItem('cognexa_current_student');
  if (role === 'student' && !currentStudent) {
    return <Navigate to="/student/login" replace />;
  }

  const getRoleLinks = () => {
    switch (role) {
      case 'student':
        return [
          { name: 'Dashboard', path: '/student/dashboard', icon: LayoutDashboard },
          { name: 'My Courses', path: '/student/dashboard?tab=courses', icon: BookOpen },
          { name: 'My Internships', path: '/student/dashboard?tab=internships', icon: Briefcase },
          { name: 'Certificates', path: '/student/dashboard?tab=certificates', icon: Award },
          { name: 'Projects & Tasks', path: '/student/dashboard?tab=projects', icon: FolderGit },
          { name: 'My Profile', path: '/student/dashboard?tab=profile', icon: User },
          { name: 'Downloads', path: '/student/dashboard?tab=downloads', icon: ClipboardList },
          { name: 'Notifications', path: '/student/dashboard?tab=notifications', icon: Bell },
          { name: 'Settings', path: '/student/dashboard?tab=settings', icon: Settings }
        ];
      case 'mentor':
        return [
          { name: 'Dashboard', path: '/mentor/dashboard', icon: LayoutDashboard },
          { name: 'Student Registry', path: '/mentor/dashboard?tab=students', icon: Users },
          { name: 'Project Reviews', path: '/mentor/dashboard?tab=projects', icon: FolderGit },
          { name: 'Assignments Queue', path: '/mentor/dashboard?tab=assignments', icon: ClipboardList },
          { name: 'Attendance log', path: '/mentor/dashboard?tab=attendance', icon: ClipboardList },
          { name: 'Issue Certificates', path: '/mentor/dashboard?tab=certificates', icon: Award },
          { name: 'My Profile', path: '/mentor/dashboard?tab=profile', icon: User }
        ];
      case 'admin':
        return [
          { name: 'Telemetry & Analytics', path: '/admin/dashboard', icon: TrendingUp },
          { name: 'Student Manager', path: '/admin/dashboard?tab=students', icon: Users },
          { name: 'Courses Config', path: '/admin/dashboard?tab=courses', icon: BookOpen },
          { name: 'Internships Config', path: '/admin/dashboard?tab=internships', icon: Briefcase },
          { name: 'Products Suite', path: '/admin/dashboard?tab=products', icon: Shield },
          { name: 'Blogs Authoring', path: '/admin/dashboard?tab=blogs', icon: ClipboardList },
          { name: 'Certificates Log', path: '/admin/dashboard?tab=certificates', icon: Award },
          { name: 'Platform Settings', path: '/admin/dashboard?tab=settings', icon: Settings }
        ];
    }
  };

  const links = getRoleLinks();

  return (
    <div className="min-h-screen bg-bg-dark text-white flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 glass-panel border-r border-white/5 bg-bg-card/40 p-6">
        {/* Brand/Role */}
        <div className="flex flex-col space-y-4 mb-10">
          <Link to="/" className="flex items-center space-x-2 text-xs font-semibold text-gray-400 hover:text-white transition">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portal</span>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-display font-black text-sm tracking-wide text-white uppercase">{role} Portal</h3>
              <p className="text-[10px] text-gray-400 capitalize">Cognexa Digital Shell</p>
            </div>
          </div>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-grow space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname + location.search === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-xs font-medium transition duration-200 ${
                  isActive 
                    ? 'bg-primary/20 text-white border border-primary/30' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Log Out */}
        <div className="pt-6 border-t border-white/5">
          <Link 
            to="/" 
            onClick={() => { localStorage.removeItem('cognexa_current_student'); }}
            className="flex items-center space-x-3 px-4 py-3 text-xs font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition"
          >
            <LogOut className="w-4.5 h-4.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 border-b border-white/5 bg-bg-card/25 flex items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="font-display font-bold text-sm tracking-wide text-white capitalize md:block hidden">
              {role} Workspace
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <div className="flex items-center space-x-3 pl-3 border-l border-white/10">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                U
              </div>
              <div className="hidden lg:block">
                <h4 className="text-xs font-semibold text-white">Guest User</h4>
                <p className="text-[10px] text-gray-400 capitalize">{role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Outlet */}
        <main className="flex-grow p-6 md:p-8 bg-[#0b0c16]">
          <Outlet />
        </main>
      </div>

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden bg-bg-dark/80 backdrop-blur-sm">
          <div className="w-64 bg-bg-dark border-r border-white/10 p-6 flex flex-col h-full animate-slide-in">
            <div className="flex justify-between items-center mb-8">
              <span className="font-display font-black text-sm tracking-wide text-white">{role} PORTAL</span>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-grow space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname + location.search === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-xs font-medium transition duration-200 ${
                      isActive 
                        ? 'bg-primary/20 text-white border border-primary/30' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>
            <div className="pt-6 border-t border-white/5">
              <Link 
                to="/" 
                onClick={() => { localStorage.removeItem('cognexa_current_student'); }}
                className="flex items-center space-x-3 px-4 py-3 text-xs font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 rounded-lg transition"
              >
                <LogOut className="w-4.5 h-4.5" />
                <span>Exit Portal</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
