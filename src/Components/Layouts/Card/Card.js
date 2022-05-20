import React from "react";
import "./Card.scss";

import useWindowDimensions from "../../../functions/dimensions";

const Card = ({ data, style, dataAos, dataAosDelay = 0 }) => {
    const { height, width } = useWindowDimensions();

    return (
        <div
            className="card"
            style={width < 650 ? {} : style}
            data-aos-once="true"
            data-aos="zoom-in"
        >
            <p className="card-type dgc regular xs">{data.type}</p>
            <h2 className="card-company wc semi-bold m">{data.company}</h2>
            <h3 className="card-position lgc semi-bold s">{data.position}</h3>
            <p className="card-duration lgc regular xs">{data.duration}</p>
        </div>
    );
};

export default Card;
