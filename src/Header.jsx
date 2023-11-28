export default function Header() {
  return (
    <nav className="Header">
      <div className="Header__inner">
        <div className="mobile-block-row">
          <span className="mobile-block">
            <span className="Header__logo--accent">A</span>lexander&nbsp;
            <span className="Header__logo--accent">K</span>okko
            <span className="mobile-hidden">&nbsp;-&nbsp;</span>
          </span>
          <span className="mobile-block">
            <span className="Header__logo--accent"></span>Web&nbsp;
            <span className="Header__logo--accent"></span>
            Developement<span className="mobile-hidden">&nbsp;-&nbsp;</span>
          </span>
          <span className="mobile-block">
            <span className="Header__logo--accent"></span>Seattle,&nbsp;
            <span className="Header__logo--accent"></span>WA
          </span>
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
