import React from 'react';

const Mission: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Mission & Values</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The guiding principles that shape our community and educational approach.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-md p-10 mb-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-800 mb-6 leading-relaxed max-w-3xl mx-auto italic">
            "Sacred Heart School exists to provide an excellent academic education in an environment of faith and virtue, 
            forming students who will contribute to society through their character, faith, and intellect."
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Vision */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 mb-4">
                Sacred Heart School strives to be a premier Catholic educational institution where students are inspired to excel 
                academically, grow spiritually, and develop as compassionate leaders committed to service and social justice.
              </p>
              <p className="text-gray-700 mb-4">
                We envision graduates who:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Demonstrate strong academic foundations and critical thinking skills</li>
                <li>Express a deep understanding of Catholic teachings and values</li>
                <li>Exhibit empathy, integrity, and ethical decision-making</li>
                <li>Embrace diversity and seek to understand others' perspectives</li>
                <li>Lead by example and work for positive change in their communities</li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mission and Vision" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Faith</h4>
              <p className="text-gray-700">
                We foster the spiritual development of our students through prayer, religious instruction, and participation in Catholic traditions.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Excellence</h4>
              <p className="text-gray-700">
                We maintain high academic standards and challenge all students to reach their full intellectual potential.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Integrity</h4>
              <p className="text-gray-700">
                We encourage honesty, responsibility, and ethical behavior in all aspects of school life.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Compassion</h4>
              <p className="text-gray-700">
                We cultivate empathy and care for others, teaching students to respond to the needs of their community.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Community</h4>
              <p className="text-gray-700">
                We build meaningful relationships among students, families, faculty, and staff to create a supportive school environment.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Service</h4>
              <p className="text-gray-700">
                We emphasize the importance of giving back through service learning opportunities and outreach programs.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/12628392/pexels-photo-12628392.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Educational Philosophy" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Educational Philosophy</h3>
              <p className="text-gray-700 mb-4">
                At Sacred Heart School, we believe that each child is a unique individual with distinct talents, 
                abilities, and learning styles. Our educational approach recognizes these differences and provides 
                a variety of learning experiences to help all students succeed.
              </p>
              <p className="text-gray-700 mb-4">
                We are committed to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Holistic Education:</strong> Addressing the intellectual, spiritual, social, emotional, and physical development of each student</li>
                <li><strong>Active Learning:</strong> Engaging students as active participants in the learning process</li>
                <li><strong>Critical Thinking:</strong> Encouraging analysis, problem-solving, and independent thought</li>
                <li><strong>Integrated Curriculum:</strong> Connecting subject areas to provide a comprehensive educational experience</li>
                <li><strong>Technology Integration:</strong> Using digital tools as appropriate to enhance learning and prepare students for a technological world</li>
                <li><strong>Character Formation:</strong> Reinforcing values, virtues, and moral development throughout all aspects of school life</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 p-10 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Join Our Mission</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            We invite you to be part of the Sacred Heart School community—a place where faith and academic excellence come together 
            to nurture tomorrow's leaders.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              Apply Now
            </button>
            <button className="bg-white border border-blue-900 text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
