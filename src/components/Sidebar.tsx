import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import NoteLink from '../components/NoteLink'

import { Layout, Menu } from 'antd'

const Sidebar = (): JSX.Element => {
  const { Sider } = Layout
  const { SubMenu } = Menu

  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___category] }
      ) {
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
    <Sider width='300' breakpoint='md' collapsedWidth='0' theme='light'>
      <Menu mode='inline' className='h-screen pt-4'>
        {Object.keys(categories).map((category, i) => {
          return (
            <SubMenu key={i} title={category}>
              {categories[category].map((topic) => {
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
