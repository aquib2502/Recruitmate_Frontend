'use client'

import React, { useState, useEffect } from 'react';
import { 
  User, 
  LogOut, 
  ChevronDown, 
  TrendingUp, 
  Upload, 
  Building2, 
  Calculator, 
  FileText, 
  Eye,
  Search,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter
} from 'lucide-react';
import Navbar from '../Layout/Navbar/Navbar.jsx';
import AnimatedCard from '../Layout/AnimatedCard/AnimatedCard.jsx';
import { useRouter } from 'next/navigation.js';
import { FaBeer } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { LuFastForward } from 'react-icons/lu';


const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter()

  const probabilityHistory = [
    { company: 'Google', probability: 87, date: '2024-09-20', status: 'High' },
    { company: 'Microsoft', probability: 72, date: '2024-09-18', status: 'Medium' },
    { company: 'Amazon', probability: 65, date: '2024-09-15', status: 'Medium' },
    { company: 'Apple', probability: 91, date: '2024-09-12', status: 'High' }
  ];

  const resumeStatus = [
    { name: 'Software Engineer Resume.pdf', status: 'reviewed', score: 8.5, date: '2024-09-20' },
    { name: 'Data Analyst Resume.pdf', status: 'pending', score: null, date: '2024-09-19' },
    { name: 'Product Manager Resume.pdf', status: 'scored', score: 7.2, date: '2024-09-18' }
  ];

  const eligibleCompanies = [
    { name: 'Google', match: 92, location: 'Mountain View, CA', openings: 15 },
    { name: 'Microsoft', match: 88, location: 'Seattle, WA', openings: 23 },
    { name: 'Amazon', match: 85, location: 'Seattle, WA', openings: 45 },
    { name: 'Apple', match: 83, location: 'Cupertino, CA', openings: 12 },
    { name: 'Meta', match: 79, location: 'Menlo Park, CA', openings: 18 },
    { name: 'Netflix', match: 76, location: 'Los Gatos, CA', openings: 8 }
  ];

  const filteredCompanies = eligibleCompanies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case 'reviewed':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'scored':
        return <CheckCircle className="w-4 h-4 text-blue-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-amber-400" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'High':
        return 'text-emerald-300 bg-emerald-500/20 border border-emerald-500/30';
      case 'Medium':
        return 'text-amber-300 bg-amber-500/20 border border-amber-500/30';
      case 'Low':
        return 'text-red-300 bg-red-500/20 border border-red-500/30';
      default:
        return 'text-gray-300 bg-gray-500/20 border border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-3">
            Welcome back, John!
          </h1>
          <p className="text-gray-400 text-lg">Track your recruitment journey and discover new opportunities.</p>
        </div>

        {/* Quick Navigation Buttons */}
        <AnimatedCard className="mb-8" delay={100}>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 shadow-2xl shadow-black/20">
            <h2 className="text-xl font-semibold text-gray-200 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <button 
              onClick={()=>router.push('/calculate-probability')}
              className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25 transform hover:-translate-y-1 border border-violet-500/20">
                <Calculator size={22} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold">Calculate Placement Probability</span>
              </button>
              <button 
               onClick={()=>router.push('/resume-ats')}
              className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 border border-purple-500/20">
                <FileText size={22} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold">Build Resume</span>
              </button>
              <button 
               onClick={()=>router.push('/interview-prep')}
              className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 border border-blue-500/20">
                <LuFastForward size={22} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold">Interview Preparation</span>
              </button>
            </div>
          </div>
        </AnimatedCard>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recruitment Probability History */}
          <AnimatedCard delay={200}>
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 shadow-2xl shadow-black/20 h-full">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl border border-violet-500/30">
                  <TrendingUp className="w-6 h-6 text-violet-400" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-200">Probability History</h2>
              </div>
              
              <div className="space-y-5">
                {probabilityHistory.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-5 bg-gray-800/40 rounded-xl border border-gray-700/30 hover:bg-gray-800/60 transition-all duration-200">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-200 text-lg">{item.company}</h3>
                      <p className="text-sm text-gray-400 mt-1">{item.date}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-100">{item.probability}%</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="w-20 h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-1000 ease-out shadow-lg shadow-violet-500/30"
                          style={{ width: `${item.probability}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Resume Uploads & Status */}
          <AnimatedCard delay={300}>
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 shadow-2xl shadow-black/20 h-full">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                  <Upload className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-200">Resume Status</h2>
              </div>
              
              <div className="space-y-5">
                {resumeStatus.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-5 bg-gray-800/40 rounded-xl border border-gray-700/30 hover:bg-gray-800/60 transition-all duration-200">
                    <div className="flex items-center space-x-4 flex-1">
                      {getStatusIcon(item.status)}
                      <div>
                        <h3 className="font-semibold text-gray-200 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-300 capitalize mb-1">{item.status}</div>
                      {item.score && (
                        <div className="text-2xl font-bold text-blue-400">{item.score}/10</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Company Eligibility Matching */}
        <AnimatedCard delay={400}>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 shadow-2xl shadow-black/20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-200">Eligible Companies</h2>
              </div>
              
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200 text-gray-200 placeholder-gray-400 w-64"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company, index) => (
                <div key={index} className="p-6 bg-gray-800/40 rounded-xl border border-gray-700/30 hover:bg-gray-800/60 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-200 text-lg">{company.name}</h3>
                    <span className="text-lg font-bold text-emerald-400">{company.match}%</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{company.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">{company.openings} openings</span>
                    <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-1000 shadow-lg shadow-emerald-500/30"
                        style={{ width: `${company.match}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};


export default Dashboard;