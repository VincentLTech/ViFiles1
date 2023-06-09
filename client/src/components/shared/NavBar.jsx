import React from 'react';
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link';
import Cookies from 'js-cookie';

const NavBar = () => {
    return (
        <header className='nav-background navbar navbar-expand-md bg-dark navbar-dark'>
            <div className='navBar container-fluid px-5'>
                <Link to={'/'} className='navbar-brand siteLogo'><h1>Vincent Lau</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
                    <ul className='navbar-nav'>
                        {/* <li className='nav-item'><a className='nav-link' href="#">Home</a></li> */}
                        <li className='nav-item'><HashLink smooth to='/#projects' className='nav-link' href="#">Projects</HashLink></li>
                        <li className='nav-item'><HashLink smooth to='/#about' className='nav-link' href="#">About</HashLink></li>
                        <li className='nav-item'><HashLink smooth to='/#contact' className='nav-link' href="#">Contact</HashLink></li>
                        {/* {(Cookies.get('userId'))?  */}
                        <li className='nav-item'><Link to='/github' className='nav-link'>Repositories</Link></li>
                        {/* :null} */}
                        {(Cookies.get('userId')==="6464fb53f98215f3cb5eaf38")? 
                        <li className='nav-item'><Link to='/FormPage' className='nav-link'>Control</Link></li>
                        :
                        null
                        }
                    </ul>

                </div>

            </div>
            
        </header>
        
    );
}

export default NavBar;
