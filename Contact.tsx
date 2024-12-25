import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
              <Input type="text" id="name" placeholder="Seu nome" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <Input type="email" id="email" placeholder="seu@email.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
              <Textarea id="message" placeholder="Como podemos ajudar?" required />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Enviar Mensagem</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

