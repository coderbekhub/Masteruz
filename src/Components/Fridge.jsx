import React from 'react'
import FridgeImg from '../img/fridge.png'

export default function Fridge() {
  return (
    <>
      <section className='fridgeSection'>
        <div className="container">
          <div className="fridgeContent row">
            <div className='fridgeImg col-md-6 col-12'>
              <img src={FridgeImg} alt="FridgeImg" />
            </div>

            <div className='fridgeInfo col-md-6 col-12'>
              <h2>1-year warranty boost</h2>
              <p>ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common. <br /> <br /> When you buy any electronics with your ZEN shopping Mastercard®, their warranty gets extended by one year. How does it work? It simply does. Automatically.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
