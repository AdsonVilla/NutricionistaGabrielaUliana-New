import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import "./DropdownMenu.css";

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  function toggleDropdown() {
    setIsOpen(!isOpen);
    setShowButton(!showButton);
  }

  //   function closeDropDown() {
  //     setIsOpen(!isOpen);
  //     setShowButton(!showButton);
  //   }

  return (
    <div className="dropdown">
      {showButton ? (
        <button onClick={toggleDropdown}>
          <CgMenu size={28} color="#fff" className="hamburger" />
        </button>
      ) : (
        <button onClick={toggleDropdown}>
          <RxCross2 size={28} color="#fff" className="hamburger" />
        </button>
      )}
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
