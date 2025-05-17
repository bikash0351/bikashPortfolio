import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        About <span className="text-blue-600">Me</span> {/* Placeholder heading */}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Card */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="space-y-4">
            {/* Placeholder Education Item 1 */}
            <div>
              <p className="font-medium">University Name</p>
              <p className="text-gray-600 text-sm">Degree Name, Major (Year - Year)</p>
            </div>
            {/* Placeholder Education Item 2 */}
            <div>
              <p className="font-medium">Another Institution</p>
              <p className="text-gray-600 text-sm">Certification/Course (Year)</p>
            </div>
            {/* Add more education items as needed */}
          </div>
        </div>

        {/* Experience Card */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="space-y-4">
            {/* Placeholder Experience Item 1 */}
            <div>
              <p className="font-medium">Company Name</p>
              <p className="text-gray-600 text-sm">Job Title (Year - Year)</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Key responsibility or achievement 1</li>
                <li>Key responsibility or achievement 2</li>
              </ul>
            </div>
            {/* Placeholder Experience Item 2 */}
            <div>
              <p className="font-medium">Another Company</p>
              <p className="text-gray-600 text-sm">Previous Job Title (Year - Year)</p>
              <ul className="list-disc list-inside text-gray-700 text-sm mt-1">
                <li>Key responsibility or achievement A</li>
                <li>Key responsibility or achievement B</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;