import React from 'react';
import { Link } from 'react-router-dom';
import proloy from "../../image/PROLOY (1).jpg";

const About = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={proloy} class="max-w-sm rounded-full shadow-2xl" />
                <div>
                    <h3 className='text-2xl text-primary'>Hello I'm</h3>
                    <h1 class="text-5xl text-white font-bold mt-2">Proloy Chacroborty</h1>
                    <h3 className='text-3xl text-primary mt-3'>I am a Web Developer</h3>
                    <p className='text-white mt-5'>I am a creative and passionate Junior-Web developer from Bangladesh. Being a friendly person and eager to learn new technologies, I'm the right person here to develop modern and killer-looking MERN stack websites as recommended. I'm comfortable in English and a quick responder.</p>
                    <Link to="/contact"><button className="btn btn-outline btn-success mt-8">Get In Touch</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;