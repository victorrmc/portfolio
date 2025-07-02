import { useTranslation } from 'react-i18next';

export function Inicio() {
  const { t } = useTranslation();

  return (
    <section
      id="Inicio"
      className="flex flex-row items-center justify-center max-w-screen-lg  px-4 h-screen w-full animate-fade-up animate-once animate-duration-[3000ms] animate-delay-100"
    >
      <article className="flex flex-col items-center gap-2 lg:flex-row-reverse">
        <img
          src="img/FotoPerfil.jpg"
          alt={t('inicio.profile_alt')}
          className="w-52 rounded-full lg:ml-12"
        />
        <div className="flex flex-col items-center text-center space-y-1 md:items-start ">
          <h1 className="text-5xl text-yellow-300">Víctor Marrero Carrillo</h1>
          <h2 className="text-3xl text-blue-300">{t('inicio.title')}</h2>
          <p className="text-xl text-white text-balance">
            {t('inicio.description')}{" "}
            <span className="text-3xl"> 👨🏽‍💻 </span>
          </p>
          <div className="flex space-x-3 pt-3">
            <a
              className="ml-1 rounded-full jello-horizontal  "
              href="https://github.com/victorrmc"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="w-10 fill-black"
                src="Github.svg"
                alt="GitHub"
                title="GitHub"
              />
            </a>
            <a
              className=" rounded-full  hover:bg-white transition-all hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.35)] "
              href="https://www.linkedin.com/in/v%C3%ADctor-marrero-carrillo-8b25a2234/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="w-10"
                src="LinkedIn.svg"
                title="LinkedIn"
                alt="Logo LinkedIn"
              />
            </a>
            <a
              className="rounded-lg animated heartBeat bg-yellow-300 h-10 w-10  hover:bg-black hover:text-yellow-300 text-black text-xl flex align-middle flex-col justify-center  "
              href="/CV/CV-VictorMarreroCarrillo.pdf"
              title={t('inicio.cv_title')}
              target="_blank"
            >
              CV
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
