import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "../components/Accordion";
import { CircleHelp } from "lucide-react";

export default function Faq() {
  return (
    <div className="h-screen w-full bg-[#060c11] text-white flex py-20 justify-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col w-full items-center">
        <h1 className="text-center text-2xl font-bold flex gap-2 items-center">
          <CircleHelp size={28} />
          Perguntas frequentes
        </h1>

        <AccordionRoot className="mt-8 w-full sm:max-w-4xl space-y-4">
          <AccordionItem value="criacao">
            <AccordionTrigger>
              Como funciona o processo de Criação?
            </AccordionTrigger>
            <AccordionContent>
              <ol className="space-y-4 p-2">
                <li>
                  <div>
                    <strong>Primeiro, uma boa conversa:</strong>
                    <p className="text-gray-400">
                      Vamos marcar um papo para você nos contar tudo sobre sua
                      ideia e o que você espera do projeto.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Um rascunho da página:</strong>
                    <p className="text-gray-400">
                      Criamos um esboço simples, como um desenho, para você ver
                      e aprovar a organização inicial do site.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Dando vida ao visual:</strong>
                    <p className="text-gray-400">
                      Com o rascunho aprovado, a gente começa a criar o visual
                      completo, com cores, fontes e imagens.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Sua aprovação final:</strong>
                    <p className="text-gray-400">
                      Você olha o resultado final e diz se está tudo certo ou se
                      precisa de algum ajuste antes de continuarmos.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Deixando tudo mais rápido:</strong>
                    <p className="text-gray-400">
                      Nesta etapa, fazemos ajustes técnicos para garantir que
                      seu site carregue bem rápido para todo mundo.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Seu site no ar!</strong>
                    <p className="text-gray-400">
                      É aqui que colocamos seu site online, prontinho para você
                      usar e começar a ter resultados.
                    </p>
                  </div>
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="pagamento">
            <AccordionTrigger>Quais as formas de pagamento?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc space-y-2 pl-6">
                <li>PIX (20% de Desconto.)</li>
                <li>Cartão de crédito em até 12x sem juros.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="responsividade">
            <AccordionTrigger>As páginas são responsivas?</AccordionTrigger>
            <AccordionContent>
              <p>
                Sim! Todos os nossos sites são totalmente responsivos. Isso
                significa que eles se adaptam automaticamente a diferentes
                tamanhos de tela, oferecendo uma ótima experiência tanto em
                dispositivos móveis, como celulares e tablets, quanto em telas
                maiores, como monitores e televisões.
              </p>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </div>
  );
}
