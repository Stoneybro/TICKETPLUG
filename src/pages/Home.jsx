import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Refreshtoken from '../hooks/Refreshtoken'
import Cardcontainer from '../components/Cardcontainer'
import { useAuth } from '../Context/Auth'
const Home = () => {
  const {auth} =useAuth()
  const refresh=Refreshtoken()
  
  return (
    <>
     <Header />
     <Cardcontainer />
     <Footer />
    </>
 

  )
}

export default Home