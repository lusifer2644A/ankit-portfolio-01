import React from "react";
import Heading from "../Layouts/ Heading/Heading";
import Card from "../Layouts/Card/Card";
import PORData from "../../Data/por.json";
import useWindowDimensions from "../../functions/dimensions";

import "./POR.scss";

const POR = () => {
    const { height, width } = useWindowDimensions();
    return (
        <section className="POR section-pad">
            <Heading
                title="Position of Responsibility"
                left={width < 650 ? true : false}
            />
            <div
                className="pr-div flex flex-row"
                style={{ justifyContent: "flex-end" }}
            >
                <div className="pr-grid">
                    {PORData.map((data, index) => {
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

export default POR;
