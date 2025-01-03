import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Jean Dupont',
    company: 'Industries BâtiTech',
    content: "La qualité des tôles d'acier d'AcierTech dépasse constamment nos attentes. Leur service client est remarquable.",
    rating: 5,
  },
  {
    name: 'Sophie Martin',
    company: 'Manufacture Moderne',
    content: "Nous travaillons avec AcierTech depuis plus de 5 ans. Leurs produits sont fiables et les livraisons toujours à l'heure.",
    rating: 5,
  },
  {
    name: 'Michel Chen',
    company: 'Innovation Métaux',
    content: "Le meilleur fournisseur avec qui nous ayons travaillé. Leurs tôles laminées à froid sont parfaites pour nos besoins en ingénierie de précision.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Ce Que Disent Nos Clients
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}