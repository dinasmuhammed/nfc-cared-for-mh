import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <Card id="about" className="glass-effect">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">About Muhammed Adnan</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Muhammed Adnan is the visionary Founder & Developer of AD Web Comic Agency. With a wealth of experience as a ChatGPT Expert,
          he excels in web development and AI integration. His unique blend of technical prowess and creative insight allows him to deliver
          cutting-edge web experiences that push the boundaries of what's possible in the digital realm. Adnan's innovative approach
          has helped clients across various industries to stand out in the competitive online landscape.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
