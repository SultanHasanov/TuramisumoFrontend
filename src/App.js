import { Route, Routes } from 'react-router-dom'
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


function App() {
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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
