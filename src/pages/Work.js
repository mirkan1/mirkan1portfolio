import React from 'react'
// #eed602
import styled from 'styled-components';

const Styles = styled.div`
  .myBox {
    position: relative;
    //display: inline-block;
    margin: 0 15px 15px 0;
    padding: 15px 4vw;
    background-color: transparent;
    font-family: "Press Start 2P", Arial Black, Arial Bold, Arial, sans-serif;

    & > * {
      text-shadow: 2px 2px #202020;
    }

    & > p {
      font-size: 14px;
      letter-spacing: 0.25px;
    }

    & > h5 {
      font-weight: medium;
      font-size: 20px;
      letter-spacing: 0.15px;
      text-align: center;
      text-decoration: underline;
    }

    & > h6 {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0.15px;
    }

    & > h4 {
      font-weight: normal;
      font-size: 12px;
      letter-spacing: 0.4px;
      text-align: right;
    }
  }
  .myBox--light {
    border-style: solid;
    border-width: 5px;
    border-color: #202020;
    border-image-slice: 2;
    //border-image-width: 1;
    //border-image-outset: 0;
    border-image-source: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><path d='M0 2h2v2H0zM2 0h2v2H2zM4 2h2v2H4zM2 4h2v2H2z' fill='%23cccccc' /></svg>");
    //position: relative;
    background-color: transparent;
  }
`;

const projects = [
  {title: "Renas Kilic's website", subInfo: "My portfolio website aka this website", link: "https://github.com/mirkan1/mirkan1portfolio", language: "Javascript (react)", info: 
    ["My website, I created to show people my projects, my daily life and so on", "I am hoping to develop my career about software engineering with this website, I will put there my freelance stuff, my free time projects..."] },
  {title: "xhrchat", subInfo: "chat program used XHR requests", link: "https://github.com/mirkan1/xhrchat", language: "Javascript (express, node, mongodb)", info: 
    ["I was thinking about chats in the browser, how can it work effectively withou websockets? One time I got a great idea. If I use simple ajax and set timeout to big number (for example 20 seconds), I can respond on the server side in the moment when I have new message for client. Great idea, so I started work and after +-2 hours I had first working prototype. So I invest few more hours to programming this thing and created this!"] },
  {title: "SomeTrexGame", subInfo: "Mobile arcade game", link: "https://github.com/mirkan1/someTrexGame", language: "Javascript (react-native)", info: 
    ["I always have interest in mobile phones and its technologies, I had lots of fun wrighting it, it is a mobile game that you shot target with your ball, if your ball hits the corner it turns back","I like Arcade games, that is the main reason why my first ever game is a arcade game",] },
  {title: "Elif'in okuzu", subInfo: "Ethimology blog website", link: "https://github.com/lyk2018-python/elifin-okuzu", language: "Python (django)", info: 
    ["Elif is a common name in Turkey and is also first letter of Arabic alphabet and comes from Greece's first letter Alpha","We created as a group more than ten people in my summer camp at Bolu, Turkey"] },
  {title: "BTC bot", subInfo: "Telegram bot that annonce bitcoin movements", language: "Python (requests)", link: "https://github.com/mirkan1/Telegram_spam", info: 
    ["Chat bot I made on my free times that gives people informations about Cryptocurrencies, when it downes some percentage, when it is down of your desired price 'BTC down 10%'", "I learnt some new algorithms and majority of Python packages while I writing this chat bot" ] },
  // {title: "", subInfo: "", link: "", info: [] },
]
const workPatern = function workPatern(props)  {
  return (
    <Styles>
    <div className="myBox myBox--light">
      <h5>{props.title}</h5>
      <h4>{props.language}</h4>
      <h6>{props.subInfo}</h6>
      {props.info.map(i => (
        <p>{i}</p>
      ))}
      <a className="hvr-underline-from-left" href={props.link} target="_blank" rel="noopener noreferrer">Source Code</a>.      
    </div>
    </Styles>
  )
} 

export default function Work() {
  return (
    <div>
      <button className="pixel-borders pixel-box--success" style={{ width: "95%", alignSelf: "center"}}>My Works</button>
      {projects.map(p => (
        workPatern(p)
      ))}
      <button className="pixel-borders pixel-box--success">SEE IT</button>
      <button className="pixel-borders pixel-box--primary">SEE IT</button>
      <button className="pixel-borders pixel-box--warning">SEE IT</button>
      <button className="pixel-borders pixel-box--light">SEE IT</button>
      <button className="pixel-borders pixel-box--error">SEE IT</button>
    </div>
  )
    
}
