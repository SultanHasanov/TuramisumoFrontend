import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainContent from './Components/MainContent/MainContent'
import MainRooms from './Components/MainContent/MainRooms/MainRooms'
import HostelInfo from './pages/HostelInfo/HostelInfo'
import Prices from './pages/Prices/Prices'
import Relax from './pages/Relax/Relax'


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainContent />}/>
        <Route path='/' element={<MainRooms />}/>
        <Route path='/hostel' element={<HostelInfo />}/>
        <Route path='/relax' element={<Relax />}/>
        <Route path='/prices' element={<Prices />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
