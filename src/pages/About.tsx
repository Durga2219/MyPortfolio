import React from 'react';
import { HiBriefcase, HiAcademicCap, HiCode, HiLightBulb, HiSparkles, HiGlobe } from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn" className="py-20 bg-gradient-to-br from-light-steel-blue/20 to-pastel-purple/20 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp" delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-light-steel-blue to-pastel-purple">
                About Durga R
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={400}>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Motivated Computer Science Engineering student with a strong foundation in full-stack development. Proficient in Java, JavaScript, HTML, CSS, and database management systems. Hands-on experience in API integration and responsive web design. Certified in Java development and experienced as a Full Stack Developer intern.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* About Me Section */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Me
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                I am a passionate Computer Science Engineering student who loves turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <p className="text-lg leading-relaxed mb-6">
                  When I'm not coding or studying, you'll find me exploring new technologies, contributing to open-source projects, or working on personal projects to enhance my skills.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  My journey in technology started with a curiosity about how things work on the web, which led me to pursue Computer Science Engineering. I believe in continuous learning and staying updated with the latest industry trends.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm proficient in Java, JavaScript, HTML, CSS, and database management systems. I have hands-on experience in API integration and responsive web design. I'm certified in Java development and experienced as a Full Stack Developer intern.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <HiCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Full-Stack Development
                </h3>
                <p className="text-slate-700">
                  Frontend and backend development with modern technologies and best practices.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={400}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <HiLightBulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Problem Solving
                </h3>
                <p className="text-slate-700">
                  Analytical thinking and creative solutions for complex technical challenges.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Personal Details Section */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Personal Details
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Get to know more about my background, interests, and what drives me in the world of technology.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education Card */}
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <HiAcademicCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                  Education
                </h3>
                <p className="text-slate-700 text-center leading-relaxed flex-grow">
                  Bachelor of Engineering (B.E.) – Computer Science and Engineering at GRT Institute of Engineering and Technology.
                </p>
              </div>
            </AnimatedSection>

            {/* Skills Card */}
            <AnimatedSection animation="slideUp" delay={400}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <HiCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                  Programming Languages
                </h3>
                <div className="space-y-2 text-center flex-grow">
                  <p className="text-slate-700 font-medium">Java Advanced</p>
                  <p className="text-slate-700 font-medium">JavaScript Intermediate</p>
                  <p className="text-slate-700 font-medium">HTML/CSS Advanced</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Interests Card */}
            <AnimatedSection animation="slideUp" delay={600}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <HiLightBulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                  Areas of Interest
                </h3>
                <div className="space-y-3 text-center flex-grow">
                  <div className="flex items-center justify-center space-x-2">
                    <HiCode className="w-5 h-5 text-blue-500" />
                    <span className="text-slate-700">Web Development</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <HiLightBulb className="w-5 h-5 text-yellow-500" />
                    <span className="text-slate-700">Problem Solving</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <HiSparkles className="w-5 h-5 text-purple-500" />
                    <span className="text-slate-700">New Technologies</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Work Experience Section */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Work Experience
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                My professional journey and internship experiences that have shaped my skills and knowledge.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="relative pl-8 pb-8 border-l-2 border-blue-500/50">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -ml-2"></div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg">
                  <div className="flex items-center mb-4">
                    <HiBriefcase className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900">Full Stack Developer Intern</h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Gained hands-on experience in full-stack development, working with modern web technologies and contributing to real-world projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">MongoDB</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">API Integration</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={400}>
              <div className="relative pl-8 pb-8 border-l-2 border-purple-500/50">
                <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full -ml-2"></div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg">
                  <div className="flex items-center mb-4">
                    <HiCode className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-slate-900">Java Development Certification</h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Achieved certification in Java development, demonstrating proficiency in object-oriented programming and software development principles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Java</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">OOP</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Software Design</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Education
              </h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                My academic journey and the foundation that supports my technical expertise.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <HiAcademicCap className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">Bachelor of Engineering (B.E.) – Computer Science and Engineering</h3>
                    <p className="text-slate-700">GRT Institute of Engineering and Technology</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Currently pursuing (5th Semester). CGPA: 8.75/10. Expected Graduation: 2027. Coursework includes programming, algorithms, data structures, web development, and software engineering principles.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-4 text-lg">Key Areas of Study:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Programming Fundamentals
                      </li>
                      <li className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Data Structures & Algorithms
                      </li>
                      <li className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Web Development Technologies
                      </li>
                      <li className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Database Management Systems
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-4 text-lg">Technical Skills:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Java Programming
                      </li>
                      <li className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        JavaScript & Web Technologies
                      </li>
                      <li className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        HTML, CSS, Responsive Design
                      </li>
                      <li className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        API Integration & Development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
