import { ReactNode } from 'react';

export default function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="frame">
      <span className="corner corner-tl"></span>
      <span className="corner corner-tr"></span>
      <span className="corner corner-bl"></span>
      <span className="corner corner-br"></span>
      {children}
    </div>
  );
}
