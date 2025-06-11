import React from "react";

export default function Ai() {
  return (
    <div className="w-full max-h-screen bg-[#060c11] text-white py-20">
      <div className="max-w-7xl mx-auto flex h-full items-center gap-20 bg-indigo-100/10 p-10 backdrop-blur-sm rounded-3xl">
        <img
          src="/assets/robot.png"
          alt=""
          className="object-scale-down h-96
          "
        />
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl font-medium">Potencializado com </h1>
          <span className="bg-indigo-500 w-fit text-5xl p-2 font-bold">
            Inteligencia Artificial
          </span>
          <article className="mt-8 text-justify text-lg">
            A Monteiro Connect utiliza Inteligência Artificial para maximizar a
            performance do seu site, adaptando conteúdo e apresentação de forma
            estratégica conforme o nicho de mercado e o público-alvo.
          </article>
        </div>
      </div>
    </div>
  );
}
