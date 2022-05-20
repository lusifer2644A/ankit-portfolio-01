import React from "react";
import "./Skills.scss";
import "../Layouts/Card/Card.scss";

const SkillCard = ({ data, style }) => {
    let internalData;

    if (data.fields.length <= 3) {
        internalData = (
            <ul>
                {data.fields.map((field) => {
                    return <li className="wc semi-bold m">{field}</li>;
                })}
            </ul>
        );
    } else {
        internalData = (
            <ul className="skillCardGrid">
                {data.fields.map((field) => {
                    return <li className="wc semi-bold m">{field}</li>;
                })}
            </ul>
        );
    }

    return (
        <div
            className="card skillCard"
            style={style}
            data-aos="zoom-in"
            data-aos-once="true"
        >
            <p className="card-type dgc regular xs">{data.type}</p>
            {internalData}
        </div>
    );
};

export default SkillCard;
