import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="social-list">
          <li className="item">
            <a href="#">
              <div className="social">
                <AiOutlineInstagram size={24} color="#fff" />
                Instagram
              </div>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <div className="social">
                <AiOutlineMail size={24} color="#fff" />
                E-mail
              </div>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <div className="social">
                <AiOutlineWhatsApp size={24} color="#fff" />
                WhatsApp
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
