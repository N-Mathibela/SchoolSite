import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Academics: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Academics</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our challenging curriculum, innovative programs, and resources designed to foster academic excellence.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Students learning" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Academic Excellence</h2>
            <p className="text-gray-700 mb-4">
              At Sacred Heart School, we offer a comprehensive, rigorous academic program rooted in Catholic values. Our curriculum is designed to challenge students intellectually while nurturing their spiritual and personal development.
            </p>
            <p className="text-gray-700 mb-4">
              Our approach to education emphasizes critical thinking, creativity, and collaboration. Small class sizes allow our teachers to provide individualized attention and support to each student, ensuring that all children have the opportunity to succeed.
            </p>
            <p className="text-gray-700 mb-4">
              From core subjects like mathematics, language arts, science, and social studies to specialty areas including Spanish, music, art, and physical education, our balanced curriculum prepares students for success in high school and beyond.
            </p>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Curriculum */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Curriculum" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Curriculum</h3>
                <p className="text-gray-700 mb-4">Our comprehensive curriculum integrates faith with academic excellence across all subject areas.</p>
                <Link to="/academics/curriculum" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/8617557/pexels-photo-8617557.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Programs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Programs</h3>
                <p className="text-gray-700 mb-4">Specialized academic programs to enhance learning and develop student talents and interests.</p>
                <Link to="/academics/programs" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Resources" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Resources</h3>
                <p className="text-gray-700 mb-4">Academic support services, learning tools, and enrichment materials to help students succeed.</p>
                <Link to="/academics/resources" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.pexels.com/photos/6942764/pexels-photo-6942764.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Calendar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Calendar</h3>
                <p className="text-gray-700 mb-4">Important academic dates, events, and schedules for the school year.</p>
                <Link to="/academics/calendar" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Small Class Sizes</h4>
              <p className="text-gray-700">
                18:1 student-teacher ratio allows for personalized attention and differentiated instruction.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">STEM Excellence</h4>
              <p className="text-gray-700">
                Robust science, technology, engineering, and math curriculum with hands-on learning opportunities.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Literacy Focus</h4>
              <p className="text-gray-700">
                Comprehensive reading and writing program that builds strong communication skills across all subjects.
              </p>
            </div>
          </div>
        </div>

        {/* Standardized Testing */}
        <div className="bg-white p-10 rounded-xl shadow-md mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Academic Achievement</h3>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Sacred Heart School students consistently perform above national averages on standardized tests, 
            with over 90% of our graduates accepted into their first-choice high schools.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-gray-700">Reading Proficiency</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">92%</p>
              <p className="text-gray-700">Math Proficiency</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">94%</p>
              <p className="text-gray-700">Science Proficiency</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">97%</p>
              <p className="text-gray-700">High School Readiness</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-10 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Experience Our Academic Excellence</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            We invite you to see our academic programs in action by scheduling a tour of Sacred Heart School.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              Schedule a Visit
            </button>
            <Link to="/academics/curriculum" className="bg-white border border-blue-900 text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Explore Curriculum
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Academics;
