import React, { useEffect, useState } from 'react';
import { HiAcademicCap, HiBadgeCheck, HiExternalLink, HiCalendar, HiStar } from 'react-icons/hi';

const Certificates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [certificates, setCertificates] = useState<Array<{
    id: string;
    title: string;
    issuer: string;
    date: string;
    category: string;
    image: string;
    credentialId: string;
    url: string;
    featured: boolean;
    description: string;
  }>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const fallbackCertificates = [
    {
      id: 'aws-forage',
      title: 'Solutions Architecture Job Simulation (Forage)',
      issuer: 'AWS / Forage',
      date: 'June 24th, 2025',
      category: 'featured',
      image: `${process.env.PUBLIC_URL || ''}/images/solutions-architecture-forage.jpg`,
      credentialId: 'Forage-JobSim',
      url: 'https://www.theforage.com/virtual-internships',
      featured: true,
      description: 'Completion of AWS Solutions Architecture job simulation on Forage.'
    },
    {
      id: 'java-basic',
      title: 'Java (Basic) Certificate',
      issuer: 'HackerRank',
      date: '19 Jun, 2025',
      category: 'featured',
      image: `${process.env.PUBLIC_URL || ''}/images/java-basic-hackerrank.jpg`,
      credentialId: '24427E57CBA4',
      url: 'https://www.hackerrank.com/certificates',
      featured: true,
      description: 'HackerRank skill certification in Java (Basic).'
    },
    {
      id: 'elite-tech-intern',
      title: 'Elite Tech Intern',
      issuer: 'ELiteTech Intern',
      date: 'July 2025',
      category: 'featured',
      image: `${process.env.PUBLIC_URL || ''}/images/elite-tech-intern.jpg`,
      credentialId: 'ETI-AKO-10851',
      url: 'https://elitetechintern.com',
      featured: false,
      description: 'Successfully completed elite tech internship program, gaining hands-on experience in modern software development practices.'
    },
    {
      id: 'udemy-logo-ai',
      title: 'Professional Logo Production With Artificial Intelligence',
      issuer: 'Udemy',
      date: 'July 4, 2025',
      category: 'featured',
      image: `${process.env.PUBLIC_URL || ''}/images/udemy-logo-ai.jpg`,
      credentialId: 'UC-e125a32b-3c5a-4bd0-9ed5-42477ba5ce45',
      url: 'https://www.udemy.com/certificate/UC-e125a32b-3c5a-4bd0-9ed5-42477ba5ce45',
      featured: false,
      description: 'Certified in AI-powered logo design, demonstrating proficiency in creative design tools and artificial intelligence applications.'
    },
    {
      id: 'problem-solving-basic',
      title: 'Problem Solving (Basic) Certificate',
      issuer: 'HackerRank',
      date: '19 Jun, 2025',
      category: 'featured',
      image: `${process.env.PUBLIC_URL || ''}/images/problem-solving-basic.jpg`,
      credentialId: '9E0843758878',
      url: 'https://www.hackerrank.com/certificates',
      featured: false,
      description: 'HackerRank skill certification in Problem Solving (Basic), validating algorithmic thinking and problem-solving capabilities.'
    }
  ];

  useEffect(() => {
    const API_BASE = (process.env.REACT_APP_API_URL as string) || 'http://localhost:5000';
    const controller = new AbortController();

    async function loadCertificates() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${API_BASE}/api/certificates`, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`Failed to fetch certificates (${res.status})`);
        }
        const data = await res.json();
        const mapped = (Array.isArray(data) ? data : []).map((c: any) => ({
          id: c._id || String(c.id || c.title),
          title: c.title,
          issuer: c.issuer,
          date: c.date,
          category: c.category,
          image: c.image,
          credentialId: c.credentialId ?? '—',
          url: c.url,
          featured: Boolean(c.featured),
          description: c.description,
        }));
        // Keep selected certificates: Java Programming, AWS Solutions Architect, Java (Basic), Elite Tech Intern, Udemy Logo AI, and Problem Solving
        const selected = mapped.filter((m) => {
          const t = m.title.toLowerCase();
          return t.includes('java programming') || 
                 t.includes('solutions architect') || 
                 t.includes('java (basic)') ||
                 t.includes('elite tech intern') ||
                 t.includes('professional logo production') ||
                 t.includes('problem solving (basic)');
        });
        setCertificates(selected.length > 0 ? selected : mapped);
      } catch (err: any) {
        // Fallback to static certificates when API is unavailable
        setCertificates(fallbackCertificates);
        setError(null);
      } finally {
        setLoading(false);
      }
    }

    loadCertificates();
    return () => controller.abort();
  }, []);

  const filters = [
    { id: 'all', label: 'All Certificates' }
  ];

  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter);

  // Category styling removed per request

  return (
    <div className="min-h-screen py-20 text-on-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My Certificates
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional certifications and achievements that validate my skills and expertise in various technologies.
          </p>
        </div>

        {/* Loading / Error */}
        {loading && (
          <div className="text-center text-slate-600 dark:text-slate-300 mb-8">Loading certificates…</div>
        )}
        {error && (
          <div className="text-center text-red-600 dark:text-red-400 mb-8">{error}</div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-light-steel-blue to-pastel-purple text-slate-900 shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-light-steel-blue dark:hover:border-pastel-purple'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Featured section removed to avoid duplication */}

        {/* All Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/** Deduplicate by title to avoid repeats */}
          {filteredCertificates
            .filter((cert, idx, arr) => arr.findIndex(c => c.title.toLowerCase() === cert.title.toLowerCase()) === idx)
            .map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                {/* Always show an image with a technical default */}
                <img
                  src={cert.image || `${process.env.PUBLIC_URL || ''}/images/tech-placeholder.svg`}
                  alt={cert.title}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${process.env.PUBLIC_URL || ''}/images/tech-placeholder.svg`; }}
                  onClick={() => setPreviewSrc(cert.image || `${process.env.PUBLIC_URL || ''}/images/tech-placeholder.svg`)}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                />
                {/* Category pill removed */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-light-steel-blue dark:text-pastel-purple font-medium mb-3">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between mb-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center">
                    <HiCalendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </span>
                  <span className="flex items-center">
                    <HiBadgeCheck className="w-4 h-4 mr-1" />
                    {cert.credentialId}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setPreviewSrc(cert.image)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-light-steel-blue to-pastel-purple text-slate-900 rounded-lg hover:opacity-90 transition-all duration-200"
                  >
                    View Certificate
                  </button>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <HiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {previewSrc && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setPreviewSrc(null)}>
            <img src={previewSrc} alt="Certificate preview" className="max-w-full max-h-full rounded-lg shadow-2xl" />
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-light-steel-blue/20 to-pastel-purple/20 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Certification Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {filteredCertificates.filter((cert, idx, arr) => arr.findIndex(c => c.title.toLowerCase() === cert.title.toLowerCase()) === idx).length}
              </div>
              <div className="text-slate-600 dark:text-slate-300">Total Certificates</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Always Learning, Always Growing
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm constantly expanding my knowledge and skills through certifications, 
              courses, and hands-on experience. Let's discuss how my expertise can benefit your project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Get In Touch
              <HiExternalLink className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
