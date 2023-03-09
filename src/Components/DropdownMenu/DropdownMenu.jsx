import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import "./DropdownMenu.css";

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
    setShowButton(!showButton);
  }

  return (
    <div className="dropdown">
      {showButton && (
        <button onClick={toggleDropdown}>
          <CgMenu size={24} color="#fff" className="hamburger" />
        </button>
      )}
      {isOpen && (
        <div className="aria-menu">
          {/* <div className="logo">
            <a href="#">Gabriela Uliana</a>
          </div> */}
          <ul>
            <li>
              <a href="#gabriela-section" onClick={toggleDropdown}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#doubts" onClick={toggleDropdown}>
                Dúvidas
              </a>
            </li>
            <li>
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
