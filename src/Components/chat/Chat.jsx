import React from 'react';
import { useSelector } from 'react-redux';


function Chat(props) {
    const socket = useSelector(state => state.chatUserAdmin.socket)
    socket.on('connect', () => console.log(socket.connected))
    const user = {
        key: "aaauuuee",
        ladasidan: false
    }
    socket.emit('join', user)
    console.log(socket)
    const handleClickCreateChat = () => {
        socket.emit('create:chat')
          socket.on('chats', room => {
          return  console.log(room)
          })
    }
  
    return (
        <div>
            <button onClick={handleClickCreateChat}>создать чат</button>
        </div>
    )
}

export default Chat;