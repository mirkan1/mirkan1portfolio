import React from 'react'
import "./about.css"

const ListTable = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item) => (
          <tr key={item.text}>
            <td><i className="emoji-icon">{item.icon}</i></td>
            <td>{item.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function About() {
  const listItems = [
    { icon: '🐍', text: 'Python' },
    { icon: '🐼', text: 'Pandas(python)' },
    { icon: '🍾', text: 'Flask(python)' },
    { icon: '🥾', text: 'Django(python)' },
    { icon: '👔', text: 'TypeScript' },
    { icon: '⚛', text: 'React' },
    { icon: '📱', text: 'React-native' },
    { icon: '🍜', text: 'Node.js' },
    { icon: '🎨', text: 'HTML/CSS/JS' },
    { icon: '🖥', text: 'AWS' }
  ];
  const listItems2 = [
    { icon: '🈁', text: 'Heroku' },
    { icon: '💾', text: 'MySQL' },
    { icon: '📊', text: 'GraphQL' },
    { icon: '🍃', text: 'MongoDB' },
    { icon: '🦄', text: 'Gunicorn' },
    { icon: '🚂', text: 'Nginx' },
    { icon: '🐜', text: 'Kafka' },
    { icon: '🎩', text: 'Jenkins' },
    { icon: '🐳', text: 'Docker' },
    { icon: '🕸', text: 'Git' },
    { icon: '💎', text: 'Solidity' },
  ];

  return (
    <div className="tech-parent-column">
      <h1>Familiar Technologies</h1>
      <div className="tech-parent-row">
        <ListTable items={listItems} />
        <ListTable items={listItems2} />
      </div>
    </div>
  )
}
