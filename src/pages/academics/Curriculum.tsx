import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Curriculum</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our comprehensive curriculum integrates faith with academic excellence across all subject areas.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Curriculum Overview</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Sacred Heart School offers a challenging, comprehensive curriculum designed to foster academic excellence, critical thinking, 
            and a love of learning in each student. Our approach integrates Catholic values across all subject areas, helping students 
            develop not only academically but also spiritually and morally.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Our curriculum exceeds state and diocesan standards while allowing for differentiated instruction to meet the 
            needs of all learners. Small class sizes enable our teachers to provide individualized attention and create 
            engaging, dynamic learning environments where every student can thrive.
          </p>
        </div>

        {/* Elementary (K-5) */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900">Elementary Program (K-5)</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <img 
                src="https://images.pexels.com/photos/8617632/pexels-photo-8617632.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Elementary students learning" 
                className="w-full rounded-lg shadow-md mb-6"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Our elementary curriculum builds a strong foundation in core subjects while nurturing curiosity and a love of learning. 
                We emphasize literacy, numeracy, and critical thinking skills through engaging, hands-on activities.
              </p>
              <p className="text-gray-700 mb-4">
                Students benefit from specialized instruction in areas such as art, music, physical education, and Spanish. 
                Technology is integrated throughout the curriculum to enhance learning and develop digital literacy skills.
              </p>
              <p className="text-gray-700">
                Faith formation is woven into daily activities and lessons, helping students understand and live Catholic values.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-900 mb-4">Elementary Curriculum Highlights</h4>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Language Arts</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Balanced literacy approach with phonics, comprehension, and writing</li>
                  <li>Literature studies with diverse texts</li>
                  <li>Grammar, vocabulary, and spelling instruction</li>
                  <li>Creative and expository writing development</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Mathematics</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Number sense and operations</li>
                  <li>Problem-solving and critical thinking</li>
                  <li>Measurement, geometry, and data analysis</li>
                  <li>Algebraic concepts and reasoning</li>
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="font-bold text-gray-800 mb-2">Science</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Inquiry-based approach with hands-on experiments</li>
                  <li>Life, physical, and earth sciences</li>
                  <li>Scientific method and research skills</li>
                  <li>Environmental stewardship</li>
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="font-bold text-gray-800 mb-2">Social Studies</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Communities, cultures, and geography</li>
                  <li>American and world history</li>
                  <li>Civic engagement and citizenship</li>
                  <li>Current events and global awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Middle School (6-8) */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900">Middle School Program (6-8)</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-gray-700 mb-4">
                Our middle school curriculum prepares students for the challenges of high school through rigorous academic studies 
                that promote independent thinking, research skills, and personal responsibility.
              </p>
              <p className="text-gray-700 mb-4">
                Students move between specialized classrooms with subject-area teachers who are experts in their fields. 
                We emphasize organizational skills, study habits, and time management to foster independence and accountability.
              </p>
              <p className="text-gray-700">
                Service learning projects and leadership opportunities allow students to apply Catholic values while developing 
                character and a sense of social responsibility.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8617642/pexels-photo-8617642.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Middle school students in laboratory" 
                className="w-full rounded-lg shadow-md mb-6"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-900 mb-4">Middle School Curriculum Highlights</h4>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Language Arts</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Advanced literature analysis and literary techniques</li>
                  <li>Research writing and documentation</li>
                  <li>Persuasive, narrative, and analytical writing</li>
                  <li>Public speaking and debate</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-gray-800 mb-2">Mathematics</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Pre-Algebra and Algebra I</li>
                  <li>Advanced problem-solving strategies</li>
                  <li>Geometry concepts</li>
                  <li>Statistics and data analysis</li>
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="font-bold text-gray-800 mb-2">Science</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Life science and biology</li>
                  <li>Earth science and astronomy</li>
                  <li>Physical science and chemistry concepts</li>
                  <li>Scientific inquiry and experimentation</li>
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="font-bold text-gray-800 mb-2">Social Studies</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Ancient civilizations</li>
                  <li>World history and geography</li>
                  <li>American government and civics</li>
                  <li>Current global issues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Religion and Faith Formation */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-900">Religion and Faith Formation</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/267559/pexels-photo-267559.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Chapel" 
                className="w-full rounded-lg shadow-md mb-6"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Religious education is at the heart of a Sacred Heart education. Our curriculum helps students develop a 
                deep understanding of Catholic doctrine, scripture, traditions, and moral teachings.
              </p>
              <p className="text-gray-700 mb-4">
                Students participate in weekly Mass, regular prayer services, and sacramental preparation. Faith formation 
                is integrated throughout the day and across all subject areas.
              </p>
              <p className="text-gray-700">
                Service learning projects at each grade level allow students to put faith into action by serving others in 
                the school, parish, and wider community.
              </p>
            </div>
          </div>
        </div>

        {/* Specialty Subjects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Specialty Subjects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Art</h4>
              <p className="text-gray-700 mb-4">
                Our visual arts program introduces students to various media, techniques, art history, and principles of design. 
                Students develop creativity, self-expression, and appreciation for artistic works.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Music</h4>
              <p className="text-gray-700 mb-4">
                The music curriculum includes vocal training, music theory, and instrument exploration. Students develop 
                performance skills through choir, band, and special liturgical celebrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Physical Education</h4>
              <p className="text-gray-700 mb-4">
                The PE program promotes physical fitness, motor skill development, teamwork, and sportsmanship through 
                a variety of activities, games, and sports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Spanish</h4>
              <p className="text-gray-700 mb-4">
                Students learn Spanish language and Hispanic cultures through an engaging, communicative approach that 
                builds vocabulary, conversation skills, and cultural appreciation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Technology</h4>
              <p className="text-gray-700 mb-4">
                Our technology curriculum develops digital literacy, research skills, coding fundamentals, and responsible use of 
                technology through integration across all subject areas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-900 mb-3">Library</h4>
              <p className="text-gray-700 mb-4">
                Weekly library visits promote literacy, research skills, and a love of reading. Students learn to access and 
                evaluate information from various sources.
              </p>
            </div>
          </div>
        </div>

        {/* Assessment */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Assessment & Reporting</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                At Sacred Heart School, we use a variety of assessment methods to monitor student progress, inform instruction, 
                and communicate achievement to families. Our approach includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Formative and summative assessments</li>
                <li>Standardized testing (MAP Growth assessments three times per year)</li>
                <li>Project-based assessments</li>
                <li>Student portfolios and self-reflection</li>
                <li>Quarterly report cards</li>
                <li>Parent-teacher conferences twice yearly</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                We recognize that students learn in different ways and demonstrate their understanding through various means. 
                Our teachers use assessment data to differentiate instruction and provide additional support or enrichment as needed.
              </p>
              <p className="text-gray-700">
                Parents have access to our online student information system to monitor grades, assignments, and attendance 
                throughout the school year.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white p-10 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Experience Our Curriculum in Action</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            We invite you to schedule a tour to observe our classrooms, meet our teachers, and see how our curriculum 
            engages and inspires students.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Schedule a Tour
            </button>
            <Link to="/academics/programs" className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition-colors">
              Explore Academic Programs
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
