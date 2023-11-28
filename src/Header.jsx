export default function Header() {
  return (
    <nav className="Header">
      <div className="Header__inner">
        <div>
          <span className="Header__logo--accent">A</span>lexander&nbsp;
          <span className="Header__logo--accent">K</span>okko&nbsp;-&nbsp;
          <span className="Header__logo--accent"></span>Web&nbsp;
          <span className="Header__logo--accent"></span>
          Developement&nbsp;-&nbsp;
          <span className="Header__logo--accent"></span>Seattle,&nbsp;
          <span className="Header__logo--accent"></span>WA
        </div>
        <ul className="Header__links">
          <li className="Header__links__link">
            <a href="#home">Home</a>
          </li>
          <li className="Header__links__link">
            <a href="#project1">Porfolio</a>
          </li>
          <li className="Header__links__link">
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
