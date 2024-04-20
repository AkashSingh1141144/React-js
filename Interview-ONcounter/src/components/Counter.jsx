import React, { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0)
	const increase = () => {
		setCount(count + 1) 
		// supose here interviewer gives this condition multiple time   ->
		// setCount(count + 1) 
		// setCount(count + 1) 
		// setCount(count + 1) 
		// setCount(count + 1)  // what was his answer ? -> Ans is = 15 and increase like previousely mtlab jaise phle increase ho rha tha vaise hi hoga
		// what if interviewer ask you to increase like this ->
		// setCount(prevCounter => prevCounter +1)
		// setCount(prevCounter => prevCounter +1)
		// setCount(prevCounter => prevCounter +1)
		// setCount(prevCounter => prevCounter +1) // what was his answer ? -> Ans is = 5 and next one 10 and so on...
	}
	const decrease = () => {
		setCount(count - 1)
	}
  return (
	<>
	  	<div className="counter-container">
			<h1>Counting Value : {count}</h1>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	</>
  )
}

export default Counter
