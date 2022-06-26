import React from 'react'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import Navbar from '../components/Navbar'
import Cardscontainer from './Cardscontainer'

function Home() {
  return (
    <div class="home-background height:100%">
    <div class=" height:100%">
        
  <Navbar/>

<div class="mt-4">
 <HomePage/>
 </div>


 <div class="mt-24">
 <Cardscontainer/>
 </div>
 <Footer/>
 </div>


    </div>
  
  )
}

export default Home