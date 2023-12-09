import './App.css';
import FooterBar from './Components/FooterBar';
import { NavigationBar } from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials } from './Components/Testimonials';
import { ImgSlider } from './Components/ImageSLiders';

function App() {
  return (
    <div className="App">
    <NavigationBar></NavigationBar>
    <ImgSlider></ImgSlider>
    <Testimonials></Testimonials>
    {/* <FooterBar></FooterBar> */}
    </div>
  );
}

export default App;
