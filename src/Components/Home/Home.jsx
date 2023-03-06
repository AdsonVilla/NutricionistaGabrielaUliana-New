import "./Home.css";

export function Home() {
  return (
    <div class="wellcome container">
      <div class="initial-content">
        <h1>SEJA MUITO BEM-VINDO(A)</h1>
        <p>Aqui você encontra uma nutrição gentil e com amor.</p>
        <button class="button" type="submit">
          <img src="../assets/whatsapp.svg" alt="Logo=whatsapp" />
          <a href="#">AGENDE SUA CONSULTA</a>
        </button>
      </div>
      <div class="img">
        <img src="../assets/Gabriela.png" alt="Nutricionista-Gabriela-Uliana" />
      </div>
    </div>
  );
}
