import { useState } from 'react';
import ContactHero from './Sections/ContactHero/ContactHero';
import ContactForm from './Sections/ContactForm/ContactForm';
import ContactOffice from './Sections/ContactOffice/ContactOffice';
import ContactProcess from './Sections/ContactProcess/ContactProcess';
import ContactFAQ from './Sections/ContactFAQ/ContactFAQ';
import ContactSocial from './Sections/ContactSocial/ContactSocial';
import Footer from '../../common/components/Footer/Footer';

export default function ContactPage() {
  const [activeSubject, setActiveSubject] = useState('');

  return (
    <>
      <ContactHero onSelectSubject={setActiveSubject} />
      <ContactForm activeSubject={activeSubject} />
      <ContactOffice />
      <ContactProcess />
      <ContactFAQ />
      <ContactSocial />
    </>
  );
}
