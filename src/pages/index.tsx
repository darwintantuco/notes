import React from 'react'

import { Layout } from 'antd'

const IndexPage = (): JSX.Element => {
  const { Content } = Layout

  return (
    <>
      <Content>
        <p>My personal notes</p>
        <p>Contain learnings from blogs, books, articles and online courses</p>
        <p>
          All content are not indexed by any search engine and only for my
          personal use
        </p>
        <p>
          {`If you think I violated any copyright, feel free to reach out, I'd be happy to remove it`}
        </p>
      </Content>
    </>
  )
}

export default IndexPage
