import React from 'react'
import Partner1 from '../img/Partners/1.png'
import Partner2 from '../img/Partners/2.png'
import Partner3 from '../img/Partners/3.png'
import Partner4 from '../img/Partners/4.png'
import Partner5 from '../img/Partners/5.png'
import Partner6 from '../img/Partners/6.png'
import Partner7 from '../img/Partners/7.png'
import Partner8 from '../img/Partners/8.png'
import Partner9 from '../img/Partners/9.png'
import Partner10 from '../img/Partners/10.png'
import Partner11 from '../img/Partners/11.png'
import Partner12 from '../img/Partners/12.png'

export default function Partners() {
  return (
    <>
      <section className='partnerSection'>
        <div className="container">
          <div className='partnersInfo'>
            <h2>Бытовая техника которую мы ремонтируем</h2>
            <p>It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it. We gave it a thought and made cashback way more friendly. Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase. It's like you haggled some cash, despite you didn't have to. Just don't forget to use in-app cashback link.</p>
          </div>

          <div className='partnersContent row text-center align-items-center'>
            <div>
              <img src={Partner1} alt="partners img" />
              <img src={Partner2} alt="partners img" />
              <img src={Partner3} alt="partners img" />
              <img src={Partner4} alt="partners img" />
              <img src={Partner5} alt="partners img" />
              <img src={Partner6} alt="partners img" />
              <img src={Partner7} alt="partners img" />
              <img src={Partner8} alt="partners img" />
              <img src={Partner9} alt="partners img" />
              <img src={Partner10} alt="partners img" />
              <img src={Partner11} alt="partners img" />
              <img src={Partner12} alt="partners img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
