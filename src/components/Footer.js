import React from 'react';
import githubLogo from '../icons/github.png';
import linkedinLogo from '../icons/linkedin.png';
// import facebookLogo from '../icons/facebook.png';
// import twitterLogo from '../icons/twitter.png';
import "../css/fontawesome.all.min.css";
import "../css/style.css";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="borderer">
      <div className="copyright-div">
        <div className="footer-b">
          <a href="https://github.com/mirkan1">
            <img src={githubLogo} height="32" width="32" alt="media-link"></img>
            github
          </a>
          {/* <a href="https://twitter.com/mirkanOFmirkan">
            <img src={twitterLogo} height="32" width="32" alt="media-link"></img>
            twitter
          </a> */}
          <a className="linkedin" href="https://linkedin.com/in/raqux">
            <img src={linkedinLogo} height="32" width="32" alt="media-link"></img>
            linkedin
          </a>
          {/* <a className="facebook" href="https://facebook.com/r.mirkan">
            <img src={facebookLogo} height="32" width="32" alt="media-link"></img>
            facebook
          </a> */}
        </div>
      </div>
    </div>
  )
}
