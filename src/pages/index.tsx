import React from 'react'

import { Layout, PageHeader } from 'antd'

const IndexPage = (): JSX.Element => {
  const { Content } = Layout

  return (
    <>
      <Content
        style={{ margin: '16px 24px' }}
        className='site-layout-background'
      >
        <p> Collection of notes I find useful in day to day work. </p>
      </Content>
    </>
  )
}

export default IndexPage
