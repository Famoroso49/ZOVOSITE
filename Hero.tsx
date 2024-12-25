import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">MF Zovo: Mestres em Desinsetização</h1>
        <p className="text-xl mb-8">Proteja seu ambiente contra pragas de forma eficiente e segura</p>
        <Button asChild>
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Solicite um Orçamento
          </a>
        </Button>
      </div>
    </section>
  )
}

