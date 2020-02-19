import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import "../pages/index.css"
import "./blogPost.css"

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext

  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <>
      <Header />
      <main>
        <article>
          <h1 style={{ fontFamily: "avenir" }}>{title}</h1>
          <div
            className="article"
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              fontFamily: "avenir",
            }}
          />

          <div style={{alignItems: "center", display: "flex"}}>
            <div style={{ fontFamily: "avenir" }} className="flex flex-content">
              {prev && <Link to={prev.frontmatter.path} className="article-link">⬅️ Previous</Link>}
            </div>
            <div style={{ fontFamily: "avenir" }} className="flex">
              {next && <Link to={next.frontmatter.path} className="article-link">Next ➡️</Link>}
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
