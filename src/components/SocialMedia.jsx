import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/muhammed-adnan' },
    { name: 'Facebook', icon: <Facebook />, url: 'https://www.facebook.com/muhammedadnan' },
    { name: 'Twitter', icon: <Twitter />, url: 'https://twitter.com/muhammedadnan' },
  ];

  return (
    <Card id="social" className="mb-8">
      <CardHeader>
        <CardTitle>Connect with Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMedia;