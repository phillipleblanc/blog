/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Phillip LeBlanc",
    description: "Pursuit of knowledge.",
    siteUrl: "https://leblanc.tech",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://matomo.cardzlab.xyz",
        siteUrl: "https://leblanc.tech",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const fm = edge.node.frontmatter
                return Object.assign({}, fm, {
                  description: fm.excerpt,
                  date: fm.date,
                  url: site.siteMetadata.siteUrl + fm.path,
                  guid: site.siteMetadata.siteUrl + fm.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {frontmatter: {publish: {eq: true}}}
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date
                        path
                        excerpt
                        publish
                      }
                      html
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Phillip LeBlanc",
          },
        ],
      },
    },
  ],
}
