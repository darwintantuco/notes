import React from 'react'
import { Link } from 'gatsby'

import SearchInput from '../components/SearchInput'

const CustomHeader = (): JSX.Element => {
  return (
    <div
      className={'bg-white pt-6 flex flex-col items-center md:flex-row md:pl-6'}
    >
      <Link to='/' className={'mb-3 font-bold text-2xl md:w-72'}>
        Notes
      </Link>

      <SearchInput />
    </div>
  )
}

export default CustomHeader
