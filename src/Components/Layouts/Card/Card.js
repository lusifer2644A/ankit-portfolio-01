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
      <h2 className="card-company wc bold m ff-raleway ls-1">{data.company}</h2>
      <h3 className="card-position lgc semi-bold s">{data.position}</h3>
      <p className="card-duration lgc regular xs">{data.duration}</p>
      {data.github && (
        <div className="card-links">
          {data.github && (
            <a href={data.github} target="_blank">
              <div className="card-link-icon">
                <img src="https://img.icons8.com/material-outlined/50/ffffff/github.png" />
              </div>
            </a>
          )}
          {data.website && (
            <a href={data.website} target="_blank">
              <div className="card-link-icon">
                <img src="https://img.icons8.com/material-outlined/50/ffffff/globe.png" />
              </div>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
