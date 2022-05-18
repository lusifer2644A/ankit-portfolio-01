import React, { useEffect, useState } from "react";
import "./Header.scss";

import useWindowDimensions from "../../functions/dimensions";
import backIcon from "../../assets/icons/back";
import burgerIcon from "../../assets/icons/burger";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { height, width } = useWindowDimensions();

    const hamClickHandler = () => {
        setIsOpen((oldState) => {
            return !oldState;
        });
    };

    const largeScreen = (
        <>
            <li className="navLi">
                <a href="#home">Home</a>
            </li>
            <li className="navLi">
                <a href="#exp">Experiance</a>
            </li>
            <li className="navLi">
                <a href="#pr">Projects</a>
            </li>
            <li className="navLi">
                <a href="#skill">Skills</a>
            </li>
            <li className="navLi">
                <a href="#contact">Contact</a>
            </li>
        </>
    );

    const smallScreen = (
        <div
            onClick={() => {
                hamClickHandler();
            }}
            className="nav-icon"
        >
            {isOpen ? backIcon : burgerIcon}
        </div>
    );

    let navItems =
        width > 850 ? (
            largeScreen
        ) : isOpen ? (
            <>
                {largeScreen}
                {smallScreen}
            </>
        ) : (
            smallScreen
        );
    return (
        <header
            className="navbar"
            style={isOpen ? { height: "100vh" } : {}}
            id="landing"
        >
            <ul
                className="flex"
                style={
                    isOpen
                        ? {
                              flexDirection: "column",
                              justifyContent: "space-evenly",
                          }
                        : {}
                }
            >
                {navItems}
            </ul>
        </header>
    );
};

export default Header;
