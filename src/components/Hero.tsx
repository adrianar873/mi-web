import { personal } from '../data/content';

export default function Hero() {
  return (
    <div className="hero">
      <h1>
        {personal.name.split(' ').map((word) => (
          <span className="hero-word" key={word}>
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
}
