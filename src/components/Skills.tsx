import { useState } from 'react';
import { skillCategories } from '../data/content';

function SkillTags({ skills }: { skills: string[] }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <span style={{ marginLeft: 4, display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <span
        style={{ cursor: 'pointer', color: '#8a8072', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.5rem' }}
        onClick={(event) => {
          event.stopPropagation();
          setShowSkills(!showSkills);
        }}
      >
        {showSkills ? '[-]' : '[+]'}
      </span>
      {showSkills && (
        <span className="tags collapse-inner" style={{ marginLeft: 6 }}>
          {skills.map((skill, skillIndex) => (
            <span key={skillIndex}>{skill}</span>
          ))}
        </span>
      )}
    </span>
  );
}

function SkillCategory({ category }: { category: typeof skillCategories[number] }) {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div
      className="skill-cat"
      style={{ cursor: 'pointer' }}
      onClick={() => setShowCategory(!showCategory)}
    >
      <h4 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {category.name}
        <span style={{ color: '#8a8072', marginLeft: 8 }}>
          {showCategory ? '[-]' : '[+]'}
        </span>
      </h4>
      {showCategory && category.children && (
        <div
          className="collapse-wrap collapse-inner"
          style={{ marginTop: 8, marginLeft: 12, display: 'flex', flexDirection: 'column', gap: 8 }}
          onClick={(event) => event.stopPropagation()}
        >
          {category.children.map((childCategory, childIndex) => (
            <div key={childIndex}>
              <h4 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.45rem',
                fontWeight: 600,
                color: '#8a8072',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}>
                {childCategory.name}
                <SkillTags skills={childCategory.skills} />
              </h4>
            </div>
          ))}
        </div>
      )}
      {showCategory && category.skills && (
        <div className="tags collapse-inner" style={{ marginTop: 6 }}>
          {category.skills.map((skill, skillIndex) => (
            <span key={skillIndex}>{skill}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <div className="section" id="skills">
      <h2 className="section-header">Skills</h2>
      <div className="section-body">
        {skillCategories.map((category, categoryIndex) => (
          <SkillCategory key={categoryIndex} category={category} />
        ))}
      </div>
    </div>
  );
}
