import React from 'react';
import { Link } from 'react-router-dom';
import { HiHeart, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    pages: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Skills', path: '/skills' },
      { name: 'Projects', path: '/projects' },
      { name: 'Certificates', path: '/certificates' },
      { name: 'Contact', path: '/contact' }
    ],
    services: [
      { name: 'Web Development', path: '/projects' },
      { name: 'Mobile Apps', path: '/projects' },
      { name: 'UI/UX Design', path: '/projects' },
      { name: 'Consulting', path: '/contact' }
    ],
    social: [
      { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername' },
      { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/yourprofile' },
      { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourhandle' },
      { name: 'Email', icon: HiMail, url: 'mailto:your.email@example.com' }
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-on-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-slate-900 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span>Portfolio</span>
            </Link>
            <p className="text-slate-700 mb-6 max-w-xs">
              A passionate Full Stack Developer crafting beautiful, functional, and user-centric digital experiences.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 hover:bg-[#FFD700] hover:text-white transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Pages
            </h3>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-700 hover:text-[#FFD700] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-slate-700 hover:text-[#FFD700] transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-slate-700">
              <p>d3421163@gmail.com</p>
              <p>+91-8754259696</p>
              <p>Tiruttani, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-700 text-sm mb-4 md:mb-0">
              © {currentYear} Durga R. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-700">
              <span>Made with</span>
              <HiHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;









