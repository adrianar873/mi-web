import { Code2, Network, Shield, Wifi, Github, Coffee, Sparkles, Terminal, Zap, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Efectos de fondo animados */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Adrián
            </span>
          </div>
          <div className="flex gap-8">
            {[
              { id: 'about', label: '¿Quién soy?' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Proyectos' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-all duration-300 relative group ${activeSection === item.id ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="hero" className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hola, soy Adrián
              </span>
            </h1>
            <p className="text-2xl text-slate-300 mb-4 font-light">
              Construyo cosas <span className="text-blue-400 font-semibold">interesantes</span> y experimento con tecnología.
            </p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Estudiante apasionado por la programación, redes, sistemas y ciberseguridad.
              Siempre curioso sobre cómo funciona todo por dentro.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-sm font-semibold hover:scale-105 flex items-center gap-2"
              >
                Ver proyectos
                <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://github.com/adrianar873"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 text-sm font-semibold hover:scale-105 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Sobre mí
                  </span>
                  <Coffee className="w-8 h-8 text-amber-500 animate-bounce" />
                </h2>
                <p className="text-slate-300 mb-5 leading-relaxed text-lg">
                  Estudiante al que le flipa programar y cacharrear con sistemas.
                  Si hay servidores de por medio, ya estoy dentro.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Me mola todo lo tecnológico: redes, sistemas, ciberseguridad...
                  Cualquier cosa que tenga que ver con tecnología me llama la atención.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code2, title: 'Desarrollo', desc: 'Full-stack', color: 'blue', gradient: 'from-blue-500/10 to-blue-600/5' },
                  { icon: Network, title: 'Redes', desc: 'Servidores', color: 'cyan', gradient: 'from-cyan-500/10 to-cyan-600/5' },
                  { icon: Shield, title: 'Seguridad', desc: 'Pentesting', color: 'purple', gradient: 'from-purple-500/10 to-purple-600/5' },
                  { icon: Wifi, title: 'Aprendizaje', desc: 'Continuo', color: 'emerald', gradient: 'from-emerald-500/10 to-emerald-600/5' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-6 rounded-2xl border border-slate-700/30 hover:scale-105 hover:border-${item.color}-500/50 transition-all duration-300 group cursor-pointer`}
                  >
                    <item.icon className={`w-8 h-8 text-${item.color}-400 mb-3 group-hover:rotate-12 transition-transform duration-300`} />
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stack tecnológico
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Herramientas con las que trabajo</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Desarrollo',
                skills: ['Java', 'Python', 'MySQL', 'Flutter (empezando)', 'MongoDB (empezando)', 'SQLite'],
                gradient: 'from-blue-500/10 to-blue-600/5',
                border: 'border-blue-500/20'
              },
              {
                title: 'Sistemas y Redes',
                skills: ['Configuración de redes', 'Análisis de redes', 'Virtualización'],
                gradient: 'from-purple-500/10 to-purple-600/5',
                border: 'border-purple-500/20'
              },
              {
                title: 'Herramientas',
                skills: ['Git', 'Docker', 'Linux', 'Bash', 'PowerShell'],
                gradient: 'from-cyan-500/10 to-cyan-600/5',
                border: 'border-cyan-500/20'
              }
            ].map((category, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${category.gradient} backdrop-blur-sm p-8 rounded-2xl border ${category.border} hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-xs font-medium hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-200 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experimentos destacados
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Algunos proyectos en los que he trabajado</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Escáner de vulnerabilidades Docker',
                desc: 'Analiza y protege tus contenedores de forma automática con Trivy.',
                tags: ['Docker', 'Seguridad', 'Trivy', 'CI/CD'],
                link: 'https://github.com/adrianar873/trivy-ci-example',
                gradient: 'from-blue-500/20 to-purple-500/20'
              },
              {
                icon: Code2,
                title: 'What will you build today?',
                desc: 'Web creada con IA y personalizada para mostrar proyectos.',
                tags: ['TypeScript', 'React', 'Tailwind'],
                link: 'https://github.com/adrianar873/mi-web',
                gradient: 'from-cyan-500/20 to-blue-500/20'
              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-white/5"></div>
                  <project.icon className="w-16 h-16 text-white z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group/btn"
                  >
                    <Eye className="w-4 h-4" />
                    Ver proyecto
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-4">
            Hecho con <span className="text-red-500">BOLT IA Y CLAUDE</span>
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/adrianar873"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;