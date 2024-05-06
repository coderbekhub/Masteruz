import React from 'react'
import LocationIcon from '../img/location.svg'
import SearchIcon from '../img/search.svg'
import WrenchIcon from '../img/wrench.svg'

export default function WeWorking() {
  return (
    <>
      <section className="workingSection">
        <div className="container">
          <div className='workingText'>
            <h2>Как мы работаем?</h2>
            <p>Вы звоните нам по поводу ремонт техники, наш мастер выедет к Вам в назначенное место и продиагностирует Вашу технику</p>
          </div>

          <div className='workingContent row'>
            <div className='workingCard col-md-4 col-12'>
              <div>
                <img src={LocationIcon} alt="location icon" />
              </div>
              <h2>Выезд на дом</h2>
              <p>Позвоните нам и назначьте вашу локацию и наш мастер выедет к Вам в назначенное время</p>
            </div>

            <div className='workingCard col-md-4 col-12'>
              <div>
                <img src={SearchIcon} alt="search icon" />
              </div>
              <h2>Бесплатная диагностика</h2>
              <p>Наш мастер Бесплатно диагностирует Вашу технику и подробно объясняет этапы ремонта и стоимость услуги</p>
            </div>
            
            <div className='workingCard col-md-4 col-12'>
              <div>
                <img src={WrenchIcon} alt="wrench icon" />
              </div>
              <h2>Ремонтируем технику</h2>
              <p>Мастер приходит в договоренное время со всеми нужными оборудованиями и ремонтирует Вашу технику</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
