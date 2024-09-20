import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DigitalBusinessCard = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>More About My Work</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          {/* Placeholder for project carousel or images */}
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            Project Showcase Placeholder
          </div>
        </div>
        <Button
          onClick={() => window.open('https://adwebcomicagency.vercel.app/', '_blank')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          View Full Digital Business Card
        </Button>
      </CardContent>
    </Card>
  );
};

export default DigitalBusinessCard;