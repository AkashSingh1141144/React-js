import "./App.css";
import Card1 from "./Components/Card/Card1";
import Card2 from "./Components/Card/Card2";

function App() {
  let myObj = {
    userName: 'Sandhya',
    age: 21
  }
  return (
  <>
      <h1 className=" bg-green-900 text-stone-50 p-4 text-4xl font-bold ">Tailwind Test</h1>
      <Card1 userName = 'Sandhya' />
      <Card1 userName="Madhuri"/>
      <Card2 btnText = "Click me" />
      <Card2 btnText = "Visit me" />
  </>
  )
}

export default App;
