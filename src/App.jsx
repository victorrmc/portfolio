import "./App.css";
import { CardExperiencia } from "./components/CardExperiencia";
import { CardProyecto } from "./components/CardProyecto";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { ListSvg } from "./components/ListSvg";
import { SobreMi } from "./components/SobreMi";
import { logoContactame, logoTecAshotel, logoTecCIAC, logoTecOferAlert, parrafosAshotel, parrafosCIAC, parrafosOferAlert } from "./constans";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center  w-full">
        <Inicio />
        <section
          id="Sobre-mi"
          className="flex flex-col items-center justify-center px-4 lg:pb-12  pt-24 max-w-screen-lg w-full"
        >
          <SobreMi />
          <article className="flex flex-col my-5 space-y-3 justify-items-start ">
            <h3 className="text-3xl text-white text-center">Experiencia</h3>
            <CardExperiencia
              cargo="Programador Full Stack"
              empresa="Ashotel · Contrato de prácticas"
              fecha="mar. 2023 - may. 2023 · 3 meses"
              srcSvg={logoTecAshotel}
              parrafos={parrafosAshotel}
            />
            <CardExperiencia
              cargo="Desarrollador Xamarin"
              empresa="CENTRO DE INFORMATICA Y ANALISIS DE CANARIAS SL · Contrato de prácticas"
              fecha="mar. 2022 - may. 2022 · 3 meses"
              srcSvg={logoTecCIAC}
              parrafos={parrafosCIAC}
            />
          </article>
          <article>
          <h3 className="text-3xl text-white text-center">Estudios</h3>
          </article>
        </section>
        <section
          id="Proyectos"
          className="flex flex-col items-center px-4 space-y-2 pb-5 max-w-screen-lg text-white "
        >
          <h2 className="text-3xl mb-5">Proyectos</h2>
          <CardProyecto
            imagen={"./img/OfertAlert.png"}
            enlaceGithub={"https://github.com/victorrmc/OfertAlert"}
            enlaceWeb={"https://ofertalert.vercel.app/"}
            titulo={"OfertAlert"}
            parrafos={parrafosOferAlert}
            srcSvg={logoTecOferAlert}
            colortitulo={"text-[#D68910]"}
          />
        </section>
        <Footer />

      </main>
    </>
  );
}

export default App;
