import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutMe = () => {
  return (
    <Card id="about" className="mb-8">
      <CardHeader>
        <CardTitle>About Muhammed Adnan</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Muhammed Adnan is the Founder & Developer of AD Web Comic Agency. With extensive experience as a ChatGPT Expert,
          he specializes in web development and AI integration. His expertise combines cutting-edge technology with creative
          solutions, delivering innovative web experiences for clients across various industries.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutMe;