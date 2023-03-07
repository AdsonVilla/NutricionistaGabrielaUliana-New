import "./App.css";
import { Navbar } from "../src/Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";
import { Advantages } from "./Components/Advantages/Advantages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Advantages />
      <section id="gabriela-section">
        <div class="gabriela container">
          <h4>Conheça Gabriela Uliana</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur aliquam, corrupti voluptatem quibusdam suscipit placeat
            corporis! Voluptatibus, placeat earum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ab, culpa? Sed nulla voluptates sunt
            eligendi culpa reiciendis perspiciatis, natus sit.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default App;
