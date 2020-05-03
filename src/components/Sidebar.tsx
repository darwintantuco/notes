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
              category
            }
          }
        }
      }
    }
  `)

  /* Works now but not ideal, fix soon */
  const categories = {}
  edges.forEach((edge) => {
    if (categories[edge.node.frontmatter.category] === undefined) {
      categories[edge.node.frontmatter.category] = [
        <NoteLink key={edge.node.id} post={edge.node} />,
      ]
    } else {
      categories[edge.node.frontmatter.category].push(
        <NoteLink key={edge.node.id} post={edge.node} />
      )
    }
  })

  return (
    <aside className={styles.sidebar}>
      {Object.keys(categories).map((category, i) => {
        return (
          <div key={i}>
            <label htmlFor={category} className={styles.category}>
              {category}
            </label>
            <input type='checkbox' id={category} className={styles.checkbox} />
            <ul className={styles.topics}>
              {categories[category].map((topic, i) => {
                return <li key={i}>{topic}</li>
              })}
            </ul>
          </div>
        )
      })}
    </aside>
  )
}

export default Sidebar
