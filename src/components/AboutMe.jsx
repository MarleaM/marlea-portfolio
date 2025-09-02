
import background from '../assets/about-me-waves.png';
import marleapicture from '../assets/about_assets/marlea_about.jpeg';

import { Link } from 'react-router-dom';


function AboutMe() {
  return (
    <section
      className="about"
      id="about"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero_top_buttons">
        <div className="hero_top_left">
          <Link className="hero_top_title" to="/">Marlea Martens</Link>
        </div>
        <div className="hero_top_right">
          <Link className="hero_top_link" to="/#work">Work History</Link>
          <Link className="hero_top_link" to="/#work">Extracurriculars</Link>
          <Link className="hero_top_link" to="/#work">Projects</Link>
          <a className="hero_top_aboutme">About Me</a>
        </div>
      </div>

      <div className = "about_content">
        <div className="about_left_content">
            <h1>A Little Bit About Me</h1>
              <p>
                Hey there! I'm Marlea Martens, a senior at Swarthmore College studying Computer Science. I’m really into building software and love anything that involves systems, cloud infrastructure, or just solving cool problems with code. Outside of tech, I’m a big fan of running (I ran Wharf to Wharf in Santa Cruz this summer!), music, and games.
              </p>

              <p>
                At Swarthmore, I’m part of the leadership teams for the Google Developer Student Club and Gender Minorities in Math and Stats. I love being part of communities where people feel supported and excited to learn.
              </p>

              <p>
                This past summer, I was in San Jose (CA was beautiful!) interning at Nutanix on the devolper productivity team, where I mostly worked in Go. This experience really cemented my love for backend development! 
              </p>

              <p>
                Lately, I’ve been super interested in cloud computing, virtual machines, and anything that makes dev tools more powerful and secure. I'm always curious to learn more and build things that are both useful and fun! Feel free to reach out 😊 I love emails!
              </p>

          </div>
          <div className = "about_right_content">
            <img src={marleapicture} />
          </div>
      </div>

    </section>
  );
}

export default AboutMe;
