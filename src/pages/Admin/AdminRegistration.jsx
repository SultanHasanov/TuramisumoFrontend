import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../../scss/Admin/admin.scss'
import { createAdmin } from '../../features/chatUserAdmin'
function AdminRegistration(props) {
  const [name, setName] = useState('')
  const [surname, setFirstName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAddName = e => {
    setName(e.target.value)
  }
  const handleAddFirstName = e => {
    setFirstName(e.target.value)
  }
  const handleAddLogin = e => {
    setLogin(e.target.value)
  }
  const handleAddPassword = e => {
    setPassword(e.target.value)
  }
  const handleClickAuth = () => {
    dispatch(createAdmin({ name, surname, login, password }))
    navigate('/')
  }
  const poc = e => {
    e.preventDefault()

    
  }
  return (
    <div className='container_registration'>
      <form onSubmit={poc}>
        <input value={name} onChange={handleAddName} placeholder='Имя' />
        <input
          value={surname}
          onChange={handleAddFirstName}
          placeholder='Фамилия'
        />
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

export default AdminRegistration
