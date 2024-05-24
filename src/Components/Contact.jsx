import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios';

export default function Contact() {
  const BOT_TOKEN = "6189574670:AAF6_AfceRuiuG3ZrSo_CSwfYyiY4hrpPb8";
  const CHAT_ID = "-1001892280247"

  function formValidationChacking(name, number) {
    let isBoolean = false;

    if (!name) {
      setError(p => ({ ...p, name: [true, 'F.I.O. kiritilmadi!'] }))
      isBoolean = true

    } else if (name?.length < 6) {
      setError(p => ({ ...p, name: [true, "Bunday qisqa F.I.O. bo'lmaydi"] }))
      isBoolean = true
    }

    if (!number) {
      setError(p => ({ ...p, phone: [true, 'Telefon raqam kiritilmadi!'] }))
      isBoolean = true
    }
    return isBoolean;
  }

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value

    if (formValidationChacking(name, number)) return
    setDisbl(true)

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n`

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
      .then((res) => {
        toast.success('Спасибо за заявку')
        e.target.reset()
        setDisbl(false)
      })
      .catch((err) => {
        toast.error('Bir yoki bir nechta maydonda noto’g’ri ma’lumotlar mavjud. Iltimos, ularni tekshiring va qaytadan urining.')
        setDisbl(false)
      })

    let style = {}
    if (inputValue === '') {
      style = {
        border: '2px solid red'
      }
    }
    else {
      style = {
        border: '2px solid green'
      }
    }
    setStyled(style)
  }

  const [styled, setStyled] = useState({ border: '1px solid red', borderRadius: '2px' })
  const [inputValue, setValue] = useState('')
  const [disbl, setDisbl] = useState(false)
  const [error, setError] = useState({
    name: [false, ""],
    phone: [false, ""],
  })

  return (
    <>
      <section className="contactSection">
        <div className="container">
          <div className='row contactContent'>
            <div className='contactMap'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.2227283855061!2d69.32481349773276!3d41.293546371048755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef56d60826423%3A0x10773a3cd5c4658e!2z0JTRg9GB0YLQu9C40LotMg!5e0!3m2!1sru!2s!4v1715167947900!5m2!1sru!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='contactForm'> 
              <h2>Biz bilan aloqa</h2>
              <p>Savolingiz bormi? U holda quyidagi bo`limlarni to`ldiring, va bizga yuboring. Sizga tez orada javob beramiz!</p>
              <form onSubmit={sendForm}>
                <input type="text" id='name' required placeholder='Ismingiz' onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} />
                {error.name[0] && <p style={{ color: 'red' }}>{error.name[1]}</p>}

                <input onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} type="tel" id='number'  
                autocomplete="on" maxlength="13" minlength="4" placeholder="Телефон" data-intl-tel-input-id="1" data-mask="+998 (__)___-__-__" inputmode="numeric" data-gtm-form-interact-field-id="1" size="40" aria-required="1" 
                onChange={(e) => {
                  e.target.setCustomValidity("");
                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity(
                      "Raqamni noto'g'ri kiritdingiz! Misol: +998 (97) 7770777"
                    );
                  }
                    setError(p => ({ ...p, phone: [false, ''] }))
                  }} pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                /> 
              {error.phone[0] && <p style={{ color: 'red' }}>{error.phone[1]}</p>}
              <button>Yuborish</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
