import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
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

          <div style={{ alignItems: "center", display: "flex" }}>
            <div style={{ fontFamily: "avenir" }} className="flex flex-content">
              {prev && (
                <Link to={prev.frontmatter.path} className="article-link">
                  <span role="img" aria-label="Left Arrow">
                    ⬅️
                  </span>{" "}
                  Previous
                </Link>
              )}
            </div>
            <div style={{ fontFamily: "avenir" }} className="flex">
              {next && (
                <Link to={next.frontmatter.path} className="article-link">
                  Next{" "}
                  <span role="img" aria-label="Right Arrow">
                    ➡️
                  </span>
                </Link>
              )}
            </div>
          </div>
        </article>
        <div style={{ paddingTop: "30px" }}>
          <hr />
          <p style={{ fontStyle: "italic" }}>
            If you enjoyed reading this article, consider subscribing to my
            newsletter to get notified whenever I post a new one!
          </p>
          <Newsletter />
        </div>
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
