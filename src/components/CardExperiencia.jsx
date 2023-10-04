export function CardExperiencia({ cargo, empresa, fecha, srcTencologias }){
    return(
        <div className="lg:flex mx-4 h-auto w-auto bg-slate-800  space-y-6 lg:space-y-0 rounded-3xl p-5">
              <div className="lg:flex-initial grid text-center  lg:text-left lg:content-center space-y-2 mr-3">
                <p className="text-xl text-yellow-300 ">
                  {cargo}
                </p>
                <p className="text-lg text-blue-300">
                  {empresa}
                </p>
                <p className="font-mono text-white">
                  {fecha}
                </p>
                <p className=" pt-3 font-bold text-white">
                  Tecnologías utilizadas:
                </p>
                <ul className="flex items-center justify-center space-x-2">
                  <li>
                    <img
                      className="w-10"
                      src="Typescript_logo_2020.svg"
                      alt="Logo Typescript"
                      title="Typescript"
                    />
                  </li>
                  <li>
                    <img
                      className="w-14"
                      src="PHP-logo.svg"
                      alt="Logo PHP"
                      title="PHP"
                    />
                  </li>
                  <li>
                    <img
                      className="w-10"
                      src="HTML5_Badge.svg"
                      alt="Logo HTML5"
                      title="HTML5"
                    />
                  </li>
                  <li>
                    <img
                      className="w-10"
                      src="CSS3_logo.svg"
                      alt="Logo CSS3"
                      title="CSS3"
                    />
                  </li>
                  <li>
                    <img
                      className="w-10"
                      src="Wordpress-Logo.svg"
                      alt="Logo HTML5"
                      title="HTML5"
                    />
                  </li>
                </ul>
              </div>
              <div className="lg:flex-1 space-y-3 s ">
                <p className="text-white">
                  En mi rol en Ashotel, desempeñé un papel Full Stack. Primero,
                  en el área de desarrollo web, trabajé en la actualización y
                  creación de nuevas páginas en la sección de Observatorio,
                  utilizando WordPress con backend en PHP para mejorar la
                  experiencia en línea.
                </p>
                <p className="text-white">
                  Además, en el ámbito de la automatización y gestión de datos,
                  utilicé TypeScript para crear automatizaciones en Excel,
                  mejorando la eficiencia de los flujos de trabajo. También
                  implementé automatizaciones con Microsoft Power Automate para
                  simplificar procesos internos.
                </p>
                <p className="text-white">
                  Finalmente, lideré la creación de un MVP (Producto Mínimo
                  Viable) en Power Apps, lo que contribuyó a la optimización de
                  tareas y a una mayor eficiencia operativa en Ashotel.
                </p>
              </div>
            </div>
    )
}