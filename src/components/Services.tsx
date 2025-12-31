export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Áreas de Atuação
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {["Trabalhista", "Civil", "Previdenciário"].map((item) => (
            <div
              key={item}
              className="border p-6 rounded hover:shadow transition"
            >
              <h4 className="font-bold text-xl mb-2">{item}</h4>
              <p className="text-gray-600">
                Atuação estratégica e personalizada para proteger seus direitos.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
