import { Instagram, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="max-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto flex h-full py-10 backdrop-blur-sm justify-between md:items-center px-6 flex-col md:flex-row gap-6">
        <div>
          <h1 className="text-xl">Monteiro Connect</h1>
          <h2 className="text-sm">Conectando você aos clientes certos!</h2>
          <a
            href="https://instagram.com/monteiroconnect"
            target="_blank"
            className="flex items-center gap-2 mt-4 text-xs"
          >
            <Instagram size={18} /> Instagram
          </a>
        </div>

        <small className="text-gray-400">
          © 2025 Monteiro Connect. Todos os direitos reservados.
        </small>
      </div>
    </div>
  );
}
