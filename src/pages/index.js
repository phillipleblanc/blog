import React from "react"
import Header from "../components/Header"
import SEO from "../components/SEO"

const Layout = () => {
  return (
    <>
    <SEO />
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
        <h1 style={{fontSize: "65px", textAlign:"center"}}>Hi, I'm <strong>Phillip LeBlanc</strong>.<br /> A software engineer.</h1>
        <hr style={{height: "3px", width: "100%", background: "rgba(0,0,0,0.3)", border: "none"}} />
        <h2>Quick Bio</h2>
        <div style={{fontSize: "20px", textAlign:"center", maxWidth:"500px"}}>
          <p>
          안녕하세요!
          </p>
          <p>
          Living in Seoul, Korea leading a team of engineers to help make app developers more productive with Visual Studio App Center.
          </p>
          <p>
          I moved to Seattle after accepting a software development position at Microsoft and graduating from Louisiana State University.
          </p>
          <p>
          I worked for 5 years in Seattle on Azure Active Directory, and moved to Korea in 2017.
          </p>
        </div>
      </div>
    </main>
    </>
  )
}

export default Layout
