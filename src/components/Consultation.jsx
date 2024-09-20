import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Consultation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  const openWhatsApp = () => {
    const whatsappMessage = encodeURIComponent("Hi, I'd like to book a consultation.");
    window.open(`https://wa.me/919656778508?text=${whatsappMessage}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/direct/t/ai.adnanvv', '_blank');
  };

  return (
    <Card id="consultation" className="glass-effect">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Schedule a Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Ready to elevate your digital presence? Let's discuss how we can help you achieve your goals and stand out in the digital landscape.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white dark:bg-gray-800"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white dark:bg-gray-800"
          />
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-white dark:bg-gray-800"
          />
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">Send Email</Button>
            <Button type="button" onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700 text-white flex-1">WhatsApp</Button>
            <Button type="button" onClick={openInstagram} className="bg-purple-600 hover:bg-purple-700 text-white flex-1">Instagram</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Consultation;
