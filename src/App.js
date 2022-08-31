import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainContent from './Components/MainContent/MainContent'
import MainRooms from './Components/MainContent/MainRooms/MainRooms'
import MainSlice from './Components/MainContent/MainSlice/MainSlice'
import Contact from './pages/Contact/Contact'
import HostelInfo from './pages/HostelInfo/HostelInfo'
import Prices from './pages/Prices/Prices'
import Relax from './pages/Relax/Relax'
import Territory from './pages/Territory/Territory'
import RoomPage from './pages/RoomPage/index';
import Sea from './pages/Sea/Sea'
import Restoran from './pages/Restoran/Restoran'
import Booking from './pages/Booking/Booking'
import CartPage from './pages/Cart/Cart'
import Menu from './pages/Menu/Menu'
import { useSelector } from 'react-redux'
import WelcomeCard from './pages/WelcomeCard/WelcomeCard'


function App() {
  const token = useSelector((state) => state.user.token)

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
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App
