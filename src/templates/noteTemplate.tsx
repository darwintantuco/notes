import React from 'react'
import { graphql } from 'gatsby'

import { Breadcrumb, Layout } from 'antd'

export default function Template({ data }): JSX.Element {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const { Content } = Layout
  return (
    <>
      <Content className='mt-4 mb-4 ml-6 mr-6 site-layout-background'>
        <h2 className='font-normal'>
          <Breadcrumb style={{ fontSize: '1.5rem', marginBottom: '24px' }}>
            <Breadcrumb.Item>{frontmatter.category}</Breadcrumb.Item>
            <Breadcrumb.Item>{frontmatter.title}</Breadcrumb.Item>
          </Breadcrumb>
        </h2>
        <div
          style={{ width: 'fit-content' }}
          className='markdown-body'
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
