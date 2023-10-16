export function ListSvg({ srcSvg, altura= "h-10" }) {
  return (
    <ul className="grid grid-cols-autofit gap-1">
      {srcSvg.map((tecnologias, index) => (
        <li key={index} className="w-full flex justify-center align-middle ">
          <img
            className={altura +  " "}
            src={tecnologias.url}
            alt={"Logo de " + tecnologias.title || tecnologias.url.toString(). slice(0, -4)}
            title={tecnologias.title || tecnologias.url.toString(). slice(0, -4)}
          />
        </li>
      ))}
    </ul>
  );
}
