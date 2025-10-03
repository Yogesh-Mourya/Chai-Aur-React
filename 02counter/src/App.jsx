import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  // let counter = 15

  // const addValue = () => {
  //   if (counter < 20) {
  //     counter = counter + 1;
  //     setCounter(counter);
  //     console.log("Value Added: ",counter);
  //   }
  //   else {
  //     alert("Counter cannot exceed 20");
  //   }
  // }

  //Interview Question on counter
  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }// what will be the value of counter if we click on AddValue button once? Ans: 16

  /*
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  */
  //Answer: 19(Reason Batch algorithm), because react batches the state updates for performance reasons. 
  //When you call setCounter multiple times in a single event handler, React doesn't immediately update the state. 
  //Instead, it waits until the event handler has finished executing and then processes all the state updates at once.
  //To ensure that each update is based on the most recent state, you can use the functional form of the state updater:

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
