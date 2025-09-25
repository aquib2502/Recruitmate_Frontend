import React, { useState, useEffect } from 'react';
import { 
  User, 
  LogOut, 
  ChevronDown, 
  Menu,
  X,
  Home,
  Info,
  UserCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with localStorage check

  const router = useRouter()
  
  // Simulate checking localStorage - replace with actual logic
 
    // Replace this with: const token = localStorage.getItem('userToken');
    // setIsAuthenticated(!!token);
  const handleLoginClick = async() =>{
    const token = localStorage.getItem('userToken');
    if (!token){
      setIsAuthenticated(false)
      router.push('/login')
    }
    else{
      setIsAuthenticated(true)
      router.push('/profile')
    }

  }
  

  const handleNavigation = (path) => {
  router.push(path); // ✅ Actually navigate to the route
  setIsMobileMenuOpen(false);
  setIsDropdownOpen(false);
};



  const handleLogout = () => {
    console.log("Logging out");
    localStorage.removeItem('userToken')
    setIsAuthenticated(false);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'The Hub', path: '/', icon: Home },
    { name: 'About Us', path: '/aboutus', icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gray-950/90 border-b border-gray-800/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
  {/* === LEFT: Logo === */}
  <div className="flex-shrink-0">
    <button
      onClick={() => handleNavigation('/')}
      className="flex items-center group"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300 group-hover:scale-105">
        <span className="text-white font-bold text-lg">R</span>
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:via-purple-300 group-hover:to-blue-300 transition-all duration-300">
        RecruitMate
      </h1>
    </button>
  </div>

  {/* === CENTER: Navigation Links === */}
  <div className="hidden md:flex flex-1 justify-center items-center space-x-1">
    {navLinks.map((link) => {
      const IconComponent = link.icon;
      return (
        <button
          key={link.name}
          onClick={() => handleNavigation(link.path)}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-200 hover:text-violet-400 hover:bg-gray-800/50 transition-all duration-200 group"
        >
          <IconComponent
            size={18}
            className="group-hover:scale-110 transition-transform duration-200"
          />
          <span className="font-medium">{link.name}</span>
        </button>
      );
    })}
  </div>

  {/* === RIGHT: Login/Profile === */}
  <div className="hidden md:flex items-center">
    {isAuthenticated ? (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-3 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20 border border-gray-700/50 group"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-violet-500/30 transition-all duration-200 group-hover:scale-105">
            <User size={18} className="text-white" />
          </div>
          <span className="text-gray-200 font-medium">John Doe</span>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-all duration-300 group-hover:text-violet-400 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 py-2">
            <button
              onClick={() => handleNavigation('/profile')}
              className="flex w-full items-center px-4 py-3 text-gray-200 hover:bg-gray-800/50 hover:text-violet-400 transition-colors duration-200 text-left group"
            >
              <UserCircle
                size={18}
                className="mr-3 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="font-medium">Profile</span>
            </button>
            <div className="border-t border-gray-700/50 my-2"></div>
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-3 text-gray-200 hover:bg-gray-800/50 hover:text-red-400 transition-colors duration-200 text-left group"
            >
              <LogOut
                size={18}
                className="mr-3 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        )}
      </div>
    ) : (
      <button
        onClick={handleLoginClick}
        className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 hover:scale-105"
      >
        Login
      </button>
    )}
  </div>


          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-200 hover:text-violet-400 transition-all duration-200 border border-gray-700/50"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="transition-transform duration-200 rotate-90" />
              ) : (
                <Menu size={24} className="transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 animate-in slide-in-from-top-3 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.path)}
                    className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-200 hover:text-violet-400 hover:bg-gray-800/50 transition-all duration-200 text-left group"
                  >
                    <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">{link.name}</span>
                  </button>
                );
              })}
              
              <div className="border-t border-gray-700/50 my-3"></div>
              
              {isAuthenticated ? (
                <div className="space-y-1">
                  <button
                    onClick={() => handleNavigation('/profile')}
                    className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-200 hover:text-violet-400 hover:bg-gray-800/50 transition-all duration-200 text-left group"
                  >
                    <UserCircle size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">Profile</span>
                  </button>
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-200 hover:text-red-400 hover:bg-gray-800/50 transition-all duration-200 text-left group"
                  >
                    <LogOut size={20} className="group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              ) : (
                <div className="px-2">
                  <button
                    onClick={handleLogin}
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;