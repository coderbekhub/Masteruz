import React from 'react'

export default function Navbar() {
  return (
    <>
      <section className='navBar'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <div>
              <a class="navbar-brand" href="#">Navbar</a>
            </div>
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  <a class="nav-link" href="#">Features</a>
                  <a class="nav-link" href="#">Pricing</a>
                </div>
              </div>
            </div>
          </div>
        </nav>      
      </section>
    </>
  )
}
