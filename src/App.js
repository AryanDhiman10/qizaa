import Navbar from "./components/Navbar";
import Intro from './components/Intro'
import Offerings from "./components/Offerings";
import Shop from './components/Shop'
import SustainableBrands from "./components/SustainableBrands";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Offerings/>
      <Shop/>
      <SustainableBrands/>
      <JoinUs/>
      <Footer/>
    </div>
  );
}

export default App;
