import React from "react";
import "./Heading.scss";
const Heading = ({ title, left = true }) => {
    return (
        <div className={`heading flex flex-column ${!left && "right"}`}>
            <p className="regular m wc">{title}</p>
            <div className="heading_bar right" />
        </div>
    );
};

export default Heading;
