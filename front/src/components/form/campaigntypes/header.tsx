import React from "react"
import "./style.scss"

const Header = (): React.FunctionComponentElement<Element> => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="logo"> logo component </div>
        <div className="options"> Profile component </div>
      </div>
    </header>
  )
}

export default Header
