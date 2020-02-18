import React from "react"
import Header from "../components/Header"
import "./index.css"
import Newsletter from "../components/Newsletter"

const Index = () => {
  return (
    <>
    <Header />
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "avenir",
        }}
      >
        <img src="profile_prof.jpg" alt="Profile of Phillip LeBlanc" width="400px" />
        <h1>Hi, I'm <strong>Phillip LeBlanc</strong>.<br /> A software engineering manager.</h1>
        <hr />
        <h2><span role="img" aria-label="Wave Emoji">👋</span> About Me</h2>
        <content>
          <p>I lead a team of high performing software engineers at Microsoft.</p>
          <p>Living in Seoul, Korea <span role="img" aria-label="Korea flag emoji">🇰🇷</span>.</p>
          <p>Graduated from Louisiana State University.</p>
          <p>Worked for 5 years in Seattle on Azure Active Directory.</p>
        </content>
        <Newsletter />
      </div>
    </main>
    </>
  )
}

export default Index
