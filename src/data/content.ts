export const personal = {
  name: 'Adrián Alves',
  role: 'developer & tech enthusiast',
  bio: [
    'Passionate about exploring new technologies. When there are servers involved, I\'m already in. I love everything tech: networks, systems, cybersecurity, IoT, drones… anything technology-related catches my attention.',
  ],
};

export const experience = [
  {
    period: '2024 — Present',
    title: 'IT Intern',
    desc: 'Working on infrastructure, network configuration, and internal tooling.',
  },
  {
    period: '2022 — 2024',
    title: 'Student Projects & Labs',
    desc: 'Built load balancers with Docker + Nginx, vulnerability scanning with Trivy, and automation scripts.',
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

export const contact = {
  channels: [
    { label: 'email', value: 'adrian@proton.me', href: 'mailto:adrian@proton.me', status: 'online' },
    { label: 'github', value: 'github.com/adrianar873', href: 'https://github.com/adrianar873', status: 'active' },
    { label: 'matrix', value: '@adrian:matrix.org', href: 'https://matrix.to/#/@adrian:matrix.org', status: 'online' },
    { label: 'irc', value: 'irc://libera/adrian', href: 'https://web.libera.chat', status: 'online' },
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
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB'],
  },
  {
    name: 'Systems & Networks',
    skills: ['Network Configuration', 'Network Analysis', 'Virtualization', 'DNS', 'DHCP', 'Firewalls', 'VPN', 'Monitoring', 'FTP'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'Bash', 'PowerShell', 'OpenCode', 'Claude Code'],
  },
];
