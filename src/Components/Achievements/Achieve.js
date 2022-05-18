import React from "react";
import achieveData from "../../Data/Achievements.json";
import Heading from "../Layouts/ Heading/Heading";
import Card from "../Layouts/Card/Card";

import "./Achieve.scss";

const Achieve = () => {
    return (
        <section className="achieve section-pad">
            <Heading title="Achievements" />
            <div className="achieve-container">
                {achieveData.map((data) => {
                    return <Card data={data} />;
                })}
            </div>
        </section>
    );
};

export default Achieve;
