import { CSSProperties } from 'react';

// Order follows the reading order of the grid: left column first, then right.
const links = [
  { id: 'projects', label: 'projects', accent: 'var(--rust)' },
  { id: 'experience', label: 'experience', accent: 'var(--gold)' },
  { id: 'skills', label: 'skills', accent: 'var(--teal)' },
  { id: 'contact', label: 'say hi', accent: 'var(--gold)' },
];

export default function Nav() {
  return (
    <nav className="nav-bar" aria-label="Sections">
      {links.map((link) => (
        <a
          key={link.id}
          className="nav-link"
          href={`#${link.id}`}
          style={{ '--nav-accent': link.accent } as CSSProperties}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
