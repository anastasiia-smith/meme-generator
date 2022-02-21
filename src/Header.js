import trollFace from "./images/troll-face.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__image" src={trollFace} alt="Troll face" />
        <h1 className="header__title">Meme Generator</h1>
      </div>
      <h2 className="header__project">React Course - Project 3</h2>
    </header>
  );
}

export default Header;
