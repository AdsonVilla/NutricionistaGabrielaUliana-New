import "./App.css";
import { Navbar } from "../src/Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Advantages } from "./Components/Advantages/Advantages";
import { Button } from "./Components/Button/Button";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <Advantages />
      <hr />
      <section id="gabriela-section">
        <div className="gabriela container">
          <h3>Conheça Gabriela Uliana</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur aliquam, corrupti voluptatem quibusdam suscipit placeat
            corporis! Voluptatibus, placeat earum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ab, culpa? Sed nulla voluptates sunt
            eligendi culpa reiciendis perspiciatis, natus sit.
          </p>
        </div>
      </section>
      <section id="contact">
        <div className="contact container">
          <h4>Entre em contato</h4>
          <div className="infos">
            <div className="contact-infos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <p>Avenida Gov. José Malcher, 3100</p>
            </div>
            <div className="contact-infos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <p>contato@nutricionista.com</p>
            </div>
            <Button />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default App;
