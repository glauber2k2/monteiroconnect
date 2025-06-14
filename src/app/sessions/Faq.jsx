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
    <div
      className="md:min-h-screen w-full bg-[#060c11] flex py-10 md:py-20 justify-center  text-white via-55%"
      style={{
        background:
          "radial-gradient(ellipse 80% 90% at center, #312e8140 0%, #060c11 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col w-full items-center">
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

          <AccordionItem value="ia">
            <AccordionTrigger>
              Como é utilizada IA na criação do site?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Nosso site é potencializado por inteligência artificial para
                entregar uma experiência mais estratégica e eficiente. A IA
                analisa o nicho de mercado da página e o perfil do público-alvo
                para direcionar tanto a estrutura quanto a copy de forma
                persuasiva e personalizada. Isso significa que cada elemento do
                site,desde os títulos até as chamadas para ação é otimizado para
                atrair, engajar e converter com mais precisão.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tempo">
            <AccordionTrigger>
              Quanto tempo leva para o projeto ficar pronto?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                O tempo de desenvolvimento pode variar conforme as demandas de
                cada projeto. Para landing pages, o prazo costuma ser de 2 a 5
                dias úteis, de acordo com o nível de complexidade e os detalhes
                solicitados. Já para sites completos, o desenvolvimento
                geralmente leva entre 4 a 7 dias úteis. A participação ativa do
                cliente — como o envio rápido de informações e feedback — também
                pode influenciar diretamente na velocidade de entrega.
              </p>
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
