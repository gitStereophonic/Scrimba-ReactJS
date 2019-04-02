import React from "react"

function handleCLick() {
  console.log("I was pushed");
}

function App() {
  return (
    <div>
      <img alt='pic' onMouseOver={() => { console.log("Hovered"); }} src="https://www.fillmurray.com/200/100" />
      <br />
      <br />
      <button onClick={handleCLick}>Click me</button>
    </div>
  )
}

export default App
