import React from "react";
import background from '../assets/work-bg.png';
import background1 from '../assets/work-bg-stars.png';
import { FaGithub } from 'react-icons/fa';
import placeholder  from '../assets/pfp.jpg';

const Work = () => {
    return (
        <section className = "work_section" id = "work"   style={{backgroundImage: `url(${background})`}}>
            <div className = "work"> 
                <h1 className = "work_title">Work History</h1>
                <div className = "work_content">
                    <a href = "a" className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={placeholder} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Software Engineering Intern</h1>
                            <h2 className = "work_box_company">Nutanix </h2>
                            <h3 className = "work_box_date">May 2025 - Aug 2025 </h3>
                            <p className = "work_box_p">Provides assistance in Intro to Computer Systems, 
                                concentrating 
                                on C programming and parallel & distributed computing, as well as Intro to 
                                Computer Science, focusing on Python and fundamental programming skills.</p>
                        </div>

                    </a>
                    <a href = "a" className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={placeholder} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Software Engineering Intern</h1>
                            <p className = "work_box_p">Check out my public projects</p>
                        </div>

                    </a>
                    <a href = "a" className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={placeholder} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Software Engineering Intern</h1>
                            <p className = "work_box_p">Check out my public projects</p>
                        </div>

                    </a>
                </div>
            </div>
        </section>
    )
}

export default Work; 