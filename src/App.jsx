import "./App.css";
import { CardExperiencia_Estudios } from "./components/CardExperiencia_Estudios";
import { CardProyecto } from "./components/CardProyecto";
import { Contactame } from "./components/Contactame";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { ListSvg } from "./components/ListSvg";
import { SobreMi } from "./components/SobreMi";
import { Analytics } from "@vercel/analytics/react";
import {
  logoTecAshotel,
  logoTecCIAC,
  logoTecOferAlert,
  logoTeBitbox,
  parrafosAshotel,
  parrafosCIAC,
  parrafosOferAlert,
  logoDAW,
  logoDAM,
  logoFrameworks,
  logoLenguajes,
  logoIDEs,
  logoHerramientas,
  parrafosBitbox,
} from "./constans";

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
          <article className="flex flex-col mt-10 mb-5 space-y-3 justify-items-start ">
            <header>
              <h3 className="text-3xl text-white text-center">Experiencia</h3>
            </header>
            <CardExperiencia_Estudios
              cargo_titulo="Analista Programador"
              empresa_instituto="Bitbox - IKEA"
              fecha="dec. 2023 - Actualidad"
              srcSvg={logoTeBitbox}
              parrafos={parrafosBitbox}
            />
            <CardExperiencia_Estudios
              cargo_titulo="Desarrollador Full Stack"
              empresa_instituto="Ashotel"
              fecha="mar. 2023 - may. 2023 · 3 meses"
              srcSvg={logoTecAshotel}
              parrafos={parrafosAshotel}
            />
            <CardExperiencia_Estudios
              cargo_titulo="Desarrollador Mobile"
              empresa_instituto="CENTRO DE INFORMÁTICA Y ANÁLISIS DE CANARIAS SL"
              fecha="mar. 2022 - may. 2022 · 3 meses"
              srcSvg={logoTecCIAC}
              parrafos={parrafosCIAC}
            />
          </article>
          <article className="space-y-3 mt-10 ">
            <header>
              <h3 className="text-3xl  text-white text-center">Estudios</h3>
            </header>
            <CardExperiencia_Estudios
              cargo_titulo="Ciclo Formativo de Grado Superior - Desarrollo de aplicaciones web"
              empresa_instituto="CIFP César Manrique Formación Profesional"
              fecha="sept. 2022 - jun. 2023"
              srcSvg={logoDAW}
              colorFondo="bg-slate-800"
            />
            <CardExperiencia_Estudios
              cargo_titulo="Ciclo Formativo de Grado Superior - Desarrollo de aplicaciones multiplataforma"
              empresa_instituto="CIFP César Manrique Formación Profesional"
              fecha="sept. 2020 - jun. 2022"
              srcSvg={logoDAM}
              colorFondo="bg-slate-800"
            />
          </article>
          <article className="py-3 space-y-3 px-3 mt-10 ">
            <header>
              <h2 className="text-3xl  text-white text-center">Habilidades</h2>
            </header>
            <h3 className="text-2xl pt-4 text-white text-center">Frameworks</h3>
            <ListSvg srcSvg={logoFrameworks}></ListSvg>
            <h3 className="text-2xl pt-4 text-white text-center">
              Lenguajes de programación
            </h3>
            <ListSvg srcSvg={logoLenguajes}></ListSvg>
            <h3 className="text-2xl pt-4  text-white text-center">IDEs</h3>
            <ListSvg srcSvg={logoIDEs}></ListSvg>
            <h3 className="text-2xl pt-4 text-white text-center">
              Herramientas
            </h3>
            <ListSvg srcSvg={logoHerramientas}></ListSvg>
          </article>
        </section>
        <section
          id="Proyectos"
          className="flex flex-col items-center px-3 space-y-2 pt-24 pb-5 max-w-screen-lg text-white "
        >
          <header>
            <h2 className="text-5xl mb-5">Proyectos</h2>
          </header>
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

        <Contactame />
      </main>
      <footer className="bg-black w-full p-3">
        <h1 className="text-white text-center">
          Víctor Marrero Carrillo - Portfolio
        </h1>
      </footer>
      <Analytics />
    </>
  );
}

export default App;
