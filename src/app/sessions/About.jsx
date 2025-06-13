import React from "react";

export default function About() {
  return (
    <div
      className=" w-full  flex py-10 md:py-20 justify-center text-white"
      style={{
        background:
          "radial-gradient(ellipse 90% 100% at center, #312e8160 0%, #060c11 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between gap-10 w-full flex-col md:flex-row">
        <img
          src="/assets/logoimage.png"
          alt=""
          className="w-[500px] h-[500px] object-cover rounded-2xl hidden lg:block"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl border-l-4 border-indigo-600 w-fit pl-4 font-medium mb-8">
            Quem somos?
          </h1>
          <h2 className="text-gray-300 mb-6 text-xs sm:text-sm xl:text-base">
            A Monteiro Connect é uma agência de tecnologia especializada na
            criação de sites profissionais, desenvolvidos por alguém com
            graduação na área e sólida experiência no desenvolvimento web. Cada
            projeto é planejado com foco em desempenho, usabilidade e
            posicionamento digital — entregamos sites personalizados, modernos e
            otimizados para atrair os clientes certos e gerar resultado. Nosso
            compromisso é transformar sua presença online em um ativo
            estratégico, com credibilidade, eficiência e qualidade técnica.
          </h2>
          <h1 className="sm:text-xl font-semibold mb-2 text-center md:text-start">
            Conhecimento técnico em:
          </h1>
          <div
            className="flex flex-wrap md:gap-4 gap-2
           items-center mb-6 text-xs xl:text-base justify-center md:justify-start"
          >
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              React.js
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              React Native
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              Next.js
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              Javascript
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              Typescript
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              Html
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              CSS
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              TailwindCSS
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              Figma
            </span>
            <span className="px-4 py-2 bg-indigo-600 font-bold rounded-full">
              UX Design
            </span>
          </div>
          <button className="mt-2 -auto px-4 py-3 font-semibold bg-indigo-500 rounded-full">
            Fazer orçamento grátis
          </button>
        </div>
      </div>
    </div>
  );
}
