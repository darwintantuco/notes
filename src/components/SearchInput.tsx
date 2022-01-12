import React from 'react'
import { DocSearch } from '@docsearch/react'
import '@docsearch/css'

const SearchInput = (): JSX.Element => {
  return (
    <DocSearch
      appId='YW9VSASXWM'
      apiKey='f53866351b69b4ed8215dd64602da9dc'
      indexName='darwintantuco'
    />
  )
}

export default SearchInput
