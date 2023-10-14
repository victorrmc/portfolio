export function Footer() {
    return (
        <footer id="Contactame" className="space-y-3 w-screen text-center bg-slate-950">
          
        <div className="flex flex-1 items-center justify-center space-x-2">
          <h1 className="text-white">Víctor Marrero Carrillo - Portfolio</h1>
          <a
            className="ml-1 jello-horizontal rounded-full p-1  hover:bg-black  "
            href="https://github.com/victorrmc"
          >
            <img
              className="w-20"
              src="Github.svg"
              alt="GitHub"
              title="GitHub"
            />
          </a>
          <a
            className=" rounded-full   hover:bg-white transition-all hover:drop-shadow-[0px_0px_8px_rgba(255,255,255,0.35)]  m-1 "
            href="https://www.linkedin.com/in/v%C3%ADctor-marrero-carrillo-8b25a2234/"
          >
            <img
              className="w-20"
              src="LinkedIn.svg"
              title="LinkedIn"
              alt="Logo LinkedIn"
            />
          </a>
          <a
            className=" rounded-lg p-1 heartBeat   "
            href="mailto:vitortenemc@gmail.com"
          >
            <img
              className="w-20"
              src="Gmail.svg"
              title="Gmail"
              alt="Logo Gmail"
            />
          </a>
        </div>
      </footer>
    )
}