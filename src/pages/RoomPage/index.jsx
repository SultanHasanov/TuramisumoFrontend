import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from '../../features/roomsTypes';

const RoomPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const rooms = useSelector((state) => state.room.rooms);
  const room = rooms.find(item => item._id === id)
  useEffect(() => {
    dispatch(getRooms());
  }, [])
  console.log(room);
  return <div>{room.name}</div>;
};

export default RoomPage;
