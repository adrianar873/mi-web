import { personal } from '../data/content';

export default function Hero() {
  const [firstName, ...rest] = personal.name.split(' ');

  return (
    <div className="hero">
      <h1>
        {firstName}
        <span className="accent">{rest.join(' ')}</span>
      </h1>
      <div className="sub">{personal.role}</div>
      <div className="bar" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
