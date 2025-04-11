import React from 'react';

export default function ProductCard({ product }) {
	  return (
		      <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
		        <img
		          src={product.image}
		          alt={product.name}
		          className="w-full h-60 object-cover"
		        />
		        <div className="p-4">
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
		    );
}

