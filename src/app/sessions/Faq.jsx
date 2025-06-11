import React from "react";
import Collapsible from "../components/Collapsible";
import { CircleHelp } from "lucide-react";

export default function Faq() {
  return (
    <div className="h-screen w-full bg-[#060c11] text-white flex py-20 justify-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col w-full items-center">
        <h1 className="text-center text-2xl font-bold flex gap-2 items-center">
          <CircleHelp size={28} />
          Perguntas frequentes
        </h1>

        <div className="mt-8 space-y-4 flex flex-col w-full sm:max-w-4xl">
          <Collapsible title={"Como funciona o processo de Criação?"}>
            <ol>
              <li>
                <div>
                  <strong>Primeiro, uma boa conversa:</strong>
                  <p>
                    Vamos marcar um papo para você nos contar tudo sobre sua
                    ideia e o que você espera do projeto.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Um rascunho da página:</strong>
                  <p>
                    Criamos um esboço simples, como um desenho, para você ver e
                    aprovar a organização inicial do site.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Dando vida ao visual:</strong>
                  <p>
                    Com o rascunho aprovado, a gente começa a criar o visual
                    completo, com cores, fontes e imagens.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Sua aprovação final:</strong>
                  <p>
                    Você olha o resultado final e diz se está tudo certo ou se
                    precisa de algum ajuste antes de continuarmos.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Deixando tudo mais rápido:</strong>
                  <p>
                    Nesta etapa, fazemos ajustes técnicos para garantir que seu
                    site carregue bem rápido para todo mundo.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Seu site no ar!</strong>
                  <p>
                    É aqui que colocamos seu site online, prontinho para você
                    usar e começar a ter resultados.
                  </p>
                </div>
              </li>
            </ol>
          </Collapsible>
          <Collapsible title={"Quais as formas de pagamento?"}>
            <ul className="list-disc px-8 space-y-2">
              <li>PIX (20% de Desconto.)</li>
              <li>Cartão de crédito em até 12x sem juros.</li>
            </ul>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}
