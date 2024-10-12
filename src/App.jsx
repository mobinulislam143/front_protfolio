// Import necessary libraries and components
import { BrowserRouter as Router } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import MasterLayout from './component/MasterLayout/MasterLayout'; // Adjust the path if needed

function App() {
  const particlesInit = useCallback(async (engine) => {
    // Loads tsparticles engine with all the features
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // This callback can be used if you want to access the particles container
  }, []);

  return (
    <Router>
      {/* Main content container */}
      <div className="relative z-10">
        <MasterLayout />
      </div>

      {/* tsparticles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#111827", // Dark background color, can be adjusted
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push", // On click, particles are pushed
              },
              onHover: {
                enable: true,
                mode: "repulse", // On hover, particles repulse away
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4, // Number of particles added on click
              },
              repulse: {
                distance: 100, // Distance for repulse effect
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff", // Particle color
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce", // Particles bounce at the edges
              },
              random: false,
              speed: 2, // Speed of particle movement
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800, // Density area for particles
              },
              value: 80, // Number of particles
            },
            opacity: {
              value: 0.5, // Opacity of the particles
            },
            shape: {
              type: "circle", // Shape of the particles
            },
            size: {
              value: { min: 1, max: 5 }, // Size range for particles
            },
          },
          detectRetina: true, // Adjust for retina displays
        }}
        className="absolute inset-0 z-0" // Position the particles behind all content
      />
    </Router>
  );
}

export default App;
