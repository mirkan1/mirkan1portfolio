import React from 'react'
import "./about.css"


const ListTable = ({ items }) => {
  return (
    <table>
      {items.map((item) => (
        <tr key={item.text}>
          <td><i className="emoji-icon">{item.icon}</i></td>
          <td>{item.text}</td>
        </tr>
      ))}
    </table>
  );
};

export default function About() {
  const listItems = [
    { icon: '🐍', text: 'Python' },
    { icon: '🐼', text: 'Pandas(python)' },
    { icon: '🍾', text: 'Flask(python)' },
    { icon: '🥾', text: 'Django(python)' },
    { icon: '🖥', text: 'AWS' },
    { icon: '🈁', text: 'Heroku' },
    { icon: '⚛', text: 'React' },
    { icon: '📱', text: 'React-native' },
    { icon: '🍜', text: 'Node.js' },
    { icon: '🚄', text: 'Express.js' },
    { icon: '🎨', text: 'HTML/CSS/JS' },
    { icon: '💾', text: 'MySQL' },
    { icon: '📊', text: 'GraphQL' },
    { icon: '🦄', text: 'Gunicorn' },
    { icon: '🚂', text: 'Nginx' },
    { icon: '🐜', text: 'Kafka' },
    { icon: '🎩', text: 'Jenkins' },
  ];
  return (
    <div className="tech-parent-column">
      <h1>Familiar Technologies</h1>
      <div className="tech-parent-row">
        <ListTable items={listItems} />
      </div>
    </div>
  )
}
