import React from 'react';
import trainer from '../../image/trainer.png';
import trainer2 from '../../image/trainer2.png';
import trainer3 from '../../image/trainer3.png';

const ProjectsDetail3 = () => {
    return (
        <div className="card card-compact lg:max-w-4xl bg-slate-900 text-white shadow-xl mx-auto">
            <figure>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={trainer} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={trainer2} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={trainer3} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Leo Stone || Personal Gym Trainer</h2>
                <p>This is a niche site for an independence service provider.User's can signup/login here and book gym train from the site. Users booking checkout form open.</p>
                <div>Technology Used:
                    <ul className='list-disc pl-6'>
                        <li>I have used react to develop the UI of this site</li>
                        <li>I used react bootstrap for responsiveness and faster design.</li>
                        <li>I created a fake data JSON file, placed it locally and GitHub loaded data from it to show in the UI</li>
                        <li>Used Private Route, Google Sign In and Email Sign In, Sign Up for Authentication.</li>
                        <li>I've implement a checkout form created with react-hook-form</li>
                    </ul>
                </div>

                <div className="card-actions pb-2">
                    <a href="https://manufacturer-website-a012f.web.app/" target="_blank"><button className="btn btn-outline btn-secondary">Live Demo</button></a>
                    <a href="https://github.com/Proloycb/manufacturer-website-client-side" target="_blank"><button className="btn btn-outline btn-secondary">Client Code</button></a>
                    <a href="https://github.com/Proloycb/manufacturer-website-server-side" target="_blank"><button className="btn btn-outline btn-secondary">Server Code</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetail3;