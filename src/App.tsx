// ...existing code...
import { Code2, Network, Shield, Wifi, Github, Mail, Coffee, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-slate-50/50">
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg border-b border-slate-200/60 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span>Bienvenido / Bienvenue / Willkommen / Benvenuto</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-slate-600 hover:text-blue-500 transition-colors duration-200">¿Quién soy?</a>
            <a href="#skills" className="text-sm text-slate-600 hover:text-blue-500 transition-colors duration-200">Habilidades</a>
            <a href="#projects" className="text-sm text-slate-600 hover:text-blue-500 transition-colors duration-200">Experimentos</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-start max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-5 leading-tight">
              Hola, soy Adrián
            </h1>
            <p className="text-xl text-slate-600 mb-4 leading-relaxed font-light">
              Construyo cosas interesantes.
            </p>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Actualmente estudiando , siempre curioso sobre cómo funciona todo por dentro.
            </p>
            <div className="flex gap-3">
              <a href="#projects" className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-slate-300 hover:shadow-md transition-all duration-200 text-sm font-medium">
                Ver experimentos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  Sobre mí
                  <Coffee className="w-6 h-6 text-amber-600" />
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Estudiante al que le flipa programar y cacharrear con sistemas. Si hay servidores de por medio, ya estoy dentro.                </p>
                <p className="text-slate-600 leading-relaxed">
                  Básicamente, me mola todo lo tecnológico: redes, sistemas, ciberseguridad, cualquier cosa que tenga que ver con tecnología me llama la atención.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-2xl hover:shadow-md transition-all duration-200 border border-blue-100 group hover:scale-105">
                  <Code2 className="w-7 h-7 text-blue-600 mb-3 group-hover:rotate-6 transition-transform duration-200" />
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Programación</h3>
                  <p className="text-xs text-slate-600">Desarrollo</p>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-sky-100/50 p-6 rounded-2xl hover:shadow-md transition-all duration-200 border border-sky-100 group hover:scale-105">
                  <Network className="w-7 h-7 text-sky-600 mb-3 group-hover:rotate-6 transition-transform duration-200" />
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Redes</h3>
                  <p className="text-xs text-slate-600">Servidores y sistemas</p>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 p-6 rounded-2xl hover:shadow-md transition-all duration-200 border border-violet-100 group hover:scale-105">
                  <Shield className="w-7 h-7 text-violet-600 mb-3 group-hover:rotate-6 transition-transform duration-200" />
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Ciber Seguridad</h3>
                  <p className="text-xs text-slate-600">Pentesting y defensa</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 rounded-2xl hover:shadow-md transition-all duration-200 border border-emerald-100 group hover:scale-105">
                  <Wifi className="w-7 h-7 text-emerald-600 mb-3 group-hover:rotate-6 transition-transform duration-200" />
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">Aprendizaje</h3>
                  <p className="text-xs text-slate-600">Siempre curioso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Con qué trabajo</h2>
            <p className="text-slate-600">Tecnologías y herramientas que trabaje con ellas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-200 hover:scale-105">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Desarrollo</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'MySQL', 'Flutter', 'MongoDB', 'SQLite'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-50 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-200 hover:scale-105">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Sistemas y Redes</h3>
              <div className="flex flex-wrap gap-2">
                {['Configuración de redes y servidores', 'Herramientas de análisis de redes', 'Virtualización'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-7 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-200 hover:scale-105">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Herramientas</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'Linux', 'Bash', 'PowerShell'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Experimentos</h2>
            <p className="text-slate-600">Algunos experimentos de los que hice</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <div className="h-44 bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center group-hover:from-blue-200 transition-colors duration-300">
                <Shield className="w-14 h-14 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Escáner vulnerabilidades de imágenes Docker </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Analiza y protege tus contenedores de forma automática.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">Docker</span>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">Seguridad</span>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">Trivy</span>
                </div>
                <button
                  onClick={() => window.open("https://github.com/adrianar873/trivy-ci-example", "_blank")}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group">
                  Ver más
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>

              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <div className="h-44 bg-gradient-to-br from-sky-100 via-sky-50 to-white flex items-center justify-center group-hover:from-sky-200 transition-colors duration-300">
                <Code2 className="w-14 h-14 text-sky-600" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What will you build today?</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Una web que he creado con la IA bolt y luego he modificado.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">TypeScript + JSX</span>
                  <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs">Tailwind</span>
                </div>
                <button
                  onClick={() => window.open("https://github.com/adrianar873/mi-web", "_blank")}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group">
                  Ver más
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*
<section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-50/50">
  <div className="max-w-3xl mx-auto">
    <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Te podría interesar</h2>
      <p className="text-lg text-slate-600 mb-8">
        Échale un vistazo a mis repositorios en GitHub.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        
        <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm font-medium">
          <Mail className="w-4 h-4" />
          Enviar email
        </a>
        // Comentado porque decidí no usar esta parte
        
      <a href="https://github.com/adrianar873" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:border-slate-300 hover:shadow-md transition-all duration-200 hover:scale-105 text-sm font-medium">
        <Github className="w-4 h-4" />
        GitHub
      </a>
    </div>
    </div >
  </div >
</section >
*/
      }



      <footer className="py-8 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center text-slate-500 text-sm">
          <p>/---------------------------------------------------------------------------------------------------------------------------/</p>
        </div>
      </footer>
    </div >
  );
}

export default App;
// ...existing code...