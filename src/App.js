import { useEffect } from "react";
import "./App.scss";
import Achieve from "./Components/Achievements/Achieve";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import POR from "./Components/POR/POR";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import We from "./Components/Work Experiance/We";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 300,
        });
    }, []);
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Landing />
                <We />
                <Project />
                <Education />
                <Skills />
                <Achieve />
                <POR />
                <Contact />
            </div>
        </div>
    );
}

export default App;
