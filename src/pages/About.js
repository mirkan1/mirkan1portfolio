import React from 'react'

export default function About() {
  return (
    <div>
          <h5>Hello, my name is Renas Kilic.</h5>
          <p>I am a software developer based in New Orleans, 
          specializing in full stack web development, mainly front-end,
          and always open to learn new technologies. <br/>
          My interests changes often because of my ADHD but...</p>
          <b>Current interests:</b>
          <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
            <li>Unity game development</li>
            <li>mobile development with <a className="hvr-underline-from-left" href="https://expo.io/snacks/@raq/">react-native</a></li>
            <li><a className="hvr-underline-from-left" href="https://giphy.com/channel/mirkankl">Pixel art</a></li>
            <li>Data visualization</li>
          </ol>
      </div>
  )
}

