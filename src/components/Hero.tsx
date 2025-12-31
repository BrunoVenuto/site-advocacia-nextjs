interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Defendemos seus direitos com estratégia e clareza
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Atendimento jurídico humano e transparente.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Falar com um advogado
          </button>
        </div>
      </div>
    </section>
  );
}
