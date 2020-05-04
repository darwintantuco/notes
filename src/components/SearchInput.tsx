import React from 'react'
import { AutoComplete, Input } from 'antd'

const SearchInput = (): JSX.Element => (
  <AutoComplete
    dropdownClassName='certain-category-search-dropdown'
    dropdownMatchSelectWidth={500}
    style={{
      width: 250,
    }}
  >
    <Input.Search size='large' placeholder='input here' />
  </AutoComplete>
)

export default SearchInput
