"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Gamepad2,
  Zap,
  ShieldCheck,
  Cog,
  CardSim,
  CreditCard,
  Scaling,
  Brain,
  MousePointerClick,
} from "lucide-react";

const SLIDES_DATA = [
  {
    icon: <Scaling size={26} className="text-indigo-500" />,
    title: "Design Responsivo",
  },
  {
    icon: <CreditCard size={26} className="text-indigo-500" />,
    title: "Pagamento Seguro",
  },
  {
    icon: <MousePointerClick size={26} className="text-indigo-500" />,
    title: "Estrutura Interativa",
  },
  {
    icon: <Brain size={26} className="text-indigo-500" />,
    title: "Otimizado por IA",
  },
  {
    icon: <Zap size={26} className="text-indigo-500" />,
    title: "Velocidade",
  },
  {
    icon: <ShieldCheck size={26} className="text-indigo-500" />,
    title: "Equipe Especialista",
  },
];

export function AttributeAutomaticSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      playOnInit: true,
    }),
  ]);

  return (
    <div className="w-full bg-[#060c11] py-4">
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] max-w-7xl mx-auto"
        ref={emblaRef}
      >
        <div className="flex">
          {SLIDES_DATA.map((slide, index) => (
            <div
              className="relative flex-shrink-0 min-w-0 basis-full pl-4 md:basis-1/3 xl:basis-1/4"
              key={index}
            >
              <div className="flex items-center justify-center p-6 gap-2">
                {slide.icon}
                <h3 className="text-lg font-semibold text-white">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
