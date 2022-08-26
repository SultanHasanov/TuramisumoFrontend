import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRooms } from '../../../features/roomsTypes'
import '../../../scss/main/mainRooms.scss'
import Header from '../../Header/Header'
import { Link } from 'react-router-dom';

const MainRooms = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRooms())
  }, [dispatch])

  const loadingRooms = useSelector(state => state.room.loadingRooms)
  const rooms = useSelector(state => state.room.rooms)

  if (loadingRooms) {
    return <div>загрузка</div>
  } else {
    const business = rooms.filter(item => {
      return (
        item.name !== 'Номер для молодожен' &&
        item.name !== 'Семейный номер' &&
        item.name !== 'Одиночный номер' &&
        item.name !== 'Парный номер'
      )
    })

    const remainder = rooms.filter(item => {
      return (
        item.name !== 'Президентский номер' && item.name !== 'Люксовый номер'
      )
    })

    const upper = business.map(item => {
      return (
        
          <div className='business_rooms_el'>
            <div className='business_image'>
              <img src={item.images[0]} alt='err' />
            </div>
            <div className='info_pole'>
              <div className='name_rooms'>{item.name}</div>
              <div className='todo_text'>Гостиная</div>
              <div className='info_pole_footer'>
                <Link to="#">
                <button className='booking_button'>ЗАБРОНИРОВАТЬ СЕЙЧАС</button>
                </Link>
                <div className='price_info'>{item.price} ₽</div>
              </div>
            </div>
          </div>
        
      )
    })
    const bottom = remainder.map((item) => {
      return (
        <div className='general_rooms'>
          <div className='general_image'>
            <img src={item.images[0]} alt='err' />
          </div>
          <div className='info_pole_general'>
            <div className='name_rooms_general'>{item.name}</div>
            <div className='todo_text_general'>Гостиная</div>
            <div className='info_pole_footer_general'>
              <Link to="#">
              <button className='booking_button_general'>ЗАБРОНИРОВАТЬ СЕЙЧАС</button>
              </Link>
              <div className='price_info_general'>{item.price} ₽</div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className='container'>
        <div className='business_rooms'>{upper}</div>
        <div className='general'>
         {bottom}
        </div>
       
      </div>
    )
  }
}

export default MainRooms
