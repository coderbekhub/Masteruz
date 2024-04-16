import React, {useState, useEffect} from 'react'
import { MasterUz } from '../tools/constants'
import { getLanguage, getText } from '../locale'
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'

export default function NavBar() {
  // MultiLanguage
  const changeLanguage = (e) => {
    localStorage.setItem(MasterUz, e)
    document.location.reload(true)
  }

  // NavBurger
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  return (
  <section className='navSection'>
    <div className="container">
      <nav className={toggle?'navbar expanded':'navbar'}>
        <a className='logo' href="/">MasterUz</a>
          <div className='toggle-icon' onClick={handleToggle}>
            {toggle?<Icon icon={x} size={40}/>:<Icon icon={menu} size={40}/>}
          </div>
          <ul className='navList'>
            <li><a className='navLink' href="#">{getText('washingMachines')}</a></li>
            <li><a className='navLink' href="#">Кондиционеры</a></li>
            <li><a className='navLink' href="#">Холодильники</a></li>
            <li><a className='navLink navCall' href="tel:+998935992504">Позвонить мастеру</a></li>
            <ul className='langList'>
              <li className='langWrap d-flex align-items-center'>
                <h5 className='nav-link d-flex align-items-center'>
                  {getLanguage() === 'en' ? <>English <i class='bx bx-chevron-down'></i> </> : getLanguage() === 'ru' ? <>Русский <i class='bbx-chevron-down'></i> </> : <>O'zbek <i class='bx bx-chevron-down'></i></>}
                </h5>
                <div className="wrap">
                  <p onClick={() => changeLanguage('uz')}>O'zbek</p>
                  <p onClick={() => changeLanguage('ru')}>Русский</p>
                  <p onClick={() => changeLanguage('en')}>English</p>
                </div>
              </li>
            </ul>
          </ul>
      </nav>
    </div>
  </section>
  )
}
