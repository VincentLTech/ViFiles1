import React from 'react';
import NavBar from '../components/shared/NavBar';
import Control from '../components/FormPage/Control';
import Contact from '../components/shared/Contact';
import Footer from '../components/shared/Footer';

const HomePage = () => {
    return (
        <>
            <NavBar/>
            <Control/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default HomePage;