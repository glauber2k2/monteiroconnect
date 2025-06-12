/* eslint-disable @next/next/no-img-element */
import { Menu } from "lucide-react";
import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-black/5 p-4 top-0 fixed z-50 text-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo.png"
            alt="imagem da logo"
            className="object-scale-down sm:w-7 w-5"
          />
          <p className="text-sm sm:text-xl font-medium">MonteiroConnect</p>
        </div>

        <div className="md:flex items-center gap-12 hidden">
          <button>Quem somos</button>
          <button>Portfolio</button>
          <a
            href=""
            className="px-4 py-2 border border-indigo-400 rounded-full"
          >
            Orçamento
          </a>
        </div>

        <Menu className="block sm:hidden" />
      </div>
    </div>
  );
}
