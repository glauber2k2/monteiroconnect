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

        <div className="flex items-center gap-12">
          <a href="#quemsomos" className="hidden md:block">
            Quem somos
          </a>
          <a href="#portfolio" className="hidden md:block">
            Portfolio
          </a>
          <a
            href="https://wa.me/message/5LIHPF2ZVXJZN1"
            target="_blank"
            className="px-4 py-2 border border-indigo-400 rounded-full md:text-base text-xs"
          >
            Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}
