import React from "react"
import Navbar from "../Navbar"
import Logo from "../../images/logo.svg"

const Header = () => (
  <header className="Header">
    <div className="container">
      <div className="Header-container">
        <div className="Header-logo">
          <img src={Logo} />
        </div>
        <Navbar />
      </div>
    </div>
  </header>
)

export default Header
