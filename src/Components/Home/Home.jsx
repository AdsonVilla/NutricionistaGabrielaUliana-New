import { Button } from "../Button/Button";
import "./Home.css";

export function Home() {
  return (
    <div class="wellcome container">
      <div class="initial-content">
        <h1>SEJA MUITO BEM-VINDO(A)</h1>
        <p>Aqui você encontra uma nutrição gentil e com amor.</p>
        <Button />
      </div>
      <div class="img">
        <img src="../assets/Gabriela.png" alt="Nutricionista-Gabriela-Uliana" />
      </div>
    </div>
  );
}
