import React from "react";
import Heading from "../Layouts/ Heading/Heading";

import email from "../../assets/icons/mail";
import fb from "../../assets/icons/fb";
import insta from "../../assets/icons/insta";
import linkedin from "../../assets/icons/linkedin";
import github from "../../assets/icons/github";
import "./Contact.scss";

const Contact = () => {
    return (
        <section className="contact section-pad" id="contact">
            <Heading title="Contact" />
            <div className=" contact-whole">
                {/* contact details */}
                <div className="flex flex-column contact-details">
                    <h2 className="semi-bold l wc">Ankit Kumar Gupta</h2>
                    <h3 className="m dgc medium">
                        Amber Hostel, IIT(ISM), Dhanbad
                    </h3>
                    <h3 className="m dgc medium">Dhanbad, Jharkhand</h3>
                    <h3 className="m dgc medium">826004</h3>

                    <div className="email-total-area">
                        <div className="flex flex-row email-area align-items">
                            <div className="c-icon">{email}</div>
                            <h3 className="m dgc medium">
                                ankit.19je0147@ece.iitism.ac.in
                            </h3>
                        </div>
                        <div className="flex flex-row email-area">
                            <div className="c-icon">{email}</div>
                            <h3 className="m dgc medium">
                                8083ankit@gmail.com
                            </h3>
                        </div>
                    </div>
                </div>
                {/* bar */}
                <div className="contact-bar" />
                {/* contact-links */}
                <div className="flex flex-row align-items contact-links">
                    <a
                        href="https://www.linkedin.com/in/ankit-kumar-gupta-9665b3198/"
                        target="_blank"
                    >
                        <div className="c-icon">{linkedin}</div>
                    </a>
                    <a href="https://github.com/lusifer2644A" target="_blank">
                        <div className="c-icon">{github}</div>
                    </a>
                    <a
                        href="https://www.instagram.com/its_lusifer_/"
                        target="_blank"
                    >
                        <div className="c-icon">{insta}</div>
                    </a>
                    <a
                        href="https://www.facebook.com/lusifer02"
                        target="_blank"
                    >
                        <div className="c-icon">{fb}</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
