import React from "react";
import Heading from "../Layouts/ Heading/Heading";
import Card from "../Layouts/Card/Card";
import weData from "../../Data/We.json";

import "./we.scss";

const styles = {
    transform: `translate(0px, 35%)`,
};
const We = () => {
    return (
        <section className="we section-pad" id="exp">
            <Heading title="Work Experiance" />
            <div className="we-grid">
                {weData.map((data, index) => {
                    if (index % 2 === 1)
                        return <Card style={styles} data={data} />;
                    else return <Card data={data} />;
                })}
            </div>
        </section>
    );
};

export default We;
