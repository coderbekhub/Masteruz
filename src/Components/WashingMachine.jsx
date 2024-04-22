import React from 'react'
import WashingMachineImg from '../img/washingMachine.png'

export default function WashingMachine() {
  return (
    <>
      <section className='washingMachineSection'>
        <div className="container">
          <div className="washingMachineContent row">
            <div className='washingMachineInfo col-md-6 col-12'>
              <h2>1-year warranty boost</h2>
              <p>ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common. <br /> <br /> When you buy any electronics with your ZEN shopping Mastercard®, their warranty gets extended by one year. How does it work? It simply does. Automatically.</p>
            </div>

            <div className='washingMachineImg col-md-6 col-12'>
              <img src={WashingMachineImg} alt="washingMachineImg" />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
