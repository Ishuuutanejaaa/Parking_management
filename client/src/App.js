import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import ParkingSpace from './Components/ParkingSpace';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Footer />
      <Login />
    <SignUp/> */}
    <ParkingSpace />

    </div>
  );
}

export default App;
