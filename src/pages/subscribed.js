import React from "react"
import Header from "../components/Header"
import "./index.css"

const NewsletterSignUpSuccess = () => {
  return (
    <>
      <Header />
      <main>
        <h1><span role="img" aria-label="Tada Emoji">🎉</span> You're subscribed!</h1>
        <content>
        <p>
            Thanks for signing up for my newsletter!
            As a final step you will need to confirm your subscription by clicking the button in the email that was just sent.
            (If you can't see the email, check your Junk folder)
        </p>
        </content>
      </main>
    </>
  )
}

export default NewsletterSignUpSuccess
