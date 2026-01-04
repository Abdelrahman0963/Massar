import React from 'react'
import Navbar from './components/navbar/Navbar'
import useDirection from './hooks/useDirection'
const App: React.FC = () => {
  useDirection();
  return (
    <div className="App min-h-screen bg-[#0a0a0a] text-white px-12!">
      <Navbar />
    </div>
  )
}

export default App
