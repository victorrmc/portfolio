import React, { useState } from 'react';

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed top-0 z-10">
      
      <nav className=" w-screen justify-items-end">
        <button onClick={handleToggleMenu} className={ showMenu ?  'hidden' : 'lg:hidden m-2 w-10 float-right '}><img className="w-16" src="MenuHamburguesa.svg" alt="" /></button>
        <ul className={ showMenu ? 'flex flex-col float-right rounded-l-3xl w-min text-center list-none p-5 backdrop-opacity-10  backdrop-invert bg-black/30 text-white ' : 'hidden lg:flex lg:flex-row lg:justify-end lg:w-full  text-center list-none p-5 lg:space-x-5 lg:text-center backdrop-opacity-10  backdrop-invert pr-8 bg-black/30 text-white ' }>
        <button onClick={handleToggleMenu} className=" lg:hidden flex justify-center"><img className="w-10 " src="MenuCerrar.svg" alt="" /></button>
          <a href="#">
            <li className="py-2 lg:p-2 rounded w-full  hover:bg-fuchsia-100  hover:text-gray-900">
              Inicio
            </li>
          </a>
          <a href="#Sobre-mi" className="m-0">
            <li className=" py-2 lg:p-2 rounded  w-full  hover:bg-fuchsia-100  hover:text-gray-900">
              Sobre mi
            </li>
          </a>
          <a href="#Proyectos">
            <li className="py-2 lg:p-2 rounded  w-full  hover:bg-fuchsia-100  hover:text-gray-900">
              Proyectos
            </li>
          </a>
          <a href="#Contactame">
            <li className="p-2 lg:p-2 rounded  w-full hover:bg-fuchsia-100  hover:text-gray-900">
              Contácteme
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
