import React, { useState } from 'react'
import ProfileV1 from './components/Profile'
import ProfileV2 from './components/Profile2'

export default function App() {
  const [version, setVersion] = useState('v1') // default profile version

  return (
    <div className="min-h-screen bg-black text-white">
      {version === 'v1' ? (
        <ProfileV1 onSwitch={() => setVersion('v2')} />
      ) : (
        <ProfileV2 onSwitch={() => setVersion('v1')} />
      )}
    </div>
  )
}
