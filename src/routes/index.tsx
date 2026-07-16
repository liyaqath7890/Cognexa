import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import DashboardLayout from '@/layouts/DashboardLayout';

// Lazy loading all pages
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const Academy = lazy(() => import('@/pages/Academy'));
const Courses = lazy(() => import('@/pages/Courses'));
const Internships = lazy(() => import('@/pages/Internships'));
const InternshipsRegister = lazy(() => import('@/pages/InternshipsRegister'));
const Games = lazy(() => import('@/pages/Games'));
const Careers = lazy(() => import('@/pages/Careers'));
const Blog = lazy(() => import('@/pages/Blog'));
const Events = lazy(() => import('@/pages/Events'));
const SuccessStories = lazy(() => import('@/pages/SuccessStories'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Contact = lazy(() => import('@/pages/Contact'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Dashboards
const StudentLogin = lazy(() => import('@/pages/student/Login'));
const StudentDashboard = lazy(() => import('@/pages/student/Dashboard'));
const MentorDashboard = lazy(() => import('@/pages/mentor/Dashboard'));
const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'));

export default function AppRoutes() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#060816] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-lg border-2 border-primary border-t-transparent animate-spin"></div>
          <span className="text-xs text-gray-400 font-display uppercase tracking-widest animate-pulse">Loading Cognexa Shell...</span>
        </div>
      </div>
    }>
      <Routes>
        {/* Main Site Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="academy" element={<Academy />} />
          <Route path="courses" element={<Courses />} />
          <Route path="internships" element={<Internships />} />
          <Route path="internships/register" element={<InternshipsRegister />} />
          <Route path="games" element={<Games />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="events" element={<Events />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>

        {/* Dashboards */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student" element={<DashboardLayout role="student" />}>
          <Route path="dashboard" element={<StudentDashboard />} />
        </Route>
        <Route path="/mentor" element={<DashboardLayout role="mentor" />}>
          <Route path="dashboard" element={<MentorDashboard />} />
        </Route>
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
