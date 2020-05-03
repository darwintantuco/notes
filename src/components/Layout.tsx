import React from 'react'

import '../styles/base.scss'
import styles from './Layout.module.scss'

import Sidebar from '../components/Sidebar'

import { Layout as AntLayout, Breadcrumb } from 'antd'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <AntLayout hasSider={true} style={{ background: '#fff' }}>
      <Sidebar />

      <AntLayout style={{ margin: '0 24px', background: '#fff' }}>
        {children}
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
