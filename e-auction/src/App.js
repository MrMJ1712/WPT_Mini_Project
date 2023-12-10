import './App.css';
import FooterBar from './Components/FooterBar';
import { NavigationBar } from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials } from './Components/Testimonials';
import { ImgSlider } from './Components/ImageSLiders';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login";
import SignUpPage from "./Components/Signup";
import { AboutUs } from './Components/AboutUs';
import { CarList } from './Components/CarList';
import { AddCar } from './Components/AddCar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavigationBar></NavigationBar> */}
      <div>
        <Routes>
          <Route path="/" element={<NavigationBar />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/SignUp" element={<SignUpPage/>}></Route>
          <Route path="/About_Us" element={<AboutUs/>}></Route>
          <Route path="/AddCar" element={<AddCar/>}></Route>
        </Routes>
        <ImgSlider/>
        <CarList></CarList>
        {/* <AboutUs></AboutUs> */}
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;