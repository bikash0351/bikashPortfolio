import React from 'react';
import { Button } from '@/components/ui/button';
// Updated imports for social media icons
import { Instagram, Facebook, Linkedin, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Card (Text Content) */}
        <div className="bg-white p-8 rounded-lg shadow-md flex-1 w-full md:w-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Bring Your Web Design <br /> Ideas to Life <span className="text-blue-600">with Framer</span> {/* Placeholder text */}
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Hey, I'm Bikas, welcome to my world. I design high-performance, visually stunning websites using Framer—blending creativity, speed, and seamless user experience. {/* Placeholder description */}
          </p>
          {/* Social Icons - Updated */}
          <div className="flex space-x-4 mb-8">
            <Facebook size={24} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            <Instagram size={24} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            <Linkedin size={24} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            <Github size={24} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          </div>
          {/* Buttons - Updated "Get Template" to "Send Email" */}
          <div className="flex space-x-4">
            <Button size="lg">Send Email</Button> {/* Changed button text */}
            <Button variant="outline" size="lg">Get in touch</Button>
          </div>
        </div>

        {/* Right Card (Image and Info) */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4 flex flex-col items-center text-center">
          {/* Replace with Bikas Gupta's image */}
          <img
            src="./images/bikash.jpeg" // Placeholder image
            alt="Bikas Gupta"
            className="rounded-lg mb-4 object-cover w-full h-auto"
          />
          <div className="font-semibold text-xl mb-1">Bikas Gupta</div>
          <div className="text-gray-600">Senior Product Designer at Milano</div> {/* Placeholder title/company */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;