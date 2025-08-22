import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  HiPlus, 
  HiDocumentText, 
  HiCode, 
  HiAcademicCap, 
  HiChartBar,
  HiCog,
  HiLogout,
  HiEye,
  HiPencil,
  HiTrash
} from 'react-icons/hi';
import { useAdmin } from '../contexts/AdminContext';
import AnimatedSection from '../components/AnimatedSection';

interface DashboardStats {
  certificates: number;
  projects: number;
  skills: number;
}

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAdmin();
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({ certificates: 0, projects: 0, skills: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [certRes, projRes, skillRes] = await Promise.all([
        fetch('http://localhost:5000/api/certificates'),
        fetch('http://localhost:5000/api/projects'),
        fetch('http://localhost:5000/api/skills')
      ]);

      const [certData, projData, skillData] = await Promise.all([
        certRes.json(),
        projRes.json(),
        skillRes.json()
      ]);

      setStats({
        certificates: certData.length,
        projects: projData.length,
        skills: skillData.length
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const quickActions = [
    {
      title: 'Add Certificate',
      description: 'Add a new certification or achievement',
      icon: HiAcademicCap,
      color: 'from-blue-500 to-blue-600',
      action: () => navigate('/admin/certificates/new')
    },
    {
      title: 'Add Project',
      description: 'Add a new project to showcase',
      icon: HiCode,
      color: 'from-purple-500 to-purple-600',
      action: () => navigate('/admin/projects/new')
    },
    {
      title: 'Add Skill',
      description: 'Add a new skill or technology',
      icon: HiDocumentText,
      color: 'from-green-500 to-green-600',
      action: () => navigate('/admin/skills/new')
    },
    {
      title: 'View Portfolio',
      description: 'Preview your public portfolio',
      icon: HiEye,
      color: 'from-orange-500 to-orange-600',
      action: () => navigate('/')
    }
  ];

  const navigationItems = [
    { title: 'Certificates', path: '/admin/certificates', icon: HiAcademicCap, count: stats.certificates },
    { title: 'Projects', path: '/admin/projects', icon: HiCode, count: stats.projects },
    { title: 'Skills', path: '/admin/skills', icon: HiDocumentText, count: stats.skills },
    { title: 'Settings', path: '/admin/settings', icon: HiCog, count: null }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <HiChartBar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Welcome back, {user?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                View Portfolio
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
              >
                <HiLogout className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <AnimatedSection animation="fadeIn" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Certificates</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">
                    {isLoading ? '...' : stats.certificates}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <HiAcademicCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Projects</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">
                    {isLoading ? '...' : stats.projects}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                  <HiCode className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Skills</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">
                    {isLoading ? '...' : stats.skills}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                  <HiDocumentText className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Actions */}
        <AnimatedSection animation="slideUp" delay={200} className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-left group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {action.description}
                </p>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Navigation */}
        <AnimatedSection animation="slideUp" delay={400}>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Manage Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-left group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </div>
                  {item.count !== null && (
                    <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium px-2 py-1 rounded-full">
                      {isLoading ? '...' : item.count}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  View and manage {item.title.toLowerCase()}
                </p>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AdminDashboard;










