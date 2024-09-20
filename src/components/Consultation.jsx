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
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
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
    <Card id="consultation" className="mb-8">
      <CardHeader>
        <CardTitle>Schedule a Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Interested in our services? Let's discuss how we can help you achieve your goals.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div className="flex space-x-2">
            <Button type="submit">Send Email</Button>
            <Button type="button" onClick={openWhatsApp}>Message on WhatsApp</Button>
            <Button type="button" onClick={openInstagram}>Message on Instagram</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Consultation;