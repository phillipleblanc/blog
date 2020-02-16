import React from "react"
import Header from "../components/Header"
import SEO from "../components/SEO"
import "./index.css"

const Index = () => {
  return (
    <>
    <SEO />
    <main>
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
        <h1>Hi, I'm <strong>Phillip LeBlanc</strong>.<br /> A software engineer.</h1>
        <hr />
        <h2>👋 About Me</h2>
        <content>
          <p>I lead a high performing team of software engineers at Microsoft.</p>
          <p>Living in Seoul, Korea 🇰🇷.</p>
          <p>Graduated from Louisiana State University.</p>
          <p>Worked for 5 years in Seattle on Azure Active Directory.</p>
        </content>
      </div>
    </main>
    </>
  )
}

export default Index
