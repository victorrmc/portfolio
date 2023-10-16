import { ListSvg } from "./ListSvg";
export function CardProyecto({
  imagen,
  enlaceGithub,
  enlaceWeb,
  titulo,
  colortitulo,
  parrafos,
  srcSvg,
  altura,
}) {
  return (
    <article className="relative animatedCard mx-4 bg-slate-700 shadow-lg shadow-black rounded-3xl">
      <div className="group flex items-center justify-center">
        <img
          className="rounded-t-3xl  group-hover:opacity-30"
          src={imagen}
          alt={"Imagen de la pagina web " + titulo}
        />

        <div className="absolute hidden space-x-3 group-hover:flex  ">
          <a
            className="jello-horizontal "
            href={enlaceGithub}
          >
            Código
            <img className="w-10 ml-2" src="Github.svg" alt="Github logo" />
          </a>
          <a href={enlaceWeb} >
            Página
            <img
              className="w-10 ml-0.5  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
              src="Enlace.svg"
              alt="Logo de enlace"
            />
          </a>
        </div>
      </div>
      <div className="grid m-3 space-y-2 ">
        <h3 className={`text-2xl ${colortitulo}` }>{titulo}</h3>
        {parrafos.map((element, index) => (
          <p key={index} className="text-white">
            {element}
          </p>
        ))}
        <div className="space-y-3 text-center">
          <h4 className="font-bold ">Tecnologias utilizadas:</h4>
          <ListSvg srcSvg={srcSvg} altura={altura}/>
        </div>
      </div>
    </article>
  );
}
