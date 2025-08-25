import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Card from './components/card';
function App() {
  

  return (
    <>
     
       <Navbar/>
       <Banner/>
       <Footer/>
       <Card />
       
    </>
  )
}

export default App
