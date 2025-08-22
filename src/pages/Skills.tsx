import React, { useState } from 'react';
import { 
  HiCode, 
  HiServer, 
  HiDatabase, 
  HiGlobe, 
  HiLightBulb,
  HiCog,
  HiChip,
  HiSparkles,
  HiPuzzle,
  HiBeaker,
  HiCube,
  HiCloud
} from 'react-icons/hi';
import AnimatedSection from '../components/AnimatedSection';

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  category: string;
  proficiency: number;
  description: string;
  color: string;
  technologies?: string[];
}

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    {
      name: 'Java',
      icon: HiCode,
      category: 'Programming Languages',
      proficiency: 90,
      description: 'Advanced proficiency in Java programming with strong understanding of OOP concepts, data structures, and algorithms.',
      color: 'from-orange-500 to-red-600',
      technologies: ['Core Java', 'OOP', 'Collections', 'Streams', 'Spring Boot']
    },
    {
      name: 'Python',
      icon: HiBeaker,
      category: 'Programming Languages',
      proficiency: 75,
      description: 'Intermediate level in Python with experience in data analysis, automation, and web development.',
      color: 'from-blue-500 to-cyan-600',
      technologies: ['Python 3', 'Pandas', 'NumPy', 'Flask', 'Django']
    },
    {
      name: 'JavaScript',
      icon: HiChip,
      category: 'Web Technologies',
      proficiency: 80,
      description: 'Strong knowledge of modern JavaScript including ES6+ features, async programming, and DOM manipulation.',
      color: 'from-yellow-500 to-orange-600',
      technologies: ['ES6+', 'Async/Await', 'DOM', 'Modules', 'Promises']
    },
    {
      name: 'HTML',
      icon: HiGlobe,
      category: 'Web Technologies',
      proficiency: 95,
      description: 'Expert level in HTML5 with semantic markup, accessibility, and modern web standards.',
      color: 'from-orange-500 to-red-500',
      technologies: ['HTML5', 'Semantic Markup', 'Accessibility', 'SEO', 'Forms']
    },
    {
      name: 'CSS',
      icon: HiSparkles,
      category: 'Web Technologies',
      proficiency: 85,
      description: 'Advanced CSS skills including Flexbox, Grid, animations, and responsive design principles.',
      color: 'from-blue-500 to-indigo-600',
      technologies: ['CSS3', 'Flexbox', 'Grid', 'Animations', 'Sass']
    },
    {
      name: 'Node.js',
      icon: HiServer,
      category: 'Backend Development',
      proficiency: 70,
      description: 'Experience in building server-side applications with Node.js and Express framework.',
      color: 'from-green-500 to-emerald-600',
      technologies: ['Node.js', 'Express.js', 'NPM', 'REST APIs', 'Middleware']
    },
    {
      name: 'RDBMS',
      icon: HiDatabase,
      category: 'Database',
      proficiency: 75,
      description: 'Solid understanding of relational database concepts, normalization, and SQL query optimization.',
      color: 'from-purple-500 to-pink-600',
      technologies: ['SQL', 'Normalization', 'Indexing', 'ACID', 'Transactions']
    },
    {
      name: 'MySQL',
      icon: HiDatabase,
      category: 'Database',
      proficiency: 80,
      description: 'Proficient in MySQL database design, administration, and complex query writing.',
      color: 'from-blue-600 to-indigo-700',
      technologies: ['MySQL', 'Database Design', 'Query Optimization', 'Stored Procedures', 'Triggers']
    },
    {
      name: 'React',
      icon: HiChip,
      category: 'Frontend Frameworks',
      proficiency: 75,
      description: 'Experience in building modern React applications with hooks, context, and component-based architecture.',
      color: 'from-cyan-500 to-blue-600',
      technologies: ['React Hooks', 'Context API', 'Component Lifecycle', 'JSX', 'State Management']
    },
    {
      name: 'Git',
      icon: HiCode,
      category: 'Version Control',
      proficiency: 85,
      description: 'Proficient in Git version control with experience in collaborative development workflows.',
      color: 'from-orange-500 to-red-500',
      technologies: ['Git Commands', 'Branching', 'Merging', 'GitHub', 'Collaborative Workflows']
    },
    {
      name: 'Problem Solving',
      icon: HiPuzzle,
      category: 'Core Skills',
      proficiency: 90,
      description: 'Strong analytical and problem-solving skills with experience in algorithmic thinking and optimization.',
      color: 'from-green-500 to-teal-600',
      technologies: ['Algorithms', 'Data Structures', 'Optimization', 'Critical Thinking', 'Debugging']
    },
    {
      name: 'System Design',
      icon: HiCog,
      category: 'Architecture',
      proficiency: 70,
      description: 'Understanding of system design principles, scalability, and distributed systems concepts.',
      color: 'from-purple-500 to-indigo-600',
      technologies: ['Scalability', 'Microservices', 'Load Balancing', 'Caching', 'Database Design']
    }
  ];

  const additionalSkills = [
    {
      name: 'Git & GitHub',
      icon: HiCode,
      description: 'Version control and collaborative development',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'VS Code',
      icon: HiChip,
      description: 'Primary code editor and development environment',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Postman',
      icon: HiGlobe,
      description: 'API testing and development tool',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Docker',
      icon: HiCube,
      description: 'Containerization and deployment',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'AWS',
      icon: HiCloud,
      description: 'Cloud computing and services',
      color: 'from-orange-500 to-yellow-600'
    },
    {
      name: 'MongoDB',
      icon: HiDatabase,
      description: 'NoSQL database management',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'PostgreSQL',
      icon: HiDatabase,
      description: 'Advanced relational database',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      name: 'Redis',
      icon: HiDatabase,
      description: 'In-memory data structure store',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const categories = [
    { name: 'Programming Languages', icon: HiCode, color: 'from-blue-500 to-purple-600' },
    { name: 'Web Technologies', icon: HiGlobe, color: 'from-green-500 to-teal-600' },
    { name: 'Backend Development', icon: HiServer, color: 'from-orange-500 to-red-600' },
    { name: 'Database', icon: HiDatabase, color: 'from-purple-500 to-pink-600' },
    { name: 'Development Tools', icon: HiCog, color: 'from-indigo-500 to-blue-600' },
    { name: 'Soft Skills', icon: HiLightBulb, color: 'from-yellow-500 to-amber-600' }
  ];

  const getCategorySkills = (categoryName: string) => {
    return skills.filter(skill => skill.category === categoryName);
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return 'text-green-600 dark:text-green-400';
    if (proficiency >= 80) return 'text-blue-600 dark:text-blue-400';
    if (proficiency >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-orange-600 dark:text-orange-400';
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 80) return 'Advanced';
    if (proficiency >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn" className="py-20 bg-gradient-to-br from-light-steel-blue/20 to-pastel-purple/20 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp" delay={200}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-steel-blue to-pastel-purple">Skills</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={400}>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                A comprehensive overview of my technical skills and expertise across various domains of software development and computer science.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Grid Section */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSection
                key={skill.name}
                animation="slideUp"
                delay={index * 100}
                className="group"
              >
                <div 
                  className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Skill Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#FFD700] transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <span className="text-sm font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-700">Proficiency</span>
                      <span className="text-sm font-medium text-[#FFD700]">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-[#FFD700] h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  {skill.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Skills Section */}
      <AnimatedSection animation="fadeIn" className="py-20 text-on-light">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Additional Skills & Tools
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {additionalSkills.map((skill, index) => (
                <AnimatedSection
                  key={skill.name}
                  animation="scaleIn"
                  delay={index * 100}
                  className="text-center group"
                >
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#FFD700]/50 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-slate-700">
                      {skill.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Skills;
