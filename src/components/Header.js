import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import "./Header.css"

const Header = () => {
  return (
    <>
      <SEO />
      <header>
        <div id="left-header">
          <nav>
            <div>
              <Link to="/">Home</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/newsletter">Newsletter</Link>
            </div>
          </nav>
        </div>
        <div id="center-header">
          <Link to="/"><img src="/logo.png" alt="Phillip LeBlanc: Pursuit of Knowledge" width="400px" /></Link>
        </div>
        <div id="right-header" />
      </header>
    </>
  )
}

export default Header
