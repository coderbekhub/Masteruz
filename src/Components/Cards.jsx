import React from 'react'
import GarantIcon from '../img/garant.svg'
import Diagnostics from '../img/diagnostika.png'
import SettingsIcon from '../img/settings.svg'
import OpitIcon from '../img/opit.svg'

export default function Cards() {
  return (
    <>
      <section className="cardSection">
        <div className="container">
          <div className='row cardsContent'>
            <div className="cards col-md-3 col-12">
              <div>
                <img id='garantIcon' src={GarantIcon} alt="Garant icon" />
              </div>
              <h2>Гарантия до 3-х лет</h2>
              <p>Работаем по договору и выдаём гарантийный талон сроком до 3-х лет</p> 
            </div>

            <div className="cards col-md-3 col-12">
              <div>
                <img id='diagnosticsIcon' src={Diagnostics} alt="Diagnostics icon" />
              </div>
              <h2>Бесплатная диагностика</h2>
              <p>0 сум за диагностику в случае выполненного ремонта</p> 
            </div>

            <div className="cards col-md-3 col-12">
              <div>
                <img id='settingsIcon' src={SettingsIcon} alt="Settings icon" />
              </div>
              <h2>Оригинальные запчасти</h2>
              <p>В наличие 5000+ качественных запчастей, и устанавливаем оригинальные комплектующие</p> 
            </div>

            <div className="cards col-md-3 col-12">
              <div>
                <img id='opitIcon' src={OpitIcon} alt="Opit icon" />
              </div>
              <h2>15 летний опыт</h2>
              <p>Ремонтируем технику на протяжение 15 лет, а это более 10,000 довольных клиентов</p> 
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
