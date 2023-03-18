import React from 'react';
import './footer.scss';
import rssSchool from './../../assets/img/rs_school_js.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="footer__github-link"
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
        <img src={rssSchool} className="footer__school-img" />
      </a>
      <span className="footer__year">2023</span>
    </footer>
  );
};

export default Footer;
