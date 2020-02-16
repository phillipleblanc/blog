import React from "react"
import SEO from "../components/SEO"
import "./Header.css"

const Header = () => {
  return (
    <>
      <SEO />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{display: "flex", flex: "1 1 0px"}}>
          <nav>
            <div>
              <a href="/">Home</a>
              <a href="/articles">Articles</a>
            </div>
          </nav>
        </div>
        <div style={{display: "flex", flex: "0 0 auto"}}>
          <a href="/"><img src="/logo.png" alt="Phillip LeBlanc: Pursuit of Knowledge" width="400px" /></a>
        </div>
        <div style={{display: "flex", flex: "1 1 0px"}} />
      </div>
    </>
  )
}

export default Header
