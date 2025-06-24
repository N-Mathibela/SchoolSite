import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Image */}
          <div>
            <img 
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Sacred Heart School students" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Who We Are</h1>
            
            <p className="text-lg text-blue-900 mb-6 leading-relaxed">
              <strong>Sacred Heart School is a Catholic community which provides an excellent academic education in an environment of faith and virtue.</strong>
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sacred Heart School builds on active partnerships between <strong>school, parish, and family</strong>. Sacred Heart School graduates leaders who are exceptionally well prepared to meet the challenges of college preparatory education with a commitment to Catholic service to others. We are accredited through the Western Catholic Education Association.
            </p>

            <Link to="/who-we-are/about" className="inline-block bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              About SHS
            </Link>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl text-blue-200 mb-4">"</div>
          <blockquote className="text-2xl font-medium text-blue-900 italic mb-6 leading-relaxed">
            Sacred Heart is an academically challenging school that preps students not only for high school and beyond, but also as young Catholics.
          </blockquote>
          <cite className="text-gray-600 font-medium">- Kay Dias, Parent</cite>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Who We Are */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Who We Are" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Who We Are</h3>
              <p className="text-gray-700 mb-4">Learn about our history, mission, and the dedicated faculty and staff who make Sacred Heart School exceptional.</p>
              <Link to="/who-we-are" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Academics */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Academics" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Academics</h3>
              <p className="text-gray-700 mb-4">Discover our challenging curriculum, innovative programs, and resources designed to foster academic excellence.</p>
              <Link to="/academics" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8422719/pexels-photo-8422719.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Community" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Community</h3>
              <p className="text-gray-700 mb-4">Stay connected with Sacred Heart School through news, events, parent resources, and our vibrant alumni network.</p>
              <Link to="/community" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">Latest News & Events</h2>
            <Link to="/community/news-events" className="text-blue-600 hover:text-blue-800 transition-colors">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">June 20, 2025</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">End of Year Awards Ceremony</h3>
                <p className="text-gray-600 mb-4">Join us for our annual End of Year Awards Ceremony celebrating student achievements across all grade levels.</p>
                <Link to="/community/news-events/end-of-year-awards" className="text-blue-600 hover:text-blue-800 transition-colors">Read more</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">June 25, 2025</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">Summer Program Registration</h3>
                <p className="text-gray-600 mb-4">Registration is now open for our summer enrichment programs. Limited spaces available!</p>
                <Link to="/community/news-events/summer-registration" className="text-blue-600 hover:text-blue-800 transition-colors">Read more</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">July 15, 2025</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">New Principal Announcement</h3>
                <p className="text-gray-600 mb-4">We're pleased to announce the appointment of our new principal for the upcoming academic year.</p>
                <Link to="/community/news-events/new-principal" className="text-blue-600 hover:text-blue-800 transition-colors">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Sacred Heart Community</h2>
          <p className="text-xl mb-8">We invite you to learn more about our admissions process and schedule a visit to our campus.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="bg-white text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Apply Now
            </Link>
            <Link to="/community/contact" className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
