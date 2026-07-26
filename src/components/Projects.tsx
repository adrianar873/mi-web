import { projects } from '../data/content';

export default function Projects() {
  return (
    <section className="section section--projects" id="projects">
      <h2 className="section-header">Projects</h2>
      <div className="section-body">
        {projects.map((project, projectIndex) => (
          <div className="project" key={projectIndex}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
