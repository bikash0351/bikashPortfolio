import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Logo/Name */}
      <div className="flex items-center space-x-3">
        <Avatar>
          {/* Replace with Bikas Gupta's image */}
          <AvatarImage src="https://via.placeholder.com/40" alt="Bikas Gupta" />
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-lg">Bikas Gupta</div>
          <div className="text-sm text-gray-600">UI Designer</div> {/* Placeholder title */}
        </div>
      </div>

      {/* Navigation Links (Hidden on small screens, could add a mobile menu later) */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
        <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
        <Link to="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
      </nav>

      {/* Buttons */}
      <div className="flex space-x-3">
        <Button variant="outline" className="hidden md:inline-flex">Get In Touch</Button>
        <Button>Get Template</Button>
      </div>
    </header>
  );
};

export default Header;