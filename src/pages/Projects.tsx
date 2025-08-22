import React, { useState } from 'react';
import { 
  HiCode, 
  HiStar, 
  HiExternalLink, 
  HiGlobe,
  HiCloud,
  HiDeviceMobile,
  HiLightningBolt,
  HiSparkles,
  HiCog,
  HiDatabase,
  HiServer
} from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile';
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  challenges: string[];
  solutions: string[];
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'weather-app',
      title: 'Weather Data Web Application',
      description: 'A responsive weather application that provides real-time weather data with an intuitive user interface.',
      longDescription: 'A comprehensive weather application built with modern web technologies that delivers accurate weather information with a beautiful, responsive design. The app features real-time data updates, location-based weather, and an intuitive user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API', 'Responsive Design'],
      category: 'Frontend',
      featured: true,
      highlights: [
        'Responsive UI design that works on all devices',
        'Asynchronous API calls for real-time weather data',
        'Live updates with smooth transitions',
        'Intuitive navigation and user experience',
        'Location-based weather information',
        'Beautiful weather icons and animations'
      ],
      challenges: [
        'Integrating multiple weather APIs for reliability',
        'Handling API rate limits and error states',
        'Creating responsive design for various screen sizes',
        'Optimizing performance for smooth animations',
        'Managing state for real-time updates'
      ],
      solutions: [
        'Implemented fallback API system for redundancy',
        'Created comprehensive error handling and user feedback',
        'Used CSS Grid and Flexbox for responsive layouts',
        'Optimized animations with CSS transforms and opacity',
        'Implemented efficient state management with vanilla JavaScript'
      ]
    },
    {
      id: 'multi-currency-converter',
      title: 'Multi-Currency Converter',
      description: 'A robust Java application for converting between multiple world currencies with real-time exchange rates.',
      longDescription: 'A comprehensive currency conversion tool built in Java that supports over 150+ world currencies. The application features a clean command-line interface, real-time exchange rate updates, and supports both single and batch conversions. Built with object-oriented programming principles and includes comprehensive error handling.',
      technologies: ['Java', 'Object-Oriented Programming', 'API Integration', 'Exception Handling', 'Collections Framework'],
      category: 'Backend',
      featured: false,
      highlights: [
        'Supports 150+ world currencies with real-time rates',
        'Clean command-line interface for easy usage',
        'Batch conversion capabilities for multiple amounts',
        'Comprehensive error handling and validation',
        'Modular design with reusable components',
        'Memory-efficient data structures'
      ],
      challenges: [
        'Integrating with external currency exchange APIs',
        'Handling network timeouts and API failures',
        'Managing memory for large currency datasets',
        'Implementing accurate decimal calculations',
        'Creating user-friendly error messages'
      ],
      solutions: [
        'Implemented retry mechanisms with exponential backoff',
        'Used BigDecimal for precise currency calculations',
        'Created custom exception classes for better error handling',
        'Implemented caching to reduce API calls',
        'Designed intuitive user prompts and help system'
      ]
    },
    {
      id: 'internet-speed-test',
      title: 'Internet Speed Test Website',
      description: 'A modern web application for testing internet connection speed with detailed performance metrics.',
      longDescription: 'A comprehensive internet speed testing tool that measures download, upload, and ping speeds. The website provides real-time speed testing, historical data tracking, and detailed performance analytics. Features a responsive design that works seamlessly across all devices and browsers.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs', 'Chart.js', 'Responsive Design', 'Progressive Web App'],
      category: 'Full Stack',
      featured: false,
      highlights: [
        'Real-time speed testing with visual progress indicators',
        'Comprehensive speed metrics (download, upload, ping)',
        'Historical data tracking and performance charts',
        'Responsive design for all device sizes',
        'Offline capability with service worker',
        'Share results via social media integration'
      ],
      challenges: [
        'Accurately measuring network speeds in browser environment',
        'Handling various network conditions and timeouts',
        'Creating smooth animations for progress indicators',
        'Implementing reliable offline functionality',
        'Optimizing for mobile performance'
      ],
      solutions: [
        'Used Web Streams API for accurate speed measurements',
        'Implemented progressive enhancement for better compatibility',
        'Created custom animation system with CSS transforms',
        'Used service workers for offline functionality',
        'Applied lazy loading and code splitting for performance'
      ]
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack': return HiServer;
      case 'Frontend': return HiGlobe;
      case 'Backend': return HiCog;
      case 'Mobile': return HiDeviceMobile;
      default: return HiCode;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full Stack': return 'from-purple-500 to-pink-600';
      case 'Frontend': return 'from-blue-500 to-cyan-600';
      case 'Backend': return 'from-green-500 to-emerald-600';
      case 'Mobile': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn" className="py-20 bg-gradient-to-br from-light-steel-blue/20 to-pastel-purple/20 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp" delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-steel-blue to-pastel-purple">Projects</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={400}>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                A collection of projects that showcase my skills in web development, problem-solving, and creating user-friendly applications.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Project Filters */}
      <AnimatedSection animation="fadeIn" className="py-12 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-light-steel-blue to-pastel-purple text-slate-900 shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-light-steel-blue dark:hover:text-pastel-purple hover:bg-light-steel-blue/10 dark:hover:bg-pastel-purple/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Project Section */}
      <AnimatedSection animation="fadeIn" className="py-12 bg-white text-on-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Project
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              A showcase of my most impressive work, demonstrating my skills and creativity.
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="px-3 py-1 bg-[#FFD700] text-black text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      Comprehensive Weather Application
                    </h3>
                    
                    <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                      A full-stack weather application that provides real-time weather data, forecasts, and interactive maps. Built with modern web technologies and responsive design principles.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <h4 className="text-xl font-semibold text-slate-900">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-slate-700">
                          <HiLightningBolt className="w-5 h-5 text-blue-500 mr-3" />
                          Real-time weather data and forecasts
                        </li>
                        <li className="flex items-center text-slate-700">
                          <HiLightningBolt className="w-5 h-5 text-blue-500 mr-3" />
                          Interactive maps and location services
                        </li>
                        <li className="flex items-center text-slate-700">
                          <HiLightningBolt className="w-5 h-5 text-blue-500 mr-3" />
                          Responsive design for all devices
                        </li>
                        <li className="flex items-center text-slate-700">
                          <HiLightningBolt className="w-5 h-5 text-blue-500 mr-3" />
                          Advanced search and filtering
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">HTML</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">CSS</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">JavaScript</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Weather API</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Responsive Design</span>
                    </div>
                    
                    {/* Removed View Project and View Code buttons */}
                  </div>
                  
                  {/* Project Image */}
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center text-white">
                      <HiGlobe className="w-24 h-24 mx-auto mb-4 opacity-80" />
                      <p className="text-lg opacity-90">Weather App Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* All Projects Grid */}
      <AnimatedSection animation="fadeIn" className="py-20 bg-white dark:bg-slate-900 text-on-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              All Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore my complete portfolio of projects, each showcasing different skills and technologies.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="slideUp"
                delay={index * 100}
                className="group"
              >
                <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getCategoryColor(project.category)}`}></div>
                        <span className="text-sm font-medium text-slate-600">
                          {project.category}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <HiStar className="w-4 h-4" />
                          Featured
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Removed View Details and Demo buttons */}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animation="fadeIn" className="py-20 bg-gradient-to-r from-light-steel-blue/20 to-pastel-purple/20 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="slideUp" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Have a Project in Mind?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={400}>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Let's discuss how we can bring your ideas to life!
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-light-steel-blue to-pastel-purple text-slate-900 rounded-lg font-medium hover:opacity-90 transition-colors duration-200"
              >
                <HiSparkles className="w-5 h-5" />
                Start a Project
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 dark:bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 dark:hover:bg-slate-500 transition-colors duration-200"
              >
                <HiExternalLink className="w-5 h-5" />
                Learn More About Me
              </a>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
