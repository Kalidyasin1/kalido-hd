import React from 'react'

export default function JobsPage(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Jobs</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map(i=>(
          <div key={i} className="glass p-4 rounded">
            <div className="font-semibold">Job {i}</div>
            <div className="text-sm text-text-muted">Income range: 2000-8000 ETB</div>
          </div>
        ))}
      </div>
    </div>
  )
}
