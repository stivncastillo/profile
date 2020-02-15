import React from "react"
import Navbar from "../Navbar"
import Logo from "../../images/logo.svg"

const Header = () => (
  <header className="Header">
    <div className="container">
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-sm-6 col-xs-12">
          <div className="Header-logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="col-sm-6 col-xs-12">
          <Navbar />
        </div>
      </div>
    </div>
  </header>
)

export default Header
