import { projects } from '../data/content';

export default function Projects() {
  return (
    <div className="section" id="projects">
      <h2 className="section-header">Projects</h2>
      <div className="section-body">
        {projects.map((project, projectIndex) => (
          <div className="project" key={projectIndex}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#8a8072', flexShrink: 0 }}>↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
