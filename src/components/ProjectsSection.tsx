import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Using shadcn Card component
import { Code, Robot } from 'lucide-react'; // Import icons for projects

const ProjectsSection = () => {
  // Placeholder project data with type and icon information
  const projects = [
    { id: 1, title: 'Taaza Food', category: 'Food Ordering Platform', imageUrl: './images/taaza-food.jpeg', type: 'software' },
    { id: 2, title: 'RoboxCraft', category: 'IoT and Robotics Project', imageUrl: './images/robox-craft.png', type: 'robotics' },
    { id: 3, title: 'Human Following Robot', category: 'AI Enabled Human Tracking Robot', imageUrl: './images/face-bot-robot.jpg', type: 'robotics' },
    { id: 4, title: 'Arduino Obstacle Avoiding Car', category: 'Obstacle Avoiding Car', imageUrl: './images/obstacle-bot-robot.jpg', type: 'robotics' },
    // Add more projects as needed
  ];

  const softwareProjects = projects.filter(p => p.type === 'software');
  const roboticsProjects = projects.filter(p => p.type === 'robotics');

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Explore my latest <span className="text-blue-600">Projects</span>
      </h2>
      <p className="text-gray-700 mb-8 text-lg text-center">
        These projects showcase my commitment to crafting unique, high-performance digital experiences tailored to every need.
      </p>

      {/* Software Projects Section */}
      <div className="mb-12"> {/* Add margin bottom */}
        <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Software Projects</h3> {/* Section title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered entry animation
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <div className="flex items-center mb-2"> {/* Flex for icon and title */}
                  <Code size={20} className="text-blue-600 mr-2" /> {/* Software icon */}
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Robotics Projects Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Robotics Projects</h3> {/* Section title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roboticsProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl animate-fadeIn"
              style={{ animationDelay: `${index * 0.1 + softwareProjects.length * 0.1}s` }} // Staggered entry animation (after software projects)
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                 <div className="flex items-center mb-2"> {/* Flex for icon and title */}
                  <Robot size={20} className="text-blue-600 mr-2" /> {/* Robotics icon */}
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{project.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;