import React, { useState } from "react"
import Header from "@/components/form/campaigntypes/header"

const App = (): React.FunctionComponentElement<Element> => {
  const [state] = useState(0)
  return (
    <>
      <Header />
      <h2
        className="body"
        style={{ top: "80px", position: "absolute", left: "0" }}
      >
        Hello with {state}
      </h2>
    </>
  )
}

export default App
