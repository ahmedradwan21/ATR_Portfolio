import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="vscode-footer">
      <div className="footer-content">
        <span className="footer-brand">[ATR] {profile.name}</span>
        <span className="footer-sep">|</span>
        <span className="footer-tech">Built with React + Vite — No external UI libraries</span>
        <span className="footer-sep">|</span>
        <span className="footer-copy">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
