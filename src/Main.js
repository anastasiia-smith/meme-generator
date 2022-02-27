import React from "react"

function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])
  
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }));
  };

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }
  return (
    <main className="main">
      <input 
        className="main__input" 
        type="text" 
        id="top-text" 
        value={meme.topText}
        name="topText"
        onChange={handleChange}
      />
      <input 
        className="main__input" 
        type="text" 
        id="bottom-text" 
        value={meme.bottomText}
        name="bottomText"
        onChange={handleChange}
      />
      <button onClick={getMemeImage} className="main__button">Get a new meme image 🖼</button>
      <div className="main__meme">
        <img className="main__image" src={meme.randomImage} alt="" />
        <h2 className="main__text main__text_top">{meme.topText}</h2>
        <h2 className="main__text main__text_bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Main;
