import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import NoteLink from '../components/NoteLink'

import styles from './Sidebar.module.scss'

import { Layout, Menu } from 'antd'

const Sidebar = (): JSX.Element => {
  const { Sider } = Layout
  const { SubMenu } = Menu

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
        {
          id: edge.node.id,
          node: <NoteLink key={edge.node.id} post={edge.node} />,
        },
      ]
    } else {
      categories[edge.node.frontmatter.category].push({
        id: edge.node.id,
        node: <NoteLink key={edge.node.id} post={edge.node} />,
      })
    }
  })

  return (
    <Sider width='300' breakpoint='lg' collapsedWidth='0'>
      <Menu mode='inline' style={{ height: '100%', paddingTop: '16px' }}>
        {Object.keys(categories).map((category, i) => {
          return (
            <SubMenu key={i} title={category}>
              {categories[category].map((topic, i) => {
                return <Menu.Item key={topic.id}> {topic.node}</Menu.Item>
              })}
            </SubMenu>
          )
        })}
      </Menu>
    </Sider>
  )
}

export default Sidebar
