import "./App.css";
import { CardExperiencia } from "./components/CardExperiencia";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
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
  }
];
const logoTecCIAC = [
  {
    url: "c--4.svg",
    title: "C#"
  },
  {
    url: "Xamarin-logo.svg",
    title: "Xamarin"
  }
]

const parrafosAshotel = ["En mi rol en Ashotel, desempeñé un papel Full Stack. Primero, en el área de desarrollo web, trabajé en la actualización y creación de nuevas páginas en la sección de Observatorio, utilizando WordPress con backend en PHP para mejorar la experiencia en línea",
 "Además, en el ámbito de la automatización y gestión de datos, utilicéTypeScript para crear automatizaciones en Excel, mejorando la eficiencia de los flujos de trabajo. También implementé automatizaciones con Microsoft Power Automate para simplificar procesos internos.",
 "Finalmente, lideré la creación de un MVP (Producto Mínimo Viable) en Power Apps, lo que contribuyó a la optimización de tareas y a una mayor eficiencia operativa en Ashotel."
]
const parrafosCIAC = ["Como Desarrollador Xamarin en CIAC, optimicé la velocidad y eficiencia de las listas desplegables en nuestra aplicación mediante técnicas de lazy loading y almacenamiento en caché",
"Además, lideré la creación exitosa de una nueva sección de la aplicación, mejorando la experiencia de usuario."
]



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
             <CardExperiencia cargo="Programador Full Stack" empresa="Ashotel · Contrato de prácticas" fecha="mar. 2023 - may. 2023 · 3 meses" srcTencologias={logoTecAshotel} parrafos={parrafosAshotel}/>
             <CardExperiencia cargo="Desarrollador Xamarin" empresa="CENTRO DE INFORMATICA Y ANALISIS DE CANARIAS SL · Contrato de prácticas" fecha="mar. 2022 - may. 2022 · 3 meses" srcTencologias={logoTecCIAC} parrafos={parrafosCIAC}/>
            <div className="w-96 bg-slate-200 h-96"></div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
