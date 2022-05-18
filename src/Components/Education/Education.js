import React from "react";
import eduData from "../../Data/Education.json";
import Heading from "../Layouts/ Heading/Heading";
import Card from "../Layouts/Card/Card";
import collegeImage from "../../assets/college.jpg";

import "./Eduction.scss";

const Education = () => {
    return (
        <section className="edu section-pad">
            <Heading title="Education" />
            <div className="edu-container">
                <div className="flex flex-column rg-10">
                    {eduData.map((data) => {
                        return <Card data={data} />;
                    })}
                </div>
                <div className="edu-img">
                    <img src={collegeImage} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Education;
