'use client'
import React, { useState } from 'react';
import { Brain, Target, FileText, Upload, Calculator,Building2, Sparkles, TrendingUp, Users, BarChart3, Zap, Star } from 'lucide-react';
import Navbar from '../Layout/Navbar/Navbar';

const CalculateProbability = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    experience: '',
    skills: '',
    education: '',
    location: '',
    salaryExpectation: '',
    resume: null
  });

  const [probability, setProbability] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const calculateProbability = () => {
    setIsCalculating(true);
    // Simulate AI calculation
    setTimeout(() => {
      const mockProbability = Math.floor(Math.random() * 40) + 60; // 60-100%
      setProbability(mockProbability);
      setIsCalculating(false);
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Advanced machine learning algorithms analyze your profile against thousands of successful placements",
      gradient: "from-cyan-400 to-blue-600",
      bgGlow: "cyan"
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Real-time market data and industry trends to predict your success probability",
      gradient: "from-emerald-400 to-teal-600",
      bgGlow: "emerald"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive insights and actionable recommendations in seconds",
      gradient: "from-orange-400 to-red-600",
      bgGlow: "orange"
    }
  ];

  const stats = [
    { label: "Profiles Analyzed", value: "250K+", icon: Users },
    { label: "Success Rate", value: "94%", icon: Target },
    { label: "Companies", value: "5K+", icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900 relative overflow-hidden">
      <div className="relative z-20">
        <Navbar />
      </div>
    
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Top Header Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/25 mb-6">
              <Calculator className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Recruitment
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Probability Calculator
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Leverage cutting-edge AI to analyze your profile and predict your recruitment success with unprecedented accuracy
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Features */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Sparkles className="h-6 w-6 text-cyan-400 mr-2" />
              Why Choose Our Calculator?
            </h2>
            
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `slideInLeft 0.8s ease-out ${index * 0.3}s both`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg flex-shrink-0`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Calculator Form */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-12">
                
                {!probability ? (
                  <div>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent mb-3">
                        Calculate Your Success Probability
                      </h2>
                      <p className="text-slate-400">
                        Fill in your details below for a comprehensive analysis
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Job Title */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-200 mb-3">
                          Target Job Title
                        </label>
                        <div className="relative group">
                          <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors" />
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all hover:bg-white/10"
                            placeholder="e.g., Senior Software Engineer"
                          />
                        </div>
                      </div>

                      {/* Experience */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-200 mb-3">
                          Years of Experience
                        </label>
                        <div className="relative group">
                          <TrendingUp className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors" />
                          <input
                            type="number"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all hover:bg-white/10"
                            placeholder="5"
                          />
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-200 mb-3">
                          Key Skills & Technologies
                        </label>
                        <div className="relative group">
                          <Sparkles className="absolute left-4 top-4 h-5 w-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors" />
                          <textarea
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all hover:bg-white/10 resize-none"
                            placeholder="e.g., React, Node.js, Python, AWS, Docker, MongoDB..."
                          />
                        </div>
                      </div>

                      {/* Education */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-200 mb-3">
                          Education Level
                        </label>
                        <div className="relative group">
                          <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors z-10" />
                          <select
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all hover:bg-white/10 appearance-none"
                          >
                            <option value="" className="bg-slate-800">Select your education level</option>
                            <option value="high-school" className="bg-slate-800">High School</option>
                            <option value="bachelors" className="bg-slate-800">Bachelor's Degree</option>
                            <option value="masters" className="bg-slate-800">Master's Degree</option>
                            <option value="phd" className="bg-slate-800">PhD</option>
                          </select>
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-200 mb-3">
                          Preferred Location
                        </label>
                        <div className="relative group">
                          <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-cyan-400 transition-colors" />
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all hover:bg-white/10"
                            placeholder="e.g., San Francisco, Remote"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-slate-200 mb-3">
                        Upload Resume (Optional)
                      </label>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="resume-upload"
                      />
                      <div
                        onClick={() => document.getElementById('resume-upload').click()}
                        className="relative group cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-full py-6 px-6 bg-gradient-to-r from-white/5 to-white/10 border-2 border-dashed border-white/30 rounded-2xl hover:border-cyan-500/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300">
                          <div className="text-center">
                            <Upload className="h-8 w-8 text-slate-400 group-hover:text-cyan-400 mx-auto mb-2 transition-colors" />
                            <p className="text-slate-300 group-hover:text-white transition-colors">
                              {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                            </p>
                            <p className="text-sm text-slate-500 mt-1">PDF, DOC, or DOCX files accepted</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Calculate Button */}
                    <button
                      onClick={calculateProbability}
                      disabled={isCalculating || !formData.jobTitle || !formData.experience || !formData.skills || !formData.education}
                      className="w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                    >
                      {isCalculating ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          <span>Analyzing Your Profile...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <BarChart3 className="h-6 w-6 mr-3" />
                          <span>Calculate My Probability</span>
                        </div>
                      )}
                    </button>
                  </div>
                ) : (
                  /* Results Display */
                  <div className="text-center space-y-8">
                    {/* Main Score Circle */}
                    <div className="relative mx-auto w-48 h-48">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 animate-pulse shadow-2xl shadow-cyan-500/30"></div>
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent mb-1">
                            {probability}%
                          </div>
                          <div className="text-slate-400 font-medium">Success Rate</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent mb-3">
                        Excellent Potential!
                      </h3>
                      <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
                        Based on our AI analysis, you have a strong probability of recruitment success
                      </p>
                    </div>

                    {/* Detailed Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/20">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">
                          {Math.floor(probability * 0.85)}%
                        </div>
                        <div className="text-sm text-slate-400">Skills Match</div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-2xl border border-emerald-500/20">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">
                          {Math.floor(probability * 0.9)}%
                        </div>
                        <div className="text-sm text-slate-400">Experience</div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl border border-blue-500/20">
                        <div className="text-2xl font-bold text-blue-400 mb-1">
                          {Math.floor(probability * 1.1)}
                        </div>
                        <div className="text-sm text-slate-400">Market Rank</div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl border border-orange-500/20">
                        <div className="text-2xl font-bold text-orange-400 mb-1">
                          A+
                        </div>
                        <div className="text-sm text-slate-400">Grade</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setProbability(null);
                          setFormData({
                            jobTitle: '',
                            experience: '',
                            skills: '',
                            education: '',
                            location: '',
                            salaryExpectation: '',
                            resume: null
                          });
                        }}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all"
                      >
                        Calculate Again
                      </button>
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all">
                        View Recommendations
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CalculateProbability;