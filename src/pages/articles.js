import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

const Articles = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <>
      <Header />
      <main style={{
        maxWidth: "1520px", 
        marginTop: "40px",
        marginRight: "auto", 
        marginLeft: "auto",
        padding:"0 200px 0 200px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "avenir",
          }}
        >
          {edges.map(edge => {
            const { frontmatter } = edge.node

            if (!frontmatter.publish) return null

            return (
              <div key={frontmatter.path} style={{ marginBottom: "1rem" }}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            publish
          }
        }
      }
    }
  }
`

export default Articles
