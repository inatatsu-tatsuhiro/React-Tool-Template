import React from 'react'

function App() {
  const name = 'inatatsu'

  const hello = () => `Hello ${name}`

  return <div className="App"> {hello()}</div>
}

export default App
