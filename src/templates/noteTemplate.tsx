import React from 'react'
import { graphql } from 'gatsby'

export default function Template({ data }): JSX.Element {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <h2>{frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
