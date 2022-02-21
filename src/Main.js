import React from "react"
import memesData from "./memesData.js"

function Main() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }));
    
  };
  return (
    <main className="main">
      <input className="main__input" type="text" id="top-text" name="top-text"/>
      <input className="main__input" type="text" id="bottom-text" name="bottom-text"/>
      <button onClick={getMemeImage} className="main__button">Get a new meme image 🖼</button>
      <img className="main__image" src={meme.randomImage} alt="" />
    </main>
  );
}

export default Main;
