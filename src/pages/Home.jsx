import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Refreshtoken from '../hooks/Refreshtoken'
import Cardcontainer from '../components/Cardcontainer'
import Subscribe from '../components/Subscribe'
import { useAuth } from '../Context/Auth'
const Home = () => {
  const {auth} =useAuth()
  const refresh=Refreshtoken()
  
  return (
    <>
     <Header />
     <Cardcontainer />
    <Subscribe />
     <Footer />
    </>
 

  )
}

export default Home