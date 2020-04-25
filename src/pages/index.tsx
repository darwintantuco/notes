import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import NoteLink from '../components/NoteLink'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}): JSX.Element => {
  const Posts = edges.map((edge) => (
    <NoteLink key={edge.node.id} post={edge.node} />
  ))

  return <Layout>{Posts}</Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
