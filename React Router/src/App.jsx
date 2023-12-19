import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id="container">
      <div id="navbar">
  <Link to="/">Home</Link>
  <Link to="/blue">Blue</Link>
  <Link to="/red">Red</Link>
  
  </div>
      <div id="main-section">
      <Routes>
            <Route path="/blue" element= {<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
            
          </Routes>
      </div>
    </div>

      
    </>
  )
}

export default App
