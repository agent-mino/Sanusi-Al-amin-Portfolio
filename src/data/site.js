export const profile = {
  name: 'Al-Amin Sanusi',
  email: 'alaminsanusi13@gmail.com',
  cvUrl: '/Al-Amin-Sanusi-CV.pdf',
  location: 'Lagos, Nigeria',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const socials = [
  { href: 'https://github.com/agent-mino', label: 'GitHub' },
  { href: 'https://linkedin.com/in/alamin-sanusi-1245392b7', label: 'LinkedIn' },
  { href: 'https://x.com/agent_mino01', label: 'X' },
];

export const tickerItems = ['AI Applications', 'Full-Stack Development', 'Smart Contract Security', 'Product Engineering'];

export const focusAreas = [
  { label: 'AI', detail: 'LLM APIs · Prompting · Guardrails' },
  { label: 'WEB', detail: 'React · Next.js · Node' },
  { label: 'SEC', detail: 'Solidity · Foundry · Audits' },
  { label: 'SHIP', detail: 'Git · Vercel · CI/CD' },
];

export const experience = [
  {
    period: '2025 — 2026',
    location: 'Lagos, Nigeria',
    role: 'Software Development Intern',
    team: 'AI Team',
    company: 'BlueChip Technologies Limited',
    points: [
      'Built a responsive bank RFI (request-for-information) frontend.',
      'Traced a production integration failure to a mismatched frontend-to-backend JSON contract, fixed it and merged the change through code review.',
      'Worked in a team Git workflow with feature branches, pull requests and staged deployments.',
    ],
  },
  {
    period: '2025',
    location: 'Remote',
    role: 'Web Developer Intern',
    company: 'Prodigy InfoTech',
    points: [
      'Delivered four frontend assignments in HTML, CSS and JavaScript, including backend API integrations.',
      'Collaborated through Git-based review workflows.',
    ],
  },
  {
    period: '2022 — 2025',
    location: 'Lagos, Nigeria',
    role: 'Customer Service Manager',
    company: '24th Concept',
    points: [
      'Led the customer service team, owning escalations and client communication end to end.',
      'Improved retention by streamlining support processes and tracking satisfaction metrics.',
      'Partnered with marketing and product teams to turn customer feedback into product changes.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: 'TypeScript · JavaScript · Solidity · Java · HTML · CSS · React · Next.js · Node.js · Flutter',
  },
  {
    title: 'AI Engineering',
    items: 'Groq / OpenAI APIs · Structured prompting · Input validation & guardrails · Rate limiting',
  },
  {
    title: 'Backend & Cloud',
    items: 'REST APIs · PostgreSQL · Supabase · MySQL · Zod · Docker · Vercel · GitHub Actions',
  },
  {
    title: 'Security & Web3',
    items:
      'Foundry fuzz & invariant testing · Chainlink VRF / price feeds · Competitive audit contests (Chainlink, Fluid DEX) · Burp Suite · Metasploit',
  },
];

export const education = {
  title: 'Advanced Diploma in',
  emphasis: 'Software Engineering.',
  school: 'Aptech Computer Education, Nigeria',
  period: 'Completed 2025–2026',
  detail:
    'Training across Java, Python, .NET, AI & Machine Learning, Cloud Computing, Data Science, Networking and full-stack technologies.',
  certs: [
    'Mastercard Cybersecurity Virtual Experience · Forage · 2025',
    'Bournvita Bootcamp · Programming, AR, 3D, Robotics & AI · 2021',
  ],
};
