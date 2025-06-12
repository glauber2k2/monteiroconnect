"use client";

import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tl from-[#060c11] via-[#060c11] to-indigo-900 text-white via-55%">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:items-center justify-end md:flex-row min-h-screen gap-10 pt-20 md:pt-0 flex flex-col-reverse">
        <div className="w-full flex flex-col md:justify-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" font-bold mb-4 text-pretty"
          >
            <h1 className="text-xl lg:text-5xl">
              Sua Empresa ainda não está na Internet?
            </h1>
            <h1 className="mt-4 text-lg lg:text-3xl">
              Seus concorrentes estão vendendo online. Você está?
            </h1>
          </motion.div>

          <motion.h2
            className="lg:text-xl mb-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Com a Monteiro Connect, você transforma sua presença online e começa
            a converter visitantes em clientes pelo WhatsApp. Simples, rápido e
            com resultados reais.
          </motion.h2>

          <motion.button
            className="w-fit bg-indigo-400 py-4 px-8 font-bold uppercase rounded-full"
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
          className="object-cover w-2/3 sm:w-1/2 lg:w-full max-w-xl mx-auto"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
