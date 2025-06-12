"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; // Importe o plugin de autoplay
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- CONFIGURAÇÃO DO CONTEXTO ---
const CarouselContext = createContext(null);
const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "useCarousel deve ser usado dentro de um provedor <Carousel />"
    );
  }
  return context;
};

// --- COMPONENTE PAI (PROVEDOR) ---
// Para obter o efeito de slides "espiando", passe opções como esta ao usar o componente:
// const OPTIONS = { align: 'center', loop: true, skipSnaps: false };
// Para autoplay, você pode passar as opções do plugin na propriedade autoplayOptions
function Carousel({ children, options, autoplayOptions }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    // Inicialize o plugin de autoplay com as opções fornecidas
    Autoplay(autoplayOptions),
  ]);

  // Estado para os controles (botões e pontos)
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // --- MANIPULADORES DE CONTROLE ---
  const onPrevButtonClick = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onDotButtonClick = useCallback(
    (index) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  // --- EFEITO PARA SINCRONIZAR O ESTADO COM A API EMBLA ---
  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);

    onInit();
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const contextValue = {
    emblaRef,
    onPrevButtonClick,
    onNextButtonClick,
    canScrollPrev,
    canScrollNext,
    scrollSnaps,
    selectedIndex,
    onDotButtonClick,
  };

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className="">{children}</div>
    </CarouselContext.Provider>
  );
}

// --- COMPONENTES FILHOS (CONSUMIDORES) ---

function CarouselContainer({ children }) {
  const { emblaRef } = useCarousel();
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
}

function CarouselSlide({ children }) {
  return (
    <div className="relative min-w-0 basis-4/5 flex-shrink-0 flex-grow-0 px-4">
      <div className="relative lg:h-[27rem] overflow-hidden">
        <div className="embla-parallax-layer relative flex h-full w-full justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

function CarouselPrev() {
  const { onPrevButtonClick, canScrollPrev } = useCarousel();
  return (
    <button
      className="flex size-12 items-center justify-center text-indigo-900 disabled:text-indigo-900/50"
      onClick={onPrevButtonClick}
      disabled={!canScrollPrev}
    >
      <ChevronLeft />
    </button>
  );
}

function CarouselNext() {
  const { onNextButtonClick, canScrollNext } = useCarousel();
  return (
    <button
      className="flex size-12 items-center justify-center text-indigo-900 disabled:text-indigo-900/50"
      onClick={onNextButtonClick}
      disabled={!canScrollNext}
    >
      <ChevronRight />
    </button>
  );
}

function CarouselDots() {
  const { scrollSnaps, selectedIndex, onDotButtonClick } = useCarousel();
  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotButtonClick(index)}
          className="flex size-8 items-center justify-center rounded-full"
          type="button"
        >
          <div
            className={`size-3 rounded-full transition-colors duration-200 ${
              index === selectedIndex ? "bg-indigo-900" : "bg-indigo-900/40"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export {
  Carousel,
  CarouselContainer,
  CarouselSlide,
  CarouselPrev,
  CarouselNext,
  CarouselDots,
};
