import React from 'react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Sacred Heart School</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover what makes our school a special place for learning, growth, and spiritual development.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Welcome to Sacred Heart School</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Sacred Heart School, we provide a rigorous academic program rooted in Catholic traditions and values. 
            Our commitment to educating the whole child—mind, body, and spirit—creates a vibrant learning community 
            where students thrive and are prepared for the challenges of the future.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Founded on the principles of faith, academic excellence, and service, Sacred Heart School offers 
            students from kindergarten through eighth grade an exceptional educational experience in a nurturing environment. 
            Our dedicated faculty and staff are committed to helping each student reach their full potential.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Students in classroom" 
              className="w-full rounded-lg shadow-lg mb-6"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/8613213/pexels-photo-8613213.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Student working" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/8613183/pexels-photo-8613183.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Art class" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">What Sets Us Apart</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Faith-Based Education</h4>
                  <p className="text-gray-700">
                    Our Catholic identity informs all aspects of our school community, fostering moral development, compassion, and a commitment to serving others.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Academic Excellence</h4>
                  <p className="text-gray-700">
                    Our challenging curriculum prepares students for success in high school and beyond, with a focus on critical thinking, creativity, and problem-solving.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Nurturing Community</h4>
                  <p className="text-gray-700">
                    Small class sizes allow our teachers to provide personalized attention and support to each student, creating a close-knit community where everyone belongs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mr-3 mt-1">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Well-Rounded Development</h4>
                  <p className="text-gray-700">
                    We offer a wide range of extracurricular activities, including sports, arts, and service opportunities, to help students develop their unique talents and interests.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-50 rounded-xl p-10 mb-16">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-10">Sacred Heart School at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">75+</p>
              <p className="text-gray-700">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">18:1</p>
              <p className="text-gray-700">Student-Teacher Ratio</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-gray-700">High School Acceptance Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">25+</p>
              <p className="text-gray-700">Extracurricular Activities</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-10">What Our Community Says</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-200 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                Sacred Heart has been an incredible blessing for our family. The teachers truly care about each student's success, both academically and spiritually.
              </p>
              <p className="font-bold text-gray-800">Maria Rodriguez</p>
              <p className="text-gray-600">Parent of 3rd and 6th Grade Students</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-200 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                As an alumnus, I can confidently say that Sacred Heart provided me with the foundation I needed for success in high school, college, and beyond.
              </p>
              <p className="font-bold text-gray-800">James Thompson</p>
              <p className="text-gray-600">Class of 2010 Graduate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-200 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">
                Teaching at Sacred Heart is a joy. The school's commitment to both academic excellence and Catholic values creates a unique and rewarding learning environment.
              </p>
              <p className="font-bold text-gray-800">Patricia Chen</p>
              <p className="text-gray-600">5th Grade Teacher, 15 Years</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white p-10 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Experience Sacred Heart School</h3>
          <p className="text-lg mb-6">We invite you to visit our campus and see firsthand what makes our school community so special.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Schedule a Tour
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
