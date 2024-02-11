import React from 'react'
import { Badge } from "react-bootstrap";
import '../css/work.css';

const projects = [  
  {
    title: "Stable Diffusion Paint", 
    subInfo: "AI backed paint application", 
    language: "Python", 
    link: "https://github.com/mirkan1/SdPaint", 
    info: ["I have been working on this project for a while, I am using Python and stable diffusion."],
    date: "2024"
  },
  {
    title: "Datareporter", 
    subInfo: "Data reporting app", 
    language: "Python, Nodejs, React", 
    link: "https://github.com/dataminelab/datareporter", 
    info: ["I have been working on this project for a while, I have been using Python, Nodejs and React. I have been using Python for data processing, Nodejs for backend and React for frontend. I have been using Docker for deployment."],
    date: "2023"
  },
  {
    title: "Jotform api react web integration with cache system and mongoDB", 
    subInfo: "A few websites to talk about", 
    language: "HTML, CSS, JS", 
    link: "https://github.com/mirkan1/kcchatter", 
    info: [
      "I initially began working with Flask and HTML, but eventually transitioned to using Typescript and React as I discovered that it offered a more streamlined and efficient experience.",
      "Classification[class-types(https://www.typescriptlang.org/docs/handbook/2/classes.html)] helps developers easily navigate their paths.",
    ],
    date: "2022"
  },
  {
    title: "Defisherpa", 
    subInfo: "lots and lots of web scraping", 
    language: "Python", 
    link: "https://github.com/defisherpa", 
    info: [
      "Mainly using Python, I have created a few web scrapers to gather data from various websites. I have also created a few web apps using Flask and Django.",
    ],
    date: "2021"
  },
  {
    title: "This Website", 
    subInfo: "My portfolio website aka this website", 
    link: "https://github.com/mirkan1/mirkan1portfolio", 
    language: "Javascript (react)", 
    info: [
      "My website, I created to show people my projects, my daily life and so on. My aim is to develop my career about software engineering with this website, I will put there my freelance stuff, my free time projects..."
    ],
    date: "2019"
    },
    {
    title: "xhrchat", 
    subInfo: "Web application that end-users can chat", 
    link: "https://github.com/mirkan1/xhrchat", 
    language: "Javascript (express, node, mongodb)", 
    info: 
      ["It is a chat program used XHR requests. I was thinking about chats in the browser, how can it work effectively withou websockets? One time I got a great idea. If I use simple ajax and set timeout to big number (for example 20 seconds), I can respond on the server side in the moment when I have new message for client. Great idea, so I started work and after +-2 hours I had first working prototype. So I invest few more hours to programming this thing and created this!"],
      date: "2019" 
  },
  {
    title: "Shootting Game", 
    subInfo: "Mobile arcade game", 
    link: "https://github.com/mirkan1/someTrexGame", 
    language: "Javascript (react-native)", 
    info: 
      ["I always had interest in mobile technologies, I had lots of fun creating it. A mobile game that you shot random appearong targets throwing a ball, if the ball that you throw hit the corner it turns back", "I like Arcade games, that is the main reason why my first ever game is a arcade game", <p>I am planning for future to mix my <a className="hvr-underline-from-left" href='https://giphy.com/channel/mirkankl'>pixel art drawings</a> and an arcade game together, probably this one</p>],
    date: "2018" 
  },
  {
    title: "Elif's ox", 
    subInfo: "Etymological Search Engine, Forum", 
    link: "https://github.com/lyk2018-python/elifin-okuzu", 
    language: "Python (django)", 
    info: 
      ["Elif is a common name in Turkey and is also first letter of Arabic alphabet and comes from Greece's first letter Alpha","We created as a group more than ten people in my summer camp at Bolu, Turkey"],
    date: "2018" 
  },
  {
    title: "BTC bot", 
    subInfo: "Telegram bot that announce desired bitcoin movements", 
    language: "Python (requests)", 
    link: "https://github.com/mirkan1/Telegram_spam", 
    info: 
      ["Chat bot I made on my free times that gives people informations about Cryptocurrencies, when it downes some percentage, when it is down of your desired price 'BTC down 10%'", "I learnt some new algorithms and majority of Python packages while I writing this chat bot" ],
      date: "2017" 
  },
]

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
    // class-types(https://www.typescriptlang.org/docs/handbook/2/classes.html)
    text = text.toString();
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
      {encodedInfo}
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
    <div className="page-inner">
      {projects.map((p, index) => ( workPattern(p, index) ))}
    </div>
  );
}
