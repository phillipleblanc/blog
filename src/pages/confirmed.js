import React from "react"
import Header from "../components/Header"
import "./index.css"

const NewsletterSignUpConfirmed = () => {
  return (
    <>
      <Header />
      <main>
        <h1><span role="img" aria-label="Tada Emoji">🎉</span> You're subscribed!</h1>
        <content>
        <p>
            Thanks for signing up for my newsletter!
            You will now receive all of my future articles and insights about the world.
        </p>
        </content>
      </main>
    </>
  )
}

export default NewsletterSignUpConfirmed
