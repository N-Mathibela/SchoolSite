import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Who We Are</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn about our history, mission, and the dedicated faculty and staff who make Sacred Heart School exceptional.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="School building" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">About Sacred Heart School</h2>
            <p className="text-gray-700 mb-4">
              Sacred Heart School provides a rigorous academic program rooted in Catholic traditions and values. Our commitment to educating the whole child—mind, body, and spirit—creates a vibrant learning community where students thrive.
            </p>
            <p className="text-gray-700 mb-6">
              With a rich history dating back over 75 years, our school has evolved while maintaining our core mission of nurturing students to become compassionate, responsible citizens ready to make a positive impact on the world.
            </p>
            <Link to="/who-we-are/about" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800">
              Learn more about us <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img 
              src="https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="About SHS" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">About SHS</h3>
              <p className="text-gray-700 mb-4">Discover what makes Sacred Heart School a special place for learning and growth.</p>
              <Link to="/who-we-are/about" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* History */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img 
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="History" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Our History</h3>
              <p className="text-gray-700 mb-4">Explore the rich heritage and traditions that have shaped our school since its founding.</p>
              <Link to="/who-we-are/history" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img 
              src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Mission" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
              <p className="text-gray-700 mb-4">Learn about our mission, vision, and the values that guide everything we do.</p>
              <Link to="/who-we-are/mission" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Faculty & Staff */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Faculty & Staff</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet our dedicated educators and staff members who are passionate about fostering an exceptional learning environment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Sample faculty members */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Principal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-800">Dr. Sarah Johnson</h3>
              <p className="text-blue-600">Principal</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Vice Principal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-800">Michael Rodriguez</h3>
              <p className="text-blue-600">Vice Principal</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-800">Emily Parker</h3>
              <p className="text-blue-600">Math Department Chair</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/6325953/pexels-photo-6325953.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-800">James Wilson</h3>
              <p className="text-blue-600">Science Department Chair</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/who-we-are/faculty-staff" className="inline-block bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
