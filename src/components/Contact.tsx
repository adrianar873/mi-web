import { contact } from '../data/content';

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <h2 className="section-header">Say hi</h2>
      <div className="section-body">
        <p className="contact-lead">Building something?</p>
        <div className="contact-channels">
          {contact.channels.map((channel) => (
            <a
              className="contact-item"
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">{channel.label}</span>
              <span className="value">{channel.value}</span>
              <span className="status">
                <span className="dot" aria-hidden="true"></span>
                {channel.status}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
