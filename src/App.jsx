import "./App.css";
import { Navbar } from "../src/Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
