import { Github, Linkedin, type LucideIcon } from 'lucide-react';
import { contact } from '../data/content';

const icons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
};

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <h2 className="section-header">Say hi</h2>
      <div className="section-body">
        <p className="contact-lead">Building something?</p>
        <div className="contact-channels">
          {contact.channels.map((channel) => {
            const Icon = icons[channel.label];
            return (
              <a
                className="contact-item"
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">
                  {Icon && <Icon size={14} aria-hidden="true" />}
                  {channel.label}
                </span>
                <span className="value">{channel.value}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
