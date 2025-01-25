import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [answer, setAnswer] = useState(0)

  function Plus(){
    return(
      setAnswer((answer) => 4+5)
    )
  }

  function Minus(){
    return(
      setAnswer((answer) => 4-5)
    )
  }

  function Multiply(){
    return(
      setAnswer((answer) => 4*5)
    )
  }

  return (
    <>
      <h1>Calculator</h1>
      <p>Have two number which is 4 and 5 : </p>
      <button onClick={Plus}>Plus</button>
      <button onClick={Minus}>Minus</button>
      <button onClick={Multiply}>Multiply</button>
      <p>Answer is {answer}</p>
    </>
  )
}

export default App
