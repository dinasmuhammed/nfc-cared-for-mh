import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DigitalBusinessCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://media.licdn.com/dms/image/D4D22AQHNZLLXHxXBvA/feedshare-shrink_800/0/1709893878366?e=1712793600&v=beta&t=Ue5Pu_Oy2Aw0Zy-Gu_Ht0Uy9Aw2Zy-Gu_Ht0Uy9',
    'https://media.licdn.com/dms/image/D4D22AQGXhWZOJZRwQA/feedshare-shrink_800/0/1709893878366?e=1712793600&v=beta&t=Ue5Pu_Oy2Aw0Zy-Gu_Ht0Uy9Aw2Zy-Gu_Ht0Uy9',
    'https://media.licdn.com/dms/image/D4D22AQFXhWZOJZRwQA/feedshare-shrink_800/0/1709893878366?e=1712793600&v=beta&t=Ue5Pu_Oy2Aw0Zy-Gu_Ht0Uy9Aw2Zy-Gu_Ht0Uy9'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>More About My Work</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mb-4">
          <img
            src={images[currentImageIndex]}
            alt={`Project showcase ${currentImageIndex + 1}`}
            className="w-full h-64 object-cover rounded-md"
          />
          <Button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75"
            size="icon"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75"
            size="icon"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
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
