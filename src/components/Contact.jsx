
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const  {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID,REACT_APP_PUBLIC_KEY} = process.env

const Contact = () => {

    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
    
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    
    .then((result) => {
        toast.success('Message Sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setIsSending(false);
            e.target.reset();
        }, (error) => {
            
            toast.error('Unable to send the mesaage', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log(error);
            setIsSending(false);
            
            e.target.reset();
        });
    };



    return (
        <section id="contact" className="contact" >
            <div className="container">
                <div className="contact-container">
                    <div className="contact-heading">
                        <div><h3 className="heading_1">Get in touch 👇</h3></div>
                        <div><h2>Looking forward to start a project with me? 📧</h2></div>
                    </div>

                    <div className="contact-content">
                        <div className="contact-icons">
                            <div className="contact-icon-box">
                                <span><i className="fa-solid fa-map-location-dot"></i></span>
                                <div className="contact-info"><h3>Location</h3><p>Varanasi, India</p></div>
                            </div>

                            <div className="contact-icon-box"><span><i className="fa-solid fa-envelope-open-text"></i></span>
                                <div className="contact-info"><h3>Mail</h3><a href="mailto:rajatprahlad21@gmail.com">rajatprahlad21@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact_form_container">
                            <div className="form-logo">
                                <h4>Contact Me </h4>
                            </div>

                            <form className="contact-form" ref={form} onSubmit={sendEmail} >
                                <div className="inputBox">
                                    <input className="input-area" type="text" name="user_name" required="required" />
                                    <span>Name</span>
                                    <i></i>
                                </div>

                                <div className="inputBox">
                                    <input className="input-area" type="text" name="user_email" required="required" />
                                    <span>Email</span>
                                    <i></i>

                                </div>

                                <div className="inputBox">
                                    <textarea className="input-area" type="text"  name="message" required="required" rows="3" />
                                    <span>Message</span>
                                    <i></i>

                                </div>
                                <div className="form-button">
                                    <button className={isSending && 'sending' } id="send-button" type="submit" disabled={isSending}>Submit<span><i className="fa-solid fa-paper-plane"></i></span></button>
                                </div>
                            </form>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;