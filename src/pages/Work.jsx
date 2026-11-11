import React from 'react'
import { Badge } from "react-bootstrap";
import '../css/work.css';
import boosterPackHeroesTable from '../files/Booster Pack Heroes.CT';

const projects = [
  {
    title: "Reverse Engineering",
    subInfo: "Booster Pack Heroes Memory manipulation",
    language: "Ghidra, Cheat Engine",
    link: boosterPackHeroesTable,
    download: "Booster Pack Heroes.CT",
    linkLabel: "Download .CT",
    info: [
      "I was recently working on reverse engineering running applications through memory manipulation.",
      "I used Ghidra to read and analyze executables, and Cheat Engine to catch values such as currency and health in video games.",
      "Once I found those values, I captured the pointers behind them and manipulated them to gain an advantage in single-player games.",
      "One of the games I worked on is Booster Pack Heroes, a truly beautiful game with a rewarding progression across its acts, each with its own currency (coins, apples, skulls, frosts, rainbow currency and zenith).",
      "You can download my Cheat Engine table below and load it in Cheat Engine. It is made for Booster Pack Heroes v1.0.27."
    ],
    date: "2027-01-01"
  },
  {
    title: "Effortl3ssAI",
    subInfo: "prompt-to-on-chain action solution",
    language: "Typescript, Solidity",
    link: "https://github.com/anii76/EthSingapore",
    info: ["This app enabling users to simply provide a text prompt, and it handles the rest of the Web3 actions seamlessly.", "I went to Singapore for a hackaton, endeup up building this project with a team of 5."],
    date: "2026-01-30"
  },
  {
    title: "jotform-api",
    subInfo: "Third-party Python API",
    language: "Python",
    link: "https://pypi.org/project/crossmark-jotform-api",
    info: [
      "A comprehensive Python wrapper for JotForm that seamlessly integrates with JotForm's API using your provided API key.",
      "Built directly from the official JotForm API documentation (https://api.jotform.com/docs/) to ensure full compatibility and up-to-date endpoint coverage.",
      "Includes built-in API key health monitoring to validate credentials and track authentication status in real-time.",
      "Provides simplified, Pythonic interfaces for common JotForm operations including form management, submission retrieval, and user account operations."
    ],
    date: "2025-06-18"
  },
  {
    title: "Paint App",
    subInfo: "AI backed paint application",
    language: "Stable Diffusion, Python",
    link: "https://github.com/mirkan1/SdPaint",
    info: [
      "I found this project on Reddit, loved the idea,",
      "and contributed for a while. This app uses."
    ],
    date: "2024-10-22"
  },
  {
    title: "Datareporter",
    subInfo: "Data reporting app",
    language: "Flask, React",
    link: "https://github.com/dataminelab/datareporter",
    info: [
      "This project involves Python for data processing,",
      "Node.js for backend, and React for frontend. Docker was used for deployment."
    ],
    date: "2023-03-12"
  },
  {
    title: "Defisherpa",
    subInfo: "Web scraping tools",
    language: "Python, Scrappy",
    link: "https://github.com/defisherpa",
    info: [
      "Built web scrapers and supporting web apps with Flask and Django during the crypto boom.",
      "Focused on collecting fast-moving cryptocurrency data from multiple sources, cleaning it up, and making it usable through internal tools and dashboards.",
      "The work centered on automation, monitoring market activity, and delivering timely data for research and decision-making."
    ],
    date: "2021-10-15"
  },
  {
    title: "This Website",
    subInfo: "Portfolio website",
    link: "https://github.com/mirkan1/mirkan1portfolio",
    language: "React",
    info: ["A personal website showcasing projects and career aspirations in software engineering."],
    date: "2019-06-15"
  },
  {
    title: "xhrchat",
    subInfo: "Chat application using XHR requests",
    link: "https://github.com/mirkan1/xhrchat",
    language: "Express.js, Node.js, MongoDB",
    info: ["A chat program using AJAX with long polling for efficient communication."],
    date: "2019-04-21"
  },
  {
    title: "Shooting Game",
    subInfo: "Mobile arcade game",
    link: "https://github.com/mirkan1/someTrexGame",
    language: "React Native",
    info: [
      "A mobile game where players shoot targets with bouncing balls.",
      "Inspired by arcade games and plans to integrate pixel art in future versions."
    ],
    date: "2018-04-03"
  },
  {
    title: "BTC Bot",
    subInfo: "Telegram bot for Bitcoin alerts",
    language: "Python, Telegram API",
    link: "https://github.com/mirkan1/Telegram_spam",
    info: ["A bot providing cryptocurrency updates and price alerts."],
    date: "2017-06-08"
  }
];

const infoPatternEncode = (text, key) => {
  if (!text) {
    return null;
  }

  const normalized = (typeof text === 'string' ? text : text.toString()).replace(/(\r\n|\n|\r)/gm, '');
  const regex = /([a-zA-Z\-!@#_]+)\((.*?)\)/g;
  const children = [];
  let cursor = 0;
  let match;
  let partIndex = 0;

  while ((match = regex.exec(normalized)) !== null) {
    const [fullMatch, linkText, link] = match;
    const before = normalized.slice(cursor, match.index);

    if (before) {
      children.push(before);
    }

    children.push(
      <a
        key={`info-link-${key}-${partIndex++}`}
        href={link}
        target="_blank"
        rel="noreferrer"
        className="hvr-underline-from-left"
      >
        {linkText}
      </a>
    );

    cursor = match.index + fullMatch.length;
  }

  const trailing = normalized.slice(cursor);
  if (trailing) {
    children.push(trailing);
  }

  return <p key={key}>{children.length > 0 ? children : normalized}</p>;
};

const workPattern = (props) => {
  const encodedInfo = props.info.map((item, idx) => infoPatternEncode(item, `encodedInfo-${idx}`));
  const linkProps = props.download
    ? { download: props.download }
    : { target: "_blank", rel: "noopener noreferrer" };
  return (
    <div className="myBox myBox--light">
      <div className="badge-parent">
        <Badge className="badge-fix" variant="warning">{props.date}</Badge>
      </div>
      <h3 className="title" >{props.title}</h3>
      <div className="work-card-content">
        <h4 className="language">{props.language}</h4>
        <div className="work-description-panel">
          <h5 className="info work-summary">{props.subInfo}</h5>
          <div className="work-description-body">
            {encodedInfo}
          </div>
        </div>
      </div>
      <a
        className="source-button pixel-borders pixel-box--warning hvr-underline-from-left"
        href={props.link}
        {...linkProps}>
        {props.linkLabel || "Source Code"}</a>
    </div>
  )
}

export default function Work() {
  return (
    <div className="work-grid">
      {projects.map((p, index) => (
        <div className="work-grid-item" key={`work-grid-item-${index}`}>
          {workPattern(p)}
        </div>
      ))}
    </div>
  );
}
