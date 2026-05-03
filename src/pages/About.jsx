import React from 'react'
import PropTypes from 'prop-types'
import "../css/home.css"

const TechnologyGroup = ({ label, items }) => {
  return (
    <section className="tech-group-card pixel-borders pixel-box--warning" aria-label={label}>
      <h2 className="tech-group-label">{label}</h2>
      <div className="tech-chip-list">
        {items.map((item) => (
          <span key={item} className="tech-chip pixel-borders pixel-box--warning">{item}</span>
        ))}
      </div>
    </section>
  );
};

TechnologyGroup.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default function About() {
  const technologyGroups = [
    {
      label: 'Computer Languages',
      items: ['Python', 'TypeScript', 'Solidity', 'Go']
    },
    {
      label: 'Front-End',
      items: ['React', 'React Native', 'Bootstrap', 'Material-UI', 'D3.js', 'Tailwind CSS']
    },
    {
      label: 'Back-End',
      items: ['Flask', 'Django', 'Node.js', 'Nginx']
    },
    {
      label: 'Data & Messaging',
      items: ['Pandas', 'MySQL', 'MongoDB', 'Redis', 'PostgreSQL']
    },
    {
      label: 'Cloud & DevOps',
      items: ['AWS', 'Heroku', 'Docker', 'Git', 'Azure']
    }
  ];

  return (
    <>
    <div className="tech-parent-column">
      <h1 className="tech-title">
        <span className="tech-title-full">Familiar Technologies</span>
        <span className="tech-title-compact">Tech.</span>
      </h1>
      {technologyGroups.map((group) => (
        <TechnologyGroup key={group.label} label={group.label} items={group.items} />
      ))}
    </div>
    
      <section className="resume-inline-card pixel-borders pixel-box--warning" aria-label="Resume request">
        <p className="resume-inline-text">Send me an email for my resume by clicking the button.</p>
        <a
          className="resume-inline-link"
          href="mailto:mirkanbaba1@gmail.com?subject=Resume Request"
        >
          Request Resume
        </a>
      </section>
    </>
  )
}
