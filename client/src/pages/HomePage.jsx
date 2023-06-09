import React from 'react';
import NavBar from '../components/shared/NavBar';
import Hero from '../components/HomePage/Hero';
import Projects from '../components/HomePage/Projects';
import Freelance from '../components/HomePage/Freelance';
import Tools from '../components/HomePage/Tools';
import About from '../components/HomePage/About';
import Contact from '../components/shared/Contact';
import Footer from '../components/shared/Footer';

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <Tools/>
            <Projects/>
            <Freelance/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default HomePage;
