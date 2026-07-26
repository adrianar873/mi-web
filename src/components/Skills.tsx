import { useState } from 'react';
import { skillCategories } from '../data/content';

function SkillTags({ name, skills }: { name: string; skills: string[] }) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <span className="skill-sub-tags">
      <button
        type="button"
        className="skill-toggle"
        aria-expanded={showSkills}
        aria-label={`${showSkills ? 'Hide' : 'Show'} ${name} skills`}
        onClick={() => setShowSkills(!showSkills)}
      >
        {showSkills ? '[-]' : '[+]'}
      </button>
      {showSkills && (
        <span className="tags collapse-inner">
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
    <div className="skill-cat">
      <button
        type="button"
        className="skill-cat-head"
        aria-expanded={showCategory}
        onClick={() => setShowCategory(!showCategory)}
      >
        {category.name}
        <span className="skill-toggle" aria-hidden="true">
          {showCategory ? '[-]' : '[+]'}
        </span>
      </button>

      {showCategory && category.children && (
        <div className="skill-children collapse-inner">
          {category.children.map((childCategory, childIndex) => (
            <h4 className="skill-sub" key={childIndex}>
              {childCategory.name}
              <SkillTags name={childCategory.name} skills={childCategory.skills} />
            </h4>
          ))}
        </div>
      )}

      {showCategory && category.skills && (
        <div className="tags collapse-inner skill-tags-block">
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
    <section className="section section--skills" id="skills">
      <h2 className="section-header">Skills</h2>
      <div className="section-body">
        {skillCategories.map((category, categoryIndex) => (
          <SkillCategory key={categoryIndex} category={category} />
        ))}
      </div>
    </section>
  );
}
