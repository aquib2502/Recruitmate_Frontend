"use client"
import React, { useState, useEffect } from 'react';
import { 
  FaRocket, 
  FaUsers, 
  FaBrain, 
  FaHandshake,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaArrowRight,
  FaStar,
  FaQuoteLeft
} from 'react-icons/fa';
import Navbar from '../Layout/Navbar/Navbar';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Animate sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Ex-Google recruiter with 10+ years in talent acquisition",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      bio: "Former Meta engineer, AI & ML specialist",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Product",
      bio: "Product strategy expert from Amazon",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const values = [
    {
      icon: FaRocket,
      title: "Innovation",
      description: "Pioneering AI-driven recruitment solutions",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: FaUsers,
      title: "Community",
      description: "Building connections between talent and opportunity",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: FaBrain,
      title: "Intelligence",
      description: "Smart matching algorithms that understand context",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: FaHandshake,
      title: "Trust",
      description: "Transparent processes and ethical practices",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className='relative z-20'>
        <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section 
          id="hero"
          className={`pt-24 pb-16 px-4 transition-all duration-1000 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-violet-500/30 mb-8 backdrop-blur-sm">
              <FaStar className="text-violet-400 mr-2" />
              <span className="text-sm font-medium text-violet-200">Trusted by 10,000+ companies</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionizing
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Recruitment
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're on a mission to transform how companies discover, connect with, and hire exceptional talent through cutting-edge AI technology and human insight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center">
                  Get Started
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-semibold hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section 
          id="story"
          className={`py-16 px-4 transition-all duration-1000 delay-200 ${
            isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
              <FaQuoteLeft className="text-4xl text-violet-400 mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Born from the frustration of traditional recruitment processes, RecruitMate emerged in 2023 with a simple yet powerful vision: make hiring faster, smarter, and more human.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, we're proud to serve thousands of companies worldwide, from innovative startups to Fortune 500 enterprises, helping them build exceptional teams through our AI-powered platform.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section 
          id="values"
          className={`py-16 px-4 transition-all duration-1000 delay-300 ${
            isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.title}
                    className={`group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section 
          id="team"
          className={`py-16 px-4 transition-all duration-1000 delay-400 ${
            isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-2 text-white">
                    {member.name}
                  </h3>
                  
                  <p className="text-violet-400 text-center mb-4 font-medium">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-400 text-center mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110">
                        <FaLinkedin size={20} />
                      </button>
                    )}
                    {member.social.twitter && (
                      <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110">
                        <FaTwitter size={20} />
                      </button>
                    )}
                    {member.social.github && (
                      <button className="text-gray-400 hover:text-gray-300 transition-colors duration-300 hover:scale-110">
                        <FaGithub size={20} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="cta"
          className={`py-20 px-4 transition-all duration-1000 delay-500 ${
            isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-12 border border-violet-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already using RecruitMate to build exceptional teams.
              </p>
              
              <button className="group px-10 py-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center">
                  Start Your Free Trial
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>

  );
};

export default AboutUs;