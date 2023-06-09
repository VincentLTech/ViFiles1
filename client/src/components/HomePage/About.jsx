import React from 'react';
const avatar = require('../images/kenesis_anime.png')
const About = () => {
    return (
        <section className='darkSection' id='about'>
            <div className='projectsBox about'>
                <h3 className='siteHeadings'>About Me!</h3>
                <img src={avatar} alt="avatar" />
                <div className='aboutSummary'>
                    <p> Hello! I love to build/design things that lives on the internet. I have always wonder how imagination and designs and even entire worlds exist in just a flat screen on a wall. I always love interacting with the artifical world that resides on the internet. Through it, I made friends and connections with the people I care about. I want to see what I can do to help the world for how much it has helped me. So I studied and earned my Computer Science Degree in Brooklyn College and now I have ventured through the life changing experience in a bootcamp called Coding Dojo.
                        </p>
                    <p>When I am not coding, I enjoy serving my Church community and help build Esports 
                        Club that me and my friends started in Brooklyn College.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
