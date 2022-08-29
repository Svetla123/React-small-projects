import React from "react";
import Navbar from "./components/navbar";
import TravelCard from "./components/TravelCard";
import "./App.css";
import travelCardData from "./data.js";

function App() {
    const travelCardElements = travelCardData.map((travel, index, arra) => {
        return <TravelCard key={travel.key} {...travel} />;
    });

    return (
        <div>
            <Navbar />
            <div className="main--container">{travelCardElements}</div>
        </div>
    );
}

export default App;
