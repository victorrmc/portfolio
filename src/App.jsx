import "./App.css";
import { CardExperiencia } from "./components/CardExperiencia";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { SobreMi } from "./components/SobreMi";

const scrTecnologiasAshotel = ["Typescript_logo_2020.svg", "PHP-logo.svg", "HTML5_Badge.svg", "CSS3_logo.svg", "Wordpress-Logo.svg"]
function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center  w-full">
        <Inicio />
        <section
          id="sobre-mi"
          className="flex flex-col items-center justify-center px-4 py-24 max-w-screen-lg w-full"
        >
          <SobreMi/>
          <article className="flex flex-col my-5 space-y-3 justify-items-start ">
            <h3 className="text-3xl text-white text-center">Experiencia</h3>
             <CardExperiencia cargo="Programador Full Stack" empresa="Ashotel · Contrato de prácticas" fecha="mar. 2023 - may. 2023 · 3 meses" srcTencologias={scrTecnologiasAshotel} />
            <div className="w-96 bg-slate-200 h-96"></div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
