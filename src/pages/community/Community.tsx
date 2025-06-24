import React from 'react';
import { Link } from 'react-router-dom';

const Community: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Community</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join our vibrant school community and be part of something special.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Community</h2>
          <p className="text-lg text-gray-700 mb-4">
            Sacred Heart School is more than just a place of learning—it's a community where students, 
            parents, teachers, and staff come together to create a supportive and enriching environment.
          </p>
          <p className="text-lg text-gray-700">
            We invite you to explore the many ways to get involved and connect with our school community.
          </p>
        </div>

        {/* Community Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* News & Events */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8471767/pexels-photo-8471767.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="School event" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">News & Events</h3>
              <p className="text-gray-700 mb-4">
                Stay up-to-date with the latest happenings at Sacred Heart School. From academic achievements 
                to community celebrations, there's always something exciting going on.
              </p>
              <Link to="/community/news" className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
                View Calendar
              </Link>
            </div>
          </div>

          {/* Parent Resources */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7683832/pexels-photo-7683832.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Parent meeting" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Parent Resources</h3>
              <p className="text-gray-700 mb-4">
                Access important information, forms, and resources designed to help parents navigate 
                the school year successfully and support their children's education.
              </p>
              <Link to="/community/parents" className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
                Parent Portal
              </Link>
            </div>
          </div>

          {/* Alumni */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Alumni gathering" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Alumni</h3>
              <p className="text-gray-700 mb-4">
                Our alumni network connects former students with each other and with current students. 
                Discover ways to stay involved and give back to your alma mater.
              </p>
              <Link to="/community/alumni" className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
                Alumni Network
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="School office" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                Have questions or need assistance? Our staff is here to help. Find contact information 
                for various departments and offices within Sacred Heart School.
              </p>
              <Link to="/community/contact" className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Upcoming Events</h3>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <ul className="divide-y divide-gray-200">
                <li className="py-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-2 text-center w-16">
                      <span className="block text-sm text-blue-800">JUN</span>
                      <span className="block text-xl font-bold text-blue-900">30</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Summer Break Begins</h4>
                      <p className="text-gray-600">School closed for summer vacation</p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-2 text-center w-16">
                      <span className="block text-sm text-blue-800">AUG</span>
                      <span className="block text-xl font-bold text-blue-900">15</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">New Parent Orientation</h4>
                      <p className="text-gray-600">6:00 PM - School Auditorium</p>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-2 text-center w-16">
                      <span className="block text-sm text-blue-800">AUG</span>
                      <span className="block text-xl font-bold text-blue-900">20</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">First Day of School</h4>
                      <p className="text-gray-600">Welcome back students!</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <Link to="/community/calendar" className="text-blue-600 hover:text-blue-800 font-medium">
                  View Full Calendar →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-10 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Get Involved</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            There are many ways to participate in our school community. Whether you're a parent, alumni, or 
            community member, we welcome your involvement and support.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              Volunteer Opportunities
            </button>
            <Link to="/community/donate" className="bg-white border border-blue-900 text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Support Our School
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
