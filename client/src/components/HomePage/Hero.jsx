import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
const profile = require('../images/profile.jpg')

const Hero = () => {
    return (
        <section className='hero'>
            <div className="heroContainer">
                <div className='heroWords'>
                    <h3 className='text-white'>Full Stack Software Developer</h3>
                    <h3 className='text-white'>UX/UI Designer</h3>
                    <p className='text-white'>I'm a passionate and dedicated web developer, always seeking new challenges and opportunities to expand my knowledge and skills in the field.</p>

                    <HashLink smooth to='/#projects' className='btn btn-info' href="#">Projects</HashLink>
                </div>
                <div className='heroRight'>
                    <figure><img src={profile} alt="profile-img" /></figure>
                </div>


            </div>
            
        </section>
    );
}

export default Hero;
