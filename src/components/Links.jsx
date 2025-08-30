import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import background3 from '../assets/work-bg.png';

const Links = () => {

    return (
        <section className = "links_section" id = "links">
            <div className = "links"> 
                <h1 className = "links_title">Some Helpful Links</h1>
                <div className = "links_content">
                    <a href = "a" className = "links_box"  style={{ backgroundImage: `url(${background3})`, backgroundPosition: '25% 25%'}}> 
                        <h1 className = "links_box_text">GitHub</h1>
                        <FaGithub className = "icon"/>
                        <p className = "links_box_p">Check out my public projects</p>

                    </a>
                    <a href = "a"className = "links_box"  style = {{backgroundImage: `url(${background3})`, backgroundPosition: '0% 50%',}}>
                        <h1 className = "links_box_text">LinkedIn</h1>
                        <FaLinkedin className = "icon"/>
                        <p className = "links_box_p">Connect with me</p>

                    </a>
                    <a href = "a" className = "links_box"  style = {{backgroundImage: `url(${background3})`, backgroundPosition: '0% 75%',}}>
                        <h1 className = "links_box_text">Resume</h1>
                        <IoDocumentAttach className = "icon"/>
                        <p className = "links_box_p">Download or view my resume</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Links;