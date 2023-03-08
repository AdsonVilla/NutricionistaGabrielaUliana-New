import { useState, useEffect } from "react";
// import { RxTextAlignJustify } from "react-icons/rx";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
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
      <div className={width > 540 ? "nav-content-column" : "nav-content-row"}>
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
            <DropdownMenu />
          )}
        </div>
      </div>
    </nav>
  );
}
