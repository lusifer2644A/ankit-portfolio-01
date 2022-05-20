import React from "react";
import Heading from "../Layouts/ Heading/Heading";

import useWindowDimensions from "../../functions/dimensions.js";

import starFilled from "../../assets/icons/Star-filled";
import starHollow from "../../assets/icons/Star-hollow";

import "./Skills.scss";
import SkillCard from "./SkillCard";

const pgData = [
    {
        lang: "C++",
        rating: 5,
    },
    {
        lang: "Javascript",
        rating: 4,
    },
    {
        lang: "Java",
        rating: 4,
    },
    {
        lang: "Python",
        rating: 3,
    },
];

const skillData = [
    {
        type: "Frontend",
        fields: ["React.js", "HTML", "Redux", "CSS", "Figma"],
    },
    {
        type: "Technical",
        fields: [
            "Data Structures and Algorithms",
            "Object Oriented Programming",
        ],
    },
    {
        type: "BACKEND",
        fields: ["Node.js", "MongoDB", "Express"],
    },
];

const transformStyle = {
    transform: "translate(0px, -150px)",
};

const Skills = () => {
    const { height, width } = useWindowDimensions();

    //card programming languages
    const progCard = (
        <div
            className="card"
            style={width > 750 ? { gridColumn: "2" } : {}}
            data-aos="zoom-in"
            data-aos-once="true"
        >
            <p className="card-type dgc regular xs">Programming Languages</p>
            {/* Star and name */}
            <div className="pglang-content">
                {pgData.map((data, index) => {
                    let filledStars = [];
                    for (let i = 1; i <= parseInt(data.rating); i++) {
                        filledStars.push(
                            <div className="starBox">{starFilled}</div>
                        );
                    }

                    let unfilledStars = [];
                    for (let i = 1; i <= 5 - parseInt(data.rating); i++) {
                        unfilledStars.push(
                            <div className="starBox">{starHollow}</div>
                        );
                    }

                    return (
                        <>
                            <h2 className="card-company wc semi-bold m">
                                {data.lang}
                            </h2>
                            <div className="stars-area flex flex-row">
                                {filledStars}
                                {unfilledStars}
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );

    return (
        <section className="skill section-pad" id="skill">
            <Heading title="Skills" left={false} />
            <div className="skill-cont-flex">
                <div className="skill-container">
                    {progCard}
                    {skillData.map((data, idx) => {
                        if (idx % 2 === 0)
                            return (
                                <SkillCard
                                    data={data}
                                    style={width < 750 ? {} : transformStyle}
                                />
                            );
                        return <SkillCard data={data} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
