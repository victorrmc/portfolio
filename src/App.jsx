import "./App.css";

function App() {
  return (
    <>
      <body className=" ">
        <header className="fixed top-0 z-50">
          <nav>
            <lu className="fixed flex w-full list-none p-5 space-x-5  backdrop-opacity-10 backdrop-invert bg-black/30 text-white justify-end">
             <a href="#"><li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
                Inicio
              </li></a> 
             <a href="#sobre-mi"> <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
                Sobre mi
              </li></a>
             <a href="#"> <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
                Proyectos
              </li></a>
             <a href="#"> <li className="p-2 text-white rounded  hover:bg-fuchsia-100  hover:text-gray-900">
                Contácteme
              </li></a>
            </lu>
          </nav>
        </header>

        <main className="flex flex-col items-center  w-full">
          <section className="flex flex-row items-center justify-center max-w-screen-lg  px-4 h-screen w-full bg-gray-900 animate-fade-up animate-once animate-duration-[3000ms] animate-delay-100">
            <article className="flex flex-col items-center gap-2 lg:flex-row-reverse">
              <div className="ml-10">
                <img
                  src="img/fotoPerfil2.jpg"
                  alt="Foto frontal Víctor Marrero Carrillo"
                  className=" w-52 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center space-y-1 md:items-start ">
                <h2 className="text-5xl text-yellow-300">
                  Víctor Marrero Carrillo
                </h2>
                <h3 className="text-3xl text-blue-300">
                  Full Stack Developer{" "}
                </h3>
                <p className="text-xl text-white text-balance">
                  Desarrollador con experiencia en aplicaciones web y
                  multiplataforma 👨‍💻{" "}
                </p>
                <div className="flex space-x-3 mt-3">
                  <a
                    className="ml-1 rounded-full p-1  hover:bg-black  "
                    href="https://github.com/victorrmc"
                  >
                    <svg
                      role="img"
                      className="w-10  "
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path fill="#FFF" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </a>
                  <a
                    className=" rounded-lg p-1  hover:bg-white  "
                    href="https://www.linkedin.com/in/v%C3%ADctor-marrero-carrillo-8b25a2234/"
                  >
                    <svg
                      role="img"
                      className="w-10 "
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path
                        fill="#0288D1"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </section>
          <section id="sobre-mi" className="flex flex-col items-center px-4 py-24 max-w-screen-lg w-full">
            <article className="flex flex-col  space-y-4 ">
              <h2 className="text-5xl text-white text-center">Sobre mi</h2>
              <p className=" text-white">
                Soy un apasionado desarrollador de software con +6 meses de
                experiencia. En mi experiencia laboral he trabajado tanto en
                desarrollador de app móvil con Xamarin y C#, como desarrollador
                Full Stack utilizando WordPress, PHP, TypeScript, HTML y CSS.
              </p>
              <p className=" text-white">
                Busco desafíos tecnológicos y oportunidades para seguir
                creciendo en el mundo del desarrollo de software. ¡Conéctate
                conmigo para explorar nuevas posibilidades juntos!
              </p>

            </article>
            <article className="flex flex-col my-5">
              <h3 className="text-3xl text-white text-center">Experiencia</h3>
              <p>ore</p>
            </article>
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
