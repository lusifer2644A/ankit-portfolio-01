// import React, { useEffect, useState } from "react";
// import "./Header.scss";

// import useWindowDimensions from "../../functions/dimensions";
// import backIcon from "../../assets/icons/back";
// import burgerIcon from "../../assets/icons/burger";

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const { height, width } = useWindowDimensions();

//     const hamClickHandler = () => {
//         setIsOpen((oldState) => {
//             return !oldState;
//         });
//     };

//     const largeScreen = (
//         <>
//             <li className="navLi">
//                 <a onClick={onHamClick} href="#home">Home</a>
//             </li>
//             <li className="navLi">
//                 <a onClick={onHamClick} href="#exp">Experiance</a>
//             </li>
//             <li className="navLi">
//                 <a onClick={onHamClick} href="#pr">Projects</a>
//             </li>
//             <li className="navLi">
//                 <a onClick={onHamClick} href="#skill">Skills</a>
//             </li>
//             <li className="navLi">
//                 <a onClick={onHamClick} href="#contact">Contact</a>
//             </li>
//         </>
//     );

//     const smallScreen = (
//         <div
//             onClick={() => {
//                 hamClickHandler();
//             }}
//             className="nav-icon"
//         >
//             {isOpen ? backIcon : burgerIcon}
//         </div>
//     );

//     let navItems =
//         width > 850 ? (
//             largeScreen
//         ) : isOpen ? (
//             <>
//                 {largeScreen}
//                 {smallScreen}
//             </>
//
//             smallScreen
//         );
//     return (
//         <header
//             className="navbar"
//             style={isOpen ? { height: "100vh" } : {}}
//             id="landing"
//         >
//             <ul
//                 className="flex"
//                 style={
//                     isOpen
//                         ? {
//                               flexDirection: "column",
//                               justifyContent: "space-evenly",
//                           }
//                         : { padding: "10px 1em" }
//                 }
//             >
//                 {navItems}
//             </ul>
//         </header>
//     );
// };

// export default Header;

import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const nav_links_ref = useRef();
  const li_ref = useRef([]);
  const hamburgerRef = useRef();

  const onHamClick = (e) => {
    nav_links_ref.current.classList.toggle(`open`);
    li_ref.current.forEach((link) => {
      console.log(link);
      link.classList.toggle(`fade`);
    });

    // //Hamburger Animation
    hamburgerRef.current.classList.toggle("toggle");
  };

  return (
    <>
      <div className="navbar1">
        <div className="nav_logo"></div>{" "}
        <div className="hamburger" ref={hamburgerRef} onClick={onHamClick}>
          <div className="line1 line"></div>
          <div className="line2 line"></div>
          <div className="line3 line"></div>
        </div>
        <div className="nav_links" ref={nav_links_ref}>
          <div
            className="nav_link_items"
            ref={(el) => (li_ref.current[0] = el)}
          >
            <a onClick={onHamClick} href="#home">
              Home
            </a>
          </div>

          <div
            className="nav_link_items"
            ref={(el) => (li_ref.current[1] = el)}
          >
            <a onClick={onHamClick} href="#exp">
              Experiance
            </a>
          </div>

          <div
            className="nav_link_items"
            ref={(el) => (li_ref.current[2] = el)}
          >
            <a onClick={onHamClick} href="#pr">
              Projects
            </a>
          </div>

          <div
            className="nav_link_items"
            ref={(el) => (li_ref.current[3] = el)}
          >
            <a onClick={onHamClick} href="#skill">
              Skill
            </a>
          </div>

          <div
            className="nav_link_items"
            ref={(el) => (li_ref.current[4] = el)}
          >
            <a onClick={onHamClick} href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
