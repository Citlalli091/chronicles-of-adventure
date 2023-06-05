import React, { useCallback, useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navbar from './components/navbar';
import ContentContainer from './components/ContentContainer';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const [worlds, setWorlds] = useState([]);

  // Simulating fetching user-created worlds
  useEffect(() => {
    // Make an API call or fetch data from the server
    const fetchWorlds = async () => {
      try {
        const response = await fetch('https://api.example.com/user/worlds');
        const data = await response.json();
        setWorlds(data);
      } catch (error) {
        console.error('Error fetching user worlds:', error);
      }
    };

    fetchWorlds();
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: '#000000',
          },
          particles: {
            number: {
              value: 100,
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              out_mode: 'out',
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <div style={{ zIndex: 1, color: '#ffffff' }}>
        <Navbar />
        <ContentContainer worlds={worlds} />
      </div>
    </div>
  );
}

export default App;