export function Contactame() {
  return (
    <section
      id="Contactame"
      className=" max-w-screen-lg space-y-3 text-center  w-full px-3 py-4"
    >
      <h1 className="text-5xl mb-5 text-white text-center">Contáctame</h1>
      <article className=" shadow-lg shadow-black rounded-3xl py-8 bg-slate-950 mx-4 space-y-2">
        <h2 className="text-white py-3">
          No dudes en contactarme si mi perfil te parece interesante{" "}
        </h2>
        <div className="flex flex-1 items-center justify-center align-middle p-3 space-x-1 lg:space-x-6">
          <a
            className="ml-1  rounded-full p-1    "
            href="https://github.com/victorrmc"
          >
            <p className="text-white">Código</p>
            <div className="jello-horizontal ">
              <img
                className="w-14 mt-1"
                src="Github.svg"
                alt="GitHub"
                title="GitHub"
              />
            </div>
          </a>
          <a
            className=" "
            href="https://www.linkedin.com/in/v%C3%ADctor-marrero-carrillo-8b25a2234/"
          >
            <p className="text-white">LinkedIn</p>
            <img
              className="w-14 mt-1 hover:bg-white rounded-2xl  m-1  transition-all hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.35)]"
              src="LinkedIn.svg"
              title="LinkedIn"
              alt="Logo LinkedIn"
            />
          </a>
          <a className=" p-1 " href="mailto:victortenemc@gmail.com">
            <p className="text-white">Gmail</p>
            <div className="heartBeat">
              <img
                className="h-14 mt-1   hover:bg-white rounded-lg "
                src="Gmail.svg"
                title="Gmail"
                alt="Logo Gmail"
              />
            </div>
          </a>
        
          <a
            className="flex flex-col items-center justify-center"
            href="/CV/CV-VictorMarreroCarrillo.pdf"
            title="Curriculum Vitae"
          >
            <p className="text-white text-center">Currículum Vitae</p>
            <p className="w-14 h-14  rounded-lg animated heartBeat bg-yellow-300 flex align-middle justify-center flex-col   mt-1  hover:bg-black hover:text-yellow-300 text-black text-2xl">
              CV
            </p>
          </a>
        </div>
      </article>
    </section>
  );
}
