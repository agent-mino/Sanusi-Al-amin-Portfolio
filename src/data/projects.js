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
      'Header-detecting Excel parser handles different banks\' formats — validated on 356 rows across 3 sheets.',
      'Idempotent re-imports, duplicate-deduction guard and role-based member access requests.',
    ],
    image: '/projects/ledger.svg',
    repoUrl: repo('FRSC-Contribution-Tracker'),
  },
  {
    id: 'elibrary',
    title: 'E-Library Admin',
    summary:
      'Admin dashboard for managing an e-library\'s books, categories and registered readers, backed by a FastAPI + MongoDB REST API.',
    role: 'Frontend (group project)',
    year: '2025',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'MongoDB'],
    highlights: [
      'JWT session guard on every signed-in page; an expired token triggers automatic sign-out with a message.',
      'Debounced server-side search for books by title or author; category deletion blocked while books still exist.',
      'Human-readable FastAPI validation errors and a distinct unreachable-API error state.',
    ],
    image: '/projects/elibrary.png',
    repoUrl: repo('e-library-admin'),
  },
  {
    id: 'currensee',
    title: 'CurrenSee',
    summary:
      'Cross-platform mobile app (Android & iOS) for real-time currency conversion, live exchange rates and rate-alert push notifications.',
    role: 'Full-stack · Flutter + Node.js',
    year: '2025',
    stack: ['Flutter', 'Dart', 'Node.js', 'Express', 'MySQL', 'Firebase', 'FCM'],
    highlights: [
      'Converts between 160+ currencies via ExchangeRate-API; every conversion is logged per-user in MySQL.',
      'Rate alerts trigger FCM push notifications when a currency pair crosses a set threshold.',
      'Nine screens with drawer navigation, all backed by REST endpoints in a Node.js/Express API.',
    ],
    image: '/projects/currensee.svg',
    repoUrl: repo('Currensee'),
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
    id: 'moodNFT',
    title: 'MoodNFT',
    summary:
      'On-chain ERC-721 NFT whose SVG artwork is generated and stored entirely on-chain — no IPFS, no external dependency.',
    role: 'Solo · smart contracts',
    year: '2025',
    stack: ['Solidity', 'Foundry', 'Base64', 'ERC-721'],
    highlights: [
      'Token URI is generated entirely on-chain: SVG → base64 → JSON → base64, rendering in any wallet.',
      'flipMood() toggles between HAPPY and SAD; only the owner or approved operator can call it.',
      'BasicNft included alongside as an IPFS-hosted reference implementation.',
    ],
    image: '/projects/moodNFT.svg',
    repoUrl: repo('MoodNFT'),
  },
  {
    id: 'fundme',
    title: 'Fund Me',
    summary:
      'Crowdfunding smart contract with a $5 USD minimum enforced by a live Chainlink price feed — no hardcoded ETH amount.',
    role: 'Solo · smart contracts',
    year: '2025',
    stack: ['Solidity', 'Foundry', 'Chainlink Price Feeds'],
    highlights: [
      'Chainlink AggregatorV3Interface converts ETH to USD on-chain at time of funding.',
      'cheaperWithdraw caches the funders array length to avoid repeated SLOAD costs in the loop.',
      'Fork tests run against a live Sepolia price-feed snapshot to verify real-world behaviour.',
    ],
    image: '/projects/fundme.svg',
    repoUrl: repo('foundry-fund-me'),
  },
  {
    id: 'faceattendance',
    title: 'Face Attendance',
    summary:
      'Webcam attendance system that enrols faces once and automatically checks people in throughout the day.',
    role: 'Solo · Python',
    year: '2025',
    stack: ['Python', 'OpenCV', 'face_recognition', 'SQLite'],
    highlights: [
      'One check-in per person per day via a UNIQUE (person_id, day) constraint — later matches update last_seen.',
      'Nearest-embedding matching compares all enrolled samples; rejects strangers below a configurable tolerance.',
      'Embeddings stored as raw float64 bytes — no pickle, so reading the database cannot execute code.',
    ],
    image: '/projects/faceattendance.svg',
    repoUrl: repo('face-attendance-system'),
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
