import LegalLayout from './LegalLayout';

const SECTIONS = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: [
      { type: 'p', text: 'GoBongo Ventures ("GoBongo", "we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at gobongo.vc or contact us through any of our digital channels.' },
      { type: 'p', text: 'Please read this policy carefully. If you disagree with its terms, please discontinue use of our site. We reserve the right to make changes to this policy at any time, and we will alert you to changes by updating the "Last updated" date at the top of this page.' },
      { type: 'highlight', text: 'By using this website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.' },
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      { type: 'p', text: 'We collect information that you voluntarily provide to us when you submit a pitch, contact us through our website, or subscribe to updates. The personal information we collect may include:' },
      { type: 'ul', items: [
        'Name and contact information (email address, phone number)',
        'Company name, website, and business details',
        'Pitch deck content, financial data, and business descriptions submitted through our pitch form',
        'Correspondence and communications with our team',
        'Information about how you heard about us',
      ]},
      { type: 'p', text: 'We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This information is collected through standard web server logs and analytics tools.' },
    ],
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    content: [
      { type: 'p', text: 'We use the information we collect for legitimate business purposes, including:' },
      { type: 'ul', items: [
        'Reviewing and evaluating pitch submissions from founders',
        'Responding to inquiries and maintaining communications with founders and partners',
        'Conducting due diligence on potential investments',
        'Improving the content, functionality, and user experience of our website',
        'Sending updates about our portfolio, events, and investment activity (only where you have consented)',
        'Complying with legal and regulatory obligations',
      ]},
      { type: 'p', text: 'We will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason that is compatible with the original purpose.' },
    ],
  },
  {
    id: 'information-sharing',
    title: 'Information Sharing and Disclosure',
    content: [
      { type: 'p', text: 'We do not sell, trade, or otherwise transfer your personal information to third parties for their own marketing purposes. We may share your information only in the following limited circumstances:' },
      { type: 'ul', items: [
        'With your explicit consent, for example when sharing your pitch with co-investors',
        'With trusted service providers who assist us in operating our website and business, subject to strict confidentiality agreements',
        'When required by law, court order, or governmental authority',
        'To protect the rights, property, or safety of GoBongo Ventures, our team, or others',
        'In connection with a merger, acquisition, or sale of all or part of our assets',
      ]},
      { type: 'p', text: 'We will never share your pitch materials or confidential business information with third parties, including other portfolio companies or potential competitors, without your express written consent.' },
    ],
  },
  {
    id: 'data-retention',
    title: 'Data Retention',
    content: [
      { type: 'p', text: 'We retain personal information for as long as necessary to fulfil the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.' },
      { type: 'p', text: 'Pitch submissions and related correspondence are retained for a period of five years following our last interaction. This allows us to reconnect with founders whose ventures may become relevant to our investment thesis at a later stage consistent with our policy that a pass is not a no forever.' },
      { type: 'p', text: 'You may request deletion of your personal information at any time by contacting us at privacy@gobongo.vc. We will respond within 30 days.' },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights and Choices',
    content: [
      { type: 'p', text: 'Depending on your location, you may have certain rights with respect to your personal information under applicable data protection laws, including:' },
      { type: 'ul', items: [
        'The right to access a copy of the personal information we hold about you',
        'The right to request correction of inaccurate or incomplete information',
        'The right to request deletion of your personal information',
        'The right to object to or restrict our processing of your information',
        'The right to data portability (where applicable)',
        'The right to withdraw consent at any time, where processing is based on consent',
      ]},
      { type: 'p', text: 'To exercise any of these rights, please contact us at privacy@gobongo.vc. We will not discriminate against you for exercising any of your privacy rights.' },
    ],
  },
  {
    id: 'security',
    title: 'Security Measures',
    content: [
      { type: 'p', text: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, accidental loss, alteration, or disclosure. These measures include encrypted data transmission, access controls, and regular security reviews.' },
      { type: 'p', text: 'However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.' },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: [
      { type: 'p', text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact our team:' },
      { type: 'ul', items: [
        'Email: privacy@gobongo.vc',
        'General enquiries: hello@gobongo.vc',
        'Office: GoBongo Ventures, Delaware, United States of America',
      ]},
      { type: 'p', text: 'We will make every effort to respond to your enquiry within 5 business days.' },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="March 25, 2026"
      intro="We take the privacy of founders, partners, and visitors seriously. This policy explains exactly what data we collect, why we collect it, and how you can control it. We keep it plain no legal fog."
      sections={SECTIONS}
    />
  );
}
