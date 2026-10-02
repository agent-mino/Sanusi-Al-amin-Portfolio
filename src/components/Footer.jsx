import { profile } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer container">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <a href="https://github.com/agent-mino/Sanusi-Al-amin-Portfolio" target="_blank" rel="noreferrer">
        View source ↗
      </a>
    </footer>
  );
}
