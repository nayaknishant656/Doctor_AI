import React from 'react'
import Hero from './components/hero'
import Contact from './components/contact'
import About from './components/about'
import Services from './components/services'
import HomePage from './HomePage'

type Props = {}

function Body({}: Props) {
  return (
    <>
    <Hero/>
    <HomePage/>
    <Contact/>
    <About/>
    <Services/>
    </>
  )
}

export default Body