import React from 'react'

export default function Accordion() {
  return (
    <>
      <section className='accordionSection'>
        <div className="container">
          <div className='accordionText'>
            <h2>Часто задаваемые вопросы</h2>
            <p>Чтобы Вам не пришлось искать информацию по всему сайту, мы собрали самые часто задаваемые вопросы в список ниже</p>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Как быстро может приехать мастер?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  После получения нами от вас заявки, в течение одного часа к вам прибудет ближайший сводобный мастер.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Сколько стоит выезд мастера?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  При условии ремонта выезд мастера бесплатен.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Сколько стоит диагностика?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Диагностика предоставляется бесплатно, но в случае отказа потребуется уплатить 50 000 сум за вызов мастера.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFourth">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth">
                  Почему мне стоит обратиться к вам?
                </button>
              </h2>
              <div id="collapseFourth" class="accordion-collapse collapse" aria-labelledby="headingFourth" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Ремонтируем технику на протяжение 15 лет, и предоставили свои услуги более 10 000 довольным клиентам. Поэтому мы уверены в опыте и качестве нашей работы. Половина новых клиентов приходят к нам по рекомендациям от старых. <br /> <br />

                Более того в нашем сервисе в наличие 5000+ качественных запчастей, и во время ремонта устанавливаем только оригинальные комплектующие.<br /> <br />

                Самое главное - выдаем гарантийный талон сроком до 3-х лет, после предоставления наших услуг и работу по договору. <br /> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
