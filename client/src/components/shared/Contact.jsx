import React from 'react';
const emailIcon = require('../images/email.png');
const linkedIcon = require('../images/linkedin.png');
const instagramIcon = require('../images/instagram.png');
const githubIcon = require('../images/github.png');
const leetcodeIcon = require('../images/leetcode.png');

const Contact = () => {
    return (
        <section className='darkSection contact' id='contact'>
            <div className='projectsBox contactInfoBox'>
                <h3 className='siteHeadings'>Contact</h3>
                {/* <h6>Let's connect</h6> */}
                <p>I am currently looking for new opportunities, my inbox is always open. If you want to get in touch, talk to me about a project collaboration, or just be friends find me here.</p>
                <p>I really enjoy company.</p>
                <div className='socialsContainer'>
                    
                    <img src={emailIcon} onClick={() => window.open('vincent.lau.cs@gmail.com')} alt="email icon" />
                    <img src={linkedIcon} onClick={() => window.open('https://www.linkedin.com/in/vincent-lau-cs/')} alt="linkedin icon" />
                    <img src={instagramIcon} onClick={() => window.open('https://www.instagram.com/vincent.lau.984991/')} alt="instagram icon" />
                    <img src={githubIcon} onClick={() => window.open('https://github.com/GalacticKnight')} alt="github icon " />
                    <img src={leetcodeIcon} onClick={() => window.open('https://leetcode.com/electricplasma411/')} alt="leetcode icon " />
                </div>

            </div>
            
        </section>
    );
}

export default Contact;
