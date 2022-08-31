import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadAdmin } from '../../features/chatUserAdmin'
function AdminAuthorization(props) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddLogin = e => {
    setLogin(e.target.value)
  }
  const handleAddPassword = e => {
    setPassword(e.target.value)
  }
  const handleClickAuth = () => {
      dispatch(loadAdmin({ login, password }))
      navigate('/')
  }
  const poc = e => {
    e.preventDefault()

    
  }
  return (
    <div className='container_registration'>
      <form onSubmit={poc}>
        <input value={login} onChange={handleAddLogin} placeholder='Логин' />
        <input
          value={password}
          onChange={handleAddPassword}
          placeholder='Пароль'
        />

        <button onClick={handleClickAuth}>зарегистрироваться</button>
      </form>
    </div>
  )
}

export default AdminAuthorization
