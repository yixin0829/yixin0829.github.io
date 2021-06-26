import React from 'react'

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
      <p>Hello! My name is Yixin /ee'shin/ Tian.</p>
      <p>I'm currently a Data Analyst Intern at <a href="https://www.kijiji.ca/kijijicentral/general/about-us/?utm_source=Kijiji&utm_medium=Footer">Kijiji</a>, a classifieds
          site. I dedicate my time in creating, learning things with
          a genuine interest in people.</p>
      <p>I study Electrical and Computer Engineering at University of
      Toronto since 2018 and plan to complete my bachelor's degree in
      2023 with a minor in Artificial Intelligence.</p>
      <p>Some of my long-term hobbies includes photography, films, and hiking.
      Currently I'm interested in graph machine learning, running, wine tasting, and rock climbing.</p>
      <p>Here's my <a href="../public/docs/resume.pdf">resume</a> if you're interested in that kind of stuff.</p>
      <footer class="footer"><Emoji symbol='💡'/> by Yixin</footer>
    </div>
  );
};

export default App;
