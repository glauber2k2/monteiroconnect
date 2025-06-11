import { Instagram, Mail } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="max-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto flex h-full py-10 backdrop-blur-sm justify-between items-center">
        <div>
          <h1 className="text-xl">Monteiro Connect</h1>
          <h2 className="text-sm">Conectando você aos clientes certos!</h2>
          <a href="" className="flex items-center gap-2 mt-4 text-xs">
            <Instagram size={18} /> Instagram
          </a>
        </div>

        <small>© 2025 Monteiro Connect. Todos os direitos reservados.</small>
      </div>
    </div>
  );
}
