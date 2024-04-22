import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Fridge from './Fridge'
import WashingMachine from './WashingMachine'
import Condicioner from './Condicioner'

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <Fridge />
      <WashingMachine />
      <Condicioner />
    </>
  )
}
