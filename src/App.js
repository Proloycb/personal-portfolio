import { Route, Routes } from "react-router";
import About from "./components/Home/About";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import bg from "./image/download.png";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div style={{
      background: `url(${bg})`
    }}>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <ToastContainer/>
      </div>
    </div>
  );
}

export default App;
