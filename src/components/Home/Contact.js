import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fn3ezbd', 'template_aod73bs', form.current, 'ewpXs4udmqe-ppobu')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                e.target.reset();
            });
    };
    return (
        <div id='contact' className='px-10 py-14 '>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-primary'>
                    Contact Me
                </p>
                <h1 className='text-3xl'>Get In Touch</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    name="user_name"
                    placeholder='Your Name'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    name="user_email"
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    name="message"
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <input type="submit" className='btn btn-primary' value="Send" />
            </form>
        </div>
    );
};

export default Contact;