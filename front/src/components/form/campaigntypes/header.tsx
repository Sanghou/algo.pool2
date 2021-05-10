import React from "react"
// import { Link } from "react-router-dom"
import "./style.scss"
import logoImage from "@/assets/logo.png"

const Header = (): React.FunctionComponentElement<Element> => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="logo" href="./">
          <img src={logoImage} alt="logo" />
        </a>
        <div className="options"> Profile component </div>
      </div>
    </header>
  )
}

export default Header
