
import background from '../assets/project_assets/project-bg.png';
import marleapicture from '../assets/about_assets/marlea_about.jpeg';
import gol from '../assets/project_assets/gol_2.gif';
import notes from '../assets/project_assets/harmony_2.gif';
import off from '../assets/project_assets/off-beets.png';
import pii from '../assets/project_assets/pii-patrol.jpg';
import open from '../assets/project_assets/open.png';
import otw from '../assets/project_assets/otw.png';
import lingua from '../assets/project_assets/lingua-cafe.jpg';
import skin from '../assets/project_assets/skin_lesions.jpg';
import welcome_blog from '../assets/project_assets/welcome.GIF'; 
 
import { Link } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";


function Projects() {
  return (
    <section
      className="project"
      id="project"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero_top_buttons">
        <div className="hero_top_left">
          <Link className="hero_top_title" to="/">Marlea Martens</Link>
        </div>
        <div className="hero_top_right">
          <Link className="hero_top_link" to="/#work">Work History</Link>
          <a className="hero_top_link">Projects</a>
          <Link className="hero_top_aboutme" to="/about-me"> About Me  </Link>
        </div>
      </div>

      <div className = "project_content">
        <h1>
          <Typewriter
              words={["Projects"]}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
          />
        </h1>
    
        <a className = "project_box">
            <div className="project_sticker">🏆 Hackathon Winner</div>
            <div className = "project_box_image_section">
                <img src={pii} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
            <a href="https://www.credly.com/badges/6d8a780f-fb22-4028-a033-cd9cae41e20f/linked_in_profile" target="_blank" rel="noopener noreferrer">
                <h1>PII-Patrol</h1>
            </a>
                <h3>Python, React, Microsoft Presidio NLP, SQLite</h3>
                <p>
                    An RBAC enabled privacy middleware layer that sits between AI systems and underlying databases. It ensures secure data handling by detecting and filtering sensitive information before it reaches LLMS, protecting
                    personal information from unintended exposure to generative models. Demonstrated overall 85% accuracy in classification, with SSN PII formats achieving 100% rate of masking.
                </p>
            </div>
        </a>

{/********************************************************************************************** */}
        <a className = "project_box">
            <div className = "project_box_image_section">
                <img src={welcome_blog} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
            <a href="https://github.com/MarleaM/personal-blog" target="_blank" rel="noopener noreferrer">
                <h1>Personal Blog (Digital Garden) </h1>
            </a>
                <h3>React, Node.js, TypeScript, postgreSQL, Docker</h3>
                <p>
                    A blogging platform built to handle rich-media content. Implemented a type-safe blog API using Fastify 
                    and Prisma ORM to manage blog schemas, and a data pipeline to
                    process & upload high-resolution images to (external API) Cloudinary to avoid inserting BLOBs into the postgreSQL database.
                     Additionally, 
                    I containerized the entire stack using multi-stage Docker builds.
                </p>
            </div>
        </a>
{/********************************************************************************************** */}
        <a className = "project_box">
            <div className = "project_box_image_section">
                <img src={skin} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
            <a href="https://github.com/MarleaM/DeepLearningForSkinLesions" target="_blank" rel="noopener noreferrer">
                <h1>Deep Learning for Skin Lesions</h1>
            </a>
                <h3>Python, [PyTorch]</h3>
                <p>
                    A deep learning pipeline to classify dermatoscopic images from the HAM10000 dataset. 
                    Implemented a data pipeline
                    to efficiently store and process over 10,000 training images, and an EfficientNet-B5 
                    CNN architecture using PyTorch, achieving a peak macro F1-score of 0.766 and an overall accuracy of 87.45%. Additionally, we conducted
                    a comparative analysis against a baseline Logistic Regression model, demonstrating that the CNN provided a 42% increase in accuracy 
                    for detecting cancers like melanoma.
                </p>
              <a href="https://drive.google.com/file/d/1JRNOe4htjx-Hl_NrYz_HGWBiztT73X2a/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <p>Research Paper</p>
              </a>
            </div>
        </a>

        <a className = "project_box">
            <div className = "project_box_image_section">
                <img src={off} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
            <a href="https://github.com/MarleaM/OffBeets" target="_blank" rel="noopener noreferrer">
                <h1>Off-Beets</h1>
            </a>
                <h3>React, Python</h3>
                <p>
                    OffBeets is a web application that takes in your favorite song as input and uses a machine learning algorithm
                     (trained off of data from Spotify's API) to anti-recommend 4 songs you'll hate and 4 songs you'll love. 
                     An open source project with four contributors.
                </p>
            </div>
        </a>

        <a className = "project_box">
            <div className = "project_box_image_section">
                <img src={gol} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
              <a href="https://github.com/MarleaM/GameOfLifeSimulator" target="_blank" rel="noopener noreferrer">
                  <h1>Game Of Life Simulator</h1>
              </a>
                <h3>C</h3>
                <p>
                    A terminal-based simulator for Conway's Game of Life, showcasing the capabilities of cellular automata through efficient, 
                    life-like pattern generation. It supports input file integration for flexible initial states and uses multithreading for 
                    faster computation. Optimized for performance and memory efficiency.
                </p>
            </div>
        </a>

        <a className = "project_box">
            <div className = "project_box_image_section">
                <img src={notes} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
              <a href="https://projectboard.world/isef2021/project/soft026---coding-for-music-education" target="_blank" rel="noopener noreferrer">
                  <h1>Note Drills</h1>
              </a>
                <h3>Swift</h3>
                <p>
                  My first ever CS project! Note Drills is a mobile app developed to enhance learning and practice of music sight-reading,
                   designed to provide a comprehensive and interactive learning experience for child musicians. It increased middle-school children's 
                   music literacy from 16.35% to 92.8% in a week-long study. Additionally, it was recognized at the International Science and Engineering Fair 
                  and receied the North Carolina State University Special Award for outstanding contribution to technology and education.
                </p>
            </div>
        </a>

        <h1> Open Source Contributions </h1>

        <a className = "project_box">
            <div className = "project_box_image_section">
                <img src={open} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
              <a href="https://github.com/WordPress/openverse" target="_blank" rel="noopener noreferrer">
                  <h1>Openverse</h1>
              </a>
                <h3>Python</h3>
                <p>
                  Openverse is a powerful search engine for GPL-compatible images, audio, and more. 
                  It is a tool that allows openly licensed and public domain works to be discovered and used by everyone, and 
                  searches across more than 800 million images and audio tracks from open APIs and the Common Crawl dataset. I contributed
                  python HTTP code error checking to this project. 
                </p>
            </div>
        </a>

        <a className = "project_box"> 
            <div className = "project_box_image_section">
                <img src={otw} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
              <a href="https://github.com/otwcode/otwarchive" target="_blank" rel="noopener noreferrer">
                  <h1>Organization for Transformative Works</h1>
              </a>
                <h3>CSS, HTML</h3>
                <p>
                  The OTW-Archive software is an open-source web application intended for hosting archives 
                  of fanworks, including fanfic, fanart, and fan vids.
                  Its development is sponsored and managed by the Organization 
                  for Transformative Works, a nonprofit organization by and for fans. I contributed HTML and CSS to this project.
                </p>
            </div>
        </a>

        <a className = "project_box">
            <div className = "project_box_image_section">
                <img src={lingua} alt="Project preview" className="project_image" />
            </div>
            <div className = "project_box_text_section">
              <a href="https://github.com/simjanos-dev/LinguaCafe" target="_blank" rel="noopener noreferrer">
                  <h1>Lingua Cafe</h1>
              </a>
                <h3>CSS, HTML</h3>
                <p>
                  Lingua Cafe is a free self-hosted software that helps language learners acquire vocabulary by reading. It provides a set of tools to read, 
                  look up unknown words and review them later as effortlessly as possible. I contributed CSS and styling to this project.
                </p>
            </div>
        </a>

      </div>

    </section>
  );
}

export default Projects;
