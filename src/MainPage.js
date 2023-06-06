import React, { useCallback, useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navbar from './components/navbar';
import ContentContainer from './components/ContentContainer';
import API from './utils/api';
// import WorldCreate from './components/worldCreate';
// import LoreCreate from './components/LoreCreate';
// import CharacterCreate from './components/CharacterCreate';
// import AuthForm from './pages/auth';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const [worlds, setWorlds] = useState([]);
  const [userId, setUserId] = useState(-1);
  const [username, setUsername] = useState("")
  const [token, setToken] = useState("")

  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    API.verifyToken(token).then(data=>{
      setToken(storedToken);
      setUserId(data.id);
      setUsername(data.username);
    }).catch(err=>{
      console.log("oh noes")
      console.log(err)
     logout();
    })
  },[])


  const logout = ()=>{
    localStorage.removeItem("token")
      setToken(null);
      setUsername(null);
      setUserId(0);
  }

  // Simulating fetching user-created worlds
  useEffect(() => {
    // Make an API call or fetch data from the server
    const fetchWorlds = () => {
      API.getAllWorlds()
      .then(data=>{
          setWorlds(data);
      }).catch(err=>{
      console.log(err);
      })
    }
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
      <div style={{ zIndex: 1, color: '#ffffff', marginTop: '2rem' }}>
        <Navbar />
        <ContentContainer worlds={worlds} />
        {/* <WorldCreate/> */}
        {/* <LoreCreate/> */}
        {/* <CharacterCreate/> */}
        {/* <AuthForm usage="Signup" setUserId={setUserId} setUsername={setUsername} setToken={setToken} userId={userId} username={username}/> */}
      </div>
    </div>
  );
}

export default App;