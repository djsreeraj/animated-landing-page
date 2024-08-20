export type ContactType = 'Email' | 'Address' | 'Phone';

export interface ContactInfo {
  type: ContactType;
  value: string;
}

export interface IconComponents {
  [key: string]: React.ElementType;
}