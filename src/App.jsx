import "./App.css";
import { CardExperiencia } from "./components/CardExperiencia";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { ListSvg } from "./components/ListSvg";
import { SobreMi } from "./components/SobreMi";

const logoTecAshotel = [
  {
    url: "Typescript_logo_2020.svg",
    title: "Typescript",
  },
  {
    url: "PHP-logo.svg",
    title: "PHP",
  },
  {
    url: "HTML5_Badge.svg",
    title: "HTML5",
  },
  {
    url: "CSS3_logo.svg",
    title: "CSS3",
  },
  {
    url: "Wordpress-Logo.svg",
    title: "Wordpress",
  },
];
const logoTecCIAC = [
  {
    url: "c--4.svg",
    title: "C#",
  },
  {
    url: "Xamarin-logo.svg",
    title: "Xamarin",
  },
];

const logoTecOferAlert = [
  {
    url: "Github.svg",
    title: "Github",
  },
  {
    url: "Enlace.svg",
    title: "Enlace",
  },
];

const parrafosAshotel = [
  "En mi rol en Ashotel, desempeñé un papel Full Stack. Primero, en el área de desarrollo web, trabajé en la actualización y creación de nuevas páginas en la sección de Observatorio, utilizando WordPress con backend en PHP para mejorar la experiencia en línea.",
  "Además, en el ámbito de la automatización y gestión de datos, utilicé TypeScript para crear automatizaciones en Excel, mejorando la eficiencia de los flujos de trabajo. También implementé automatizaciones con Microsoft Power Automate para simplificar procesos internos.",
  "Finalmente, lideré la creación de un MVP (Producto Mínimo Viable) en Power Apps, lo que contribuyó a la optimización de tareas y a una mayor eficiencia operativa en la empresa.",
];
const parrafosCIAC = [
  "Como Desarrollador Xamarin en CIAC, optimicé la velocidad y eficiencia de las listas desplegables en nuestra aplicación mediante técnicas de lazy loading y almacenamiento en caché.",
  "Además, lideré la creación exitosa de una nueva sección de la aplicación, mejorando la experiencia del usuario.",
];

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
        </section>
        <section className="flex flex-col items-center px-4 text-white ">
          <h2 className="text-3xl mb-5">Proyectos</h2>
          <article className="bg-slate-700 rounded-3xl">
            <img
              className="rounded-t-3xl"
              src="./img/OfertAlert.png"
              alt="Imagen de la pagina web OfertAlert"
            />
            <div className="grid m-3 space-y-2">
              <h3 className="text-2xl text-[#D68910]">OfertAlert</h3>
              <p>
                Aplicación web de seguimiento de ofertas en tiempo real. Con
                OfertAlert, puedes ingresar un enlace y recibir notificaciones
                por correo electrónico cada vez que el artículo asociado esté en
                oferta.
              </p>
              <p>
                <a className="" href="https://github.com/victorrmc/OfertAlert">
                  Código{" "}
                  <img className="w-32" src="Github.svg" alt="Github logo" />
                </a>
                <a href="https://ofertalert.vercel.app/">
                  Página <img src="Enlace.svg" alt="Logo de enlace" />
                </a>
              </p>
              
              <div>
                <h4>Tecnologias utilizadas:</h4>
                <ListSvg srcSvg={logoTecOferAlert }/>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
