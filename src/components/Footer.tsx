import React from 'react'
import { Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Globe className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold">TechNova</span>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
          <div className="text-sm text-gray-400">
            © 2024 TechNova. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer