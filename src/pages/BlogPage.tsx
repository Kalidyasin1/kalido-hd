import React from 'react'

export default function BlogPage(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <article key={i} className="glass p-4 rounded">
            <img src={`/images/blog/${i}.jpg`} alt="" className="rounded mb-2" />
            <h3 className="font-semibold">Post {i}</h3>
            <p className="text-text-muted text-sm">Excerpt...</p>
            <button className="mt-3 glass-btn">Read More</button>
          </article>
        ))}
      </div>
    </div>
  )
}
