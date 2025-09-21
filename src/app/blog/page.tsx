// src/app/blog/page.tsx
import React from 'react'

const posts = [
  { id: 1, title: '5 Tips for Online Shopping', content: 'Online shopping is convenient, here’s how to make it smarter.' },
  { id: 2, title: 'Why Next.js is Great for Stores', content: 'Learn how to build stores fast with modern tools.' },
]

const Blog = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Blog</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
