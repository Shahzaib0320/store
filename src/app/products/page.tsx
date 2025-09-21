// src/app/products/page.tsx
import React from 'react'

const products = [
  { id: 1, name: 'Bluetooth', price: '$999', image: '/Bluetooth.jpg' },
  { id: 2, name: 'Laptop', price: '$699', image: '/hero.jpg' },
  { id: 3, name: 'Headphones', price: '$199', image: '/Wireless.jpg' },
]
 
const Products = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-95 object-cover rounded" />
            <h3 className="text-xl mt-2 font-medium">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
