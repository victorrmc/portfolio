export function ListSvg({ srcSvg, altura= "h-10" }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-4">
      {srcSvg.map((tecnologias, index) => (
        <li key={index}>
          <img
            className={altura}
            src={tecnologias.url}
            alt={"Logo de " + tecnologias.title || tecnologias.url.toString(). slice(0, -4)}
            title={tecnologias.title || tecnologias.url.toString(). slice(0, -4)}
          />
        </li>
      ))}
    </ul>
  );
}
