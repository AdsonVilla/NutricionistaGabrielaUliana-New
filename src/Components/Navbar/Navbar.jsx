import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Gabriela Uliana</a>
      </div>
      <div className="sections">
        <ul className="sections-list">
          <li className="list-item">
            <a href="#">Sobre</a>
          </li>
          <li className="list-item">
            <a href="#">Dúvidas</a>
          </li>
          <li className="list-item">
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
