import React from 'react';

const FacultyStaff: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Faculty & Staff</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the dedicated educators and staff members who make Sacred Heart School exceptional.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Sacred Heart School, our faculty and staff members are not just educators and professionals—they are mentors, 
            role models, and champions for our students.
          </p>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Leadership</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full mx-auto overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Principal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">Dr. Sarah Johnson</h4>
              <p className="text-blue-600 mb-3">Principal</p>
              <p className="text-gray-600 text-sm">
                Ed.D. in Educational Leadership<br />
                20 years in Catholic education
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full mx-auto overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Vice Principal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">Michael Rodriguez</h4>
              <p className="text-blue-600 mb-3">Vice Principal</p>
              <p className="text-gray-600 text-sm">
                M.Ed. in Curriculum & Instruction<br />
                15 years at Sacred Heart
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full mx-auto overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Chaplain" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">Fr. Thomas Miller</h4>
              <p className="text-blue-600 mb-3">School Chaplain</p>
              <p className="text-gray-600 text-sm">
                M.Div. in Theology<br />
                8 years of parish ministry
              </p>
            </div>
          </div>
        </div>

        {/* Faculty */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Faculty</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Elementary */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Emily Parker</h4>
              <p className="text-blue-600 text-sm">3rd Grade</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/6325953/pexels-photo-6325953.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">James Wilson</h4>
              <p className="text-blue-600 text-sm">5th Grade</p>
            </div>
            
            {/* Middle School */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Robert Chang</h4>
              <p className="text-blue-600 text-sm">Math</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/5905901/pexels-photo-5905901.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Lisa Nguyen</h4>
              <p className="text-blue-600 text-sm">Science</p>
            </div>
            
            {/* Specialists */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">David Martinez</h4>
              <p className="text-blue-600 text-sm">Music</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/8363042/pexels-photo-8363042.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Karen Lee</h4>
              <p className="text-blue-600 text-sm">Art</p>
            </div>
            
            {/* Religious Education */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Sister Maria</h4>
              <p className="text-blue-600 text-sm">Religious Studies</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/4342400/pexels-photo-4342400.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Teacher" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Peter Johnson</h4>
              <p className="text-blue-600 text-sm">Physical Education</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              View All Faculty
            </button>
          </div>
        </div>

        {/* Staff */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Staff</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/5669788/pexels-photo-5669788.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Staff" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Jessica Rivera</h4>
              <p className="text-blue-600 text-sm">Administrative Assistant</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/14174183/pexels-photo-14174183.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Staff" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Thomas Allen</h4>
              <p className="text-blue-600 text-sm">Facilities Manager</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/7821874/pexels-photo-7821874.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Staff" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Susan White</h4>
              <p className="text-blue-600 text-sm">School Counselor</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-3">
                <img 
                  src="https://images.pexels.com/photos/7592496/pexels-photo-7592496.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Staff" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Mark O'Neill</h4>
              <p className="text-blue-600 text-sm">Technology Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyStaff;
