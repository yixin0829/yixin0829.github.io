import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { FcFilm, FcFilmReel } from 'react-icons/fc';
import pdf from './assets/resume.pdf'
import Emoji from './components/emoji'
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-201826128-1";
ReactGA.initialize(TRACKING_ID);

const iconClick = (event) => {
  event.preventDefault();
  ReactGA.event({
   category: 'Icon',
   action: 'TopSocialMediaIconClick',
 });
};

const linkClick = (event) => {
  event.preventDefault();
  ReactGA.event({
   category: 'Link',
   action: 'LinkClick',
 });
};

function App() {
  return (
    <div className="App">
      <h1>YIXIN TIAN</h1>
      <div className="icon-container">
        <SocialIcon className="icon-item" url="https://www.linkedin.com/in/yixintian/" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
        <SocialIcon className="icon-item" url="https://github.com/yixin0829" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
        <SocialIcon className="icon-item" url="https://open.spotify.com/user/uyavk6iz1mjxx3861u59zqwc0?si=9e87988e3e1449c0" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
        <SocialIcon className="icon-item" url="https://www.instagram.com/yix.tian/?hl=en" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
        <SocialIcon className="icon-item" url="https://www.facebook.com/yixin.tian0829" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
      </div>

      <p>Hello!</p>
      <p>My name is Yixin /ee'shin/ Tian <span className="chinese-name">(田毅鑫)</span>. I play with data and create insights.</p>
      <p>Right now, I'm working as a Data Analyst Intern
        at <a href="https://www.kijiji.ca/kijijicentral/general/about-us/?utm_source=Kijiji&utm_medium=Footer" target="_blank" rel="noreferrer">Kijiji</a>, an online classifieds
        site. I dedicate my time in creating, learning things with a interest in people.</p>
      <p>I've beening studying <a href="https://www.ece.utoronto.ca/" target="_blank" rel="noreferrer">Electrical and Computer Engineering</a> at University of
        Toronto since 2018 and plan to complete my bachelor's degree in
        2023 with a minor in artificial intelligence and engineering business.</p>
      <p>Some of my long-term hobbies include <a href="https://500px.com/p/fredtian0829?view=photos" target="_blank" rel="noreferrer">photography</a>
        , <a href="https://www.notion.so/fa102b35de4a45828c51b5e8f79eb8ac?v=d3792f0ac9204f7cbf873c97c5446937" target="_blank" rel="noreferrer">films</a>, and travelling.
        Currently I'm interested in graph machine learning, web dev, <a href="https://www.strava.com/athletes/85739809" target="_blank" rel="noreferrer">running</a>, wine tasting, and rock climbing.</p>
      <p>Reach out to me on LinkedIn and I'll be more than happy to chat with you and get to know each other.</p>
      <p>Later.</p>

      <footer className="footer"><Emoji symbol="🔨"/> by Yixin</footer>
    </div>
  );
};

export default App;
