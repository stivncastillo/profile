import { Link } from "gatsby"
import React from "react"

const Navbar = () => (
  <nav className="Navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
