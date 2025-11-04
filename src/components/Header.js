import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a
          href="mailto:nikhilkthota@gmail.com"
          className="header-link email-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <span className="full-text">NIKHILKTHOTA@GMAIL.COM</span>
          <span className="short-text">EMAIL</span>
        </a>

        <a
          href="https://github.com/nikhil-kthota"
          className="header-link github-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span className="full-text">GITHUB.COM/NIKHIL-KTHOTA</span>
          <span className="short-text">GITHUB</span>
        </a>

        <a
          href="https://www.linkedin.com/in/nikhilkthota/"
          className="header-link linkedin-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span className="full-text">LINKEDIN.COM/IN/NIKHILKTHOTA</span>
          <span className="short-text">LINKEDIN</span>
        </a>
      </div>
    </header>
  );
};

export default Header;