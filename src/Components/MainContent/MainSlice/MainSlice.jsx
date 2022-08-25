import React from 'react'
import '../../../scss/main/mainSlice.scss'

function MainSlice(props) {
  return (
    <div className='slice_content'>
      <div className='text_header_slice'>
        <span>УСЛУГИ</span> КУРОРТА
      </div>
      <div className='footer_text_slice'>
        С лучшим роскошным рестораном и с лучшим басейном в мире
      </div>
      <ul className='slice_stretcher'>
        <li className='stretcher'>
          <div className='img_hea'>
            <span>МАССАЖ</span>
            <div className='rising_text'>
              МАССАЖ
            </div>
          </div>
        </li>
        <li className='stretcher'>
          <div className='img_fea'>
            <span>РЕСТОРАН</span>
            <div className='rising_text'>
              РЕСТОРАН
             
            </div>
          </div>
        </li>
        <li className='stretcher'>
          <div className='img_pua'>
            <span>БАСЕЙН</span>
            <div className='rising_text'>
              БАСЕЙН
             
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MainSlice
