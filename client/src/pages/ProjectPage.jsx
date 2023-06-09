import React from 'react';
import NavBar from '../components/shared/NavBar';
import Projects from '../components/ProjectPage/Repositories';
import Contact from '../components/shared/Contact';
import Footer from '../components/shared/Footer';

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default HomePage;
