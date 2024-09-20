import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone } from 'lucide-react';

const NFC = () => {
  const handleNFCTap = () => {
    // In a real-world scenario, this would trigger the NFC functionality
    alert('NFC tap simulated! In a real device, this would share your contact information.');
  };

  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">NFC Quick Share</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Tap your NFC-enabled device to instantly share your contact information.
        </p>
        <Button
          onClick={handleNFCTap}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200 flex items-center justify-center"
        >
          <Smartphone className="mr-2 h-5 w-5" />
          Simulate NFC Tap
        </Button>
      </CardContent>
    </Card>
  );
};

export default NFC;