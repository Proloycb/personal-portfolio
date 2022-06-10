import React from 'react';
import { Link } from 'react-router-dom';
import com from "../../image/com.png"
import gym from "../../image/gym.png"
import trainer from "../../image/trainer.png"

const Projects = () => {
    return (
        <div id='projects'>
            <h3 className='text-white font-bold text-center'>My Recent Work</h3>
            <h2 className='text-primary text-3xl text-center mb-8'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className="card card-compact lg:max-w-lg bg-slate-900 text-white shadow-xl">
                    <figure><img src={com} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">ComTech Parts manufacturer</h2>
                        <p>This is a niche site for manufacturing qualityFull computer parts.User's can signup/login here and buy necessary goods from the site. I've implemented admin panel too.</p>
                        <div className="card-actions pb-2">
                            <a href="https://manufacturer-website-a012f.web.app/" target="_blank"><button className="btn btn-xs btn-outline btn-secondary">Live Demo</button></a>
                            <a href="https://github.com/Proloycb/manufacturer-website-client-side" target="_blank"><button className="btn btn-xs btn-outline btn-secondary">Client Code</button></a>
                            <a href="https://github.com/Proloycb/manufacturer-website-server-side" target="_blank"><button className="btn btn-xs btn-outline btn-secondary">Server Code</button></a>
                            <Link to="/projectsDetail1"><button className="btn btn-xs btn-outline btn-secondary">Details</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact lg:max-w-lg bg-slate-900 text-white shadow-xl">
                    <figure><img src={gym} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Gym Equipment Warehouse</h2>
                        <p>This site is gym equipment warehouse management systems. We take all the responsibilities of our equipment and take order from this site.</p>
                        <div className="card-actions pb-2">
                            <a href="https://gym-equipment-warehouse-7ae7e.web.app/" target="_blank"><button className="btn btn-xs btn-outline btn-secondary">Live Demo</button></a>
                            <a href="https://github.com/Proloycb/warehouse-management-client-side" target="_blank"><button className="btn btn-xs btn-outline btn-secondary">Client Code</button></a>
                            <a href="https://github.com/Proloycb/warehouse-management-server-side" target="_blank"><button className="btn btn-xs btn-outline btn-secondary">Server Code</button></a>
                            <Link to="/projectsDetail2"><button className="btn btn-xs btn-outline btn-secondary">Details</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact lg:max-w-lg bg-slate-900 text-white shadow-xl">
                    <figure><img src={trainer} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Leo Stone || Personal Gym Trainer</h2>
                        <p>This is a niche site for an independence service provider.User's can signup/login here and book gym train from the site. Users booking checkout form open.</p>
                        <div className="card-actions pb-2">
                            <a href="https://independent-service-prov-c505a.web.app/" target="_blank"><button className="btn btn-xs btn-outline btn-secondary">Live Demo</button></a>
                            <a href="https://github.com/Proloycb/independent-service-provider" target="_blank"><button className="btn btn-xs btn-outline btn-secondary">Code</button></a>
                            <Link to="/projectsDetail3"><button className="btn btn-xs btn-outline btn-secondary">Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;