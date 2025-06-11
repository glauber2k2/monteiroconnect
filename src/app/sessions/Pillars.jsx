import { Check } from "lucide-react";
import React from "react";

export default function Pillars() {
  return (
    <div className="w-full py-36 bg-gradient-to-t from-[#060c11] via-indigo-950 to-[#060c11] flex items-center justify-center text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 w-full">
        <div className=" flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
            Nossos sites seguem <br />
            <span className="text-blue-400 font-bold text-5xl">4 </span>
            importantes pilares
          </h1>

          <h2 className="mt-4 text-lg">
            Nossos sites contam com pilares importantes para entregar
            perfomance, conversão e credibilidade para seu negocio.
          </h2>

          <ul className="mt-10 text-xl space-y-4">
            <li className="flex gap-2 items-center">
              <Check size={20} className="text-blue-400" />
              Velocidade
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="text-blue-400" />
              SEO Otimizado
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="text-blue-400" />
              Design
            </li>
            <li className="flex gap-2 items-center">
              <Check size={20} className="text-blue-400" />
              Responsividade
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
