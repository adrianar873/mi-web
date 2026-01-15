import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
}

export default function Skills() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Desarrollo',
      skills: ['Java', 'Python', 'MySQL', 'Flutter', 'MongoDB', 'SQLite']
    },
    {
      name: 'Sistemas y Redes',
      skills: ['Configuración de redes', 'Análisis de redes', 'Virtualización']
    },
    {
      name: 'Herramientas',
      skills: ['Git', 'Docker', 'Linux', 'Bash', 'PowerShell']
    }
  ];

  return (
    <section className="mb-12">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-900 font-semibold mb-4 hover:text-gray-600 transition-colors text-base"
      >
        <h2 className="text-lg">Skills</h2>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {isOpen && (
        <div className="ml-4 space-y-4">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
              <div className="flex flex-wrap gap-2 ml-4">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}