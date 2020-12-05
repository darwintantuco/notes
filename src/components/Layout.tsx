import React from 'react'
import { Layout as AntLayout } from 'antd'

import Sidebar from '../components/Sidebar'
import SEO from '../components/SEO'
import CustomHeader from './CustomHeader'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { Content } = AntLayout

  return (
    <AntLayout>
      <SEO />
      <CustomHeader />
      <AntLayout hasSider={true}>
        <Sidebar />
        <Content style={{ padding: '0 24px', background: '#fff' }}>
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
