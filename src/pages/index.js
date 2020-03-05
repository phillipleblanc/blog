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
          <img
            src="profile_prof.jpg"
            alt="Profile of Phillip LeBlanc"
            width="400px"
          />
          <h1>
            Hi, I'm <strong>Phillip LeBlanc</strong>.<br /> A software
            engineering manager.
          </h1>
          <hr />
          <h2>
            <span role="img" aria-label="Wave Emoji">
              👋
            </span>{" "}
            About Me
          </h2>
          <content>
            <p>
              I lead a team of high performing software engineers at Microsoft.
            </p>
            <p>
              Living in Seoul, Korea{" "}
              <span role="img" aria-label="Korea flag emoji">
                🇰🇷
              </span>
              .
            </p>
            <p>Graduated from Louisiana State University.</p>
            <p>Worked for 5 years in Seattle on Azure Active Directory.</p>
          </content>
          <hr />
          <h2>
            <span role="img" aria-label="Computer Emoji">
              💻
            </span>{" "}
            My Mission
          </h2>
          <content>
            <p>My mission is to make software development 10x easier.</p>
            <p>
              Software has become the most important part of people's everyday
              lives and work.
            </p>
            <p>
              The people who write software are now shaping the world, and I am
              working to make it easier for developers to create the next world
              changing app.
            </p>
          </content>
          <hr />
          <h2>
            <span role="img" aria-label="Mail Emoji">
              ✉️
            </span>{" "}
            Stay Connected
          </h2>
          <content>
            <p>
              Enter your email below to get notified whenever I have new things
              to share.
            </p>
          </content>
          <Newsletter />
        </div>
      </main>
    </>
  )
}

export default Index
