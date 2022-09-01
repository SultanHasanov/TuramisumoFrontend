import React, { useEffect, useRef, useState } from 'react'
import '../../scss/chat/window.scss'

function Window(props) {
  const [iconChat, setIconChat] = useState(false)
  
  const handleClickExit = () => {
    setIconChat(false)
  }
  document.body.addEventListener('click', handleClickExit)
  return (
    <div onClick={e => e.stopPropagation()} id='window' className='window'>
      <div onClick={() => setIconChat(!iconChat)}> служба подержки?</div>
      <div className={'chat_bar_' + (iconChat ? 'open' : 'exit')}>
        
      </div>
    </div>
  )
}

export default Window
