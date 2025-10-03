import { useState } from 'react'
// import './App.css' 

// onclick expects a function to be passed and setColor("red") is a function we cannot pass it directly 
// because if we required to pass parameters we would have to call it like this only
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div>
      <div 
      style={{backgroundColor: color , height: '100vh', width: '100vw'}}>
        
        <div 
        className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            
          <button 
          onClick={() => setColor("red")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}>
            Red
          </button>
          <button 
          onClick={() => setColor("green")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button 
          onClick={() => setColor("blue")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{ backgroundColor: "blue" }}>
            Blue
          </button>
          <button 
          onClick={() => setColor("pink")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{ backgroundColor: "pink" }}>
            pink
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
