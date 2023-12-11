import './App.css';
import FooterBar from './Components/FooterBar';
import { NavigationBar } from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImgSlider } from './Components/ImageSLiders';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login";
import SignUpPage from "./Components/Signup";
import { AboutUs } from './Components/AboutUs';
import { CarList } from './Components/CarList';
import { AddCar } from './Components/AddCar';
import EditCar from './Components/EditCar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar></NavigationBar>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<ImgSlider />}></Route>
          <Route path="/carlist" element={<CarList />}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/addcar" element={<AddCar/>}></Route>
          <Route path="/edit/:model" element={<EditCar/>}></Route>
        </Routes>
        {/* <AboutUs></AboutUs> */}
      </div>
      <FooterBar></FooterBar>
    </BrowserRouter>
    </div>
  );
}

export default App;