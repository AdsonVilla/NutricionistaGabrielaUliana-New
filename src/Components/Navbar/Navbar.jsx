import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

export function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resizeWidth); // Update the width on resize

    return () => window.removeEventListener("resize", resizeWidth);
  });

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Gabriela Uliana</a>
      </div>
      <div className="sections">
        {width > 540 ? (
          <ul className="sections-list">
            <li className="list-item">
              <a href="#gabriela-section">Sobre</a>
            </li>
            <li className="list-item">
              <a href="#">Dúvidas</a>
            </li>
            <li className="list-item">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        ) : (
          <button>
            <RxHamburgerMenu size={24} color="#fff" />
          </button>
        )}
      </div>
    </nav>
  );
}
