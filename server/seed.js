const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import models
const User = require('./models/User');
const Skill = require('./models/Skill');
const Project = require('./models/Project');
const Certificate = require('./models/Certificate');

// Sample data
const adminUser = {
  email: 'd3421163@gmail.com',
  password: 'admin123',
  role: 'admin',
  isActive: true
};

const skills = [
  {
    name: 'Java',
    description: 'Strong foundation in Java programming with object-oriented concepts',
    category: 'Programming',
    proficiency: 85,
    icon: 'HiCode',
    relatedTechnologies: ['Spring Boot', 'Maven', 'JUnit']
  },
  {
    name: 'Python',
    description: 'Proficient in Python for data analysis and automation',
    category: 'Programming',
    proficiency: 75,
    icon: 'HiCode',
    relatedTechnologies: ['Pandas', 'NumPy', 'Flask']
  },
  {
    name: 'JavaScript',
    description: 'Modern JavaScript development with ES6+ features',
    category: 'Web Technologies',
    proficiency: 80,
    icon: 'HiCode',
    relatedTechnologies: ['React', 'Node.js', 'Express']
  },
  {
    name: 'HTML',
    description: 'Semantic HTML5 markup and accessibility',
    category: 'Web Technologies',
    proficiency: 90,
    icon: 'HiCode',
    relatedTechnologies: ['CSS', 'Semantic UI', 'Accessibility']
  },
  {
    name: 'CSS',
    description: 'Advanced CSS with Flexbox, Grid, and animations',
    category: 'Web Technologies',
    proficiency: 85,
    icon: 'HiCode',
    relatedTechnologies: ['Tailwind CSS', 'Sass', 'Responsive Design']
  },
  {
    name: 'Node.js',
    description: 'Server-side JavaScript development',
    category: 'Tools & Platforms',
    proficiency: 70,
    icon: 'HiCode',
    relatedTechnologies: ['Express', 'npm', 'REST APIs']
  },
  {
    name: 'RDBMS',
    description: 'Relational database design and management',
    category: 'Databases',
    proficiency: 75,
    icon: 'HiCode',
    relatedTechnologies: ['MySQL', 'PostgreSQL', 'Database Design']
  },
  {
    name: 'MySQL',
    description: 'MySQL database administration and optimization',
    category: 'Databases',
    proficiency: 70,
    icon: 'HiCode',
    relatedTechnologies: ['SQL', 'Database Design', 'Performance']
  },
  {
    name: 'API Integration',
    description: 'RESTful API development and integration',
    category: 'Tools & Platforms',
    proficiency: 75,
    icon: 'HiCode',
    relatedTechnologies: ['REST', 'JSON', 'HTTP Methods']
  },
  {
    name: 'Responsive Web Design',
    description: 'Mobile-first responsive design principles',
    category: 'Web Technologies',
    proficiency: 85,
    icon: 'HiCode',
    relatedTechnologies: ['CSS Grid', 'Flexbox', 'Media Queries']
  },
  {
    name: 'Problem-Solving',
    description: 'Algorithmic thinking and problem-solving skills',
    category: 'Soft Skills',
    proficiency: 80,
    icon: 'HiCode',
    relatedTechnologies: ['Algorithms', 'Data Structures', 'Logic']
  }
];

const projects = [
  {
    title: 'Weather Data Web Application',
    description: 'Interactive weather application with real-time data',
    longDescription: 'A comprehensive weather application that provides real-time weather information, forecasts, and interactive maps. Built with modern web technologies and responsive design principles.',
    image: '/images/weather-app.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://weather-app-demo.com',
    githubUrl: 'https://github.com/Durga2219/weather-app',
    highlights: [
      'Responsive UI design',
      'Asynchronous API calls',
      'Live weather updates',
      'Smooth navigation'
    ],
    challenges: [
      'API rate limiting',
      'Cross-browser compatibility',
      'Mobile responsiveness'
    ],
    solutions: [
      'Implemented caching strategy',
      'Used CSS Grid and Flexbox',
      'Mobile-first design approach'
    ]
  }
];

