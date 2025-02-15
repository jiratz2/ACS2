import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);
  const [randomnum, setRandomnum] = useState([1,1,1]);

  const Random = () => {
    setCount(count + 1);
    setRandomnum(
    [(Math.floor(Math.random() * 6)+1),
    (Math.floor(Math.random() * 6)+1),
    (Math.floor(Math.random() * 6)+1)
    ]);
  }

  return (
    <>
      <h1>Roll:{count}</h1>
      <button onClick={Random}>Re-roll</button>
      <div style={{ display: 'flex', margin: '20px' }}>
        <div style={{border: '1px solid white', padding: '20px'}}>{randomnum[0]}</div>
        <div style={{border: '1px solid white', padding: '20px'}}>{randomnum[1]}</div>
        <div style={{border: '1px solid white', padding: '20px'}}>{randomnum[2]}</div>
      </div>
    </>
  )
}

export default App
