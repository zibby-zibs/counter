import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleAdd = ()=>{
    setCount(()=>count + 1)
  }

  const handleMinus = ()=> {
    if (count < 1){
      return 0
    } else {
      setCount(()=>count - 1)
    }
  }

  return (
    <main className='parent-container'>
      <h1 style={{fontSize: '90px'}}>{count}</h1>

      <article className='button-container'>
        <button className='button-b' onClick={handleMinus}>
          -
        </button>
        <button className='button-b' onClick={handleAdd}>
          +
        </button>
      </article>
    </main>
  )
}

export default App
