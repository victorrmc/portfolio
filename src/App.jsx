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
  logoDAW,
  logoDAM,
  logoFrameworks,
  logoLenguajes,
  logoIDEs,
  logoHerramientas,
} from "./constans";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  const translatedParrafosBitbox = [
    t('experience_details.bitbox_p1'),
    t('experience_details.bitbox_p2'),
    t('experience_details.bitbox_p3'),
  ];

  const translatedParrafosAshotel = [
    t('experience_details.ashotel_p1'),
    t('experience_details.ashotel_p2'),
    t('experience_details.ashotel_p3'),
  ];

  const translatedParrafosCIAC = [
    t('experience_details.ciac_p1'),
    t('experience_details.ciac_p2'),
  ];

  const translatedParrafosOferAlert = [
    t('project_details.ofertalert_p1'),
  ];

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
              <h3 className="text-3xl text-white text-center">{t('card_experience.experience_title')}</h3>
            </header>
            <CardExperiencia_Estudios
              cargo_titulo={t('experience_jobs.analyst_programmer')}
              empresa_instituto={t('experience_jobs.bitbox')}
              fecha={t('experience_jobs.date_bitbox')}
              srcSvg={logoTeBitbox}
              parrafos={translatedParrafosBitbox}
            />
            <CardExperiencia_Estudios
              cargo_titulo={t('experience_jobs.full_stack_developer')}
              empresa_instituto={t('experience_jobs.ashotel')}
              fecha={t('experience_jobs.date_ashotel')}
              srcSvg={logoTecAshotel}
              parrafos={translatedParrafosAshotel}
            />
            <CardExperiencia_Estudios
              cargo_titulo={t('experience_jobs.mobile_developer')}
              empresa_instituto={t('experience_jobs.ciac')}
              fecha={t('experience_jobs.date_ciac')}
              srcSvg={logoTecCIAC}
              parrafos={translatedParrafosCIAC}
            />
          </article>
          <article className="space-y-3 mt-10 ">
            <header>
              <h3 className="text-3xl  text-white text-center">{t('card_experience.studies_title')}</h3>
            </header>
            <CardExperiencia_Estudios
              cargo_titulo={t('studies.b2_cambridge_title')}
              empresa_instituto={t('studies.b2_cambridge_institute')}
              fecha={t('studies.b2_cambridge_date')}
              colorFondo="bg-slate-800"
            />
            <CardExperiencia_Estudios
              cargo_titulo={t('studies.web_development_title')}
              empresa_instituto={t('studies.web_development_institute')}
              fecha={t('studies.web_development_date')}
              srcSvg={logoDAW}
              colorFondo="bg-slate-800"
            />
            <CardExperiencia_Estudios
              cargo_titulo={t('studies.multiplatform_development_title')}
              empresa_instituto={t('studies.multiplatform_development_institute')}
              fecha={t('studies.multiplatform_development_date')}
              srcSvg={logoDAM}
              colorFondo="bg-slate-800"
            />
          </article>
          <article className="py-3 space-y-3 px-3 mt-10 ">
            <header>
              <h2 className="text-3xl  text-white text-center">{t('card_experience.skills_title')}</h2>
            </header>
            <h3 className="text-2xl pt-4 text-white text-center">{t('card_experience.frameworks_title')}</h3>
            <ListSvg srcSvg={logoFrameworks}></ListSvg>
            <h3 className="text-2xl pt-4 text-white text-center">
              {t('card_experience.languages_title')}
            </h3>
            <ListSvg srcSvg={logoLenguajes}></ListSvg>
            <h3 className="text-2xl pt-4  text-white text-center">{t('card_experience.ides_title')}</h3>
            <ListSvg srcSvg={logoIDEs}></ListSvg>
            <h3 className="text-2xl pt-4 text-white text-center">
              {t('card_experience.tools_title')}
            </h3>
            <ListSvg srcSvg={logoHerramientas}></ListSvg>
          </article>
        </section>
        <section
          id="Proyectos"
          className="flex flex-col items-center px-3 space-y-2 pt-24 pb-5 max-w-screen-lg text-white "
        >
          <header>
            <h2 className="text-5xl mb-5">{t('header.projects')}</h2>
          </header>
          <CardProyecto
            imagen={"./img/OfertAlert.png"}
            enlaceGithub={"https://github.com/victorrmc/OfertAlert"}
            enlaceWeb={"https://ofertalert.vercel.app/"}
            titulo={"OfertAlert"}
            parrafos={translatedParrafosOferAlert}
            srcSvg={logoTecOferAlert}
            colortitulo={"text-[#D68910]"}
          />
        </section>

        <Contactame />
      </main>
      <footer className="bg-black w-full p-3">
        <h1 className="text-white text-center">
          {t('footer.text')}
        </h1>
      </footer>
      <Analytics />
    </>
  );
}

export default App;
