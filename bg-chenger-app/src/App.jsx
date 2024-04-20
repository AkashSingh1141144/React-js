// import './App.css'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('azure')
  return (
    <>
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl bg-white">
              <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'gray'}}>Orange</button>
              <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'gray'}}>Blue</button>
              <button onClick={() => setColor('#242424')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'gray'}}>Black</button>
              <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'gray'}}>Green</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default App