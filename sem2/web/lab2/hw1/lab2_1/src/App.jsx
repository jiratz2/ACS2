import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(10000);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 10;
        });
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <h1>Time left: </h1>
      <div style={{ margin: '10px', fontSize: '30px', padding: '10px' }}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={() => { setTime(10000); setRunning(true); }}>Reset</button>
        {running ? (
          <button onClick={() => { setRunning(false) }}>Pause</button>
        ) : (
          <button onClick={() => { setRunning(true) }}>Resume</button>
        )}
      </div>
    </>
  )
}

export default App