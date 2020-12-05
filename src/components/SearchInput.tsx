import React, { useEffect } from 'react'
import loadjs from 'loadjs'
import { Input } from 'antd'

const SearchInput = (): JSX.Element => {
  useEffect(() => {
    loadjs(
      [
        'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css',
        'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js',
      ],
      () => {
        docsearch({
          apiKey: '6bba7de852f1c94bbca06d233879424d',
          indexName: 'darwintantuco',
          inputSelector: '#searchInput',
          debug: true,
        })
      }
    )
  }, [])

  return (
    <div className={'mb-8'}>
      <Input placeholder='Search' id='searchInput' />
    </div>
  )
}

export default SearchInput
