/* Static content for each blog post keyed by ID */

export const POST_CONTENT = {
  'tezz-logistics-investment': {
    id: 'tezz-logistics-investment',
    category: 'Portfolio',
    title: 'Why We Invested in Tezz Logistics',
    imgVariant: 'blue',
    imgWatermark: 'TL',
    author: { initials: 'AH', name: 'Ahmed Hassan', role: 'Managing Partner', color: 'blue' },
    date: 'January 22, 2025',
    readTime: '6 min read',
    tags: ['Portfolio', 'Logistics', 'India', 'Pre Seed'],
    stats: [
      { num: '₹2.4Cr', label: 'Seed round size' },
      { num: '14', label: 'Tier 2 cities active' },
      { num: '3×', label: 'GMV growth in 6 months' },
    ],
    body: [
      {
        type: 'p',
        text: 'When we first met the Tezz team in late 2023, last mile logistics in India\'s tier 2 cities was a problem everyone talked about and nobody had truly solved. The unit economics were brutal, the infrastructure was fragmented, and the dominant players had no incentive to go where margins were thin.',
      },
      {
        type: 'h2',
        text: 'The Problem Worth Solving',
      },
      {
        type: 'p',
        text: 'Over 60% of India\'s e-commerce demand now originates from beyond the top 10 metros. Yet delivery failure rates in tier 2 and tier 3 cities run 3–5× higher than in metros. Returns cost more. Customers churn faster. Merchants lose trust in platforms.',
      },
      {
        type: 'pullquote',
        text: '"Every founder we back has to be the only person in the world who could build this. Tezz\'s founders had spent five years in supply chain operations before starting. They weren\'t studying the problem they had lived it."',
      },
      {
        type: 'h2',
        text: 'What Made Tezz Different',
      },
      {
        type: 'p',
        text: 'Most logistics startups approach the problem with technology first route optimisation, demand forecasting, driver apps. Tezz started with network design. They built a hyperlocal hub model where existing small businesses (kirana stores, pharmacies, service centres) act as micro fulfilment points. This meant zero capex for warehouse space and an existing trusted presence in the community.',
      },
      {
        type: 'ul',
        items: [
          'Hub and spoke model using existing SME infrastructure',
          'Average delivery window of 4 hours within a 15km radius',
          'Built in return processing at every hub node',
          'Cash on delivery handling without a separate collections team',
        ],
      },
      {
        type: 'h2',
        text: 'Our Investment Thesis',
      },
      {
        type: 'p',
        text: 'We led Tezz\'s pre seed round at a time when most institutional capital was chasing SaaS multiples. Our thesis was simple: the infrastructure layer for tier 2 ecommerce in India would be worth tens of billions by 2030, and whoever owned the last mile trust relationship with consumers in these cities would win.',
      },
      {
        type: 'p',
        text: 'Six months after closing, Tezz has expanded to 14 cities, tripled its GMV, and brought on their first enterprise customer a large D2C beauty brand that had failed with three other logistics providers in the same markets.',
      },
      {
        type: 'h3',
        text: 'What\'s Next',
      },
      {
        type: 'p',
        text: 'Tezz is now preparing its seed round to fund expansion into 40 more cities and build out the technology layer predictive routing, merchant analytics, and a driver incentive programme that has shown early promise in pilot markets. We\'re doubling down.',
      },
    ],
  },

  'building-in-dubai': {
    id: 'building-in-dubai',
    category: 'Founder Resources',
    title: 'Building in Dubai: What Founders Need to Know',
    imgVariant: 'gold',
    imgWatermark: 'DXB',
    author: { initials: 'RK', name: 'Riya Kapoor', role: 'Head of Portfolio', color: 'gold' },
    date: 'February 10, 2025',
    readTime: '10 min read',
    tags: ['Dubai', 'Founder Resources', 'UAE', 'DIFC', 'Legal'],
    stats: [
      { num: '30+', label: 'Free zones in UAE' },
      { num: '0%', label: 'Corporate tax under AED 375K' },
      { num: '48h', label: 'Typical company setup time' },
    ],
    body: [
      {
        type: 'p',
        text: 'Dubai has become one of the most founder friendly jurisdictions in the world. But navigating the ecosystem free zones, mainland, DIFC, ADGM can feel overwhelming. After helping eight of our portfolio companies set up here, we\'ve distilled what actually matters.',
      },
      {
        type: 'h2',
        text: 'Free Zone vs. Mainland vs. DIFC/ADGM',
      },
      {
        type: 'p',
        text: 'The first question every founder asks is: where do I register? The answer depends entirely on what you\'re building and who you\'re selling to.',
      },
      {
        type: 'ul',
        items: [
          'Free Zone: 100% foreign ownership, fast setup, can\'t trade directly in the UAE mainland market without a local agent or distributor',
          'Mainland can trade freely within the UAE, requires a local service agent (for certain activities), more flexible business activities',
          'DIFC ideal for fintech, financial services, and fund structures; operates under English common law; most VC friendly legal framework in the region',
          'ADGM similar to DIFC but in Abu Dhabi; growing in importance for institutional finance',
        ],
      },
      {
        type: 'pullquote',
        text: '"For most B2B SaaS companies targeting the UAE market, a mainland setup with a local service agent is the fastest path to signing enterprise contracts. Free zones create friction for government procurement."',
      },
      {
        type: 'h2',
        text: 'Visa Strategy for Early Teams',
      },
      {
        type: 'p',
        text: 'A company in a free zone can sponsor employee visas. The number of visas you\'re entitled to depends on your office space allocation. Many free zones offer flexi desk packages (starting at AED 15,000–20,000/year) that include 2–3 visa eligibilities enough for a founding team.',
      },
      {
        type: 'h2',
        text: 'Banking: The Real Bottleneck',
      },
      {
        type: 'p',
        text: 'Company registration is fast. Banking is slow. Traditional banks (Emirates NBD, Mashreq, ADIB) require 6–10 weeks and extensive KYC documentation for new companies. We recommend opening with a fintech account (e.g., Wio Bank) to get operational immediately while the traditional account clears.',
      },
      {
        type: 'h3',
        text: 'Our Recommendation',
      },
      {
        type: 'p',
        text: 'If you\'re a B2B company selling to enterprises and government in the UAE go mainland. If you\'re a fintech or want to raise from institutional LPs under a familiar legal framework go DIFC. If you\'re a digital product company with no local client requirement  go free zone, keep costs low, and focus on the product.',
      },
    ],
  },

  'year-in-review-2024': {
    id: 'year-in-review-2024',
    category: 'Team',
    title: 'GoBongo Ventures: Year in Review 2024',
    imgVariant: 'dark',
    imgWatermark: '2024',
    author: { initials: 'GB', name: 'GoBongo Team', role: 'GoBongo Ventures', color: 'blue' },
    date: 'December 28, 2024',
    readTime: '5 min read',
    tags: ['Annual Review', 'Portfolio', 'Team'],
    stats: [
      { num: '8', label: 'Active ventures' },
      { num: '7', label: 'Countries of operation' },
      { num: '$4.6B', label: 'Combined market exposure' },
    ],
    body: [
      {
        type: 'p',
        text: '2024 was our most operationally dense year. We didn\'t just write cheques we built teams, fixed supply chains, restructured go to market strategies, and sat in the trenches with eight founding teams across seven countries. Here\'s a transparent look at what happened.',
      },
      {
        type: 'h2',
        text: 'Portfolio Highlights',
      },
      {
        type: 'p',
        text: 'GoBongo Shop crossed 40,000 active users a milestone that validated our thesis on social commerce in South Asia. Tezz Logistics expanded from 3 to 14 cities and hit its first ₹1 crore revenue month. CallTawk secured its first enterprise contract with a regional telecom, covering 200,000 subscribers.',
      },
      {
        type: 'pullquote',
        text: '"The ventures that outperformed in 2024 shared one trait: they were obsessively close to their customers. Not customer research actual operations. CEOs answering support tickets."',
      },
      {
        type: 'h2',
        text: 'What We Got Wrong',
      },
      {
        type: 'p',
        text: 'We underestimated how long regulatory approval would take for one of our fintech bets in Saudi Arabia. What we modelled as a 3-month process took 11 months. This pushed product launch into 2025 and extended the cash runway requirement significantly.',
      },
      {
        type: 'ul',
        items: [
          'Regulatory timelines in MENA are highly variable add a 2× buffer',
          'Hiring senior commercial talent outside Dubai/Riyadh took 2–3× longer than expected',
          'USD denominated contracts in South Asia created FX exposure we hadn\'t fully hedged',
        ],
      },
      {
        type: 'h2',
        text: 'Looking Ahead to 2025',
      },
      {
        type: 'p',
        text: 'We will deploy into two new investments in H1 2025 one in logistics infrastructure and one in B2B fintech. We\'re also onboarding a full time operating partner based in Riyadh to support our Saudi facing portfolio. The ambition is unchanged: build the most operationally active early stage firm in the MENA and South Asia corridor.',
      },
    ],
  },

  'b2b-trade-finance-mena': {
    id: 'b2b-trade-finance-mena',
    category: 'Market Insights',
    title: 'The Future of B2B Trade Finance in MENA',
    imgVariant: 'teal',
    imgWatermark: 'TF',
    author: { initials: 'MR', name: 'Mohamed Rashid', role: 'Investment Analyst', color: 'teal' },
    date: 'November 5, 2024',
    readTime: '7 min read',
    tags: ['Fintech', 'MENA', 'B2B', 'Trade Finance'],
    stats: [
      { num: '$2.5T', label: 'Global trade finance gap' },
      { num: '60%', label: 'Of MENA SMEs underserved' },
      { num: '4×', label: 'Digital trade finance growth by 2030' },
    ],
    body: [
      {
        type: 'p',
        text: 'Trade finance is the invisible infrastructure of global commerce. Every time a factory in Bangladesh ships goods to a retailer in Dubai, a financial instrument a letter of credit, invoice discounting line, or supply chain finance facility is sitting behind that transaction. And most of it is broken for SMEs.',
      },
      {
        type: 'h2',
        text: 'The Gap Is Structural, Not Cyclical',
      },
      {
        type: 'p',
        text: 'Banks are not going to solve this. Their KYC requirements, minimum transaction sizes, and collateral demands make SME trade finance uneconomical for traditional lenders. The $2.5T global trade finance gap which disproportionately affects MENA and South Asia is not a temporary credit tightening. It is a structural failure.',
      },
      {
        type: 'pullquote',
        text: '"The companies that will win in MENA trade finance are not fintech companies that built on top of banks. They are technology companies that replaced the bank\'s role entirely for the SME segment."',
      },
      {
        type: 'h2',
        text: 'What\'s Actually Working',
      },
      {
        type: 'ul',
        items: [
          'Embedded invoice financing integrated directly into ERP and accounting software at the point of invoice creation',
          'Receivables backed digital credit lines assessed on transaction history, not balance sheet',
          'Cross border escrow for informal trade corridors (India–UAE, UAE–KSA)',
          'Islamic trade finance structures that serve the majority of MENA SME operators',
        ],
      },
      {
        type: 'h2',
        text: 'Our Investment Lens',
      },
      {
        type: 'p',
        text: 'We are actively looking at companies in this space. Our criteria: the founding team must include someone who has worked inside a trade finance desk at a bank or large corporate treasury the regulatory and operational complexity is too high for outsiders to move fast. We want to see proprietary data advantage, not just a marketplace.',
      },
      {
        type: 'h3',
        text: 'If You\'re Building Here',
      },
      {
        type: 'p',
        text: 'Reach out through our contact page with subject "Partnership". Tell us your transaction volume, default rates if you\'re already live, and how you\'re acquiring SME clients at scale. That last point is the hard part and if you\'ve cracked it, we\'d love to talk.',
      },
    ],
  },

  'how-we-evaluate-startups': {
    id: 'how-we-evaluate-startups',
    category: 'Founder Resources',
    title: 'How We Evaluate Early Stage Startups',
    imgVariant: 'indigo',
    imgWatermark: 'FW',
    author: { initials: 'AH', name: 'Ahmed Hassan', role: 'Managing Partner', color: 'blue' },
    date: 'October 18, 2024',
    readTime: '9 min read',
    tags: ['Founder Resources', 'Process', 'Investment Thesis'],
    stats: [
      { num: '4–6W', label: 'Typical decision timeline' },
      { num: '200+', label: 'Pitches reviewed in 2024' },
      { num: '8', label: 'Investments made in 2024' },
    ],
    body: [
      {
        type: 'p',
        text: 'We get asked this constantly: how do you decide? What are you looking for? What makes a pitch successful? We\'ve decided to answer this as transparently as we can, because we think opacity in venture is bad for the ecosystem.',
      },
      {
        type: 'h2',
        text: 'Stage 1: First Message (Day 0–3)',
      },
      {
        type: 'p',
        text: 'Every pitch that comes through our contact form gets read. We don\'t have an intake team the founding team reads pitches directly. We\'re looking for three things in the first message: a clear statement of the problem and solution (one paragraph), a number that proves something (revenue, users, growth rate), and evidence that the founder knows their sector deeply.',
      },
      {
        type: 'pullquote',
        text: '"We\'ve passed on well formatted decks from McKinsey alumni and funded scrappy one page emails from operators. Format is irrelevant. Conviction is everything."',
      },
      {
        type: 'h2',
        text: 'Stage 2: First Call (Week 1–2)',
      },
      {
        type: 'p',
        text: 'If the first message clears our initial bar, we book a 45 minute call. This is not a pitch session it\'s a conversation. We want to understand how the founder thinks about their market, not how well they\'ve memorised a narrative. We ask uncomfortable questions deliberately.',
      },
      {
        type: 'ul',
        items: [
          'Who is your most dangerous competitor and what are they better at than you?',
          'What have you tried that didn\'t work?',
          'What would have to be true for you to fail?',
          'Why are you the right person to build this?',
        ],
      },
      {
        type: 'h2',
        text: 'Stage 3: Deep Dive (Week 2–4)',
      },
      {
        type: 'p',
        text: 'If the call goes well, we run a deep dive process. This involves speaking to 3–5 of the company\'s customers or users directly (without the founder present), reviewing all available financials, and where relevant speaking to domain experts in the sector.',
      },
      {
        type: 'h2',
        text: 'Stage 4: Term Sheet (Week 4–6)',
      },
      {
        type: 'p',
        text: 'If diligence is clean, we move to a term sheet within the same week. We don\'t believe in extended exclusivity periods or prolonged negotiations. Founders deserve to know quickly.',
      },
      {
        type: 'h3',
        text: 'One Last Thing',
      },
      {
        type: 'p',
        text: 'We pass on a lot of good companies. Sometimes the sector doesn\'t fit our thesis. Sometimes the timing is wrong. Sometimes we just don\'t have the bandwidth to be the partner the company deserves. A pass from us is not a judgement on your idea it\'s almost always a constraint on our side.',
      },
    ],
  },

  'hooqx-global-digital-layer': {
    id: 'hooqx-global-digital-layer',
    category: 'Portfolio',
    title: 'Hooqx LLC: Building a Global Digital Services Layer',
    imgVariant: 'slate',
    imgWatermark: 'HX',
    author: { initials: 'RK', name: 'Riya Kapoor', role: 'Head of Portfolio', color: 'gold' },
    date: 'September 3, 2024',
    readTime: '6 min read',
    tags: ['Portfolio', 'Digital Services', 'North America', 'SaaS'],
    stats: [
      { num: '12+', label: 'Countries with active clients' },
      { num: '3×', label: 'ARR growth year-on-year' },
      { num: '98%', label: 'Client retention rate' },
    ],
    body: [
      {
        type: 'p',
        text: 'Hooqx doesn\'t have the most exciting elevator pitch. "We build digital services infrastructure for service providers" doesn\'t make headlines. But the numbers tell a story that serious investors pay attention to.',
      },
      {
        type: 'h2',
        text: 'What Hooqx Actually Does',
      },
      {
        type: 'p',
        text: 'Hooqx provides the backend operational layer for digital service businesses agencies, freelancer platforms, software resellers across North America, the UK, and South Asia. Think of them as the operational OS for companies that sell digital services but don\'t want to build their own delivery, billing, and support infrastructure.',
      },
      {
        type: 'pullquote',
        text: '"The best infrastructure companies are invisible. Their customers don\'t think about them because everything just works. That\'s Hooqx."',
      },
      {
        type: 'h2',
        text: 'Why We Invested Early',
      },
      {
        type: 'p',
        text: 'We backed Hooqx before they had a fully formed product. What we saw was a founding team with deep relationships in the North American digital services market and a clear view of a structural gap there was no mid market solution between "build it yourself" and "pay enterprise prices for Salesforce ecosystem tools".',
      },
      {
        type: 'ul',
        items: [
          'Founder had 8 years running a digital services agency they were their own first customer',
          'Initial traction was almost entirely referral driven high NPS from day one',
          'The problem they were solving was not venture hyped which meant pricing power and lower competition',
          'Gross margins above 70% from the start, with a clear path to 80%+',
        ],
      },
      {
        type: 'h2',
        text: 'The Path Forward',
      },
      {
        type: 'p',
        text: 'Hooqx is now expanding its platform to include AI assisted service delivery tools essentially enabling their clients to increase output without proportional headcount growth. Early pilots show a 35–40% productivity lift for end users. This is the feature that could turn Hooqx from a solid B2B services company into a category defining platform.',
      },
      {
        type: 'h3',
        text: 'For Founders Reading This',
      },
      {
        type: 'p',
        text: 'Not every great company is building rockets or restructuring healthcare. Hooqx is building operational infrastructure for a market that\'s real, large, and underserved. Sometimes the best investments are the ones nobody else is excited about yet.',
      },
    ],
  },
};
