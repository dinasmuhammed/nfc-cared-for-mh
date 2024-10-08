import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DigitalBusinessCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2',
    'https://picsum.photos/800/600?random=3'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Card className="glass-effect overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">More About My Work</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-6 h-80">
          <img
            src={images[currentImageIndex]}
            alt={`Project showcase ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
          <Button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 dark:bg-black/50 dark:hover:bg-black/75"
            size="icon"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 dark:bg-black/50 dark:hover:bg-black/75"
            size="icon"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button
          onClick={() => window.open('https://adwebcomicagency.vercel.app/', '_blank')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
        >
          View Full Digital Business Card
        </Button>
      </CardContent>
    </Card>
  );
};

export default DigitalBusinessCard;
