import background from '../assets/about-me-waves.png';
import pfp2 from '../assets/pfp-2.jpg';

import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className = "about" id = "about"   style={{backgroundImage: `url(${background})`}}>
      <div className = "hero_top_buttons">
          <div className = "hero_top_left">
              <Link className="hero_top_title" to="/">Marlea Martens</Link>
          </div>
          <div className="hero_top_right">
              <a className="hero_top_link" href="#work">Work History</a>
              <a className="hero_top_link" href="#work">Extracurriculars</a>
              <Link className="hero_top_link" to="/">Projects</Link> /* IN PROGRESS */
              <Link className="hero_top_aboutme" to="/"> Go Back  </Link>
          </div>
      </div>
      <div className = "about_content">
        <div className="about_left_content">
            <h1>A Little Bit About Me</h1>
            <p>Hi! My name is Marlea Martens, a senior at Swarthmore College.</p>
          </div>
          <div className = "about_right_content">
            <img src={pfp2} />
          </div>
      </div>
    </section>
  );
}

export default AboutMe;
