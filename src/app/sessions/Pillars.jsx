import { Check } from "lucide-react";
import React from "react";

export default function Pillars() {
  return (
    <div className="w-full py-10 lg:py-20 bg-[#060c11] flex items-center justify-center text-white">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between gap-8 flex-col sm:flex-row relative">
        <div className=" flex flex-col lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            Nossos sites seguem <br />
            <span className="text-blue-400 font-bold md:text-5xl">4 </span>
            importantes pilares
          </h1>

          <h2 className="mt-4 text-sm md:text-lg text-pretty text-justify">
            Nossos sites contam com pilares importantes para entregar
            perfomance, conversão e credibilidade para seu negocio.
          </h2>

          <ul className="mt-6 md:mt-10 md:text-xl space-y-2 lg:space-y-4">
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
        <img
          src="/assets/cerebro.png"
          alt=""
          className="object-cover w-40 sm:w-1/3 absolute -bottom-4 right-7 sm:static"
        />
      </div>
    </div>
  );
}
