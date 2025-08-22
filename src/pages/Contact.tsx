import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiGlobe } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes, always show success
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'd3421163@gmail.com',
      link: 'mailto:d3421163@gmail.com',
      color: 'blue'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91-8754259696',
      link: 'tel:+918754259696',
      color: 'green'
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Tiruttani, Tamil Nadu',
      link: 'https://www.google.com/maps/search/?api=1&query=Tiruttani%2C+Tamil+Nadu',
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/durga-r-101887337',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Durga2219',
      color: 'from-gray-700 to-gray-800'
    },
    {
      name: 'HackerRank',
      icon: SiHackerrank,
      url: 'https://www.hackerrank.com/profile/d3421163',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      purple: 'text-purple-500',
      indigo: 'text-indigo-500'
    };
    return colors[color] || 'text-blue-500';
  };

  const getIconBgColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color] || 'from-blue-500 to-blue-600';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                  <p className="text-green-200">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 transition-colors duration-200 resize-none"
                    placeholder="Tell me more about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#FFD700] text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Contact Information
              </h2>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getIconBgColor(info.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#E0E0E0]">
                      {info.title}
                    </h3>
                    <a
                      href={info.link}
                      target={info.title === 'Location' || info.title === 'Website' ? '_blank' : '_self'}
                      rel={info.title === 'Location' || info.title === 'Website' ? 'noopener noreferrer' : ''}
                      className="text-white hover:text-[#FFD700] transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">
                Follow Me
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:scale-110 transform transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Availability
              </h3>
              <div className="space-y-3 text-sm text-[#E0E0E0]">
                <a href="mailto:d3421163@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition-colors"><HiMail className="w-5 h-5" /> Email Me</a>
                <a href="https://www.linkedin.com/in/durga-r-101887337" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition-colors"><HiGlobe className="w-5 h-5" /> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Let's Work Together
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiGlobe className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Web Development
                </h3>
                <p className="text-[#E0E0E0]">
                  Full-stack web applications with modern technologies
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiPhone className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Consulting
                </h3>
                <p className="text-[#E0E0E0]">
                  Technical guidance and architecture planning
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiMail className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Collaboration
                </h3>
                <p className="text-[#E0E0E0]">
                  Open source contributions and partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
