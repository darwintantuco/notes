import React from 'react'
import { graphql } from 'gatsby'

import { Breadcrumb, Layout, PageHeader } from 'antd'

import styles from './noteTemplate.module.scss'

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
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>{frontmatter.category}</Breadcrumb.Item>
          <Breadcrumb.Item>{frontmatter.title}</Breadcrumb.Item>
        </Breadcrumb>
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
