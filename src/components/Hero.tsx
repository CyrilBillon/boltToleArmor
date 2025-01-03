import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-primary-dark to-primary">
      <div className="absolute inset-0">
        <img
          src="/BacsAcier.png"
          alt="Production de tôles d'acier"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Colonne de gauche avec le logo, titre et bouton */}
          <div className="">
            <h1 className="text-4xl md:text-5xl bold text-white mb-4 leading-tight">
              Spécialiste en bacs acier, panneaux sandwich et dérivés
            </h1>
            <h2 className="text-2xl md:text-2xl bold text-white mb-28 leading-tight">
              Du professionnel au particulier
            </h2>
            <div className="">
              <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                Découvrir Nos Produits
              </button>
            </div>
          </div>

          {/* Colonne de droite avec la vidéo */}
          {/* 
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20 rounded-lg" />
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 relative border border-white/20">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Notre activité
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/h2d9EoYyJrM"
                  title="Présentation Tôle Armor"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px] rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}