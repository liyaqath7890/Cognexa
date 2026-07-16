import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, User, Sparkles, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/contexts/ToastContext';
import Button from '@/components/Button';
import { GlowCard } from '@/components/Card';
import { Input } from '@/components/Input';
import Logo from '@/components/Logo';

export default function StudentLogin() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Fetch existing accounts from local storage
    const storedAccounts = JSON.parse(localStorage.getItem('cognexa_student_accounts') || '[]');

    setTimeout(() => {
      setLoading(false);

      if (mode === 'register') {
        if (!formData.name || !formData.email || !formData.password) {
          showToast("Please fill in all details.", "error");
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          showToast("Passwords do not match.", "error");
          return;
        }

        // Check if account already exists
        const exists = storedAccounts.some((acc: any) => acc.email === formData.email);
        if (exists) {
          showToast("An account with this email already exists.", "error");
          return;
        }

        // Save new user profile
        const newStudent = {
          id: `STU-${Math.floor(1000 + Math.random() * 9000)}`,
          name: formData.name,
          email: formData.email,
          password: formData.password,
          joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"
        };

        localStorage.setItem('cognexa_student_accounts', JSON.stringify([...storedAccounts, newStudent]));
        localStorage.setItem('cognexa_current_student', JSON.stringify(newStudent));
        showToast("Registration successful!", "success");
        navigate('/student/dashboard');

      } else if (mode === 'login') {
        if (!formData.email || !formData.password) {
          showToast("Please fill in all details.", "error");
          return;
        }

        // Find user account
        const user = storedAccounts.find((acc: any) => acc.email === formData.email && acc.password === formData.password);
        
        // Fallback for mock guest account
        if (formData.email === 'guest@cognexa.com' && formData.password === 'guest123') {
          const guestUser = {
            id: "STU-8872",
            name: "Alex Johnson",
            email: "guest@cognexa.com",
            joinedDate: "Jul 15, 2026",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150"
          };
          localStorage.setItem('cognexa_current_student', JSON.stringify(guestUser));
          showToast("Welcome back, Alex!", "success");
          navigate('/student/dashboard');
          return;
        }

        if (!user) {
          showToast("Invalid email or password credentials.", "error");
          return;
        }

        localStorage.setItem('cognexa_current_student', JSON.stringify(user));
        showToast(`Welcome back, ${user.name}!`, "success");
        navigate('/student/dashboard');

      } else if (mode === 'forgot') {
        if (!formData.email) {
          showToast("Please enter your email.", "error");
          return;
        }

        const user = storedAccounts.find((acc: any) => acc.email === formData.email);
        if (!user && formData.email !== 'guest@cognexa.com') {
          showToast("Account email not registered in system.", "error");
          return;
        }

        showToast(`Password recovery link dispatched to ${formData.email}`, "success");
        setMode('login');
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-bg-dark flex flex-col justify-center items-center px-6 relative overflow-hidden select-none">
      {/* Background glow meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md space-y-8 z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center space-y-4">
          <Link to="/">
            <Logo size="lg" />
          </Link>
          <div className="text-center">
            <h2 className="text-lg font-display font-bold text-white uppercase tracking-wider">
              {mode === 'login' && 'Student Login'}
              {mode === 'register' && 'Student Sandbox Register'}
              {mode === 'forgot' && 'Reset Cryptographic Key'}
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              {mode === 'login' && 'Access your cloud terminal and code review logs.'}
              {mode === 'register' && 'Create your diagnostic sandbox candidate profiles.'}
              {mode === 'forgot' && 'Retrieve password settings to your registered inbox.'}
            </p>
          </div>
        </div>

        {/* Input Panel */}
        <GlowCard className="bg-[#11142A]/60 border-white/5 p-8 space-y-6">
          <form onSubmit={handleAuth} className="space-y-4 text-left">
            {mode === 'register' && (
              <Input 
                label="Full Name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="Developer name"
                required
              />
            )}

            <Input 
              label="Email Workspace" 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              placeholder="e.g. name@student.cognexa.com"
              required
            />

            {mode !== 'forgot' && (
              <div className="relative">
                <Input 
                  label="Password" 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  value={formData.password} 
                  onChange={handleChange}
                  placeholder="Secret security code"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-[38px] text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            )}

            {mode === 'register' && (
              <Input 
                label="Confirm Password" 
                type="password" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange}
                placeholder="Re-enter security code"
                required
              />
            )}

            {mode === 'login' && (
              <div className="flex justify-end pt-1">
                <button 
                  type="button" 
                  onClick={() => setMode('forgot')}
                  className="text-[10px] uppercase tracking-wider font-bold text-[#B794FF] hover:text-white transition"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <div className="pt-2">
              <Button 
                type="submit" 
                variant="secondary" 
                className="w-full justify-center space-x-2 py-3"
                isLoading={loading}
              >
                <span>
                  {mode === 'login' && 'Unlock Workspace'}
                  {mode === 'register' && 'Register Profile'}
                  {mode === 'forgot' && 'Dispatched Code'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Toggle Modes */}
          <div className="border-t border-white/5 pt-4 text-center text-xs text-gray-500">
            {mode === 'login' && (
              <p>
                Don't have an account?{' '}
                <button 
                  onClick={() => setMode('register')} 
                  className="text-[#B794FF] font-bold hover:underline"
                >
                  Register Here
                </button>
              </p>
            )}
            {mode === 'register' && (
              <p>
                Already have an account?{' '}
                <button 
                  onClick={() => setMode('login')} 
                  className="text-[#B794FF] font-bold hover:underline"
                >
                  Login Here
                </button>
              </p>
            )}
            {mode === 'forgot' && (
              <button 
                onClick={() => setMode('login')} 
                className="text-[#B794FF] font-bold hover:underline"
              >
                Return to Login
              </button>
            )}
          </div>
        </GlowCard>

        {/* Demo Tip */}
        <div className="flex items-center justify-center space-x-2 text-[10px] text-gray-500 uppercase tracking-widest bg-white/5 py-2.5 px-4 rounded-xl border border-white/5">
          <ShieldCheck className="w-4 h-4 text-[#B794FF]" />
          <span>Demo Tip: Use <span className="text-white font-bold">guest@cognexa.com</span> / <span className="text-white font-bold">guest123</span></span>
        </div>

      </div>
    </div>
  );
}
