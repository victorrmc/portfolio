import { useTranslation } from 'react-i18next';

export function Contactame() {
  const { t } = useTranslation();

  return (
    <section
      id="Contactame"
      className=" max-w-screen-lg space-y-3 text-center  w-full px-3 pt-24  pb-5"
    >
      <header>
        <h1 className="text-5xl mb-5 text-white text-center">{t('contact.title')}</h1>
      </header>
      <article className=" shadow-lg shadow-black rounded-3xl py-8 bg-slate-950 mx-4 space-y-2">
        <h2 className="text-white py-3 mx-1">
          {t('contact.subtitle')}
        </h2>
        <div className="flex  items-center justify-center align-middle p-3 space-x-reverse lg:space-x-6">
          <a
            className="flex flex-1 flex-col items-center justify-center  rounded-full"
            href="https://github.com/victorrmc"
            target="_blank" rel="noreferrer noopener"
          >
            <p className="text-white te">{t('contact.code')}</p>
            <div className="jello-horizontal ">
              <img
                className="w-14 mt-1"
                src="Github.svg"
                alt="GitHub"
                title="GitHub"
              />
            </div>
          </a>
          <a
            className=" flex flex-1 flex-col items-center justify-center "
            href="https://www.linkedin.com/in/v%C3%ADctor-marrero-carrillo-8b25a2234/"
            target="_blank" rel="noreferrer noopener"
          >
            <p className="text-white">LinkedIn</p>
            <img
              className="w-14 mt-1 hover:bg-white rounded-2xl  m-1  transition-all hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.35)]"
              src="LinkedIn.svg"
              title="LinkedIn"
              alt="Logo LinkedIn"
            />
          </a>
          <a
            className=" flex-1 p-1 flex flex-col items-center justify-center "
            href="mailto:victortenemc@gmail.com"
            target="_blank" rel="noreferrer noopener"
          >
            <p className="text-white">Gmail</p>
            <div className="heartBeat">
              <img
                className="h-14 mt-1   hover:bg-white rounded-lg "
                src="Gmail.svg"
                title="Gmail"
                alt="Logo Gmail"
              />
            </div>
          </a>

          <a
            className=" flex-1 flex flex-col items-center justify-center"
            href="/CV/CV-VictorMarreroCarrillo.pdf"
            title={t('contact.cv_title')}
            target="_blank" rel="noreferrer noopener"
          >
            <p className="text-white ">{t('contact.cv_text')}</p>
            <p className="w-14 h-14  rounded-lg animated heartBeat bg-yellow-300 flex align-middle justify-center flex-col   mt-1  hover:bg-black hover:text-yellow-300 text-black text-2xl">
              CV
            </p>
          </a>
        </div>
      </article>
    </section>
  );
}
