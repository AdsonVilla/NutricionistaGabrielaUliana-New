import { useState, useEffect } from "react";
import { CgMenu } from "react-icons/cg";
// import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import "./Navbar.css";

export function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const resizeWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", resizeWidth); // Update the width on resize

    return () => window.removeEventListener("resize", resizeWidth);
  });

  return (
    <div>
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
            <button onClick={toggleDropdown}>
              <CgMenu size={28} color="#fff" className="hamburger" />
            </button>
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="aria-menu">
          <ul className="list-items">
            <li className="item">
              <a href="#gabriela-section" onClick={toggleDropdown}>
                Sobre
              </a>
            </li>
            <li className="item">
              <a href="#doubts" onClick={toggleDropdown}>
                Dúvidas
              </a>
            </li>
            <li className="item">
              <a href="#contact" onClick={toggleDropdown}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
