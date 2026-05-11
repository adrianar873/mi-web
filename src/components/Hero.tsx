import { personal } from '../data/content';

export default function Hero() {
  return (
    <div className="hero">
      <h1>
        {personal.name.split(' ')[0]}{' '}
        <span className="accent">{personal.name.split(' ')[1]}</span>
      </h1>
      <div className="sub">{personal.role}</div>
      <div className="bar"></div>
    </div>
  );
}
