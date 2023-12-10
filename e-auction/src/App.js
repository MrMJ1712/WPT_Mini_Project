import './App.css';
import FooterBar from './Components/FooterBar';
import { NavigationBar } from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials } from './Components/Testimonials';
import { ImgSlider } from './Components/ImageSLiders';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login";
import SignUpPage from "./Components/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<NavigationBar />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/SignUp" element={<SignUpPage/>}></Route>
        </Routes>
       
        < ImgSlider />
        < Testimonials />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
