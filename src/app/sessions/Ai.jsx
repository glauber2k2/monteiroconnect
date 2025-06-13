import React from "react";

export default function Ai() {
  return (
    <div className="w-full max-h-screen bg-[#060c11] text-white py-10 sm:py-20 px-6">
      <div className="max-w-7xl mx-auto flex h-full items-center lg:gap-20 gap-4 bg-indigo-100/10 p-8 lg:p-10 backdrop-blur-sm rounded-3xl justify-center lg:justify-start">
        <img
          src="/assets/robot.png"
          alt=""
          className="object-scale-down lg:h-96 h-32 sm:h-56
          "
        />
        <div className="flex flex-col lg:w-1/2">
          <h1 className="lg:text-4xl font-medium text-xs sm:text-lg">
            Potencializado com
          </h1>
          <span className="bg-indigo-500 w-fit text-sm sm:text-3xl lg:text-5xl p-2 font-bold">
            Inteligencia Artificial
          </span>
          <article className="mt-4 md:mt-8 text-justify lg:text-lg sm:text-sm text-xs ">
            <span className="hidden sm:block">
              A Monteiro Connect utiliza Inteligência Artificial para maximizar
              a performance do seu site
            </span>
            adaptando conteúdo e apresentação de forma estratégica conforme o
            nicho de mercado e o público-alvo.
          </article>
        </div>
      </div>
    </div>
  );
}
