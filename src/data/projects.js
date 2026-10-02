/**
 * @typedef {object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} summary
 * @property {string} role
 * @property {string} year
 * @property {string} [status]
 * @property {string[]} stack
 * @property {string[]} highlights
 * @property {string} image
 * @property {string} [liveUrl]
 * @property {string} [repoUrl]
 */

const repo = (name) => `https://github.com/agent-mino/${name}`;

/** @type {Project[]} */
export const projects = [
  {
    id: 'academai',
    title: 'AcademAI',
    summary:
      'AI study assistant that summarises text, explains topics at three difficulty levels and generates quizzes on demand.',
    role: 'Solo · design, build, deploy',
    year: '2026',
    stack: ['Next.js 16', 'TypeScript', 'Groq API', 'Zod', 'Tailwind'],
    highlights: [
      'All model calls run server-side — the API key never reaches the browser.',
      'Zod-validated input, in-memory rate limiting and per-request IDs for tracing.',
      'Built-in safety check that refuses harmful prompts before they hit the model.',
    ],
    image: '/projects/academai.svg',
    liveUrl: 'https://academai-assistant.vercel.app',
    repoUrl: repo('Academai'),
  },
  {
    id: 'ledger',
    title: 'Cooperative Ledger',
    summary:
      'Contribution ledger designed for a 200+ member cooperative society — replaces monthly bank spreadsheets with one auditable source of truth.',
    role: 'Solo · full-stack',
    year: '2026',
    status: 'Delivered for client review',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'SheetJS'],
    highlights: [
      'Append-only transaction ledger; balances maintained by a Postgres trigger, never edited directly.',
      'Header-detecting Excel parser handles different banks’ formats — validated on 356 rows across 3 sheets.',
      'Idempotent re-imports, duplicate-deduction guard and role-based member access requests.',
    ],
    image: '/projects/ledger.svg',
    repoUrl: repo('FRSC-Contribution-Tracker'),
  },
  {
    id: 'stablecoin',
    title: 'DeFi Stablecoin',
    summary:
      'Over-collateralised, algorithmic stablecoin pegged to $1 and backed by wETH and wBTC.',
    role: 'Solo · smart contracts',
    year: '2025',
    stack: ['Solidity', 'Foundry', 'Chainlink Price Feeds'],
    highlights: [
      '200% collateralisation with health-factor checks and a 10% liquidation bonus.',
      'Oracle library freezes the protocol on stale Chainlink prices instead of trusting them.',
      'Unit, fuzz and stateful invariant tests run in GitHub Actions CI.',
    ],
    image: '/projects/stablecoin.svg',
    repoUrl: repo('Foundry-DEfi-Stablecoin'),
  },
  {
    id: 'raffle',
    title: 'Provably Fair Raffle',
    summary:
      'Automated on-chain lottery whose winner is picked with verifiable randomness — no one, including the owner, can rig it.',
    role: 'Solo · smart contracts',
    year: '2025',
    stack: ['Solidity', 'Foundry', 'Chainlink VRF v2.5', 'Chainlink Automation'],
    highlights: [
      'Chainlink VRF v2.5 for tamper-proof randomness; Automation triggers each draw.',
      'Custom errors and a state machine block entries while a draw is in progress.',
      'Deployed and exercised on the Sepolia testnet via scripted interactions.',
    ],
    image: '/projects/raffle.svg',
    repoUrl: repo('Raffle'),
  },
  {
    id: 'brightworld',
    title: 'BrightWorld',
    summary: 'Lighting e-commerce storefront with category browsing, a product carousel and a persistent cart.',
    role: 'Frontend',
    year: '2024',
    stack: ['React', 'Context API', 'CSS'],
    highlights: [
      'Cart and feedback state shared through React Context.',
      'Cart saved to localStorage so it survives refreshes, with tests in CI.',
      'Reusable card, carousel and category components fed from a structured product catalogue.',
    ],
    image: '/projects/brightworld.jpg',
    liveUrl: 'https://bright-world.vercel.app',
    repoUrl: repo('BrightWorld'),
  },
];
