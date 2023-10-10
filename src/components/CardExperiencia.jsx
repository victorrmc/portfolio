import { ListSvg } from "./ListSvg";
export function CardExperiencia({ cargo, empresa, fecha, srcSvg, parrafos }) {
  return (
    <div className="lg:flex mx-4 h-auto w-auto bg-slate-800  space-y-6 lg:space-y-0 rounded-3xl p-5">
      <div className=" grid text-center lg:flex-1 lg:text-left lg:content-center space-y-2 mr-3 ">
        <p className="text-xl text-yellow-300 ">{cargo}</p>
        <p className="text-lg text-blue-300 text-balance">{empresa}</p>
        <p className="font-mono text-white">{fecha}</p>
        <p className=" pt-3 font-bold text-white">Tecnologías utilizadas:</p>
        <ListSvg srcSvg={ srcSvg } />
      </div>
      <div className=" space-y-3 grid lg:content-center lg:max-w-xl ">
        {parrafos.map((element, index) => (
          <p key={index} className="text-white">
            {element}
          </p>
        ))}
      </div>
    </div>
  );
}
