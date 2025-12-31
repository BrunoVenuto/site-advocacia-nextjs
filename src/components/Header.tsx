


export default function Header() {
    return(
        <header className="w-full bg-white shadow fixed top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">
                    Escritório Jurídico
                </h1>

                <nav className="hidden md:flex gap-6">
                    <a href="#sobre" className="text-gray-600 hover:text-black">Sobre</a>
                    <a href="#servicos" className="text-gray-600 hover:text-black">Atuação</a>
                    <a href="#contato" className="text-gray-600 hover:text-black">Contato</a>
                </nav>
            </div>
        </header>
    )
}