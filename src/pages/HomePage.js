import React from 'react'
import Navbar from "../components/Navbar"
import Main from '../components/Main'
import Cards from '../components/Cards'
import WhyUs from '../components/WhyUs'
import Courses from '../components/Courses'
import Annonce from '../components/Annonce'
import Team from '../components/Team'
import Events from '../components/Events'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
   <>
   <Navbar/>
   <Main/>
   <Cards/>
   <WhyUs/>
   <Courses/>
   <Annonce/>
   <Team/>
   <Events/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default HomePage
