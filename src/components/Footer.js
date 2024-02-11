import React from 'react';
import githubLogo from '../icons/GitHub-Mark-32px.png';
import linkedinLogo from '../icons/linkedin.png';
import twitterLogo from '../icons/twitter.png';
import "../css/fontawesome.all.min.css";
import "../css/style.css";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="borderer">
      <div className="copyright-div">
        <div className="footer-b">
          <a href="https://github.com/mirkan1" target="_blank" rel="noopener noreferrer"><img src={githubLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;github</a>
          <a href="https://twitter.com/mirkanOFmirkan" target="_blank" rel="noopener noreferrer"><img src={twitterLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;twitter</a>
          <a className="linkedin" href="https://linkedin.com/in/raqux/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} height="32" width="32" alt="media-link"></img>&nbsp;&nbsp;linkedin</a>
        </div>
      </div>
    </div>
  )
}
