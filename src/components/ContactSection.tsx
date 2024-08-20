import React from 'react';
import ContactCard from './ContactCard';
import { ContactInfo } from '@/utils/types';

const contactData: ContactInfo[] = [
  {
    type: "Email",
    value: "office@montoya.com"
  },
  {
    type: "Address",
    value: "35 M Str, New York, USA"
  },
  {
    type: "Phone",
    value: "0040 (7763) 574-8901"
  }
];

const ContactSection: React.FC = () => {
  return (
    <div className="flex justify-center space-x-36 px-6 my-16  space-y-4">
      {contactData.map((item, index) => (
        <ContactCard key={index} type={item.type} value={item.value} />
      ))}
    </div>
  );
};

export default ContactSection;
