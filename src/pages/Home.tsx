import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCode, HiLightBulb, HiSparkles, HiAcademicCap, HiHeart } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';
import OptimizedImage from '../components/OptimizedImage';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn" className="relative overflow-hidden">
        {/* Remove background gradients that hide the image */}
        
        {/* Floating Background Elements - made more subtle */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 dark:bg-blue-800/20 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/20 dark:bg-purple-800/20 rounded-full animate-float animation-delay-1000 opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full animate-float animation-delay-2000 opacity-40"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile Photo Section */}
            <AnimatedSection animation="scaleIn" delay={150}>
              <div className="mx-auto mb-8 w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-400/50 to-purple-500/50 p-1 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm relative group">
                  <OptimizedImage
                    src={`${process.env.PUBLIC_URL || ''}/images/profile.jpg`}
                    alt="Portrait of Durga R - Computer Science Engineering Student"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Name and Title */}
            <AnimatedSection animation="slideUp" delay={200}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hi, I'm <span className="text-[#FFD700]">Durga R</span>
              </h1>
            </AnimatedSection>
            
            {/* Description */}
            <AnimatedSection animation="slideUp" delay={400}>
              <p className="text-xl md:text-2xl text-[#E0E0E0] mb-8 leading-relaxed">
                I'm a Computer Science Engineering student, passionate about coding, problem solving, and exploring new technologies. I'm seeking internship and placement opportunities to grow my skills and gain real-world experience.
              </p>
            </AnimatedSection>
            
            {/* Call to Action Buttons */}
            <AnimatedSection animation="slideUp" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-8 py-4 bg-[#FFD700] text-black font-semibold rounded-xl hover:bg-[#E6C200] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-[#FFD700] hover:text-[#FFD700] transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                  <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* What I Do Section - Remove white background */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I Do
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              As a Computer Science Engineering student, I focus on learning and applying modern technologies to solve real-world problems and build innovative solutions.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HiCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Web Development
                </h3>
                <p className="text-slate-700">
                  Creating responsive and interactive web applications using modern frameworks and best practices learned through coursework and projects.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={400}>
              <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HiLightBulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Problem Solving
                </h3>
                <p className="text-slate-700">
                  Applying algorithmic thinking and logical reasoning to solve complex problems efficiently and creatively.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={600}>
              <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HiSparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Modern Technologies
                </h3>
                <p className="text-slate-700">
                  Staying up-to-date with the latest technologies and frameworks to build cutting-edge solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Statistics Section */}
      <AnimatedSection animation="fadeIn" className="py-20 bg-gradient-to-r from-light-steel-blue/20 to-pastel-purple/20 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
                <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={400}>
              <div className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">3+</div>
                <div className="text-slate-600 dark:text-slate-400">Years Learning</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={600}>
              <div className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
                <div className="text-slate-600 dark:text-slate-400">Technologies</div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scaleIn" delay={800}>
              <div className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</div>
                <div className="text-slate-600 dark:text-slate-400">Dedication</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Content Cards Section */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Discover my skills, projects, and achievements in detail.
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* About Me Card */}
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                  About Me
                </h3>
                <p className="text-slate-700 text-center flex-grow">
                  Learn more about my background and journey
                </p>
              </div>
            </AnimatedSection>

            {/* Skills Card */}
            <AnimatedSection animation="slideUp" delay={400}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                  Skills
                </h3>
                <p className="text-slate-700 text-center flex-grow">
                  View my technical skills and expertise
                </p>
              </div>
            </AnimatedSection>

            {/* Projects Card */}
            <AnimatedSection animation="slideUp" delay={600}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiSparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                  Projects
                </h3>
                <p className="text-slate-700 text-center flex-grow">
                  Explore my latest projects and work
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Card */}
            <AnimatedSection animation="slideUp" delay={800}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiAcademicCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                  Contact
                </h3>
                <p className="text-slate-700 text-center flex-grow">
                  Get in touch for opportunities
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
