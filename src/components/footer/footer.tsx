import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="github-link"
        href="https://github.com/kira-zaytseva"
        target="_blank"
        rel="noreferrer"
      >
        kira-zaytseva
      </a>
      <a
        className="footer__school-link"
        href="https://rs.school/js/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="footer__school-img"></p>
      </a>
      <span className="footer__year">2023</span>
    </footer>
  );
};

export default Footer;
