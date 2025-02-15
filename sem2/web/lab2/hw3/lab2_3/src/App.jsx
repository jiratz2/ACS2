import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaLock } from 'react-icons/fa';
import { FaLockOpen } from "react-icons/fa";

function App() {
  
  const [isLocked, setIsLocked] = useState(false)

  return (
    <>
    {isLocked ? 
    <button onClick={()=>{setIsLocked(false)}}><FaLock />Unlock</button>
     : <button onClick={()=>{setIsLocked(true)}}><FaLockOpen />Lock</button>}
    
      
    </>
  )
}

export default App
