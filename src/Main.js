import React from "react"
import memesData from "./memesData.js"

function Main() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main className="main">
      <input className="main__input" type="text" id="top-text" name="top-text"/>
      <input className="main__input" type="text" id="bottom-text" name="bottom-text"/>
      <button onClick={getMemeImage} className="main__button">Get a new meme image 🖼</button>
      <img className="main__image" src={memeImage} alt="" />
    </main>
  );
}

export default Main;
