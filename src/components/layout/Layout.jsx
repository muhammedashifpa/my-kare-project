import React from 'react'
import Footer from './Footer/Footer'
import Header from './Navbar/NavBar'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
    </>
  )
}

export default Layout