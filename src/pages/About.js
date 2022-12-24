import React from 'react'
import "./about.css"

export default function About() {
  return (
    <div className="tech-parent-column">
      <h1>Familiar Technologies</h1>
      <div className="tech-parent-row">
        <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
          <li>🐍Python</li>
          <li>🐼Pandas(python)</li>
          <li>🍾Flask(python)</li>
          <li>🥾Django(python)</li>
          <li>🖥AWS</li>
          <li>🈁クHeroku</li>
          <li>⚛React</li>
          <li>📱React-native</li>
          <li>🍜Node.js</li>
          <li>🚄Express.js</li>
          <li>🎨HTML/CSS/JS</li>
          <li>💾MySQL</li>
          <li>📊GraphQL</li>
          <li>🦄Gunicorn</li>
          <li>🚂❎Nginx</li>
        </ol>
      </div>
    </div>
  )
}
