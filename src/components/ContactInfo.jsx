import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactInfo = () => {
  const contactDetails = {
    fullName: 'Muhammed Adnan',
    jobTitle: 'Founder & Developer',
    company: 'AD Web Comic Agency',
    phone: '+91 9656778508',
    email: 'adnanmuhammad4393@gmail.com',
    website: 'AD Web Comic Agency Website',
    address: 'Behind KMR Steels, Vazakkam Vettil, Ulleryi19, Kerala 673315',
  };

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactDetails.fullName}
TITLE:${contactDetails.jobTitle}
ORG:${contactDetails.company}
TEL:${contactDetails.phone}
EMAIL:${contactDetails.email}
URL:${contactDetails.website}
ADR:;;${contactDetails.address};;;
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
    <Card id="contact" className="mb-8">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {Object.entries(contactDetails).map(([key, value]) => (
            <li key={key} className="flex">
              <span className="font-semibold w-24">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <Button onClick={generateVCard} className="mt-4">
          Save Contact
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;