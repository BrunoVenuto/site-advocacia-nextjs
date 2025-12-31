"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Aqui futuramente você pode integrar API ou WhatsApp
    console.log({ name, phone, message });

    alert("Mensagem enviada com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Fale com um advogado
      </h2>

      <p className="text-gray-600 mb-4">
        Preencha o formulário e entraremos em contato.
      </p>

      <input
        type="text"
        placeholder="Seu nome"
        className="w-full border rounded px-4 py-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="tel"
        placeholder="WhatsApp"
        className="w-full border rounded px-4 py-3"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <textarea
        placeholder="Conte brevemente sua situação"
        className="w-full border rounded px-4 py-3 h-28"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
      >
        Enviar mensagem
      </button>

      <p className="text-xs text-gray-500 text-center">
        Atendimento sigiloso e sem compromisso.
      </p>
    </form>
  );
}
