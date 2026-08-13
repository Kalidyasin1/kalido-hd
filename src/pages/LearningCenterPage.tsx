import React from 'react'

export default function LearningCenterPage(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl mb-4">Learning Center</h1>
      <div className="flex gap-3 mb-6">
        <button className="glass-btn">Beginner</button>
        <button className="glass-btn">Intermediate</button>
        <button className="glass-btn">Advanced</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map(i=>(
          <div key={i} className="glass p-4 rounded">
            <div className="font-semibold">Course {i}</div>
            <div className="text-sm text-text-muted">6 lessons • 2h</div>
          </div>
        ))}
      </div>
    </div>
  )
}
