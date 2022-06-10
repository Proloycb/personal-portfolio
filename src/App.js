import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import bg from "./image/download.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ProjectsDetail1 from "./components/ProjectsDetails/ProjectsDetail1";
import ProjectsDetail2 from "./components/ProjectsDetails/ProjectsDetail2";
import ProjectsDetail3 from "./components/ProjectsDetails/ProjectsDetail3";

function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="bg-accent">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectsDetail1" element={<ProjectsDetail1/>}/>
          <Route path="/projectsDetail2" element={<ProjectsDetail2/>}/>
          <Route path="/projectsDetail3" element={<ProjectsDetail3/>}/>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
