import React from 'react'

import { Layout } from 'antd'

const IndexPage = (): JSX.Element => {
  const { Content } = Layout

  return (
    <>
      <Content style={{ margin: '16px 24px' }}>
        <p> Collection of notes I find useful in day to day work. </p>
      </Content>
    </>
  )
}

export default IndexPage
