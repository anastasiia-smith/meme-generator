function Main() {
  return (
    <main className="main">
      <input className="main__input" type="text" id="top-text" name="top-text"/>
      <input className="main__input" type="text" id="bottom-text" name="bottom-text"/>
      <button className="main__button">Get a new meme image 🖼</button>
      <img className="main__image" src="" alt="" />
    </main>
  );
}

export default Main;
