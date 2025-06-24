import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight,
  Search
} from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to determine if a path is active
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  // Get the current section for breadcrumbs
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path.startsWith('/who-we-are')) return 'Who We Are';
    if (path.startsWith('/academics')) return 'Academics';
    if (path.startsWith('/community')) return 'Community';
    return '';
  };

  // Get the current page for breadcrumbs
  const getCurrentPage = () => {
    const path = location.pathname;
    const pathSegments = path.split('/').filter(Boolean);
    if (pathSegments.length > 1) {
      // Convert kebab-case to Title Case
      return pathSegments[1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">SACRED HEART</h1>
                <h2 className="text-xl font-bold text-blue-900">SCHOOL</h2>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <Link to="/who-we-are" className={`flex items-center font-medium ${isActive('/who-we-are') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                  Who We Are <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link to="/who-we-are/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About SHS</Link>
                    <Link to="/who-we-are/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">History</Link>
                    <Link to="/who-we-are/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mission</Link>
                    <Link to="/who-we-are/faculty-staff" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Faculty & Staff</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link to="/academics" className={`flex items-center font-medium ${isActive('/academics') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                  Academics <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link to="/academics/curriculum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Curriculum</Link>
                    <Link to="/academics/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Programs</Link>
                    <Link to="/academics/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resources</Link>
                    <Link to="/academics/calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Calendar</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link to="/community" className={`flex items-center font-medium ${isActive('/community') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                  Community <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link to="/community/news-events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">News & Events</Link>
                    <Link to="/community/parent-resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Parent Resources</Link>
                    <Link to="/community/alumni" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Alumni</Link>
                    <Link to="/community/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</Link>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="space-y-1">
                <Link to="/who-we-are" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Who We Are</Link>
                <div className="pl-4">
                  <Link to="/who-we-are/about" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">About SHS</Link>
                  <Link to="/who-we-are/history" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">History</Link>
                  <Link to="/who-we-are/mission" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Mission</Link>
                  <Link to="/who-we-are/faculty-staff" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Faculty & Staff</Link>
                </div>

                <Link to="/academics" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Academics</Link>
                <div className="pl-4">
                  <Link to="/academics/curriculum" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Curriculum</Link>
                  <Link to="/academics/programs" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Programs</Link>
                  <Link to="/academics/resources" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Resources</Link>
                  <Link to="/academics/calendar" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Calendar</Link>
                </div>

                <Link to="/community" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Community</Link>
                <div className="pl-4">
                  <Link to="/community/news-events" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">News & Events</Link>
                  <Link to="/community/parent-resources" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Parent Resources</Link>
                  <Link to="/community/alumni" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Alumni</Link>
                  <Link to="/community/contact" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Navigation Breadcrumb - only show if not on home page */}
      {location.pathname !== '/' && (
        <div className="bg-gray-200 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              {getCurrentSection() && (
                <>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <Link to={`/${getCurrentSection().toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-blue-600">
                    {getCurrentSection()}
                  </Link>
                </>
              )}
              {getCurrentPage() && (
                <>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{getCurrentPage()}</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold">SACRED HEART SCHOOL</h3>
                </div>
              </Link>
              <p className="text-sm text-blue-200">123 School Avenue<br />City, State 12345<br />(123) 456-7890</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-200">Who We Are</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><Link to="/who-we-are/about" className="hover:text-white transition-colors">About SHS</Link></li>
                <li><Link to="/who-we-are/history" className="hover:text-white transition-colors">History</Link></li>
                <li><Link to="/who-we-are/mission" className="hover:text-white transition-colors">Mission</Link></li>
                <li><Link to="/who-we-are/faculty-staff" className="hover:text-white transition-colors">Faculty & Staff</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-200">Academics</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><Link to="/academics/curriculum" className="hover:text-white transition-colors">Curriculum</Link></li>
                <li><Link to="/academics/programs" className="hover:text-white transition-colors">Programs</Link></li>
                <li><Link to="/academics/resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link to="/academics/calendar" className="hover:text-white transition-colors">Calendar</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-200">Community</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><Link to="/community/news-events" className="hover:text-white transition-colors">News & Events</Link></li>
                <li><Link to="/community/parent-resources" className="hover:text-white transition-colors">Parent Resources</Link></li>
                <li><Link to="/community/alumni" className="hover:text-white transition-colors">Alumni</Link></li>
                <li><Link to="/community/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} Sacred Heart School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
