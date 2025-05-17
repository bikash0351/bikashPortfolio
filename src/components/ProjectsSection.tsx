import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Using shadcn Card component
import { Code, Bot } from 'lucide-react'; // Import icons for sections

const ProjectsSection = () => {
  // Categorized project data
  const allProjects = [
    { id: 1, title: 'Taaza Food', category: 'Food Ordering Platform', type: 'software', imageUrl: './images/taaza-food.jpeg' },
    { id: 5, title: 'Portfolio Website', category: 'Personal Website', type: 'software', imageUrl: 'https://via.placeholder.com/400x200' }, // Added placeholder software project
    { id: 2, title: 'RoboxCraft', category: 'IoT and Robottics Project', type: 'software', imageUrl: './images/robox-craft.png' }, // Changed type to 'software'
    { id: 3, title: 'Human Following Robot', category: 'AI Enabled Human Tracking Robot', type: 'robotics', imageUrl: './images/face-bot-robot.jpg' },
    { id: 4, title: 'Arduino Obstacle Avoiding Car', category: 'Obstacle Avoiding Car', type: 'robotics', imageUrl: './images/obstacle-bot-robot.jpg' },
    // Add more projects as needed, ensuring they have a 'type' property ('software' or 'robotics')
  ];

  const softwareProjects = allProjects.filter(p => p.type === 'software');
  const roboticsProjects = allProjects.filter(p => p.type === 'robotics');

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Explore my latest <span className="text-blue-600">Projects</span>
      </h2>
      <p className="text-gray-700 mb-8 text-lg text-center">
        These projects showcase my commitment to crafting unique, high-performance digital experiences tailored to every need.
      </p>

      {/* Software Projects Section */}
      <div className="mb-12 text-center"> {/* Add margin bottom and text-center */}
        <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center"> {/* Sub-heading with icon, centered */}
          <Code size={28} className="text-blue-600 mr-3" /> Software Projects
        </h3>
        {/* Wrap grid in flex container to center the grid itself */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid layout */}
            {softwareProjects.map(project => (
              <Card
                key={project.id}
                className="overflow-hidden cursor-pointer
                           transition-transform duration-300 ease-in-out
                           hover:scale-105 hover:shadow-lg" // Added hover animation classes
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <CardContent className="p-4 text-center"> {/* Text already centered */}
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Robotics Projects Section */}
      <div className="text-center"> {/* Add text-center */}
        <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center"> {/* Sub-heading with icon, centered */}
          <Bot size={28} className="text-blue-600 mr-3" /> Robotics Projects
        </h3>
        {/* Wrap grid in flex container to center the grid itself */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid layout */}
            {roboticsProjects.map(project => (
              <Card
                key={project.id}
                className="overflow-hidden cursor-pointer
                           transition-transform duration-300 ease-in-out
                           hover:scale-105 hover:shadow-lg" // Added hover animation classes
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <CardContent className="p-4 text-center"> {/* Text already centered */}
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;