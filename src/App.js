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
      <h1><span className="em">Y</span>IXIN <span className="em">T</span>IAN</h1>
      <div class="divider div-transparent"></div>
      <div className="icon-container">
        <SocialIcon className="icon-item" url="https://www.linkedin.com/in/yixintian/" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
        <SocialIcon className="icon-item" url="https://github.com/yixin0829" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
        <SocialIcon className="icon-item" url="https://open.spotify.com/user/uyavk6iz1mjxx3861u59zqwc0?si=9e87988e3e1449c0" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
        <SocialIcon className="icon-item" url="https://www.instagram.com/yix.tian/?hl=en" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
        <SocialIcon className="icon-item" url="https://www.facebook.com/yixin.tian0829" style={{ height: 25, width: 25 }} target="_blank" rel="noreferrer"/>
      </div>

      <p>Hello!</p>
      <p>My name is Yixin /ee'shin/ Tian <span className="chinese-font">(田毅鑫)</span>. I play with data and <i>create</i> insights.</p>
      <p>I dedicate my time to learning, creating things to inspire others and be inspired at the same time. Try to stay curious and see the world from new perspective everyday.</p>
      <p>I've been studying <a href="https://www.ece.utoronto.ca/" target="_blank" rel="noreferrer">Electrical and Computer Engineering</a> at University of
        Toronto since 2018 and plan to complete my bachelor's degree in
        2023 with minors in artificial intelligence.</p>
      <p>Some of my long-term hobbies include <a href="https://500px.com/p/fredtian0829?view=photos" target="_blank" rel="noreferrer">photography</a>
        , <a href="https://canyon-beast-0ac.notion.site/5658d6ef4a72419f983a55cc8b140cbc?v=1c6ee19d82f347318f748caf8375a893" target="_blank" rel="noreferrer">films</a>, and travelling.
        Currently I'm interested in graph machine learning, web dev, <a href="https://www.strava.com/athletes/85739809" target="_blank" rel="noreferrer">running</a>, backpacking, and rock climbing.</p>
      <p>Reach out to me on LinkedIn and I'll be more than happy to learn from you and share ideas.</p>
      <p>Later.</p>

      <footer className="footer"><Emoji symbol="🔨"/> by Yixin</footer>
    </div>
  );
};

export default App;
