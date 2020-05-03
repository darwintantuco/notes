import React from 'react'
import { graphql } from 'gatsby'

import { Layout, PageHeader } from 'antd'

export default function Template({ data }): JSX.Element {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const { Content } = Layout
  return (
    <>
      <PageHeader title={frontmatter.title} />
      <Content
        style={{ margin: '16px 24px' }}
        className='site-layout-background'
      >
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
