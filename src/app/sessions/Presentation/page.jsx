"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <div className="min-h-screen px-32 grid grid-cols-2 justify-center items-center">
      <div className="w-full flex flex-col justify-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold mb-10"
        >
          Sua Empresa Ainda Não Está na Internet? Seus Concorrentes Estão
          Vendendo Online. E Você?
        </motion.h1>

        <motion.h2
          className="text-2xl mb-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Com a Monteiro Connect, você transforma sua presença online e começa a
          converter visitantes em clientes pelo WhatsApp. Simples, rápido e com
          resultados reais.
        </motion.h2>

        <motion.button
          className="w-fit bg-blue-400 py-4 px-8 font-bold uppercase rounded-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          Quero meu site agora!
        </motion.button>
      </div>

      <motion.img
        width={720}
        height={720}
        alt="imagem notebook"
        src={"/assets/laptop.png"}
        className="object-cover"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
