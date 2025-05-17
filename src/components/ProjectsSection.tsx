import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Using shadcn Card component

const ProjectsSection = () => {
  // Placeholder project data
  const projects = [
    { id: 1, title: 'Taaza Food', category: 'Food Ordering Platform', imageUrl: './images/taaza-food.jpeg' },
    { id: 2, title: 'RoboxCraft', category: 'IoT and Robottics Project', imageUrl: './images/robox-craft.png' },
    { id: 3, title: 'Human Following Robot', category: 'AI Enabled Human Tracking Robot', imageUrl: './images/face-bot-robot.jpg' },
    { id: 4, title: 'Arduino Obstacle Avoiding Car', category: 'Obstacle Avoiding Car', imageUrl: './images/obstacle-bot-robot.jpg' },
    // Add more projects as needed
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> {/* Added text-center */}
        Explore my latest <span className="text-blue-600">Projects</span>
      </h2>
      <p className="text-gray-700 mb-8 text-lg text-center"> {/* Added text-center */}
        These projects showcase my commitment to crafting unique, high-performance digital experiences tailored to every need.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Card key={project.id} className="overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;