import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  // ✅ Yahan har product ka exact path, chahe .jpg / .webp / .png ho
  const products = [
    { id: 1, name: "Product Hunting", price: 99.99, img: "/products/p1.webp" },
    { id: 2, name: "All Products", price: 79.99, img: "/products/product.webp" },
    { id: 3, name: "Shoes", price: 59.99, img: "/products/shoes.jpg" },
    // future me aur bhi add kar sakte ho
  ]

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="bg-gray-500 rounded-lg p-6 text-center">
        <h1 className="text-4xl font-bold mb-2 text-black-900">
          Welcome to Shahzaib Hassan Store
        </h1>
        <p className="text-red-700 mb-4">
          Top deals on tech, fashion & more!
        </p>
        <Link href="/products">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Products', 'Beauty', 'Shoes'].map((cat) => (
            <div
              key={cat}
              className="bg-white p-4 border rounded text-center shadow hover:shadow-md"
            >
              <p>{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              <Image
                src={p.img}           // 👈 Har product ka apna format allowed
                alt={p.name}
                width={400}
                height={300}
                className="h-50 w-full object-cover rounded"
              />
              <h3 className="mt-2 font-medium">{p.name}</h3>
              <p className="text-gray-600">${p.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
