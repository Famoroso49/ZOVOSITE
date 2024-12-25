export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} MF Zovo - Todos os direitos reservados</p>
        <p className="mt-2">Mestres em Desinsetização</p>
      </div>
    </footer>
  )
}

