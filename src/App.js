import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import API from './utils/api';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Navbar from './components/navbar';
import Landing from './pages/Landing';
import AuthForm from './pages/auth';
import WorldType from './pages/worldType';
import WorldSelect from './pages/worldSelect';
import WorldOptions from './pages/worldOptions';
import Details from './pages/details';
import AdventurePage from './pages/AdventurePage';
import UserWorlds from './pages/userWorlds';
import SideCreate from './pages/SideCreate';
import WorldCreate from './pages/worldCreate';
import LocationCreate from './pages/LocationCreate';
import LoreCreate from './pages/LoreCreate';
import CharacterCreate from './pages/CharacterCreate';
import AdventureCreate from './pages/AdventureCreate';
import Adventure from './pages/Adventure';
import StepCreation from './pages/StepCreation';
import './App.css';

function App() {
  // Background particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

    // Global States
    const [world, setWorld] = useState({});
    const [userId, setUserId] = useState(-1);
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");
    const [worldType, setWorldType] = useState("");
    const [adventure, setAdventure] = useState({});

  // Token Functions
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    API.verifyToken(storedToken)
      .then((data) => {
        setToken(storedToken);
        setUserId(data.id);
        setUsername(data.username);
      })
      .catch((err) => {
        console.log('Token Fail');
        console.log(err);
        logout();
      });
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUsername(null);
    setUserId(0);
  };

  return (
    // Background Particles
    
    <div className="app-container">
        
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
      {/* Page Content */}
      <div className="content">
        
      <Router>
                <Navbar userId={userId} logout={logout}/>
                <Routes>
                    <Route path="/" element={<Landing 
                    userId={userId}/>}/>
                    <Route path="/signup" element={<AuthForm 
                        usage="Signup" 
                        setUserId={setUserId} 
                        setUsername={setUsername} 
                        setToken={setToken} 
                        userId={userId} 
                        username={username}/>}/>
                    <Route path="/login" element={<AuthForm 
                        usage="Login" 
                        setUserId={setUserId} 
                        setUsername={setUsername} 
                        setToken={setToken} 
                        userId={userId} 
                        username={username}/>}/>
                        <Route path="/worldtype" element={<WorldType
                            userId={userId} worldType={worldType} setWorldType={setWorldType}/>}/>
                    <Route path="/worldselect" element={<WorldSelect
                        userId={userId} 
                        worldType={worldType}
                        setWorld={setWorld}
                        world={world}/>}/>
                    <Route path="/userworlds" element={<UserWorlds
                        userId={userId} 
                        setWorld={setWorld}
                        world={world}/>}
                        username={username}/>
                    <Route path="/worldoptions" element={<WorldOptions
                        userId={userId} world={world}/>}/>
                    <Route path="/lore" element={<Details
                        usage="Lore"
                        userId={userId} 
                        world={world}/>}/>
                    <Route path="/locations" element={<Details
                        usage="Locations"
                        userId={userId} 
                        world={world}/>}/>
                    <Route path="/characters" element={<Details
                        usage="Characters"
                        userId={userId} 
                        world={world}/>}/>
                    <Route path="/adventures" element={<AdventurePage
                        adventure={adventure}
                        setAdventure={setAdventure}
                        userId={userId} 
                        world={world}/>}/>
                    <Route path="/adventure" element={<Adventure
                        adventure={adventure}
                        userId={userId} 
                        world={world}/>}/>
                    <Route path="/createworld" element={<WorldCreate
                        userId={userId} 
                        setWorld={setWorld} 
                        world={world}/>}/>
                    <Route path="/createcharacter" element={<CharacterCreate
                        userId={userId} 
                        setWorld={setWorld} 
                        world={world}/>}/>
                    <Route path="/createsidecharacter" element={<SideCreate
                        userId={userId} 
                        setWorld={setWorld} 
                        world={world}/>}/>
                    <Route path="/createlore" element={<LoreCreate
                        userId={userId} 
                        setWorld={setWorld} 
                        world={world}/>}/>
                    <Route path="/createlocation" element={<LocationCreate
                        userId={userId} 
                        setWorld={setWorld} 
                        world={world}/>}/>
                    <Route path="/createadventure" element={<AdventureCreate
                        userId={userId} 
                        setAdventure={setAdventure}
                        setWorld={setWorld} 
                        world={world}/>}/>
                    <Route path="/stepcreation" element={<StepCreation
                        adventure={adventure}
                        userId={userId} 
                        world={world}/>}/>
                </Routes>
            </Router>
        </div>
        </div>
    );
}


export default App;