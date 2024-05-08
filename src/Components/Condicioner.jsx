import React from 'react'
import CondicionerImg from '../img/condicioner2.png'

export default function Condicioner() {
  return (
    <>
      <section className='condicionerSection'>
        <div className="container">
          <div className="condicionerContent row">
            <div className='condicionerImg col-md-6 col-12'>
              <img src={CondicionerImg} alt="condicionerImg" />
            </div>

            <div className='condicionerInfo col-md-6 col-12'>
              <h2>1-year warranty boost</h2>
              <p>ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common. <br /> <br /> When you buy any electronics with your ZEN shopping Mastercard®, their warranty gets extended by one year. How does it work? It simply does. Automatically.</p>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
