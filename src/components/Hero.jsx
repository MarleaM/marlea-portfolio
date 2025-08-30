import React from 'react';
import background from '../assets/home-bg.jpg';
import background2 from '../assets/background-2.jpg';
import pfp from '../assets/pfp.jpg';
import pfp2 from '../assets/pfp-2.jpg';
import background3 from '../assets/work-bg.png';

const Hero = () => {
    return(
        <section className = "hero" style = {{backgroundImage: `url(${background})`}}>
            <div className = "hero_content">
                <div className="hero_left_content">
                    <img src={pfp2} alt="Profile" />
                </div>
                <div className = "hero_right_content">
                    <h1>Hello world, I am Marlea</h1>
                    <p>Junior Computer Science major at Swarthmore College, interested in all things database development and software engineering.</p>
                    <div className = "glass-effect"> 
                        <a href = "#links"> Discover More </a>     
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Hero; 