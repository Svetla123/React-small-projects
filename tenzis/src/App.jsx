import React from "react";
import "./app.css";
import Die from "./components/Die.jsx";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function Main() {
    const [dices, setDices] = React.useState(allNewDice());
    const [tenzis, setTenzis] = React.useState(false);
    const [numRols, setNumRols] = React.useState(0);

    React.useEffect(() => {
        const allHeld = dices.every((die) => die.isHeld);
        const firstValue = dices[0].value;
        const allSameValue = dices.every((die) => die.value === firstValue);

        if (allHeld && allSameValue) {
            setTenzis(() => true);
        }
    }, [dices]);

    function allNewDice() {
        const diceArrey = [];
        for (let i = 0; i < 10; i++) {
            diceArrey.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
            });
        }
        return diceArrey;
    }

    function generateNumber() {
        if (!tenzis) {
            setDices((prev) => {
                return prev.map((dice) => {
                    return dice.isHeld == false
                        ? { ...dice, value: Math.ceil(Math.random() * 6) }
                        : dice;
                });
            });
            setNumRols((prev) => prev + 1);
        } else {
            setTenzis(() => false);
            setDices(() => allNewDice());
            setNumRols(() => 0);
        }
    }

    function holdDice(id) {
        setDices((prev) => {
            return prev.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            });
        });
    }

    const diceElements = dices.map((die) => {
        return (
            <Die
                value={die.value}
                key={die.id}
                isHeld={die.isHeld}
                holdDice={() => holdDice(die.id)}
            />
        );
    });
    return (
        <main className="container">
            {tenzis && <Confetti />}
            <h1 className="title">Tenzis</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice--container">{diceElements}</div>
            <div className="counter"> Rolls: {numRols}</div>
            <button className="btn--roll" onClick={generateNumber}>
                {tenzis ? "Reset game" : "Roll dice"}
            </button>
        </main>
    );
}
export default Main;
