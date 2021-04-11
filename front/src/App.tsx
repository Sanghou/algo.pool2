import React, { useState } from "react"
import Header from "@/components/form/campaigntypes/header"

const App = (): React.FunctionComponentElement<Element> => {
  const [state] = useState(0)
  return (
    <>
      <Header />
      <h2>Hello with {state} </h2>
    </>
  )
}

export default App
