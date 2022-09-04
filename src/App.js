import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainContent from './Components/MainContent/MainContent'
import MainRooms from './Components/MainContent/MainRooms/MainRooms'
import AdminRegistration from './pages/Admin/AdminRegistration'
import AdminAuthorization from './pages/Admin/AdminAuthorization'
import MainSlice from './Components/MainContent/MainSlice/MainSlice'
import Contact from './pages/Contact/Contact'
import HostelInfo from './pages/HostelInfo/HostelInfo'
import Prices from './pages/Prices/Prices'
import Relax from './pages/Relax/Relax'
import Territory from './pages/Territory/Territory'
import RoomPage from './pages/RoomPage/index'
import Sea from './pages/Sea/Sea'
import { useSelector } from 'react-redux'
import Admin from './pages/Admin/Admin'
import Restoran from './pages/Restoran/Restoran'
import Booking from './pages/Booking/Booking'
import CartPage from './pages/Cart/Cart'
import Menu from './pages/Menu/Menu'
import WelcomeCard from './pages/WelcomeCard/WelcomeCard'
import Hall from './pages/Hall/Hall'
import MenuId from './pages/Menu/FilteredProds';

function App() {
  const token = useSelector((state) => state.user.token)
  const tokenAdmin = useSelector(state => state.chatUserAdmin.tokenAdmin)

  if(!token) {
    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainContent />}/>
          <Route path="/contacts" element={<Contact />} />
          <Route path='/hostel' element={<HostelInfo />}/>
          <Route path='/relax' element={<Relax />}/>
          <Route path='/territory' element={<Territory />} />
          <Route path='/prices' element={<Prices />}/>
          <Route path='/room/:id' element={<RoomPage />} />
          <Route path='/restoran' element={<Restoran />} />
          <Route path='/sea' element={<Sea />}/>
          <Route path='/buy-room/:id' element={<Booking />} />
          <Route path='/welcome' element={<Navigate to="/" />} />
          <Route path='/admin/registration' element={<AdminRegistration />} />
          <Route path='/admin/authorization' element={<AdminAuthorization />} />
        </Routes>
        <Footer />
      </div>
    )
  } else if (token) {
    return (
      <div className='App'>
        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/' element={<MainContent />}/>
          <Route path="/contacts" element={<Contact />} />
          <Route path='/hostel' element={<HostelInfo />}/>
          <Route path='/relax' element={<Relax />}/>
          <Route path='/territory' element={<Territory />} />
          <Route path='/prices' element={<Prices />}/>
          <Route path='/room/:id' element={<RoomPage />} />
          <Route path='/restoran' element={<Restoran />} />
          <Route path='/sea' element={<Sea />}/>
          <Route path='/buy-room/:id' element={<Booking />} />
          <Route path='/welcome' element={<WelcomeCard />} />
          <Route path='/hall' element={<Hall />} />
          <Route path='/menu/:typeId' element={<MenuId />} />
        </Routes>
        <Footer />
      </div>
    )
  } else if(tokenAdmin !== null) {
      return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Admin />} />
        </Routes>
      </div>
    )
  }
}

export default App
