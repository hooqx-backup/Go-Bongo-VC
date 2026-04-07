import LegalLayout from './LegalLayout';

const SECTIONS = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      { type: 'p', text: 'By accessing or using the GoBongo Ventures website at gobongo.vc (the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you must not access or use the Site.' },
      { type: 'p', text: 'These Terms apply to all visitors, users, and others who access or use the Site. GoBongo Ventures reserves the right to modify these Terms at any time. Your continued use of the Site after any such change constitutes your acceptance of the new Terms.' },
      { type: 'highlight', text: 'These Terms were last reviewed and updated on March 25, 2026. Please check this page periodically for updates.' },
    ],
  },
  {
    id: 'use-of-site',
    title: 'Use of This Website',
    content: [
      { type: 'p', text: 'You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the Site. Prohibited activities include:' },
      { type: 'ul', items: [
        'Using the Site in any way that violates applicable local, national, or international laws or regulations',
        'Transmitting any unsolicited or unauthorised advertising or promotional material',
        'Knowingly transmitting data, sending or uploading any material that contains viruses or any other malicious code',
        'Attempting to gain unauthorised access to any part of the Site or its related systems',
        'Scraping, crawling, or using automated means to access or collect data from the Site without our express permission',
        'Reproducing, duplicating, or reselling any part of the Site in contravention of these Terms',
      ]},
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      { type: 'p', text: 'The Site and all its content, features, and functionality — including but not limited to text, graphics, logos, images, audio and video clips, data compilations, and software — are owned by GoBongo Ventures or its licensors and are protected by copyright, trademark, and other intellectual property laws.' },
      { type: 'p', text: 'You are granted a limited, non-exclusive, non-transferable licence to access and use the Site for your personal, non-commercial purposes. This licence does not include any right to:' },
      { type: 'ul', items: [
        'Modify or copy the materials without our prior written consent',
        'Use the materials for any commercial purpose or public display',
        'Remove any copyright, trademark, or other proprietary notices from the materials',
        'Transfer the materials to another person or reproduce them on any server',
      ]},
      { type: 'p', text: 'The GoBongo Ventures name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of GoBongo Ventures. You may not use these without our prior written permission.' },
    ],
  },
  {
    id: 'investment-disclaimer',
    title: 'Investment Disclaimer',
    content: [
      { type: 'p', text: 'GoBongo Ventures is a venture firm that makes investments in early-stage companies. Information on this Site about our portfolio companies, investment thesis, and market views is provided for informational purposes only.' },
      { type: 'p', text: 'Nothing on this Site constitutes an offer to sell, a solicitation to buy, or a recommendation for any security or investment product. Past investment performance of our portfolio companies is not indicative of future results.' },
      { type: 'highlight', text: 'References to specific companies, sectors, or investment opportunities on this Site are illustrative only and do not constitute investment advice or a guarantee of future returns.' },
    ],
  },
  {
    id: 'no-financial-advice',
    title: 'No Financial or Legal Advice',
    content: [
      { type: 'p', text: 'The content on this Site is provided for general informational and educational purposes only. It does not constitute financial, investment, legal, tax, or other professional advice.' },
      { type: 'p', text: 'You should not act upon any information on this Site without first seeking appropriate professional advice tailored to your specific situation. GoBongo Ventures and its team members are not liable for any action taken or not taken based on information provided on this Site.' },
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: [
      { type: 'p', text: 'To the fullest extent permitted by applicable law, GoBongo Ventures, its directors, officers, employees, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, goodwill, or business interruption — arising out of or in connection with your use of or inability to use the Site.' },
      { type: 'p', text: 'The Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.' },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Jurisdiction',
    content: [
      { type: 'p', text: 'These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States of America, without regard to its conflict of law provisions.' },
      { type: 'p', text: 'Any dispute arising out of or relating to these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts of the State of Delaware. If you are accessing the Site from outside the USA, you are responsible for compliance with your local laws.' },
    ],
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to These Terms',
    content: [
      { type: 'p', text: 'We reserve the right to revise and update these Terms at our sole discretion. All changes are effective immediately when we publish them. Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.' },
      { type: 'p', text: 'If you have any questions about these Terms, please contact us at legal@gobongo.vc or write to us at GoBongo Ventures, Delaware, United States of America.' },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      updated="March 25, 2026"
      intro="These terms govern your use of the GoBongo Ventures website. We have written them to be as plain as possible. If something is unclear, reach out — we would rather you understand what you are agreeing to."
      sections={SECTIONS}
    />
  );
}
