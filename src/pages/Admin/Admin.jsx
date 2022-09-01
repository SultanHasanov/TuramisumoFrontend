import React from 'react'
import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux'
function Admin(props) {
  const tokenAdmin = useSelector(state => state.chatUserAdmin.tokenAdmin)
  const socket = useSelector(state => state.chatUserAdmin.socket)
  const id = jwtDecode(tokenAdmin)

  
  return <div>ahhaha</div>
}

export default Admin
