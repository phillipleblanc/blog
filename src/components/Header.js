import React from "react"
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
              <a href="/">Home</a>
              <a href="/articles">Articles</a>
              <a href="/newsletter">Newsletter</a>
            </div>
          </nav>
        </div>
        <div id="center-header">
          <a href="/"><img src="/logo.png" alt="Phillip LeBlanc: Pursuit of Knowledge" width="400px" /></a>
        </div>
        <div id="right-header" />
      </header>
    </>
  )
}

export default Header
