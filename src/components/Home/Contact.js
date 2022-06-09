import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='px-10 py-14 '>
          <div className='text-center pb-14 text-white'>
            <p className='text-xl font-bold text-primary'>
              Contact Me
            </p>
            <h1 className='text-3xl'>Get In Touch</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-5'>
              <input
                type='text'
                placeholder='Your Name'
                className='input w-full max-w-md'
              />
            <input
              type='text'
              placeholder='Email Address'
              className='input w-full max-w-md'
            />
            <textarea
              className='textarea w-full max-w-md'
              placeholder='Your message'
              rows={6}
            ></textarea>
            <button className="btn btn-secondary">Submit</button>
          </div>
        </div>
    );
};

export default Contact;