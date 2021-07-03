import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { FcFilm, FcFilmReel } from 'react-icons/fc';
import pdf from './assets/resume.pdf'

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

function App() {
  return (
    <div className="App">
      <h1>YIXIN TIAN</h1>
      <div class="icon-container">
        <SocialIcon class="icon-item" url="https://www.linkedin.com/in/yixintian/" style={{ height: 25, width: 25 }} target="_blank"/>
        <SocialIcon class="icon-item" url="https://open.spotify.com/user/uyavk6iz1mjxx3861u59zqwc0" style={{ height: 25, width: 25 }} target="_blank"/>
        <SocialIcon class="icon-item" url="https://www.instagram.com/yix.tian/?hl=en" style={{ height: 25, width: 25 }} target="_blank"/>
        <SocialIcon class="icon-item" url="https://github.com/yixin0829" style={{ height: 25, width: 25 }} target="_blank"/>
      </div>

      <p>Hello!</p>
      <p>My name is Yixin /ee'shin/ Tian (田毅鑫). I play with data and discover insights.</p>
      <p>Right now, I'm working as a Data Analyst Intern
        at <a href="https://www.kijiji.ca/kijijicentral/general/about-us/?utm_source=Kijiji&utm_medium=Footer" target="_blank">Kijiji</a>, a classifieds
        site. I dedicate my time in creating, learning things with a interest in people.</p>
      <p>I've beening studying <a href="https://www.ece.utoronto.ca/" target="_blank">Electrical and Computer Engineering</a> at University of
        Toronto since 2018 and plan to complete my bachelor's degree in
        2023 with a minor in artificial intelligence and engineering business.</p>
      <p>Some of my long-term hobbies include <a href="https://500px.com/p/fredtian0829?view=photos">photography</a>
        , <a href="https://www.notion.so/fa102b35de4a45828c51b5e8f79eb8ac?v=d3792f0ac9204f7cbf873c97c5446937" target="_blank">films</a>, and travelling.
        Currently I'm interested in graph machine learning, web dev, running, wine tasting, and rock climbing.</p>
      <p>Reach out to me and I'll be more than happy and grateful to chat with you and get know each other.</p>
      <p>Bye now <Emoji symbol="😉"/></p>

      <footer class="footer"><Emoji symbol="🔨"/> by Yixin</footer>
    </div>
  );
};

export default App;
