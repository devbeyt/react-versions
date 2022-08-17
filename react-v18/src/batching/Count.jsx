import React,{useState} from 'react'

function Count() {
    const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(false);

  function handleClick() {
    console.log("click")
    setCounter(c => c + 1); // Does not re-render yet
    setColor(f => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  return (<div>
    <button onClick={handleClick}>Next</button>
    <h1 style={{ color: color ? "blue" : "black" }}>{counter}</h1>
  </div>
  )
}

export default Count