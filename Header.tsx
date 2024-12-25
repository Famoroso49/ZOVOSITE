import Link from 'next/link'
import { Bug } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Bug size={32} />
          <span className="text-2xl font-bold">MF Zovo</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#services" className="hover:underline">Serviços</Link></li>
            <li><Link href="#about" className="hover:underline">Sobre</Link></li>
            <li><Link href="#contact" className="hover:underline">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

