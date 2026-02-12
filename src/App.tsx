import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>My Count</h1>

        <h2> Count Value: {count} </h2>

        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Add Count
        </button>
      </div>
    </>
  )
}

export default App
