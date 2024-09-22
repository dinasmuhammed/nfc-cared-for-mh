import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="h-8 w-8" />, url: 'https://www.linkedin.com/in/muhammedadnanvv/' },
    { name: 'Facebook', icon: <Facebook className="h-8 w-8" />, url: 'https://www.facebook.com/profile.php?id=100084139741037' },
    { name: 'Twitter', icon: <Twitter className="h-8 w-8" />, url: 'https://x.com/MuhammadAd93421' },
  ];

  return (
    <Card id="social" className="glass-effect">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Connect with Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"
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
