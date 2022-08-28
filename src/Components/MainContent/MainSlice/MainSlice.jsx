import React from 'react'
import '../../../scss/main/mainSlice.scss'
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from 'react-router-dom';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(500px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        {children}
      </span>
    </section>
  );
}


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
            <Link to="/restoran">
            <div className='img_fea'>
              <span>РЕСТОРАН</span>
              <div className='rising_text'>
                РЕСТОРАН
              </div>
            </div>
            </Link>
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
