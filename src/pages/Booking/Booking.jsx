import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import { getRooms } from '../../features/roomsTypes';
import styles from "../../scss/pages/Booking.module.scss";



const Booking = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const rooms = useSelector((state) => state.room.rooms);
  const loading = useSelector((state) => state.room.loadingRooms);
  const room = rooms.find((item) => item._id === id);

  useEffect(() => {
    dispatch(getRooms());
  }, []);
  console.log(room);

  if(room) {
    return (
      <div className={styles.booking_bloc}>
        <Header />
      </div>
    );
  }
};

export default Booking;