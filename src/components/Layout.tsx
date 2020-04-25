import React from 'react'

import '../styles/base.scss'
import styles from './Layout.module.scss'

import Sidebar from '../components/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={styles.container}>
    <Sidebar />
    <main className={styles.main}>{children}</main>
  </div>
)

export default Layout
