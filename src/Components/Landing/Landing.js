import React from "react";
import "./Landing.scss";
import dp from "../../assets/logo.png";
import Button from "../Layouts/Button/Button";
import rightArrow from "../../assets/icons/right-arrow.svg";

const Landing = () => {
    return (
        <section className="landing flex flex-row " id="home">
            <div className="landing-details">
                <h1 className="xl bold">Ankit Kumar Gupta</h1>
                <h2 className="m semi-bold mb-10">
                    Part-time Developer @Goglocal
                </h2>
                <h2 className="m regular mb-20">
                    Ex-SDE Intern @JIO Platforms
                </h2>
                <p className="s regular dgc">
                    I’m a pre-final year student pursuing Bachelors of
                    Technology in Electronics and Communication Engineering at
                    IIT(ISM), Dhanbad.
                </p>
                <p className="s regular dgc">
                    I build Web Applications using MERN stack. I am also a
                    proficient C++ coder in Data Structures and Algorithm.
                </p>
                <Button
                    link="https://docs.google.com/document/d/1m-L6VnSjR8RiiQ36_C83l2cgTDZF_FPU8kJMStw8C2s/edit?usp=sharing"
                    dataAos="fade-right"
                >
                    Resume
                    <div className="button-icon">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAs0lEQVRoge3YMQrCQBhE4VnPId5HbFIoFlpbemg3t0jg2SQQJBAXlT8r80H6N4EQdiUzMzMzCwPsgTw8TXRPsSF81AHn6KYiLwPqGwE0Q3TVI44zI3rgGt32No9YC49Yi+IRwAFoWb+OyR87TQZkSdvfv9uvyCmlnSRtoks+NR1wk9RGhRToJd2jIxYBJ+Y/4kt02yLHR3F8lNrj6z7Q8AdHyuoP9eO1yoMar1XMzMzMAj0BAM2akR1X6QoAAAAASUVORK5CYII=" />
                    </div>
                </Button>
            </div>
            <div className="container-landing_image">
                <div className="landing_image">
                    <img src={dp} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Landing;
