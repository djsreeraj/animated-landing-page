import React from 'react';
import { IconBrandTelegram, IconMapPin, IconPhone } from '@tabler/icons-react';
import { ContactType, IconComponents } from '@/utils/types';

const iconMap: IconComponents = {
  Email: IconBrandTelegram,
  Address: IconMapPin,
  Phone: IconPhone
};

interface ContactCardProps {
  type: ContactType;
  value: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ type, value }) => {
  const IconComponent = iconMap[type];  

  return (
    <div className=" shadow-md rounded-lg px-4 flex items-center space-x-4">
      <div className="flex flex-col items-center justify-normal">
        <IconComponent size={24} stroke={1.5} className="text-white" />
        <span className=" mt-3 text-white font-medium tracking-tight text-lg leading-6 ">{value}</span>
        <span className="text-[1.1rem] mt-1 text-stone-500 font-medium tracking-tight text-lg leading-6 ">{type}</span>
      </div>
    </div>
  );
};

export default ContactCard;
