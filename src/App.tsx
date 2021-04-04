import React, { useState } from "react"

const App = (): React.FunctionComponentElement<Element> => {
  const [state] = useState(0)
  return <h2>Hello with {state} </h2>
}

export default App
