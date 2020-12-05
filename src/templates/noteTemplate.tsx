import React from 'react'
import { graphql } from 'gatsby'

import { Breadcrumb, Layout } from 'antd'

export default function Template({ data }): JSX.Element {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const { Content } = Layout
  return (
    <>
      <Content
        style={{ margin: '16px 24px' }}
        className='site-layout-background'
      >
        <h2 style={{ fontWeight: 'normal' }}>
          <Breadcrumb style={{ marginBottom: '24px', fontSize: '1.5rem' }}>
            <Breadcrumb.Item>{frontmatter.category}</Breadcrumb.Item>
            <Breadcrumb.Item>{frontmatter.title}</Breadcrumb.Item>
          </Breadcrumb>
        </h2>
        <div
          style={{ width: 'fit-content' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Content>
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
        category
      }
    }
  }
`
