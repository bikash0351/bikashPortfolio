import React, { useState } from 'react'; // Import useState
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
// Removed showSuccess import as we are no longer using toast here
// import { showSuccess } from '@/utils/toast';

const ContactFormSection = () => {
  // State to track the form submission status
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    // Simulate sending the message (no actual sending happens here)
    console.log("Form submitted (prevented default). Updating button text.");

    // Update the status to 'sent'
    setStatus('sent');

    // Optionally, clear the form fields here if needed
    // event.currentTarget.reset();
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Get In <span className="text-blue-600">Touch</span>
      </h2>
      {/* Subtitle */}
      <p className="text-gray-700 text-lg mb-8 text-center">
        Have a project in mind or just want to say hello? Fill out the form below.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-center">Send a Message</h3> {/* Centered title */}
        <form className="space-y-6" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" disabled={status === 'sent'} /> {/* Disable input after sending */}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" disabled={status === 'sent'} /> {/* Disable input after sending */}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your Message" rows={5} disabled={status === 'sent'} /> {/* Disable textarea after sending */}
          </div>
          {/* Button text changes based on status, and button is disabled after sending */}
          <Button type="submit" className="w-full" disabled={status === 'sent'}>
            {status === 'sent' ? 'Message Sent!' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;