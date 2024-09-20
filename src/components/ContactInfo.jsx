import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '+91 9656778508' },
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'adnanmuhammad4393@gmail.com' },
    { icon: <Globe className="h-5 w-5" />, label: 'Website', value: 'AD Web Comic Agency Website' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Address', value: 'Behind KMR Steels, Vazakkam Vettil, Ulleryi19, Kerala 673315' },
  ];

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Muhammed Adnan
TITLE:Founder & Developer
ORG:AD Web Comic Agency
TEL:+91 9656778508
EMAIL:adnanmuhammad4393@gmail.com
URL:AD Web Comic Agency Website
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
    <Card id="contact" className="glass-effect">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {contactDetails.map(({ icon, label, value }) => (
            <li key={label} className="flex items-center space-x-3">
              {icon}
              <span className="font-semibold">{label}:</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <Button onClick={generateVCard} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white">
          Save Contact
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
