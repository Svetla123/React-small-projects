import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemes, setallMemes] = React.useState([]);

    function getImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        setMeme((prev) => {
            return {
                ...prev,
                randomImg: allMemes[randomIndex].url,
            };
        });
    }

    function handleChange(event) {
        const { name, value, type } = event.target;
        setMeme((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
        console.log("handleChange");
    }
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => setallMemes(() => data.data.memes));
    }, []);

    return (
        <main>
            <div className="form">
                <input
                    placeholder="Top text"
                    type="text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    placeholder="Bottom text"
                    type="text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getImage} className="form--button">
                    Get a new meme image 🖼
                </button>
                <div className="meme">
                    <img src={meme.randomImg} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    );
}
