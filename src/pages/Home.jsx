import React from 'react'
import HomePage from '../components/HomePage'
import Navbar from '../components/Navbar'
import Cardscontainer from './Cardscontainer'

function Home() {
  return (
    <div class="home-background height:100% mb-14">
    <div class=" height:100%">
        
  <Navbar/>

<div class="mt-4">
 <HomePage/>
 </div>


 <div class="mt-24">
 <Cardscontainer/>
 </div>
 </div>


    </div>
  
  )
}

export default Home