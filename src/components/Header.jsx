export function Header() {
  return (
    <header className="fixed top-0 z-50">
      <nav>
        <lu className="fixed flex w-full list-none p-5 space-x-5  backdrop-opacity-10 backdrop-invert bg-black/30 text-white justify-end">
          <a href="#">
            <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
              Inicio
            </li>
          </a>
          <a href="#sobre-mi">
            {" "}
            <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
              Sobre mi
            </li>
          </a>
          <a href="#">
            {" "}
            <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
              Proyectos
            </li>
          </a>
          <a href="#">
            {" "}
            <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
              Contácteme
            </li>
          </a>
        </lu>
      </nav>
    </header>
  );
}
