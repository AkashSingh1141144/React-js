import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className=" text-center text-4xl font-bold text-white bg-gray-900 p-3">
        Leaning About Redux-Toolkit By Loving Hitesh Sir
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
