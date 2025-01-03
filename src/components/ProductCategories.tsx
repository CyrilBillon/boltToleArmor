import React from 'react';

const categories = [
  {
    title: 'Tôles Laminées à Chaud',
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80',
    description: 'Tôles durables idéales pour les applications structurelles et la fabrication industrielle.',
  },
  {
    title: 'Tôles Laminées à Froid',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80',
    description: 'Tôles de précision avec une finition supérieure et des tolérances strictes.',
  },
  {
    title: 'Tôles en Aluminium',
    image: 'https://images.unsplash.com/photo-1611288875785-f62fb9b044a7?auto=format&fit=crop&q=80',
    description: 'Tôles légères et résistantes à la corrosion, parfaites pour les applications modernes.',
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nos Catégories de Produits
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  En Savoir Plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}