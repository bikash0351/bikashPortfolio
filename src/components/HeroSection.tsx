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
            Building Modern, Minimal <br /> & Functional Websites <span className="text-blue-600">for You</span>
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Hey, I'm Bikash, a web developer passionate about crafting beautiful, full-stack websites with complete functionality. I specialize in creating modern, minimal applications with a strong focus on user experience and robust development practices.
          </p>
          {/* Social Icons - Updated with links */}
          <div className="flex space-x-4 mb-8">
            <a href="https://www.facebook.com/hsakibatpug" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/bikash.gupta.official/" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            </a>
            <a href="http://linkedin.com/in/bikashgupta0351" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            </a>
            <a href="https://github.com/bikash0351" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            </a>
          </div>
          {/* Buttons - Removed "Get in touch" button */}
          <div className="flex space-x-4">
             {/* Wrapped Button in an anchor tag with mailto link */}
            <a href="mailto:bikashgupta0351@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Send Email</Button> {/* Keep 'Send Email' button */}
            </a>
            {/* Removed 'Get in touch' button */}
          </div>
        </div>

        {/* Right Card (Image and Info) */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4 flex flex-col items-center text-center">
          {/* Replace with Bikash Gupta's image */}
          <img
            src="./images/bikash.jpeg" // Placeholder image
            alt="Bikash Gupta"
            className="rounded-lg mb-4 object-cover w-full h-auto"
          />
          <div className="font-semibold text-xl mb-1">Bikash Gupta</div>
          <div className="text-gray-600">Web Developer</div> {/* Changed title */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;