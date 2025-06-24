import React from 'react';

const History: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our History</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the rich heritage and traditions that have shaped Sacred Heart School since its founding.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">A Legacy of Excellence</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Sacred Heart School has a proud history dating back to 1948 when it was founded by the Sisters of Mercy 
            with a mission to provide exceptional Catholic education to the community. What began as a small parish 
            school with just four classrooms has grown into the vibrant educational institution we know today.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Through the decades, our school has maintained its commitment to academic excellence, spiritual growth, 
            and service to others while adapting to meet the changing needs of students and families.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Our Journey Through Time</h3>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* 1940s */}
              <div className="mb-16 flex justify-between items-center w-full">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"></div>
                </div>
                <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">1948</h4>
                  <p className="text-gray-700">
                    Sacred Heart School is founded by the Sisters of Mercy. The original school building opens with four classrooms serving grades 1-4.
                  </p>
                  <img 
                    src="https://images.pexels.com/photos/5025111/pexels-photo-5025111.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Vintage school photo" 
                    className="w-full h-40 object-cover rounded-md mt-4"
                  />
                </div>
              </div>

              {/* 1950s */}
              <div className="mb-16 flex justify-between items-center w-full flex-row-reverse">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"></div>
                </div>
                <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">1954</h4>
                  <p className="text-gray-700">
                    School expands to include grades 5-8. First graduating class completes eighth grade. School chapel is built.
                  </p>
                  <img 
                    src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Old chapel" 
                    className="w-full h-40 object-cover rounded-md mt-4"
                  />
                </div>
              </div>

              {/* 1970s */}
              <div className="mb-16 flex justify-between items-center w-full">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"></div>
                </div>
                <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">1972</h4>
                  <p className="text-gray-700">
                    New gymnasium and science facilities built. School introduces innovative science curriculum.
                  </p>
                  <img 
                    src="https://images.pexels.com/photos/8535190/pexels-photo-8535190.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Gymnasium" 
                    className="w-full h-40 object-cover rounded-md mt-4"
                  />
                </div>
              </div>

              {/* 1990s */}
              <div className="mb-16 flex justify-between items-center w-full flex-row-reverse">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"></div>
                </div>
                <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">1995</h4>
                  <p className="text-gray-700">
                    Major campus renovation completed. Computer lab established. School begins implementing technology in classrooms.
                  </p>
                  <img 
                    src="https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Computer lab" 
                    className="w-full h-40 object-cover rounded-md mt-4"
                  />
                </div>
              </div>

              {/* 2010s */}
              <div className="mb-16 flex justify-between items-center w-full">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"></div>
                </div>
                <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">2012</h4>
                  <p className="text-gray-700">
                    New library and media center opens. STEM curriculum enhanced. School begins 1:1 tablet program for middle school students.
                  </p>
                  <img 
                    src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Library" 
                    className="w-full h-40 object-cover rounded-md mt-4"
                  />
                </div>
              </div>

              {/* Present */}
              <div className="flex justify-between items-center w-full flex-row-reverse">
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-sm z-10"></div>
                </div>
                <div className="w-5/12 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Today</h4>
                  <p className="text-gray-700">
                    Sacred Heart School continues to thrive with a full enrollment, state-of-the-art facilities, and a continuing commitment to Catholic education that prepares students for the challenges of the 21st century.
                  </p>
                  <img 
                    src="https://images.pexels.com/photos/8617636/pexels-photo-8617636.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Modern classroom" 
                    className="w-full h-40 object-cover rounded-md mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="School building" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Continuing Legacy</h3>
              <p className="text-gray-700 mb-4">
                While much has changed over the decades, the heart of our mission remains the same: to provide an 
                excellent education rooted in faith, values, and service to others. The spirit of the Sisters of Mercy 
                continues to inspire us today in our commitment to nurture the intellectual, spiritual, and social 
                development of each student.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, Sacred Heart School has graduated thousands of students who have gone on to make 
                positive contributions in their communities and beyond. Our alumni can be found in diverse fields 
                and professions, carrying forward the values and principles instilled during their time at Sacred Heart.
              </p>
              <p className="text-gray-700">
                As we look to the future, we remain dedicated to honoring our rich heritage while embracing the 
                innovations and advancements that will prepare our students for success in an ever-changing world.
              </p>
            </div>
          </div>
        </div>

        {/* Historic Photos */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Historic Photo Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.pexels.com/photos/5025120/pexels-photo-5025120.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Historic photo 1" 
              className="w-full h-48 object-cover rounded-md"
            />
            <img 
              src="https://images.pexels.com/photos/5025242/pexels-photo-5025242.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Historic photo 2" 
              className="w-full h-48 object-cover rounded-md"
            />
            <img 
              src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Historic photo 3" 
              className="w-full h-48 object-cover rounded-md"
            />
            <img 
              src="https://images.pexels.com/photos/159751/book-read-literature-pages-159751.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Historic photo 4" 
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
