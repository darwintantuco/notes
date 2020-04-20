import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = (): JSX.Element => (
  <Helmet defer={false} defaultTitle={'My title'}>
    <html lang='en' />
    <link rel='canonical' href={''} />
    <meta name='description' content='My content' />
    <meta
      name='viewport'
      content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover'
    />

    <meta property='og:title' content={''} />
    <meta property='og:url' content={''} />
    <meta property='og:type' content='website' />
    <meta property='og:locale' content='en' />
    <meta property='og:site_name' content={''} />

    <meta name='twitter:card' content='summary' />
    <meta name='twitter:site' content={''} />
  </Helmet>
)

export default SEO
