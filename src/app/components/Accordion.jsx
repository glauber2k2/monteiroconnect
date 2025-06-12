"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// --- 1. Criação dos Contextos ---
// Contexto principal para gerenciar o estado do Accordion (qual item está aberto)
const AccordionContext = createContext(null);

// Contexto do item para que Trigger e Content saibam a qual item pertencem
const AccordionItemContext = createContext(null);

// --- 2. Componente Raiz: AccordionRoot ---
// Este componente é o "provedor" que gerencia todo o estado.
const AccordionRoot = ({ children, defaultValue, ...props }) => {
  // Estado para armazenar o `value` do item aberto.
  const [openValue, setOpenValue] = useState(defaultValue || null);

  // Função para abrir/fechar um item.
  const toggleItem = (value) => {
    setOpenValue((prevValue) => (prevValue === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openValue, toggleItem }}>
      <div className="space-y-4" {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// --- 3. Componente do Item: AccordionItem ---
// Define a fronteira de cada item do acordeão e fornece seu `value` único.
const AccordionItem = ({ children, value, ...props }) => {
  if (!value) {
    throw new Error("AccordionItem deve ter uma propriedade 'value' única.");
  }

  return (
    <AccordionItemContext.Provider value={value}>
      <div
        className="w-full mx-auto rounded-2xl shadow-md bg-black/30 overflow-hidden"
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

// --- 4. Componente Gatilho: AccordionTrigger ---
// O botão que o usuário clica para abrir/fechar o conteúdo.
const AccordionTrigger = ({ children, ...props }) => {
  const { openValue, toggleItem } = useContext(AccordionContext);
  const itemValue = useContext(AccordionItemContext);

  if (itemValue === null) {
    throw new Error(
      "AccordionTrigger deve ser usado dentro de um AccordionItem."
    );
  }

  const isOpen = openValue === itemValue;

  return (
    <button
      onClick={() => toggleItem(itemValue)}
      className="w-full flex justify-between items-center py-4 px-6 text-left font-semibold text-lg hover:bg-black/50 transition-colors duration-300 text-blue-400"
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${itemValue}`}
      {...props}
    >
      {children}
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.span>
    </button>
  );
};

// --- 5. Componente de Conteúdo: AccordionContent ---
// O contêiner que é exibido ou ocultado.
const AccordionContent = ({ children, ...props }) => {
  const { openValue } = useContext(AccordionContext);
  const itemValue = useContext(AccordionItemContext);

  if (itemValue === null) {
    throw new Error(
      "AccordionContent deve ser usado dentro de um AccordionItem."
    );
  }

  const isOpen = openValue === itemValue;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`accordion-content-${itemValue}`}
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto", opacity: 1 },
            collapsed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
          role="region"
          {...props}
        >
          <div className="p-4 text-gray-400 text-sm">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent };
