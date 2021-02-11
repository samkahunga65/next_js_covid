import Head from 'next/head'
import React from 'react'
import Navbar from './navbar'

export default function Layout({children}) {
    return (
        <div className="content">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Navbar/>
        { children }
        {/* <Footer /> */}
      </div>
    )
}
