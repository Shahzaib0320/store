// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'NextStore',
  description: 'A modern e-commerce store built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

const Header = () => {
  return (
    <header className="text-4xl-text-black-900 text-semiblod shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex bg-red-300 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">NextStore</span>
          <span className="text-sm text-red-500">| Shop Smart</span>
        </div>
        <nav className="flex flex-wrap gap-4 mt-2 md:mt-0 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="mt-2 md:mt-0 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border border-gray-300 rounded-md text-sm"
          />
          <span className="text-xl">🛒</span>
        </div>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold mb-2">NextStore</h4>
          <p className="text-sm">Your one-stop shop for tech, fashion, and more.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-sm">Email: shahzaib0320hassan@hmail.com</p>
          <p className="text-sm">Phone: +92 320 7558974</p>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-3 text-sm">
        &copy; {new Date().getFullYear()} NextStore. All rights reserved.
      </div>
    </footer>
  )
}
