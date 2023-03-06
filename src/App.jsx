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
      <Footer />
    </div>
  );
}
export default App;
