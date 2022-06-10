import React from 'react';
import Banner from './Banner';
import About from './About/About'
import Contact from './Contact';
import Projects from './Projects';


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;