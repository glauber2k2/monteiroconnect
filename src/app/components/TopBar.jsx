/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-black/10 p-4 top-0 fixed z-50 text-white ">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xl font-medium">
          <img
            src="/assets/logo.png"
            alt="imagem da logo"
            className="object-scale-down w-7"
          />
          MonteiroConnect
        </div>

        <div className="flex items-center gap-12">
          <button>Quem somos</button>
          <button>Portfolio</button>
          <a
            href=""
            className="px-4 py-2 border border-indigo-400 rounded-full"
          >
            Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}
