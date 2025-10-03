import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Yash",
    age: 20
  }

  let arr = [1,2,3,4,5];

  return (
      // <Card channel="ChaiAurCode" someArr={arr}/>
      // <Card channel="ChaiAurCode" someObject={arr}/>
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Chai Aur Code" btnText="Visit me"/>
      <Card username="Rakesh" btnText="click me"/>
    </>
  )
}

export default App
