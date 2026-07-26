import { personal } from '../data/content';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>{personal.name}</span>
      <span>
        <a href="https://github.com/adrianar873" target="_blank" rel="noopener noreferrer">
          github.com/adrianar873
        </a>
      </span>
    </footer>
  );
}
