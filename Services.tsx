import { Shield, Leaf, Clock } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Controle de Pragas",
      description: "Eliminamos efetivamente insetos e roedores de sua propriedade."
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: "Métodos Ecológicos",
      description: "Utilizamos produtos seguros para o meio ambiente e sua saúde."
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-500" />,
      title: "Atendimento Rápido",
      description: "Resposta rápida para suas necessidades de desinsetização."
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

