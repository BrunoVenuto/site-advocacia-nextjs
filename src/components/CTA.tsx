// Fundo do funil – conversão


interface ctaProps {
  onOpenModal: () => void;
}

export default function CTA({onOpenModal}: ctaProps) {
  return (
    <section id="contato" className="py-20 bg-black text-white text-center">
      <h3 className="text-3xl font-bold mb-6">
        Precisa de orientação jurídica?
      </h3>

      <button
        onClick={onOpenModal}
        className="bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-200"
      >
        Falar com um advogado agora
      </button>
    </section>
  );
}
