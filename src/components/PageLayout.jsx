import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const PageLayout = ({children}) => {
  return (
    <>
    <Navbar bg='bg-black' />
    {children}
    <Footer />
    </>
  )
}

export default PageLayout