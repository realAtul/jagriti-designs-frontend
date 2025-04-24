// src/Home.jsx
import React from 'react';
import ContactForm from './components/ContactForm';

const sampleProducts = [
	{
	  id: 1,
	  name: 'Custom Lehenga Design',
	  image: 'https://i.ibb.co/N6yNksdZ/Whats-App-Image-2025-04-11-at-15-01-07-991d5000.jpg',
	},
	{
	  id: 2,
	  name: 'Elegant Party Dress',
	  image: 'https://i.ibb.co/4nv1829b/Whats-App-Image-2025-04-11-at-15-09-58-83349550.jpg',
	},
	{
	  id: 3,
	  name: 'Trendy Pink Gown',
	  image: 'https://i.ibb.co/wZmZPjS0/Whats-App-Image-2025-04-11-at-15-09-57-d4869bbe.jpg',
	},
	{
	  id: 4,
	  name: 'Golden Bridal Lehenga',
	  image: 'https://i.ibb.co/j9y4z1ds/Whats-App-Image-2025-04-11-at-15-01-56-bcc996e6.jpg',
	},
	{
	  id: 5,
	  name: 'Stylish Net Saree',
	  image: 'https://i.ibb.co/GQkBCsPp/Whats-App-Image-2025-04-11-at-15-02-58-d12fb8f0.jpg',
	},
	{
	  id: 6,
	  name: 'Maroon Designer Suit',
	  image: 'https://i.ibb.co/fGTfJ8qM/Whats-App-Image-2025-04-11-at-15-09-56-32258c20.jpg',
	},
	{
	  id: 7,
	  name: 'Soft Peach Dress',
	  image: 'https://i.ibb.co/TDtGHPwP/Whats-App-Image-2025-04-11-at-15-09-57-0fa0b81c.jpg',
	},
	{
	  id: 8,
	  name: 'Partywear Yellow Gown',
	  image: 'https://i.ibb.co/gM0MmQHR/Whats-App-Image-2025-04-11-at-15-09-57-69da4fed.jpg',
	},
	{
	  id: 9,
	  name: 'Beige Bridal Set',
	  image: 'https://i.ibb.co/NnNxxtWp/Whats-App-Image-2025-04-11-at-15-01-08-60d7b7ae.jpg',
	},
	{
	  id: 10,
	  name: 'Royal Pink Gown',
	  image: 'https://i.ibb.co/PV45m2t/Whats-App-Image-2025-04-11-at-15-01-08-a19c279d.jpg',
	},
	{
	  id: 11,
	  name: 'Flowy Yellow Dress',
	  image: 'https://i.ibb.co/FL9P7cQ5/Whats-App-Image-2025-04-11-at-15-01-18-8b531329.jpg',
	},
	{
	  id: 12,
	  name: 'Designer Peach Gown',
	  image: 'https://i.ibb.co/wh46Pj1V/Whats-App-Image-2025-04-11-at-15-01-19-8152f128.jpg',
	},
	{
	  id: 13,
	  name: 'Classy Lavender Lehenga',
	  image: 'https://i.ibb.co/xSsYJQKs/Whats-App-Image-2025-04-11-at-15-01-20-cda7b03a.jpg',
	},
  ];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <div className="text-2xl font-bold text-pink-600">Jagriti Designs</div>
        <nav className="space-x-4">
          <a href="#tailoring" className="hover:underline">Tailoring | Lehenga | Suit | Saree</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-pink-200 to-pink-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Fashion for Every Woman</h1>
        <p className="text-lg text-gray-700 mb-6">Beautifully tailored dresses made to order</p>
        <a 
          href="https://www.instagram.com/ijagriticreator?igsh=N20weHpqbWt2OXM1" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-2 rounded-full">
            Instagram
          </button>
        </a>
      </section>


      {/* Product Sections */}
      <section id="tailoring" className="py-12 px-6">
        <h2 className="text-3xl font-semibold mb-4">Custom Tailoring Showcase & All Dresses Are Handmade</h2>
        <p className="text-gray-600 mb-4">Send us your design or choose from our past creations. We'll tailor it perfectly for you.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleProducts.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover aspect-[3/4] bg-white"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <a
                  href="https://wa.me/917294971916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Contact for Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="rent" className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Dress on Rent</h2>
        <p className="text-gray-600 mb-4">Affordable and stylish dresses for every occasion.</p>
        {/* Dress rental listing grid will go here */}
      </section>

      {/* WhatsApp Contact */}
      <section id="contact" className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Have Questions or Want to Order?</h2>
        <p className="mb-6">We're happy to help you on WhatsApp!</p>
        <a 
          href="https://wa.me/917294971916" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-full"
        >
          Chat on WhatsApp
        </a>

        {/* Google Maps Location Link */}
        <div className="mt-6">
          <a 
            href="https://maps.app.goo.gl/oFrFmMvJuWArgxU87" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-lg"
          >
            📍 Visit Jagriti Designs 
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <ContactForm />
      </section>

      </div>
  );
}