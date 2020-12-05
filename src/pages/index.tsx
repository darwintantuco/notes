import React from 'react'

import { Layout } from 'antd'

const IndexPage = (): JSX.Element => {
  const { Content } = Layout

  return (
    <>
      <Content style={{ margin: '16px 24px' }}>
        <p> Collection of notes I find useful in day to day work. </p>
        <p>Contains notes from books, blogs, articles, online courses, etc.</p>
        <p>
          Anything under `/notes/` is not indexed/crawled by any search engine
          and only for my personal use.
        </p>
        <p>
          {`If you think I violated any copyright, feel free to reach out, I'd be happy to remove it.`}
        </p>
      </Content>
    </>
  )
}

export default IndexPage
