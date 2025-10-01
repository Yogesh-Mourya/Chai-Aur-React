import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com', 
//         target: '_blank', 
//     },
//     children: 'Click here to visit Google'
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank"> Visit Google</a>
)

const anotheruser = "Chai aur Code"
//Vimp : JSX gets converted to React.createElement calls
// internal tree structure
const reactElement = React.createElement(
  'a', 
  {href: 'https://www.google.com', target: '_blank'}, 
  'Click here to visit Google',
  anotheruser // evaluated expression (js) after tree formation is placed here
) 

ReactDOM.createRoot(document.getElementById('root')).
render(
//  <>
//     <App />
 
//  </>
  // MyApp()
  // anotherElement
  reactElement
)
