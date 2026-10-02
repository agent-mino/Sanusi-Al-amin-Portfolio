// Generates the monochrome code-snippet covers in public/projects/.
// Run with: node scripts/covers.mjs
import { writeFileSync } from 'node:fs';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const covers = {
  academai: {
    label: 'ACADEMAI · NEXT.JS · GROQ',
    file: 'app/api/assist/route.ts',
    code: [
      'const Input = z.object({',
      '  mode: z.enum(["summarize", "explain", "quiz"]),',
      '  text: z.string().min(1).max(8000),',
      '});',
      '',
      'export async function POST(req: Request) {',
      '  const id = crypto.randomUUID();',
      '  if (!rateLimit(ip(req))) return tooMany(id);',
      '  const input = Input.parse(await req.json());',
      '  return groq.complete(prompt(input));  // key stays server-side',
      '}',
    ],
  },
  ledger: {
    label: 'COOPERATIVE LEDGER · SUPABASE · POSTGRES',
    file: 'supabase/schema.sql',
    code: [
      '-- balances are derived, never edited directly',
      'create trigger sync_balance',
      '  after insert on deduction_transactions',
      '  for each row execute function apply_to_balance();',
      '',
      '-- re-importing the same bank file is idempotent',
      'insert into imports (import_key, bank, month, year)',
      'values ($1, $2, $3, $4)',
      'on conflict (import_key) do update',
      '  set imported_at = now();',
    ],
  },
  stablecoin: {
    label: 'DEFI STABLECOIN · SOLIDITY · FOUNDRY',
    file: 'src/DSCEngine.sol',
    code: [
      'uint256 private constant LIQUIDATION_THRESHOLD = 50; // 200%',
      'uint256 private constant LIQUIDATOR_BONUS = 10;      // 10%',
      '',
      'function _revertIfHealthFactorIsBroken(address user)',
      '    internal view',
      '{',
      '    uint256 hf = _healthFactor(user);',
      '    if (hf < MIN_HEALTH_FACTOR)',
      '        revert DSCEngine__BreaksHealthFactor(hf);',
      '}',
    ],
  },
  raffle: {
    label: 'PROVABLY FAIR RAFFLE · CHAINLINK VRF',
    file: 'src/Raffle.sol',
    code: [
      'function fulfillRandomWords(',
      '    uint256, uint256[] calldata randomWords',
      ') internal override {',
      '    uint256 i = randomWords[0] % s_players.length;',
      '    address payable winner = s_players[i];',
      '    s_raffleState = RaffleState.OPEN;',
      '    s_players = new address payable[](0);',
      '    (bool ok, ) = winner.call{value: address(this).balance}("");',
      '    if (!ok) revert Raffle__TransferFailed();',
      '}',
    ],
  },
};

const W = 1440;
const H = 810;

for (const [id, { label, file, code }] of Object.entries(covers)) {
  const lines = code
    .map((line, i) => {
      const y = 262 + i * 40;
      const isComment = /^\s*(--|\/\/)/.test(line);
      return `<text x="196" y="${y}" fill="#3d3d3d" text-anchor="end">${i + 1}</text>` +
        `<text x="230" y="${y}" fill="${isComment ? '#6b6b6b' : '#d4d4d4'}" xml:space="preserve">${esc(line)}</text>`;
    })
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#171717"/><stop offset="1" stop-color="#070707"/></linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.04"/></pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <g font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="24">
    <rect x="120" y="150" width="1200" height="${code.length * 40 + 120}" rx="14" fill="#0b0b0b" stroke="#2a2a2a"/>
    <line x1="120" y1="202" x2="1320" y2="202" stroke="#2a2a2a"/>
    <circle cx="152" cy="176" r="6" fill="#666"/><circle cx="174" cy="176" r="6" fill="#333"/><circle cx="196" cy="176" r="6" fill="#333"/>
    <text x="226" y="183" fill="#8f8f8f" font-size="18">${esc(file)}</text>
    ${lines}
    <text x="120" y="${H - 56}" fill="#8f8f8f" font-size="20" letter-spacing="4">${esc(label)}</text>
  </g>
</svg>
`;
  writeFileSync(new URL(`../public/projects/${id}.svg`, import.meta.url), svg);
}
