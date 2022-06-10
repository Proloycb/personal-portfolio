import React from 'react';
import gym from '../../image/gym.png';
import gym2 from '../../image/gym2.png';
import gym3 from '../../image/gym3.png';

const ProjectsDetail2 = () => {
    return (
        <div className="card card-compact lg:max-w-4xl bg-slate-900 text-white shadow-xl mx-auto">
            <figure>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={gym} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={gym2} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={gym3} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Gym Equipment Warehouse</h2>
                <p>This site is gym equipment warehouse management systems. We take all the responsibilities of our equipment and take order from this site.</p>
                <div>Technology Used:
                    <ul className='list-disc pl-6'>
                        <li>I have used react to develop the UI of this site</li>
                        <li>I used react bootstrap for responsiveness and faster design.</li>
                        <li>I placed all the data in MongoDB and load from there.</li>
                        <li>Used Private Route, Google Sign In and Email Sign In, Sign Up for Authentication.</li>
                        <li>I've created my own backend as well as some API's to connect client side to the database.</li>
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

export default ProjectsDetail2;