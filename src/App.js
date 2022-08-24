import "./App.css";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/MainContent/MainContent";
import MainRooms from "./Components/MainContent/MainRooms/MainRooms";

function App() {
  return (
    <div className="App">
      <MainContent />
      <MainRooms />
      <Footer />
    </div>
  );
}

export default App;
