import React from 'react'
import { Link } from 'gatsby'

import SearchInput from '../components/SearchInput'
import styles from './CustomHeader.module.scss'

const CustomHeader = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logo}>
        Notes
      </Link>

      <SearchInput />
    </div>
  )
}

export default CustomHeader
