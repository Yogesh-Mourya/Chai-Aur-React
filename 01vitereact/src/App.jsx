import Chai from "./Chai"

function App() {
  const username = "Chai aur Code"
  return (
    // {username} is evaluated expression i.e we dont write js here,
    // here we get js evaluated result , after tree formation this are injected
    /* fragment */
    <> 
      <Chai/>
      <h1>Chai aur react | {username}</h1> 
      <p>test Para</p>
    </>
  )
}

export default App
