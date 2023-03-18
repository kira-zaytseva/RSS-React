import React from 'react';
import './aboutUs.scss';

export default function AboutUs() {
  return (
    <main className="main">
      <section className="about-info">
        <img src="https://i.imgur.com/BvB4bUy.jpg" className="about-photo" alt="Kira Zaytseva" />
        <h1 className="about-name">Hi! I am Kira Zaytseva</h1>
        <p className="about-description">You are on the online art gallery. Enjoy!</p>
        <div className="about-contacts">
          <h2 className="about-contacts-title">Contact information</h2>
          <ul className="about-contacts-list">
            <li>🤙 +375 29 138 90 24</li>
            <li>📧 kira.zaytseva97@gmail.com</li>
            <li>
              <a href="https://www.linkedin.com/in/kira-zaytseva/" target="_blank" rel="noreferrer">
                💬 Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/kira-zaytseva" target="_blank" rel="noreferrer">
                💻 Github
              </a>
            </li>
            <li>🗣 Discord: Kira_zayts#7305</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
