import React from 'react';
import com from '../../image/com.png';
import com2 from '../../image/com 2.png';
import com3 from '../../image/com 3.png';

const ProjectsDetail1 = () => {
    return (
        <div className="card card-compact lg:max-w-4xl bg-slate-900 text-white shadow-xl mx-auto">
            <figure>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={com} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={com2} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={com3} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">ComTech Parts manufacturer</h2>
                <p>This is a niche site for manufacturing qualityFull computer parts.User's can signup/login here and buy necessary goods from the site. I've implemented admin panel too.</p>
                <div>Technology Used:
                    <ul className='list-disc pl-6'>
                        <li>I have used react to develop the UI of this site</li>
                        <li>I used tailwind css and daisyUi for responsiveness and faster design.</li>
                        <li>I placed all the data in MongoDB and load from there.</li>
                        <li>Used Private Route, Google Sign In and Email Sign In, Sign Up for Authentication -I've created my own backend as well as some API's to connect client side to the database</li>
                        <li>Users will see their dashboard and the admin will see the admin dashboard differently.</li>
                    </ul>
                </div>

                <div className="card-actions pb-2">
                    <a href="https://manufacturer-website-a012f.web.app/" target="_blank"><button className="btn  btn-outline btn-secondary">Live Demo</button></a>
                    <a href="https://github.com/Proloycb/manufacturer-website-client-side" target="_blank"><button className="btn btn-outline btn-secondary">Client Code</button></a>
                    <a href="https://github.com/Proloycb/manufacturer-website-server-side" target="_blank"><button className="btn btn-outline btn-secondary">Server Code</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetail1;