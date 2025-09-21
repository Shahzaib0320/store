import React from "react";

const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Get in <span className="text-blue-600">Touch</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or need support? Our team is here to help you.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">shahzaib0320hassan@gmail.com</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">+92 320 7558974</p>
        </div>
      </div>

      {/* Optional Contact Form */}
      <div className="mt-12 bg-blue-50 rounded-2xl shadow-inner p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Send Us a Message
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
