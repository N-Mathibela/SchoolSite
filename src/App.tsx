import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight,
  Search
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
// Who We Are pages
import WhoWeAre from './pages/who-we-are/WhoWeAre';
import About from './pages/who-we-are/About';
import History from './pages/who-we-are/History';
import Mission from './pages/who-we-are/Mission';
import FacultyStaff from './pages/who-we-are/FacultyStaff';
// Academics pages
import Academics from './pages/academics/Academics';
import Curriculum from './pages/academics/Curriculum';
// Community pages
import Community from './pages/community/Community';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
                    </div>
                  </div>
                  <Link to="/" className="text-xl font-bold text-blue-900">
                    <div>SACRED HEART</div>
                    <div className="-mt-1">SCHOOL</div>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
                  Home
                </Link>
                <div className="relative group">
                  <Link to="/who-we-are" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
                    Who We Are <ChevronRight className="w-4 h-4 ml-1 transform rotate-90 group-hover:rotate-90" />
                  </Link>
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link to="/who-we-are/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">About</Link>
                    <Link to="/who-we-are/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">History</Link>
                    <Link to="/who-we-are/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">Mission</Link>
                    <Link to="/who-we-are/faculty-staff" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">Faculty & Staff</Link>
                  </div>
                </div>
                <div className="relative group">
                  <Link to="/academics" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
                    Academics <ChevronRight className="w-4 h-4 ml-1 transform rotate-90 group-hover:rotate-90" />
                  </Link>
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link to="/academics/curriculum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900">Curriculum</Link>
                  </div>
                </div>
                <Link to="/community" className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
                  Community
                </Link>
                <div className="ml-4">
                  <Search className="w-5 h-5 text-gray-600 hover:text-blue-900 cursor-pointer" />
                </div>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-b-lg">
              <div className="pt-2 pb-3 space-y-0.5">
                <Link to="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-900">
                  Home
                </Link>
                <Link to="/who-we-are" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-900">
                  Who We Are
                </Link>
                <Link to="/who-we-are/about" className="block pl-8 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800">
                  About
                </Link>
                <Link to="/who-we-are/history" className="block pl-8 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800">
                  History
                </Link>
                <Link to="/who-we-are/mission" className="block pl-8 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800">
                  Mission
                </Link>
                <Link to="/who-we-are/faculty-staff" className="block pl-8 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800">
                  Faculty & Staff
                </Link>
                <Link to="/academics" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-900">
                  Academics
                </Link>
                <Link to="/academics/curriculum" className="block pl-8 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-800">
                  Curriculum
                </Link>
                <Link to="/community" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-900">
                  Community
                </Link>
                <div className="pl-3 pr-4 py-2 flex justify-end">
                  <Search className="w-5 h-5 text-gray-600 mr-2" />
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/who-we-are/about" element={<About />} />
            <Route path="/who-we-are/history" element={<History />} />
            <Route path="/who-we-are/mission" element={<Mission />} />
            <Route path="/who-we-are/faculty-staff" element={<FacultyStaff />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/curriculum" element={<Curriculum />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<div className="p-8 text-center"><h1 className="text-3xl font-bold">Page Not Found</h1><p className="mt-4">The page you're looking for doesn't exist.</p></div>} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sacred Heart School</h3>
                <p className="text-gray-300">123 School Street<br />Anytown, ST 12345</p>
                <p className="text-gray-300 mt-2">Phone: (123) 456-7890</p>
                <p className="text-gray-300">Email: info@sacredheartschool.org</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link to="/who-we-are" className="text-gray-300 hover:text-white">Who We Are</Link></li>
                  <li><Link to="/academics" className="text-gray-300 hover:text-white">Academics</Link></li>
                  <li><Link to="/community" className="text-gray-300 hover:text-white">Community</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Sacred Heart School. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;