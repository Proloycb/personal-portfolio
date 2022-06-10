import React from 'react';
import './About.css';
import proloy from "../../../image/PROLOY (1).jpg";

const About = () => {
    return (
        <div id='about'>
            <h2 className='text-3xl text-white font-bold text-center mt-5 mb-0'>About <span className='text-primary'>me</span></h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={proloy} className="xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-full" alt='' />
                    <div className='pl-4'>
                        <h3 className="text-3xl text-white font-bold mt-2"><span className='text-primary'>Hello</span>, this is Proloy Chacroborty</h3>
                        <p className='text-white mt-5'>I am a creative and passionate Junior-Web developer from Bangladesh. Being a friendly person and eager to learn new technologies, I'm the right person here to develop modern and killer-looking MERN stack websites as recommended. I'm comfortable in English and a quick responder.</p>
                        <div>
                            <h4 className='text-2xl text-white mb-3'><span className='text-primary'>My Skills</span> Set</h4>
                            <div className='technology'>
                                <span>Javascript</span>
                                <span>ES6</span>
                                <span>ReactJs</span>
                                <span>Bootstrap</span>
                                <span>TailwindCss</span>
                                <span>Firebase</span>
                                <span>NodeJs</span>
                                <span>ExpressJs</span>
                                <span>MongoDb</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;