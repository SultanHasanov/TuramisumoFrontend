import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRooms } from '../../../features/roomsTypes'
import '../../../scss/main/mainRooms.scss'

const MainRooms = () => {
    const dispatch = useDispatch()
    const rooms = useSelector((state) => state.room)
    console.log()


    useEffect(() => {
        dispatch(getRooms())
    }, [dispatch])

  return (
    <div>
        {rooms.map((item) => {
            return (
                <div>{item.name}</div>
            )
        })}
    </div>
  )
}

export default MainRooms