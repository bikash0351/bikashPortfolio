import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    // Outer container for max width and centering
    <header className="py-6 max-w-7xl mx-auto w-full"> {/* Removed px-* here */}
      {/* Inner container for horizontal padding and flex layout */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16"> {/* Added px-* here */}
        {/* Logo/Name */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <Avatar>
            {/* Replace with Bikash Gupta's image */}
            <AvatarImage src="https://via.placeholder.com/40" alt="Bikash Gupta" />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-lg">Bikash Gupta</div>
            <div className="text-sm text-gray-600">Web Developer</div> {/* Changed title */}
          </div>
        </div>

        {/* Navigation Links (Hidden on small screens, centered on md+) */}
        <nav className="hidden md:flex md:flex-grow md:justify-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-3 flex-shrink-0">
          <Button variant="outline" className="hidden md:inline-flex">Get In Touch</Button>
          <Button>Send Email</Button> {/* Button text is now 'Send Email' */}
        </div>
      </div>
    </header>
  );
};

export default Header;