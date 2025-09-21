export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          About <span className="text-blue-600">Shahzaib Hassan Store</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your trusted destination for quality products, unbeatable prices, and
          lightning-fast delivery.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          At NextStore, our mission is to deliver the best online shopping
          experience with unbeatable prices, carefully curated products,
          and reliable customer support. We believe shopping should be simple,
          secure, and exciting.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-blue-50 rounded-2xl shadow-inner p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Core Values</h3>
        <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
          <li className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition">
            <p className="font-medium">Customer Satisfaction</p>
          </li>
          <li className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition">
            <p className="font-medium">Top-Quality Products</p>
          </li>
          <li className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition">
            <p className="font-medium">Fast & Secure Shipping</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
