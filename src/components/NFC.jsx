import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Check, X } from 'lucide-react';

const NFC = () => {
  const [nfcStatus, setNfcStatus] = useState('inactive');

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Muhammed Adnan
TITLE:Founder & Developer
ORG:AD Web Comic Agency
TEL:+91 9656778508
EMAIL:adnanmuhammad4393@gmail.com
URL:https://adwebcomicagency.vercel.app/
ADR:;;Behind KMR Steels, Vazakkam Vettil, Ulleryi19, Kerala 673315;;;
END:VCARD`;
    return vcard;
  };

  const simulateNFCShare = () => {
    setNfcStatus('activating');
    setTimeout(() => {
      setNfcStatus('active');
      const vcard = generateVCard();
      const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'muhammed_adnan.vcf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => setNfcStatus('inactive'), 3000);
    }, 2000);
  };

  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">NFC Quick Share</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Tap to simulate NFC sharing of contact information.
        </p>
        <Button
          onClick={simulateNFCShare}
          className={`w-full ${
            nfcStatus === 'inactive'
              ? 'bg-indigo-600 hover:bg-indigo-700'
              : nfcStatus === 'activating'
              ? 'bg-yellow-500'
              : 'bg-green-500'
          } text-white transition-colors duration-200 flex items-center justify-center`}
          disabled={nfcStatus !== 'inactive'}
        >
          {nfcStatus === 'inactive' && (
            <>
              <Smartphone className="mr-2 h-5 w-5" />
              Activate NFC Share
            </>
          )}
          {nfcStatus === 'activating' && 'Activating NFC...'}
          {nfcStatus === 'active' && (
            <>
              <Check className="mr-2 h-5 w-5" />
              NFC Active
            </>
          )}
        </Button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            NFC Status:{' '}
            <span className={nfcStatus === 'active' ? 'text-green-500' : 'text-red-500'}>
              {nfcStatus === 'active' ? (
                <Check className="inline-block h-4 w-4" />
              ) : (
                <X className="inline-block h-4 w-4" />
              )}
              {' '}
              {nfcStatus.charAt(0).toUpperCase() + nfcStatus.slice(1)}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NFC;
