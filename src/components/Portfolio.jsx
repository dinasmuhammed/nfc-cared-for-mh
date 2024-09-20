import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <Card id="portfolio" className="glass-effect">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Explore Our Work</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          AD Web Comic Agency is at the forefront of creating innovative web solutions that seamlessly blend cutting-edge technology with creative design.
          Our services encompass custom web development, sophisticated AI integration, and strategic digital marketing. We pride ourselves on delivering
          unique, engaging, and high-performance digital experiences that help our clients achieve their business objectives and stand out in the digital landscape.
        </p>
        <Button
          onClick={() => window.open('https://adwebcomicagency.vercel.app/', '_blank')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
        >
          Visit AD Web Comic Agency
        </Button>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
