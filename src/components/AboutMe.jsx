
import background from '../assets/about_assets/background.png';
import marleapicture from '../assets/about_assets/marlea_about.jpeg';
import gomoji from '../assets/about_assets/golang.png';

import { Link } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";


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
          <Link className="hero_top_link" to="/project">Projects</Link>
          <a className="hero_top_aboutme">About Me</a>
        </div>
      </div>

      <div className = "about_content">
        <div className="about_left_content">
            <h1>
              <Typewriter
                  words={["A Little Bit About Me"]}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
              />
            </h1>
              <p>
                Hello! I'm Marlea, a senior at Swarthmore College studying CS and Chinese. I have always loved building things and solving problems, 
                so computer science/software engineering has become one of my greatest passions! 
                Outside of tech, I’m a big fan of running (I ran Wharf to Wharf in Santa Cruz this summer!), playing the piano, and learning languages.
              </p>

              <p>
                For the past three years, I have worked as a TA for the CS department, focusing on systems classes (one of my favorite
                gigs I've had in my college career!). I've really found a passion in creating a community where students feel supported and don't feel
                ashamed to ask "stupid" questions.
              </p>

              <p>
                This past summer, I was in San Jose interning at Nutanix on the devolper productivity team, where I mostly worked in Golang
                
                  <img
                  src={gomoji}
                  alt="emoji"
                  style={{ width: "2em", height: "2em", marginLeft: "0.3em", verticalAlign: "middle" }}
                />
                
                This experience really cemented my love for backend development and writing organized/scalable code! 
              </p>

              <p>
                Lately, I’ve been super interested in operating systems, machine learning, and compilers!
                I'm always curious to learn more and build things! 
                Feel free to reach out to me at marleamartens1@gmail.com 😊 I love emails!
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
