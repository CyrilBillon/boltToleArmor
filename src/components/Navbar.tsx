import React from 'react';
import { Search, User, Menu } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 relative">
      <div className="absolute inset-0">
        <img
          src="/fondGris.png"
          alt="Fond"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative bg-white/80 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-primary">Accueil</a>
              <a href="/products" className="text-gray-700 hover:text-primary">Produits</a>
              <a href="/about" className="text-gray-700 hover:text-primary">À Propos</a>
              <a href="/contact" className="text-gray-700 hover:text-primary">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-100/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Search className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  className="bg-transparent border-none focus:outline-none ml-2 w-64"
                />
              </div>
              <button className="flex items-center text-gray-700 hover:text-primary">
                <User className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Connexion</span>
              </button>
              <button className="md:hidden">
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}