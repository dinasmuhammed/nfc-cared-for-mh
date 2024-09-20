import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <Card id="portfolio" className="mb-8">
      <CardHeader>
        <CardTitle>Explore Our Work</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          AD Web Comic Agency specializes in creating innovative web solutions, combining cutting-edge technology with
          creative design. Our services include custom web development, AI integration, and digital marketing strategies.
        </p>
        <Button
          onClick={() => window.open('https://adwebcomicagency.vercel.app/', '_blank')}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Visit AD Web Comic Agency
        </Button>
      </CardContent>
    </Card>
  );
};

export default Portfolio;