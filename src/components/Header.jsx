import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 z-10 w-full">
      <nav className="w-screen flex flex-col items-end ">
        {/* Hamburger button */}
        <button
          onClick={handleToggleMenu}
          className={
            showMenu
              ? "lg:hidden m-2 w-10 float-right botonHamburguesa open"
              : "lg:hidden m-2 w-10 float-right botonHamburguesa"
          }
        >
          <div className=""></div>
          <div></div>
          <div></div>
        </button>

        {/* Desktop: contenedor flex para separar navegación de banderas */}
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:w-full lg:px-8 lg:py-5 backdrop-opacity-10 backdrop-invert bg-gray-800/30 text-white">
          {/* Navegación principal a la izquierda */}
          <ul className="flex flex-row space-x-5 text-center list-none">
            <a href="#">
              <li className="p-2 rounded hover:bg-fuchsia-100 hover:text-gray-900">
                {t("header.home")}
              </li>
            </a>
            <a href="#Sobre-mi">
              <li className="p-2 rounded hover:bg-fuchsia-100 hover:text-gray-900">
                {t("header.about")}
              </li>
            </a>
            <a href="#Proyectos">
              <li className="p-2 rounded hover:bg-fuchsia-100 hover:text-gray-900">
                {t("header.projects")}
              </li>
            </a>
            <a href="#Contactame">
              <li className="p-2 rounded hover:bg-fuchsia-100 hover:text-gray-900">
                {t("header.contact")}
              </li>
            </a>
          </ul>

          {/* Banderas a la derecha */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeLanguage("es")}
              className={`mx-1 ${
                i18n.language === "es" ? "opacity-100" : "opacity-50"
              }`}
            >
              <img
                src="/img/spain_flag.svg"
                alt="Spanish Flag"
                className="h-6 w-6"
              />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`mx-1 ${
                i18n.language === "en" ? "opacity-100" : "opacity-50"
              }`}
            >
              <img src="/img/us_flag.svg" alt="US Flag" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile: menú desplegable */}
        <ul
          className={
            showMenu
              ? "flex flex-col lg:hidden absolute top-full right-0 rounded-l-3xl w-min text-center list-none p-5 backdrop-opacity-10 backdrop-invert bg-gray-800/30 text-white"
              : "hidden"
          }
        >
          <a href="#">
            <li className="py-2 rounded w-full hover:bg-fuchsia-100 hover:text-gray-900">
              {t("header.home")}
            </li>
          </a>
          <a href="#Sobre-mi" className="m-0">
            <li className=" py-2 lg:p-2 rounded  w-full  hover:bg-fuchsia-100  hover:text-gray-900 whitespace-nowrap">
              {t("header.about")}
            </li>
          </a>
          <a href="#Proyectos">
            <li className="py-2 rounded w-full hover:bg-fuchsia-100 hover:text-gray-900">
              {t("header.projects")}
            </li>
          </a>
          <a href="#Contactame">
            <li className="p-2 lg:p-2 rounded  w-full hover:bg-fuchsia-100  hover:text-gray-900 whitespace-nowrap">
              {t("header.contact")}
            </li>
          </a>
          {/* Banderas en el menú móvil */}
          <li className="py-2 rounded w-full flex justify-center items-center space-x-2">
            <button
              onClick={() => changeLanguage("es")}
              className={`mx-1 ${
                i18n.language === "es" ? "opacity-100" : "opacity-50"
              }`}
            >
              <img
                src="/img/spain_flag.svg"
                alt="Spanish Flag"
                className="h-6 w-6"
              />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`mx-1 ${
                i18n.language === "en" ? "opacity-100" : "opacity-50"
              }`}
            >
              <img src="/img/us_flag.svg" alt="US Flag" className="h-6 w-6" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
