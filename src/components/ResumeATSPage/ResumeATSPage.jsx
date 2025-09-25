'use client'
import React, { useState, useRef } from 'react';
import {
  FiUpload,
  FiFileText,
  FiCheck,
  FiX,
  FiAlertTriangle,
  FiDownload,
  FiEdit3,
  FiEye,
  FiZap,
  FiTarget,
  FiTrendingUp,
  FiRefreshCw
} from 'react-icons/fi';
import {
  HiSparkles,
  HiLightningBolt,
  HiCheckCircle,
  HiExclamationCircle,
  HiInformationCircle
} from 'react-icons/hi';
import {
  MdAutoAwesome,
  MdBuildCircle,
  MdAnalytics,
  MdTune
} from 'react-icons/md';
import Navbar from '../Layout/Navbar/Navbar';

const ResumeATSPage = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Simulate file reading
      setTimeout(() => {
        simulateATSAnalysis();
      }, 1000);
    }
  };

  const simulateATSAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate API call delay
    setTimeout(() => {
      setAtsScore({
        overall: 78,
        sections: {
          formatting: 85,
          keywords: 72,
          experience: 80,
          skills: 75,
          education: 90,
          contact: 95
        },
        suggestions: [
          { type: 'warning', text: 'Add more industry-specific keywords' },
          { type: 'info', text: 'Consider using a more standard font' },
          { type: 'success', text: 'Great use of action verbs' },
          { type: 'warning', text: 'Include quantifiable achievements' }
        ],
        keywordMatches: {
          found: ['JavaScript', 'React', 'Node.js', 'AWS', 'Python'],
          missing: ['Docker', 'Kubernetes', 'GraphQL', 'TypeScript', 'MongoDB']
        }
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreGradient = (score) => {
    if (score >= 80) return 'from-emerald-500 to-green-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const tabs = [
    { id: 'upload', label: 'Upload & Analyze', icon: FiUpload },
    { id: 'build', label: 'Build Resume', icon: FiEdit3 },
    { id: 'optimize', label: 'AI Optimize', icon: HiSparkles }
  ];

  return (
    <div className='relative z-20'>
        <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute top-1/2 right-1/2 w-72 h-72 bg-gradient-to-r from-violet-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6 backdrop-blur-sm">
              <MdAutoAwesome className="text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-200">AI-Powered Resume Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Build & Optimize
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Your Resume
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create ATS-friendly resumes and get real-time scoring to maximize your chances of landing interviews
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <IconComponent size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Upload & Analyze Tab */}
          {activeTab === 'upload' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <FiUpload className="mr-3 text-blue-400" />
                  Upload Resume
                </h2>
                
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-600 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  
                  {uploadedFile ? (
                    <div className="space-y-4">
                      <FiFileText className="w-16 h-16 text-green-400 mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-green-400">{uploadedFile.name}</p>
                        <p className="text-gray-400">File uploaded successfully</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <FiUpload className="w-16 h-16 text-gray-400 group-hover:text-blue-400 transition-colors mx-auto" />
                      <div>
                        <p className="text-lg font-medium mb-2">Drop your resume here</p>
                        <p className="text-gray-400">or click to browse</p>
                        <p className="text-sm text-gray-500 mt-2">Supports PDF, DOC, DOCX</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Job Description Input */}
                <div className="mt-8">
                  <label className="block text-sm font-medium mb-3 text-gray-200">
                    Job Description (Optional)
                  </label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here to get targeted keyword suggestions..."
                    className="w-full h-32 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  onClick={simulateATSAnalysis}
                  disabled={!uploadedFile || isAnalyzing}
                  className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                >
                  {isAnalyzing ? (
                    <>
                      <FiRefreshCw className="animate-spin mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <FiZap className="mr-2" />
                      Analyze Resume
                    </>
                  )}
                </button>
              </div>

              {/* ATS Score Display */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MdAnalytics className="mr-3 text-emerald-400" />
                  ATS Score Analysis
                </h2>

                {!atsScore && !isAnalyzing && (
                  <div className="text-center text-gray-400 py-12">
                    <FiTarget className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Upload a resume to see your ATS score</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-12">
                    <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-gray-300">Analyzing your resume...</p>
                  </div>
                )}

                {atsScore && (
                  <div className="space-y-6">
                    {/* Overall Score */}
                    <div className="text-center">
                      <div className={`text-6xl font-bold ${getScoreColor(atsScore.overall)} mb-2`}>
                        {atsScore.overall}%
                      </div>
                      <p className="text-gray-400">Overall ATS Score</p>
                      <div className="w-full bg-gray-700 rounded-full h-3 mt-4">
                        <div
                          className={`bg-gradient-to-r ${getScoreGradient(atsScore.overall)} h-3 rounded-full transition-all duration-1000`}
                          style={{ width: `${atsScore.overall}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Section Scores */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(atsScore.sections).map(([section, score]) => (
                        <div key={section} className="bg-gray-800/30 rounded-xl p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium capitalize text-gray-300">
                              {section}
                            </span>
                            <span className={`font-bold ${getScoreColor(score)}`}>
                              {score}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${getScoreGradient(score)} h-2 rounded-full transition-all duration-1000`}
                              style={{ width: `${score}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Suggestions */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-200 mb-3">Improvement Suggestions</h3>
                      {atsScore.suggestions.map((suggestion, index) => {
                        const icons = {
                          warning: HiExclamationCircle,
                          info: HiInformationCircle,
                          success: HiCheckCircle
                        };
                        const colors = {
                          warning: 'text-yellow-400',
                          info: 'text-blue-400',
                          success: 'text-green-400'
                        };
                        const IconComponent = icons[suggestion.type];
                        
                        return (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-gray-800/20 rounded-lg">
                            <IconComponent className={`w-5 h-5 ${colors[suggestion.type]} mt-0.5 flex-shrink-0`} />
                            <p className="text-sm text-gray-300">{suggestion.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Build Resume Tab */}
          {activeTab === 'build' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MdBuildCircle className="mr-3 text-purple-400" />
                  Resume Builder
                </h2>
                
                <div className="text-center py-16">
                  <FiEdit3 className="w-24 h-24 text-purple-400 mx-auto mb-6 opacity-50" />
                  <h3 className="text-2xl font-bold mb-4 text-gray-200">Resume Builder Coming Soon</h3>
                  <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Our intelligent resume builder will help you create professional, ATS-friendly resumes with guided templates and real-time optimization suggestions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="bg-gray-800/30 rounded-xl p-6">
                      <HiLightningBolt className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-200 mb-2">Smart Templates</h4>
                      <p className="text-sm text-gray-400">Industry-specific templates optimized for ATS</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-6">
                      <FiTarget className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-200 mb-2">Real-time Scoring</h4>
                      <p className="text-sm text-gray-400">Get instant feedback as you build</p>
                    </div>
                    <div className="bg-gray-800/30 rounded-xl p-6">
                      <HiSparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-200 mb-2">AI Suggestions</h4>
                      <p className="text-sm text-gray-400">Intelligent content recommendations</p>
                    </div>
                  </div>
                  
                  <button className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* AI Optimize Tab */}
          {activeTab === 'optimize' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MdTune className="mr-3 text-cyan-400" />
                    AI Resume Optimizer
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-200">
                        Current Resume Content
                      </label>
                      <textarea
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                        placeholder="Paste your resume text here..."
                        className="w-full h-40 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-200">
                        Target Job Description
                      </label>
                      <textarea
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the target job description..."
                        className="w-full h-32 bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      disabled={!resumeText || !jobDescription}
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                    >
                      <HiSparkles className="mr-2" />
                      Optimize with AI
                    </button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FiTrendingUp className="mr-3 text-green-400" />
                    Optimization Results
                  </h2>

                  {(!resumeText || !jobDescription) ? (
                    <div className="text-center text-gray-400 py-12">
                      <HiSparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Enter your resume content and job description to see AI optimization suggestions</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {/* Keyword Analysis */}
                      <div className="bg-gray-800/30 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-200 mb-4">Keyword Analysis</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-green-400 mb-2">✓ Keywords Found (5)</p>
                            <div className="flex flex-wrap gap-2">
                              {['React', 'JavaScript', 'Node.js', 'AWS', 'Python'].map((keyword) => (
                                <span key={keyword} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-red-400 mb-2">✗ Missing Keywords (5)</p>
                            <div className="flex flex-wrap gap-2">
                              {['Docker', 'Kubernetes', 'GraphQL', 'TypeScript', 'MongoDB'].map((keyword) => (
                                <span key={keyword} className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AI Suggestions */}
                      <div className="bg-gray-800/30 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-200 mb-4">AI Suggestions</h3>
                        <div className="space-y-3">
                          {[
                            'Add quantifiable achievements (e.g., "Increased performance by 40%")',
                            'Include more technical keywords from the job description',
                            'Use stronger action verbs like "spearheaded" and "orchestrated"',
                            'Mention specific technologies and frameworks'
                          ].map((suggestion, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <HiSparkles className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-gray-300">{suggestion}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiZap className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Instant Analysis</h3>
              <p className="text-gray-300">Get your ATS score in seconds with detailed feedback and actionable insights.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiSparkles className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">AI-Powered Optimization</h3>
              <p className="text-gray-300">Let our AI suggest improvements to maximize your resume's effectiveness.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiTarget className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Job-Specific Matching</h3>
              <p className="text-gray-300">Compare your resume against specific job descriptions for targeted optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ResumeATSPage;