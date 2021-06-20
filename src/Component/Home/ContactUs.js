import React from 'react';
import location from '../../Img/location.png';
import call from '../../Img/call.png';
import mail from '../../Img/mail.png';
import fb from '../../Img/facebook.png';
import tw from '../../Img/twitter.png';
import int from '../../Img/instagram.png';
import git from '../../Img/github.png';
import linkedin from '../../Img/linkedin.png';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section>
            <div className="contact-container">
                <div className="contact-info">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src={location} alt="" /></span>
                                <span>2912 Meadowdrook Rode <br /> Kos Angeles, CA <br />9001</span>
                            </li>
                            <li>
                                <span><img src={mail} alt="" /></span>
                                <span>learn@ipon.com</span>
                            </li>
                            <li>
                                <span><img src={call} alt="" /></span>
                                <span>3222-569-22341</span>
                            </li>
                        </ul>
                        <ul className="sci">
                            <li><a href="#"><img src={fb} alt="" /></a></li>
                            <li><a href="#"><img src={tw} alt="" /></a></li>
                            <li><a href="#"><img src={int} alt="" /></a></li>
                            <li><a href="#"><img src={git} alt="" /></a></li>
                            <li><a href="#"><img src={linkedin} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="contactForm">
                    <h2>Send a Message</h2>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>First Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>Last Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>Mobil Number</span>
                        </div>
                        <div className="inputBox w100">
                            <textarea type="text" name="" required />
                            <span>Write your message here...</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;