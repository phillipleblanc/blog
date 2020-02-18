import React from "react"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import "./index.css"

const NewsletterSignUp = () => {
  return (
    <>
      <Header />
      <main>
        <h2><span role="img" aria-label="Mail Emoji">✉️</span> Stay Connected</h2>
        <content>
        <p>Enter your email below to get notified whenever I have new things to share.</p>
        </content>
        <Newsletter />
      </main>
    </>
  )
}

export default NewsletterSignUp
