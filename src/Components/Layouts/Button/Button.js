import React from "react";
import "./Button.scss";

const Button = (props) => {
    console.log(props);
    return (
        <div
            className="button semi-bold"
            type="button"
            onClick={() => window.open(props.link, "_blank")}
        >
            <div className="flex flex-row m align-center">{props.children}</div>
        </div>
    );
};

export default Button;
