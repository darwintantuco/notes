import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import NoteLink from '../components/NoteLink'

import styles from './Sidebar.module.scss'

const Sidebar = (): JSX.Element => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
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
  `)

  const Notes = edges.map((edge) => (
    <NoteLink key={edge.node.id} post={edge.node} />
  ))

  return <aside className={styles.sidebar}>{Notes}</aside>
}

export default Sidebar
