import React from 'react'
import WashingMachine from '../img/washingMachine.png'
import Condicioner from '../img/condicioner2.png'
import Fridge from '../img/fridge2.png'

export default function Repairing() {
  return (
    <>
      <section className='repairingSection'>
        <div className="container">
          <div className='repairingText'>
            <h2>Что мы ремонтируем</h2>
            <p>Мы ремонтируем кондиционеры, холодильников и стиральных машин любой сложности за сутки, и даже быстрее</p>
            <a href="tel:+998935992504">ВЫЗВАТЬ МАСТЕРА</a>
          </div>

          <div className="row repairingContent">
            <div className='repairingInfo col-md-4 col-12'>
              <div className='repairingImg'>
                <img src={WashingMachine} alt="WashingMachine" />
              </div>

              <h2>Ремонт стиральных машин</h2>
              <p>Виды стиральных машин которых ремонтируем: автоматические, ультразвуковые, нового и старого</p>
            </div>

            <div className='repairingInfo col-md-4 col-12'>
              <div className='repairingImg'>
                <img src={Condicioner} alt="Condicioner" />
              </div>

              <h2>Ремонт стиральных машин</h2>
              <p>Виды стиральных машин которых ремонтируем: автоматические, ультразвуковые, нового и старого</p>
            </div>

            <div className='repairingInfo col-md-4 col-12'>
              <div className='repairingImg'>
                <img src={Fridge} alt="Fridge" />
              </div>

              <h2>Ремонт стиральных машин</h2>
              <p>Виды стиральных машин которых ремонтируем: автоматические, ультразвуковые, нового и старого</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
