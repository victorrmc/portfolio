import { useTranslation } from 'react-i18next';

export function SobreMi() {
  const { t } = useTranslation();

  return (
    <article className="flex flex-col space-y-4 mx-4">
      <header>
        <h2 className="text-5xl text-white text-center">{t('about.title')}</h2>
      </header>
      <p className=" text-white">
        {t('about.paragraph1')}
      </p>
      <p className=" text-white">
        {t('about.paragraph2')}
      </p>
    </article>
  );
}
