import React from 'react'
import { Badge } from "react-bootstrap";
import '../css/work.css';

const projects = [
  {
    title: "jotform-api", 
    subInfo: "Third-party Python API", 
    language: "Python", 
    link: "https://github.com/mirkan1/crossmark-jotform-api", 
    info: ["This project is a third-party API for Jotform, built using Python."],
    date: "2025"
  },
  {
    title: "Stable Diffusion Paint", 
    subInfo: "AI-backed paint application", 
    language: "Python", 
    link: "https://github.com/mirkan1/SdPaint", 
    info: ["I have been working on this project for a while, using Python and Stable Diffusion."],
    date: "2024"
  },
  {
    title: "Datareporter", 
    subInfo: "Data reporting app", 
    language: "Python, Node.js, React", 
    link: "https://github.com/dataminelab/datareporter", 
    info: ["This project involves Python for data processing, Node.js for backend, and React for frontend. Docker was used for deployment."],
    date: "2023"
  },
  {
    title: "Jotform API React Web Integration", 
    subInfo: "Websites with caching and MongoDB", 
    language: "HTML, CSS, JS", 
    link: "https://github.com/mirkan1/kcchatter", 
    info: [
      "Started with Flask and HTML, later transitioned to TypeScript and React for better efficiency.",
      "Classification[class-types(https://www.typescriptlang.org/docs/handbook/2/classes.html)] helps developers navigate paths easily."
    ],
    date: "2022"
  },
  {
    title: "Defisherpa", 
    subInfo: "Web scraping tools", 
    language: "Python", 
    link: "https://github.com/defisherpa", 
    info: ["Created web scrapers and web apps using Flask and Django."],
    date: "2021"
  },
  {
    title: "This Website", 
    subInfo: "Portfolio website", 
    link: "https://github.com/mirkan1/mirkan1portfolio", 
    language: "JavaScript (React)", 
    info: ["A personal website showcasing projects and career aspirations in software engineering."],
    date: "2019"
  },
  {
    title: "xhrchat", 
    subInfo: "Chat application using XHR requests", 
    link: "https://github.com/mirkan1/xhrchat", 
    language: "JavaScript (Express, Node, MongoDB)", 
    info: ["A chat program using AJAX with long polling for efficient communication."],
    date: "2019"
  },
  {
    title: "Shooting Game", 
    subInfo: "Mobile arcade game", 
    link: "https://github.com/mirkan1/someTrexGame", 
    language: "JavaScript (React Native)", 
    info: [
      "A mobile game where players shoot targets with bouncing balls.",
      "Inspired by arcade games and plans to integrate pixel art in future versions."
    ],
    date: "2018"
  },
  {
    title: "Elif's Ox", 
    subInfo: "Etymological search engine and forum", 
    link: "https://github.com/lyk2018-python/elifin-okuzu", 
    language: "Python (Django)", 
    info: ["Collaborative project created during a summer camp in Turkey."],
    date: "2018"
  },
  {
    title: "BTC Bot", 
    subInfo: "Telegram bot for Bitcoin alerts", 
    language: "Python (Requests)", 
    link: "https://github.com/mirkan1/Telegram_spam", 
    info: ["A bot providing cryptocurrency updates and price alerts."],
    date: "2017"
  }
];

const aTag = (link, text) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="hvr-underline-from-left">{text}</a>
  )
}

const pTag = (text) => {
  return (
    <p>{text}</p>
  )
}

const pTagInner = (text1, text2, innerTag) => {
  return (
    <p>{text1}{innerTag}{text2}</p>
  )
}

const infoPatternEncode = (text) => {
  if (!text) return null;
  if (typeof text === "string") {
    text = text.replace(/(\r\n|\n|\r)/gm, "");
  } else {
    text = text.toString();
  }
  const regex = /[a-zA-Z\-!@#_]*\((.*?)\)/g;
  const matches = text.match(regex);
  const queueArray = new Array([HTMLElement]);
  if (matches) {
    matches.forEach(match => {
      const link = match.split("(")[1].split(")")[0];
      const linkText = match.split("(")[0];
      const remaining = text.split(match)[1];
      const before = text.split(match)[0];
      queueArray.push(pTagInner(before, remaining, aTag(link, linkText)))
    });
  } else {
    queueArray.push(pTag(text))
  }
  return queueArray.map(elem => elem);
};

const workPattern = (props, index) => {
  const encodedInfo = props.info.map(i => infoPatternEncode(i));
  return (
    <div className="myBox myBox--light" style={{fontFamily: "Ubuntu"}} key={index}>
    <div className="badge-parent">
      <Badge className="badge-fix" variant="warning">{props.date}</Badge>
    </div>
      <h3 className="title" >{props.title}</h3>
      <h4 className="language">{props.language}</h4>
      <h5 className="info">{props.subInfo}</h5>
      {encodedInfo.map((elem, idx) => (
        <React.Fragment key={`encodedInfo-${idx}`}>{elem}</React.Fragment>
      ))}
      <a 
        className="source-button pixel-borders pixel-box--warning hvr-underline-from-left" 
        href={props.link} 
        target="_blank" 
        rel="noopener noreferrer">
      Source Code</a> 
    </div>
  )
} 

export default function Work() {
  return (
    <>
      {projects.map((p, index) => ( workPattern(p, index) ))}
    </>
  );
}
