export function Header() {
  return (
    <header className="fixed top-0 z-50">
      <nav>
        <ul className="fixed flex w-full list-none p-5 space-x-5 text-center backdrop-opacity-10 backdrop-invert bg-black/30 text-white justify-end">
          <a href="#">
            <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
              Inicio
            </li>
          </a>
          <a href="#Sobre-mi">
            {" "}
            <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
              Sobre mi
            </li>
          </a>
          <a href="#Proyectos">
            {" "}
            <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
              Proyectos
            </li>
          </a>
          <a href="#Contactame">
            {" "}
            <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
              Contácteme
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
