export const personal = {
  name: 'Adrián Alves',
  role: 'developer & tech enthusiast',
  bio: [
    'Passionate about exploring new technologies. When there are servers involved, I\'m already in. I love everything tech: networks, systems, cybersecurity, IoT, drones… anything technology-related catches my attention.',
  ],
};

type ExperienceItem = {
  period: string;
  title: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: '2026 — Present',
    title: 'Application Development & Automation Technician',
    bullets: [
      'Build applications end to end — database, backend, frontend and deployment.',
      'Develop internal automations.',
      'Occasional end-user support.',
    ],
  },
  {
    period: 'Mar 2024 — Jun 2024 · 4 months',
    title: 'IT Technician — Internship',
    bullets: [
      'Equipment setup and commissioning.',
      'LAN configuration.',
      'FOG server management for system imaging.',
      'Hardware maintenance.',
      'End-user support and incident resolution.',
    ],
  },
];

export const projects = [
  {
    name: 'Docker Vulnerability Scanner',
    desc: 'CI-ready security scanning for containers with Trivy.',
    url: 'https://github.com/adrianar873/trivy-ci-example',
  },
  {
    name: 'What will you build today?',
    desc: 'AI-powered and personalized web to show projects.',
    url: 'https://github.com/adrianar873/mi-web',
  },
  {
    name: 'Docker Nginx Load Balancer',
    desc: 'Load balancing with Docker Compose, 1 balancer + 3 web servers.',
    url: 'https://github.com/adrianar873/proyecto-load-balancer',
  },
  {
    name: 'Java Labs',
    desc: 'Threads, processes, IPC, file handling, and database access exercises.',
    url: 'https://github.com/adrianar873/java-labs-procdata',
  },
  {
    name: 'My Digital Garden',
    desc: 'Self-hosted services on a Raspberry Pi 5 — docs and configs.',
    url: 'https://github.com/adrianar873/digital-garden',
  },
  {
    name: 'Ansible & Python Automation',
    desc: 'Automated deployment and system information collection.',
    url: 'https://github.com/adrianar873/Ansibley-Python',
  },
  {
    name: 'Bash Scripts Collection',
    desc: 'Everyday automation and sysadmin tasks.',
    url: 'https://github.com/adrianar873/Scripting-Bash',
  },
];

// Solo canales públicos. Nada de email, Matrix ni IRC: este fichero vive en un
// repo público y se renderiza en el HTML, así que lo recogen los bots de spam.
export const contact = {
  channels: [
    { label: 'github', value: 'github.com/adrianar873', href: 'https://github.com/adrianar873', status: 'active' },
  ],
};

export const skillCategories = [
  {
    name: 'Languages',
    children: [
      { name: 'feeling comfortable', skills: ['Java', 'Python', 'Flutter'] },
      { name: 'learning', skills: ['TypeScript', 'JavaScript'] },
      { name: 'dabbling', skills: ['Rust'] },
    ],
  },
  {
    // Fuera de Languages porque son frameworks, no lenguajes, pero conservando
    // el nivel "learning" que sí es lo que se quería comunicar.
    name: 'Frameworks',
    children: [
      { name: 'learning', skills: ['React', 'Next.js', 'Express.js', 'Spring Boot'] },
    ],
  },
  {
    name: 'Data & Automation',
    skills: ['Pandas', 'openpyxl'],
  },
  {
    name: 'Databases',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
  },
  {
    name: 'Systems & Networks',
    skills: ['Network Configuration', 'Network Analysis', 'Virtualization', 'DNS', 'DHCP', 'Firewalls', 'VPN', 'Monitoring', 'FTP'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'Bash', 'PowerShell', 'Trello', 'OpenCode', 'Claude Code'],
  },
];
