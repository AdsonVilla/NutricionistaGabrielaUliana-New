import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import "./DropdownMenu.css";

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        <CgMenu size={24} color="#fff" className="hamburger" />
      </button>
      {isOpen && (
        <div className="aria-menu">
          {/* <div className="logo">
            <a href="#">Gabriela Uliana</a>
          </div> */}
          <ul>
            <li>
              <a href="#gabriela-section">Sobre</a>
            </li>
            <li>
              <a href="#doubts">Dúvidas</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
