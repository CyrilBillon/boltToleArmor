import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-primary-dark to-primary">
      <div className="absolute inset-0">
        <img
          src="/fondGris.png"
          alt="Production de tôles d'acier"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Colonne de gauche avec le logo, titre et bouton */}
          <div className="flex flex-col items-center text-center">
            <img src="/logo.png" alt="Tôle Armor" className="w-80 mb-4" />
            <h2 className="text-2xl md:text-2xl italic text-white mb-8 leading-tight">
              Spécialiste de la vente et la livraison de bacs acier, panneaux
              sandwich et dérivés
            </h2>
          </div>

          {/* Colonne de droite avec la présentation */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 rounded-lg" />
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 relative border border-white/20">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Notre activité
              </h2>
              <div>
                {/* 
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/h2d9EoYyJrM"
                    title="Présentation Tôle Armor"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[300px] rounded-lg"
                  ></iframe>
                </div>
                */}
                <div className="space-y-4 text-gray-700">
                  <p>
                    Implantée à Guidel, Tôle Armor exerce son activité sur tout
                    le grand ouest de la France, et même depuis quelques années,
                    sur l'ensemble du territoire.
                  </p>
                  <p>
                    Disposant du plus important stock de couverture de Bretagne
                    (plus de 40 000 m² de bacs acier et panneaux sandwich en
                    disponibilité immédiate), le savoir-faire et l'expérience de
                    cette entreprise familiale est la garantie de produits de
                    bonne qualité, de prix très compétitifs, et d'une prestation
                    rapide et professionnelle !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Découvrir Nos Produits
          </button>
        </div>
      </div>
    </div>
  );
}
