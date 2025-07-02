import { ListSvg } from "./ListSvg";
import { useTranslation } from 'react-i18next';

export function CardExperiencia_Estudios({
  cargo_titulo,
  empresa_instituto,
  fecha,
  srcSvg,
  parrafos = [],
  colorFondo,
  altura,
}) {
  const { t } = useTranslation();

  return (
    
    <div
      className={`lg:flex animatedCard mx-4 h-auto w-auto shadow-lg shadow-black ${colorFondo}  space-y-6 lg:space-y-0 rounded-3xl p-5`}
    >
      <div
        className={
          parrafos.length == 0
            ? "grid text-center  w-full space-y-2 mr-3"
            : "grid text-center lg:w-96  w-full space-y-2 mr-3"
        }
      >
        <header>
          <p className="text-xl text-yellow-300 text-balance ">
            {cargo_titulo}
          </p>
          <p className="text-lg text-blue-300 text-balance">
            {empresa_instituto}
          </p>
        </header>
        <p className="font-mono text-white">{fecha}</p>
        <p className=" py-3 font-bold text-white">{t('card_experience.technologies_used')}</p>
        <ListSvg srcSvg={srcSvg} altura={altura} />
      </div>
      <div className={
          parrafos.length == 0
            ? "space-y-3 grid lg:content-center lg:max-w-xl  "
            : "space-y-3 grid lg:content-center lg:max-w-xl lg:w-full "
        }>
        {parrafos.map((element, index) => (
          <p key={index} className="text-white">
            {element}
          </p>
        ))}
      </div>
    </div>
  );
}
