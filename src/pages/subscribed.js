import React from "react"
import Header from "../components/Header"
import "./index.css"

const NewsletterSignUpSuccess = () => {
  return (
    <>
      <Header />
      <main>
        <h1><span role="img" aria-label="Warning Emoji">⚠️</span> One more step...</h1>
        <content>
        <p>
            You are so close to subscribing to my newsletter!
            The final step is to confirm your subscription by clicking the button in the email that was just sent.
            (If you can't see the email, check your Junk folder)
        </p>
        </content>
      </main>
    </>
  )
}

export default NewsletterSignUpSuccess
