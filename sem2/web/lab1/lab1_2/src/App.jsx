import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  function MyButton(){
    const [count, setCount] = useState(0)

    function handleClick(){
      setCount(count + 1)
    }

    return(
      <>
        <h2>Counter : {count}</h2>
        <button onClick={handleClick}>Increment</button>

      </>
      
    )
  }

  return (
    <>
      
      <div className="card">
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
      
    </>
  )
}

export default App
