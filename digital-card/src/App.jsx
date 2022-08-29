import React from "react";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Contact from "./components/Contact";

import "./css/app.css"

function App() {
    return (
        <div className = "main-content">
            <Info />
            <About />
            <Interests />
            <Contact />
        </div>
    )
}

export default App;