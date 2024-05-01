import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
    <>
      <h1 className=' text-center text-4xl bg-stone-900 p-3 font-bold text-white'>Learning About Redux-Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
