import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  // let counter = 15

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log("Value Added: ",counter);
    }
    else {
      alert("Counter cannot exceed 20");
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log("Value Removed: ",counter);
    }
    else {
      alert("Counter cannot be negative");
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      
      <button
      onClick={addValue}
      >AddValue
      </button>
      <br />
      <button
      onClick={removeValue}
      >RemoveValue
      </button>
    </>
  )
}

export default App
