import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='projectsSection'>
            <div className='footerBox'>
                <h6>Built By <Link to={'/UserPage'}>Vincent</Link></h6>
            </div>
        </footer>
    );
}

export default Footer;
