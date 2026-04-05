import React, { useState } from 'react'
import Portfolio from './components/Profile'

export default function App() {
  const [version, setVersion] = useState('v1') // default profile version

  return (
    <div className="min-h-screen bg-black text-white">
      <Portfolio/>
    </div>
  )
}
