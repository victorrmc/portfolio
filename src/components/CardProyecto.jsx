import { ListSvg } from "./ListSvg";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <article className="relative animatedCard mx-4 bg-slate-700 shadow-lg shadow-black rounded-3xl">
      <div className="group flex items-center justify-center">
        <img
          className="rounded-t-3xl  group-hover:opacity-30"
          src={imagen}
          alt={t("card_project.image_alt", { title: titulo })}
        />

        <div className="absolute hidden space-x-3 group-hover:flex  ">
          <a
            className="jello-horizontal "
            href={enlaceGithub}
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("card_project.code")}
            <img className="w-10 ml-2" src="Github.svg" alt="Github logo" />
          </a>
          {enlaceWeb && (
            <a href={enlaceWeb} target="_blank" rel="noreferrer noopener">
              {t("card_project.page")}
              <img
                loading="lazy"
                className="w-10 ml-0.5  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
                src="Enlace.svg"
                alt="Logo de enlace"
              />
            </a>
          )}
        </div>
      </div>
      <div className="grid m-3 space-y-2 ">
        <header>
          <h3 className={`text-2xl ${colortitulo}`}>{titulo}</h3>
        </header>
        {parrafos.map((element, index) => (
          <p key={index} className="text-white">
            {element}
          </p>
        ))}
        <footer className="space-y-3 text-center">
          <h4 className="font-bold py-3">
            {t("card_project.technologies_used")}
          </h4>
          <ListSvg srcSvg={srcSvg} altura={altura} />
        </footer>
      </div>
    </article>
  );
}
