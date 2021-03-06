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
    <AntLayout className='m-auto xl: max-w-screen-xl lg:max-w-screen-lg'>
      <SEO />
      <CustomHeader />
      <AntLayout hasSider={true}>
        <Sidebar />
        <Content className='pl-6 pr-6 bg-white'>{children}</Content>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
