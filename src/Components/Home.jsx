import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Fridge from './Fridge'
import WashingMachine from './WashingMachine'
import Condicioner from './Condicioner'
import Partners from './Partners'
import WeWorking from './WeWorking'
import Accordion from './Accordion'
import Cards from './Cards'

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <Fridge />
      <WashingMachine />
      <Condicioner />
      <Partners />
      <WeWorking />
      <Accordion />
      <Cards />
    </>
  )
}
