import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <span>
            © {year} CyberSentinel • Built for cybersecurity monitoring and threat
            awareness
          </span>
          <span className="footer__links">
            <a href="https://www.dsci.in/" target="_blank" rel="noreferrer">
              Source
            </a>
            <span className="footer__divider">•</span>
            <a href="https://github.com/hitesh788/CyberSentinel4/issues" target="_blank" rel="noreferrer">
              Report Issue
            </a>
          </span>
        </div>

        <span className="footer__note">
          Note: Real-time data via API — results may not be exact.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
