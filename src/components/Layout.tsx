import React from 'react'
import { Layout as AntLayout } from 'antd'
import { Link } from 'gatsby'

import '../styles/base.scss'

import SearchInput from '../components/SearchInput'
import Sidebar from '../components/Sidebar'
import SEO from '../components/SEO'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { Header, Content } = AntLayout

  return (
    <AntLayout>
      <SEO />
      <Header
        style={{
          background: '#fff',
          padding: '0 24px',
          fontWeight: 'bold',
          fontSize: '24px',
        }}
      >
        <Link to='/'> Notes </Link>
        <SearchInput />
      </Header>
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
