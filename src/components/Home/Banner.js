import React from 'react';
import bg from "../../image/download.png";
import proloy from "../../image/PROLOY (1).jpg";

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero min-h-screen">
                <div className="hero-over"></div>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={proloy} class="max-w-sm rounded-full shadow-2xl" />
                    <div>
                        <h3 className='text-2xl text-primary'>Hello I'm</h3>
                        <h1 class="text-5xl text-white font-bold">Proloy Chacroborty</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;