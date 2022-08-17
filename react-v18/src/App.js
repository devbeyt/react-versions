import React from 'react'
import Count from './hooks/batching/Count'
import Dashboard from './hooks/suspense/Dashboard'
import UseTransition from './hooks/useTransition/UseTransition'
import UseTransition2 from './hooks/useTransition/UseTransition2.jsx'

function App() {
  return (
    <div>
      Look App component for to show examples
      {/* <UseTransition/> */}
      {/* <UseTransition2/> */}
      {/* <Count/> */}
      <Dashboard/>
    </div>
  )
}

export default App
