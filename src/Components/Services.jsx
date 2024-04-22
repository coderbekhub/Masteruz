import React from 'react'
import HeroImg1 from '../img/heroImg1.png'

export default function Services() {
  return (
    <section className='serviceSection'>
      <div className='container'>
        <div className="serviceContent row">
          <div className='servieceInfo col-md-6 col-12'>
            <h2>Peaceful shopping.</h2>
            <h3>Mindful money.</h3>
            <p>See how we can help with making your shopping experience and money management more ZEN.</p>
            <a href="#">Узнать больше</a>
          </div>

          <div className="serviceImg col-md-6 col-12">
            <img src={HeroImg1} alt="heroImg" />
          </div>
        </div>
      </div>
    </section>
  )
}
