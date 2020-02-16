import React from "react"
import SEO from "../components/SEO"

const Header = () => {
  return (
    <>
      <SEO />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src="logo.png" alt="Phillip LeBlanc: Pursuit of Knowledge" width="400px" />
      </div>
    </>
  )
}

export default Header
