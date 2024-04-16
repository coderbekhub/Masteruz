import React from 'react'

export default function Navbar() {
  return (
    <>
      <section className='navSection'>
        <nav class="navbar navbar-expand-lg bg-light">
          <div className="container">
            <div className='navContent'>
              <div className='navBrand'>
                <a class="navbar-brand" href="/">Masteruz</a>
              </div>
              
              <div className='navBurger'>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>

              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                  <li>
                    <a class="nav-link active" aria-current="page" href="#">Стиральные машины</a>
                  </li>
                  <li>
                    <a class="nav-link" href="#">Кондиционеры</a>
                  </li>
                  <li>
                    <a class="nav-link" href="#">Холодильники</a>
                  </li>
                  <li>
                    <a class="nav-link" href="tel:+998935992504">Позвонить мастеру</a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </nav>      
      </section>
    </>
  )
}
