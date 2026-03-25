import LegalLayout from './LegalLayout';

const SECTIONS = [
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies',
    content: [
      { type: 'p', text: 'Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to site owners.' },
      { type: 'p', text: 'Cookies do not contain any personally identifying information on their own. However, when combined with other data, they may be used to identify you. We always use cookies in a way that respects your privacy.' },
      { type: 'highlight', text: 'You can control and manage cookies through your browser settings at any time. Disabling certain cookies may affect the functionality of this website.' },
    ],
  },
  {
    id: 'how-we-use-cookies',
    title: 'How We Use Cookies',
    content: [
      { type: 'p', text: 'GoBongo Ventures uses cookies for several purposes:' },
      { type: 'ul', items: [
        'To ensure the website functions correctly and securely',
        'To remember your preferences and settings across visits',
        'To analyse how visitors interact with our site so we can improve it',
        'To measure the effectiveness of our content and communications',
        'To understand where our website traffic comes from',
      ]},
      { type: 'p', text: 'We do not use cookies to track you across unrelated websites, build advertising profiles, or sell your data to third-party advertisers.' },
    ],
  },
  {
    id: 'types-of-cookies',
    title: 'Types of Cookies We Use',
    content: [
      { type: 'p', text: 'We use the following categories of cookies on our website:' },
      { type: 'ul', items: [
        'Strictly Necessary Cookies — Required for the website to function. They enable basic features such as page navigation and access to secure areas. The website cannot function properly without these cookies.',
        'Performance Cookies — These collect anonymous information about how visitors use our site, such as which pages they visit most often and whether they receive error messages. All information collected is aggregated and anonymous.',
        'Functional Cookies — These allow our website to remember choices you make (such as your preferred language or region) and provide enhanced, more personal features.',
        'Analytics Cookies — We use analytics tools to help us understand how people use our site. These tools use cookies to collect information and report website usage statistics without identifying individual visitors.',
      ]},
    ],
  },
  {
    id: 'managing-cookies',
    title: 'Managing Your Cookie Preferences',
    content: [
      { type: 'p', text: 'You have the right to decide whether to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.' },
      { type: 'p', text: 'You can manage cookies through your browser settings:' },
      { type: 'ul', items: [
        'Chrome: Settings → Privacy and security → Cookies and other site data',
        'Firefox: Settings → Privacy & Security → Cookies and Site Data',
        'Safari: Preferences → Privacy → Manage Website Data',
        'Edge: Settings → Cookies and site permissions → Cookies and site data',
      ]},
      { type: 'p', text: 'Please note that if you choose to disable cookies, some features of our website may not function as intended. Strictly necessary cookies cannot be disabled as they are essential to the website operating correctly.' },
    ],
  },
  {
    id: 'third-party-cookies',
    title: 'Third-Party Cookies',
    content: [
      { type: 'p', text: 'Some cookies on our website are placed by third-party services that appear on our pages. These third-party cookies are subject to the respective privacy policies of those third parties.' },
      { type: 'p', text: 'Third-party services we may use include:' },
      { type: 'ul', items: [
        'Web analytics providers to understand website usage patterns',
        'Video hosting platforms for any embedded content',
        'Social media platforms if you click social sharing buttons',
      ]},
      { type: 'p', text: 'We do not control the placing of third-party cookies and cannot access them due to the way cookies work. These third parties use the data they collect in accordance with their own privacy policies.' },
    ],
  },
  {
    id: 'updates',
    title: 'Updates to This Policy',
    content: [
      { type: 'p', text: 'We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date.' },
      { type: 'p', text: 'If you have any questions about how we use cookies or would like to request more information, please contact us at privacy@gobongo.vc or write to us at DIFC, Gate Village, Dubai, United Arab Emirates.' },
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      updated="March 25, 2026"
      intro="We use a small number of cookies to make this website work and to understand how it is used. This page explains what cookies we use, why we use them, and how you can control them."
      sections={SECTIONS}
    />
  );
}
