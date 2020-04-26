import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
              topic
            }
          }
        }
      }
    }
  `)

  const topics = {}
  /* Works now but not ideal, fix soon */
  edges.forEach((edge) => {
    if (topics[edge.node.frontmatter.topic] === undefined) {
      topics[edge.node.frontmatter.topic] = [
        <NoteLink key={edge.node.id} post={edge.node} />,
      ]
    } else {
      topics[edge.node.frontmatter.topic].push(
        <NoteLink key={edge.node.id} post={edge.node} />
      )
    }
  })

  return (
    <aside className={styles.sidebar}>
      {Object.keys(topics).map((topic, i) => {
        return (
          <div key={i} className={styles.topic}>
            {topic}
            <ul className={styles.subtopics}>
              {topics[topic].map((subtopic, i) => {
                return <li key={i}>{subtopic}</li>
              })}
            </ul>
          </div>
        )
      })}
    </aside>
  )
}

export default Sidebar
