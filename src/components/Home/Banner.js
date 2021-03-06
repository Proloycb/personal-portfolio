import React from 'react';
import proloy from "../../image/PROLOY (1).jpg";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-over"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={proloy} className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-full shadow-2xl" alt='' />
                    <div>
                        <h3 className='text-2xl text-primary'>Hello I'm</h3>
                        <h1 className="text-5xl text-white font-bold mt-2">Proloy Chacroborty</h1>
                        <h3 className='text-3xl text-primary mt-3'>I am a Web Developer</h3>
                        <a href="https://drive.google.com/file/d/1V8lEo8N9VutvhXzPvRl-9IzTXXGcFms0/view?usp=sharing" target="_blank"><button className="btn btn-secondary mr-3 mt-8">Download Resume</button></a>
                        <a href="#contact"><button className="btn btn-outline btn-success mt-8">Get In Touch</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;