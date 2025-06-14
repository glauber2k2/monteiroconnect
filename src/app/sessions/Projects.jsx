import React from "react";
import {
  Carousel,
  CarouselContainer,
  CarouselDots,
  CarouselNext,
  CarouselPrev,
  CarouselSlide,
} from "../components/SliderParallax";

export default function Projects() {
  const options = { loop: true };
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  return (
    <div className="w-full max-h-screen bg-[#060c11] text-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col h-full justify-center ">
        <div className="text-4xl lg:text-5xl font-medium mb-10">Portfolio</div>

        <Carousel options={options} autoplayOptions={autoplayOptions}>
          <CarouselContainer>
            <CarouselSlide key={1}>
              <div className="w-full bg-gradient-to-r from-transparent from-0% via-indigo-700/5 via-60% to-indigo-700/40 to-100% border-2 border-indigo-500 rounded-3xl transition-all duration-300  font-semibold backdrop-blur-sm flex lg:items-center justify-between flex-col-reverse lg:flex-row overflow-hidden">
                <div className="lg:px-12 px-8 lg:py-20 py-10 lg:h-full">
                  <span className="font-medium sm:text-xl text-indigo-400">
                    CASE DE <strong className="font-bold">SUCESSO</strong>
                  </span>
                  <h1 className="sm:text-3xl text-2xl">Equipe Bereshit</h1>

                  <h2 className="mt-6 text-lg font-bold hidden lg:block">
                    Sobre o projeto
                  </h2>
                  <p className="text-xs text-gray-300 mt-2 text-justify text-pretty hidden lg:block">
                    O site da Bereshit tem como objetivo divulgar o projeto e
                    arrecadar fundos para uma viagem missionária e evangelística
                    à cidade de Igaracy, na Paraíba. A página principal
                    apresenta as informações sobre a iniciativa, explicando sua
                    missão e impacto, além de oferecer formas interativas de
                    contato para doações de roupas e alimentos. O site também
                    conta com quizzes sobre o livro de Gênesis e uma playlist
                    especial do projeto.
                  </p>
                </div>

                <img
                  src="/assets/bereshitsite.jpg"
                  alt=""
                  className="object-top lg:w-1/2 object-cover lg:rounded-s-3xl rounded-t-lg"
                />
              </div>
            </CarouselSlide>
            <CarouselSlide key={2}>
              <div className="w-full bg-gradient-to-r from-transparent from-0% via-indigo-700/5 via-60% to-indigo-700/40 to-100% border-2 border-indigo-500 rounded-3xl transition-all duration-300  font-semibold backdrop-blur-sm flex lg:items-center justify-between flex-col-reverse lg:flex-row overflow-hidden">
                <div className="lg:px-12 px-8 lg:py-20 py-10 lg:h-full">
                  <span className="font-medium sm:text-xl text-indigo-400">
                    CASE DE <strong className="font-bold">SUCESSO</strong>
                  </span>
                  <h1 className="sm:text-3xl text-2xl">Nice Burguer</h1>

                  <h2 className="mt-6 text-lg font-bold hidden lg:block">
                    Sobre o projeto
                  </h2>
                  <p className="text-xs text-gray-300 mt-2 text-justify text-pretty hidden lg:block">
                    O site da Nice Burguer foi criado com o objetivo de ser o
                    canal oficial de apresentação da hamburgueria na internet.
                    Ele reúne, em um só lugar, todas as informações essenciais
                    para os clientes, como o cardápio completo com descrições e
                    preços dos produtos, além de oferecer formas de contato
                    direto com a equipe para pedidos, dúvidas e sugestões. A
                    proposta é facilitar o acesso do público aos serviços da
                    hamburgueria.
                  </p>
                </div>

                <img
                  src="/assets/burguersite.jpg"
                  alt=""
                  className=" lg:w-1/2 object-cover lg:rounded-s-3xl rounded-t-lg"
                />
              </div>
            </CarouselSlide>

            <CarouselSlide key={3}>
              <div className="w-full bg-gradient-to-r from-transparent from-0% via-indigo-700/5 via-60% to-indigo-700/40 to-100% border-2 border-indigo-500 rounded-3xl transition-all duration-300  font-semibold backdrop-blur-sm flex lg:items-center justify-between flex-col-reverse lg:flex-row overflow-hidden">
                <div className="lg:px-12 px-8 lg:py-20 py-10 lg:h-full">
                  <span className="font-medium sm:text-xl text-indigo-400">
                    CASE DE <strong className="font-bold">SUCESSO</strong>
                  </span>
                  <h1 className="sm:text-3xl text-2xl">Time Align</h1>

                  <h2 className="mt-6 text-lg font-bold hidden lg:block">
                    Sobre o projeto
                  </h2>
                  <p className="text-xs text-gray-300 mt-2 text-justify text-pretty hidden lg:block">
                    O TimeAlign é um sistema criado para facilitar agendamentos
                    dentro da empresa, permitindo que tudo seja feito de forma
                    prática e centralizada. Os funcionários têm acesso ao
                    próprio painel com seus agendamentos, e o sistema ainda
                    conta com um recurso de acúmulo de pontos para incentivar
                    participação e pontualidade.
                  </p>
                </div>

                <img
                  src="/assets/timesite.jpg"
                  alt=""
                  className=" lg:w-1/2 object-cover lg:rounded-s-3xl rounded-t-lg"
                />
              </div>
            </CarouselSlide>

            <CarouselSlide key={4}>
              <div className="w-full bg-gradient-to-r from-transparent from-0% via-indigo-700/5 via-60% to-indigo-700/40 to-100% border-2 border-indigo-500 rounded-3xl transition-all duration-300  font-semibold backdrop-blur-sm flex lg:items-center justify-between flex-col-reverse lg:flex-row overflow-hidden">
                <div className="lg:px-12 px-8 lg:py-20 py-10 lg:h-full">
                  <span className="font-medium sm:text-xl text-indigo-400">
                    CASE DE <strong className="font-bold">SUCESSO</strong>
                  </span>
                  <h1 className="sm:text-3xl text-2xl">Dev Glauber</h1>

                  <h2 className="mt-6 text-lg font-bold hidden lg:block">
                    Sobre o projeto
                  </h2>
                  <p className="text-xs text-gray-300 mt-2 text-justify text-pretty hidden lg:block">
                    Este site foi desenvolvido como uma plataforma de
                    apresentação profissional, com integração à API do GitHub
                    para exibir projetos e tecnologias em tempo real. Possui
                    sistema de troca de idioma, gerador de currículo em PDF e
                    abas dedicadas com documentação detalhada sobre formação
                    acadêmica, experiência profissional e trajetória de
                    carreira.
                  </p>
                </div>

                <img
                  src="/assets/glaubersite.jpg"
                  alt=""
                  className=" lg:w-1/2 object-cover lg:rounded-s-3xl rounded-t-lg"
                />
              </div>
            </CarouselSlide>
          </CarouselContainer>

          {/* Você tem total controle sobre o layout dos controles */}
          <div className="mt-4 grid grid-cols-[auto_1fr] items-center gap-5">
            <div className="flex items-center gap-2">
              <CarouselPrev />
              <CarouselNext />
            </div>
            <CarouselDots />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