const certificates = [
  {
    title: 'Java Programming Certification',
    issuer: 'Infosys Springboard',
    date: 'May 2025',
    category: 'general',
    image: '/images/java-programming-cert.jpg',
    credentialId: 'INFOSYS-JAVA-2025',
    url: 'https://www.infosys.com/springboard/certification',
    featured: true,
    description: 'Certified in Java programming, demonstrating strong foundational knowledge and practical application skills.'
  },
  {
    title: 'Solutions Architecture Job Simulation (Forage)',
    issuer: 'AWS / Forage',
    date: 'June 24th, 2025',
    category: 'cloud',
    image: '/images/solutions-architecture-forage.jpg',
    credentialId: 'Forage-JobSim',
    url: 'https://www.theforage.com/virtual-internships',
    featured: true,
    description: 'Completion of AWS Solutions Architecture job simulation on Forage: scalable hosting and architecture design tasks.'
  },
  {
    title: 'Java (Basic) Certificate',
    issuer: 'HackerRank',
    date: '19 Jun, 2025',
    category: 'general',
    image: '/images/java-basic-hackerrank.jpg',
    credentialId: '24427E57CBA4',
    url: 'https://www.hackerrank.com/certificates',
    featured: false,
    description: 'HackerRank skill certification in Java (Basic), validating core language fundamentals.'
  },
  {
    title: 'Elite Tech Intern',
    issuer: 'ELiteTech Intern',
    date: 'July 2025',
    category: 'general',
    image: '/images/elite-tech-intern.jpg',
    credentialId: 'ETI-AKO-10851',
    url: 'https://elitetechintern.com',
    featured: false,
    description: 'Successfully completed elite tech internship program, gaining hands-on experience in modern software development practices.'
  },
  {
    title: 'Professional Logo Production With Artificial Intelligence',
    issuer: 'Udemy',
    date: 'July 4, 2025',
    category: 'general',
    image: '/images/udemy-logo-ai.jpg',
    credentialId: 'UC-e125a32b-3c5a-4bd0-9ed5-42477ba5ce45',
    url: 'https://www.udemy.com/certificate/UC-e125a32b-3c5a-4bd0-9ed5-42477ba5ce45',
    featured: false,
    description: 'Certified in AI-powered logo design, demonstrating proficiency in creative design tools and artificial intelligence applications.'
  },
  {
    title: 'Problem Solving (Basic) Certificate',
    issuer: 'HackerRank',
    date: '19 Jun, 2025',
    category: 'general',
    image: '/images/problem-solving-basic.jpg',
    credentialId: '9E0843758878',
    url: 'https://www.hackerrank.com/certificates',
    featured: false,
    description: 'HackerRank skill certification in Problem Solving (Basic), validating algorithmic thinking and problem-solving capabilities.'
  }
];

// Seeder function
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Skill.deleteMany({});
    await Project.deleteMany({});
    await Certificate.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const hashedPassword = await bcrypt.hash(adminUser.password, 12);
    const user = new User({
      ...adminUser,
      password: hashedPassword
    });
    await user.save();
    console.log('Admin user created:', user.email);

    // Create skills
    const createdSkills = await Skill.insertMany(skills);
    console.log(`${createdSkills.length} skills created`);

    // Create projects
    const createdProjects = await Project.insertMany(projects);
    console.log(`${createdProjects.length} projects created`);

    // Create certificates
    const createdCertificates = await Certificate.insertMany(certificates);
    console.log(`${createdCertificates.length} certificates created`);

    console.log('Database seeded successfully!');
    console.log('\nAdmin Login Credentials:');
    console.log('Email:', adminUser.email);
    console.log('Password:', adminUser.password);

  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run seeder
seedDatabase();











