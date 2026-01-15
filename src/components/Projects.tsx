import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  link: string;
}

export default function Projects() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const projects: Project[] = [
    {
      name: 'Docker Vulnerability Scanner',
      description: 'Analyze your containers automatically with Trivy.',
      link: 'https://github.com/adrianar873/trivy-ci-example'
    },
    {
      name: 'What will you build today?',
      description: 'AI-powered and personalized web to show projects.',
      link: 'https://github.com/adrianar873/mi-web'
    },
    {
      name: 'Docker Nginx Load Balancer',
      description: 'Advanced load balancing solution using Docker and Nginx with 1 load balancer and 3 web servers.',
      link: 'https://github.com/adrianar873/proyecto-load-balancer'
    },
    {
      name: 'Java Labs',
      description: 'Repository with Java exercises on Processes, Services, and Data Access. Includes threads, processes, communication, file handling, and database access.',
      link: 'https://github.com/adrianar873/java-labs-procdata'
    },
    {
      name: 'My Digital Garden',
      description: 'Repository containing various configurations I am implementing on my Raspberry Pi 5. Here I document the installation and setup process of different self-hosted services.',
      link: 'https://github.com/adrianar873/digital-garden'
    },
    {
      name: 'Ansible & Python Automation',
      description: 'Combining Ansible and Python to automate app deployment and system information collection.',
      link: 'https://github.com/adrianar873/Ansibley-Python'
    },
    {
      name: 'Bash Scripts Collection',
      description: 'Simple bash scripts.',
      link: 'https://github.com/adrianar873/Scripting-Bash'
    },



  ];

  return (
    <section className="mb-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-900 font-semibold mb-4 hover:text-gray-600 transition-colors text-base"
      >
        <h2 className="text-lg">Projects</h2>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <div className="ml-4 space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4 py-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 hover:text-blue-600 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 flex items-center gap-2">
                    {project.name}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}

      {isOpen && (
        <p className="text-sm text-gray-500 italic mt-4 ml-4">Constantly building</p>
      )}
    </section>
  );
}