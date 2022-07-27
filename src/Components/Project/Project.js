import React from "react";
import Heading from "../Layouts/ Heading/Heading";
import Card from "../Layouts/Card/Card";
import ProjectData from "../../Data/Projects.json";
import "./Project.scss";

const Project = () => {
    return (
        <section className="project section-pad" id="pr">
            <Heading title="Project" left={false} />
            <div
                className="pr-div flex flex-row"
                style={{ justifyContent: "flex-end" }}
            >
                <div className="pr-grid">
                    {ProjectData.map((data, index) => {
                        if (index % 2 === 0)
                            return (
                                <Card
                                    style={{
                                        gridColumn: "2",
                                    }}
                                    data={data}
                                />
                            );
                        else
                            return (
                                <Card
                                    style={{
                                        transform: "translate(0px, -65%)",
                                        gridColumn: "1",
                                    }}
                                    data={data}
                                />
                            );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Project;
