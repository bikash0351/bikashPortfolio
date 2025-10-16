import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react'; // Import icons

const AboutSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        About <span className="text-blue-600">Me</span>
      </h2>
      {/* Subtitle */}
      <p className="text-gray-700 text-lg mb-8 text-center">
        Here's a brief overview of my background and professional journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Card */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <GraduationCap size={28} className="text-blue-600 mr-3" /> Education
          </h3>
          <div className="space-y-6"> {/* Increased space between items */}
            {/* Education Item 1 */}
            <div>
              <p className="font-bold text-lg">Bachelor of Science in Computer Science</p> {/* Bold title */}
              <p className="text-gray-600 text-sm mb-2">NITTE Meenakshi Institute of Technology, Bangalore | (Ongoing)</p> {/* Gray subtitle */}
              <p className="text-gray-700">Focused on software development, data structures, and algorithms.</p> {/* Description */}
            </div>
            {/* Education Item 2 */}
            <div>
              <p className="font-bold text-lg">Technical Education in Computer Engineering</p> {/* Bold title */}
              <p className="text-gray-600 text-sm mb-2">Shree Nrisingh Madhyamika Vidyalaya, Birgunj | 2023</p> {/* Gray subtitle */}
              <p className="text-gray-700">Grabbed a brief knowledge about computer and its branches.</p> {/* Description */}
            </div>
            {/* Add more education items as needed */}
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase size={28} className="text-blue-600 mr-3" /> Experience
          </h3>
          <div className="space-y-6"> {/* Increased space between items */}
            {/* Experience Item 1 (CEO) - Moved to top */}
            <div>
              <p className="font-bold text-lg">CEO</p> {/* Bold title */}
              <p className="text-gray-600 text-sm mb-2">RoboxCraft | (Current)</p> {/* Gray subtitle */}
              <p className="text-gray-700">We provide IoT and Robotics Parts and Projects.</p> {/* Updated Description */}
            </div>
            {/* Experience Item 2 (WordPress Developer) */}
            <div>
              <p className="font-bold text-lg">WordPress Developer</p> {/* Bold title */}
              <p className="text-gray-600 text-sm mb-2">Haitomns Groups Private Limited | 2023</p> {/* Gray subtitle */}
              <p className="text-gray-700">Developed fully functional e-commerce and online food delivery websites.</p> {/* Description */}
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>
      </div>

      {/* Awards header styled like About heading (moved outside the white container) */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center mt-12">
        Awards <span className="text-blue-600"></span>
      </h2>
      <p className="text-gray-700 text-lg mb-8 text-center">
        Honored with recognitions for innovation and contribution to robotics and web development.
      </p>

      {/* Awards container (only the cards/grid) */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* Two awards (one image, title, paragraph each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-md bg-gray-50 p-4">
            <img
              src="./images/award_1.jpg"
              alt="Best Robotics Project"
              className="w-full h-56 object-cover rounded"
            />
            <h4 className="mt-3 text-lg font-semibold">1st Position in Shark Tank Event in Falak’25</h4>
            <p className="text-gray-600 mt-1">
              Among the Top 9 Startup Finalists, Team RoboXCraft stood out for our vision of “Crafting Imagination Into Reality” building innovative robotics and IoT solutions for students, hobbyists, and creators across India.
            </p>
          </div>

          <div className="overflow-hidden rounded-md bg-gray-50 p-4">
            <img
              src="./images/award_2.jpg"
              alt="Innovation Award"
              className="w-full h-56 object-cover rounded"
            />
            <h4 className="mt-3 text-lg font-semibold">1st Place in Young Scientist Conference Program 2023</h4>
            <p className="text-gray-600 mt-1">
              Recognized for developing a AI Enabled Smart Car with sign detection and human detection capabilities, showcasing innovation and technical skills in robotics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;