import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
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

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'muhammed_adnan.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2024 AD Web Comic Agency</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://adwebcomicagency.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Website</a>
            <a href="https://www.linkedin.com/in/muhammed-adnan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">LinkedIn</a>
            <a href="https://www.facebook.com/muhammedadnan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Facebook</a>
            <a href="https://twitter.com/muhammedadnan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Twitter</a>
          </div>
          <Button onClick={generateVCard} className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700">
            Save Contact
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;