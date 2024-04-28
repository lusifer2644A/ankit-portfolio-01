import React, { useState } from "react";
import "./Card.scss";

import useWindowDimensions from "../../../functions/dimensions";

const Card = ({ data, style, dataAos, dataAosDelay = 0 }) => {
  const { height, width } = useWindowDimensions();
  const [cardHovered, setCardHovered] = useState(false);

  const activateDataSection = () => {
    if (data && data.data && data?.data.length > 0) setCardHovered(true);
  };

  const deactivateDataSection = () => {
    setCardHovered(false);
  };

  return (
    <div
      className="card-overlay"
      style={width < 650 ? {} : style}
      onMouseOver={activateDataSection}
      onMouseLeave={deactivateDataSection}
      onClick={() =>
        data && data.data && data?.data.length > 0 && setCardHovered((o) => !o)
      }
    >
      <div
        className="card"
        data-aos-once="true"
        data-aos="zoom-in"
        style={cardHovered ? { filter: "blur(15px)" } : {}}
      >
        <div className="card-top">
          <p className="card-type dgc regular xs">{data.type}</p>
          {data.company_image_url && (
            <div className="card-company-image-box">
              <img src={data.company_image_url} alt="" />
            </div>
          )}
        </div>
        <h2 className="card-company wc bold m ff-raleway ls-1">
          {data.company}
        </h2>
        <h3 className="card-position lgc semi-bold s">{data.position}</h3>
        <p className="card-duration lgc regular xs">{data.duration}</p>
        {data.github && (
          <div className="card-links">
            {data.github && (
              <a href={data.github} target="_blank">
                <div className="card-link-icon">
                  <img src="https://img.icons8.com/material-outlined/80/ffffff/github.png" />
                </div>
              </a>
            )}
            {data.website && (
              <a href={data.website} target="_blank">
                <div className="card-link-icon">
                  <img src="https://img.icons8.com/material-outlined/80/ffffff/domain--v1.png" />
                </div>
              </a>
            )}
          </div>
        )}
      </div>
      {cardHovered && data?.data.length > 0 && (
        <div className="card-data-sec">
          <ul>
            {data?.data?.map((item) => {
              return (
                <li>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;
