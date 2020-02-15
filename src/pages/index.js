import React from "react"
import Header from "../components/Header"

const Layout = () => {
  return (
    <main style={{
      maxWidth: "1520px", 
      marginTop: "40px",
      marginRight: "auto", 
      marginLeft: "auto",
      padding:"0 200px 0 200px"
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "avenir",
        }}
      >
        <img src="profile_prof.jpg" width="400px" />
      </div>
    </main>
  )
}

export default Layout
