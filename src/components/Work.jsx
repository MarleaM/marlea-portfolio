import React from "react";
import background from '../assets/work-bg.png';
import background1 from '../assets/project_assets/project-bg.png';
import background2 from '../assets/work-bg-ombre.png';
import { FaGithub } from 'react-icons/fa';
import placeholder  from '../assets/pfp.jpg';
import nutanix  from '../assets/work_assets/nutanix_logo.png';
import webstaurant from '../assets/work_assets/webstaurantstore-logo.png';
import docurious from '../assets/work_assets/docurious_logo.jpeg';
import ninja from '../assets/work_assets/ninjas_image.jpg';
import research from '../assets/work_assets/research_image.jpg';
import mertz from '../assets/work_assets/mertz_image.jpg';

const Work = () => {
    return (
        <section className = "work_section" id = "work"   style={{backgroundImage: `url(${background})`}}>
            <div className = "work"> 
                <h1 className = "work_title">Work History</h1>
                <div className = "work_content">
                    

                    <a className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={nutanix} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Software Engineering Intern</h1>
                            <h2 className = "work_box_company">Nutanix </h2>
                            <h3 className = "work_box_date">May 2025 - Aug 2025 </h3>
                            <p className = "work_box_p">
                                Built and deployed BlockWatch, a full-stack (Go, React, MongoDB) tool for hardware procurement and
management, streamlining asset tracking and decision-making for engineering VPs. BlockWatch enables $400K in annual cost savings for Nutanix by uncovering resource inefficiencies and bulk purchasing
opportunities. 
                            </p>
                        </div>
                    </a>

                    
                    <a className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={webstaurant} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Database Development Intern</h1>
                            <h2 className = "work_box_company">Webstaurant Store</h2>
                            <h3 className = "work_box_date">May 2024 - Aug 2024 </h3>
                            <p className = "work_box_p">
                                Member of the pioneering team tasked with migrating databases to PostgreSQL, 
                                a departure from the company's usual SQLServer environment. My 
                                contributions included leveraging PostgreSQL to optimize data 
                                management, planning database infrastructure, and addressing 
                                operational needs for PNC Bank.</p>
                        </div>
                    </a>

                    <a className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={docurious} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Software Development Intern</h1>
                            <h2 className = "work_box_company">DoCurious Inc </h2>
                            <h3 className = "work_box_date">June 2023 - Aug 2023 </h3>
                            <p className = "work_box_p">
                                Helped develop the foundational ServerAPI solution for a budding startup. 
                                Assisted with endpoint and service testing, as well as 
                                system enhancement and troubleshooting. Additionally, developed a web app 
                                utilizing the ChatGPT API to create a 
                                natural language summarization tool, which directly 
                                integrated with the DoCurious database.
                                </p>
                        </div>
                    </a>


                </div>
                 <h1 className = "work_title">Campus Work History</h1>
                <div className = "work_content">
                    

                    <a className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={ninja} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Computer Science Teaching Assistant</h1>
                            <h2 className = "work_box_company">Swarthmore College </h2>
                            <h3 className = "work_box_date">Jan 2023 - Present </h3>
                            <p className = "work_box_p">Provides assistance in Intro to Computer Systems, 
                                concentrating 
                                on C programming and parallel & distributed computing, as well as Intro to 
                                Computer Science, focusing on Python and fundamental programming skills.
                            </p>
                            <p className = "work_box_p">Courses: Intro to Computer Science (Python), Data Structures and Algorithms (C++), Intro to Computer Systems (C). </p>
                        </div>
                    </a>

                    
                    <a className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={research} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Differential Privacy Research Assistant</h1>
                            <h2 className = "work_box_company">Swarthmore College</h2>
                            <h3 className = "work_box_date">Aug 2024 - Dec 2024 </h3>
                            <p className = "work_box_p">
                                Collaborated with AT&T and a partner university under Professor Vasanta Chaganti 
                                to design and assess differential privacy algorithms for mobile user trajectory data.</p>
                        </div>
                    </a>

                    <a className = "work_box">
                        <div className = "work_box_image_section">
                            <img src={mertz} alt="Project preview" className="work_image" />
                        </div>
                        <div className = "work_box_text_section">
                            <h1 className = "work_box_text">Resident Assistant</h1>
                            <h2 className = "work_box_company">Swarthmore College </h2>
                            <h3 className = "work_box_date">Aug 2024 - Present </h3>
                            <p className = "work_box_p">
                                Builds community and provides support for Mertz Hall; oversees a campus area of 300+ students.
                                Coordinates events and community building activities.
                                </p>
                        </div>
                    </a>


                </div>
            </div>
        </section>
    )
}

export default Work; 