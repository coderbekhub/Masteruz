import React,{useState} from 'react'
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'

export default function NavBar() {

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
            <li><a className='navLink' href="#">Стиральные машины</a></li>
            <li><a className='navLink' href="#">Кондиционеры</a></li>
            <li><a className='navLink' href="#">Холодильники</a></li>
            <li><a className='navLink' href="#">Позвонить мастеру</a></li>
          </ul>
      </nav>
    </div>
  </section>

  )
}
