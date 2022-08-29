import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data.js";

function App() {
    const cardelements = cardData.map((card, index, arra) => {
        return <Card key={card.id} card={card} />;
    });
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">{cardelements}</section>
        </div>
    );
}

export default App;
