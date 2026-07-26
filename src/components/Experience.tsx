import { experience } from '../data/content';

export default function Experience() {
  return (
    <section className="section section--experience" id="experience">
      <h2 className="section-header">Experience</h2>
      <div className="section-body">
        {experience.map((item, itemIndex) => (
          <div className="exp-item" key={itemIndex}>
            <div className="period">{item.period}</div>
            <h3>{item.title}</h3>
            <ul className="exp-bullets">
              {item.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
