import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AcierTech</h3>
            <p className="text-sm">
              Leader dans la fourniture de solutions en acier premium pour applications industrielles et commerciales.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">À Propos</a></li>
              <li><a href="/products" className="hover:text-white">Produits</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/careers" className="hover:text-white">Carrières</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contactez-nous</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@aciertech.fr</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Avenue de l'Acier, Paris</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 AcierTech. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm hover:text-white">Politique de Confidentialité</a>
              <a href="/terms" className="text-sm hover:text-white">Conditions d'Utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}