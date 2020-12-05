import React from 'react'
import { Link } from 'gatsby'

import SearchInput from '../components/SearchInput'

const CustomHeader = (): JSX.Element => {
  return (
    <div className={'flex mt-26'}>
      <Link to='/' className={''}>
        Notes
      </Link>

      <SearchInput />
    </div>
  )
}

export default CustomHeader
