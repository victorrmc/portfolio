export function ListSvg({ srcSvg, altura = 'h-10' }) {
  return (
    <ul className="flex flex-1 items-center justify-center space-x-2 ">
      {srcSvg.map((tecnologias, index) => (
        <li key={index}>
          <img
            className={altura}
            src={tecnologias.url}
            alt={"Logo de " + tecnologias.title}
            title={tecnologias.title}
          />
        </li>
      ))}
    </ul>
  );
}
