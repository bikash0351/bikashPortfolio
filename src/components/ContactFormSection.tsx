import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactFormSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Get In <span className="text-blue-600">Touch</span>
      </h2>
      {/* Subtitle */}
      <p className="text-gray-700 text-lg mb-8 text-center">
        Have a project in mind or just want to say hello? Fill out the form below. {/* Placeholder subtitle */}
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-center">Send a Message</h3> {/* Centered title */}
        <form className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" rows={5} />
          </div>
          {/* Button uses default dark style */}
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;