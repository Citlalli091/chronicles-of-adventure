import React, { useCallback, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import API from './utils/api';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Navbar from './components/navbar';
import AuthForm from './pages/auth';
import WorldSelect from './pages/worldSelect';
import WorldOptions from './pages/worldOptions';
import Landing from './pages/Landing';
import WorldCreate from './pages/worldCreate';
import LocationCreate from './pages/LocationCreate';
import LoreCreate from './pages/LoreCreate';
import CharacterCreate from './pages/CharacterCreate';

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
    //TODO: remove default value
    const [worldType, setWorldType] = useState("fantasy");


    // Token Functions
    useEffect(()=>{
        const storedToken = localStorage.getItem("token");
        API.verifyToken(storedToken).then(data=>{
        setToken(storedToken);
        setUserId(data.id);
        setUsername(data.username);
        }).catch(err=>{
        console.log("Token Fail")
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


    return (
        // Background Particles
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
        {/* Page Content */}
        <div style={{ zIndex: 1, color: '#ffffff', marginTop: '2rem' }}>
            <Router>
                <Navbar />
                <Routes>
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
                    <Route path="/worldselect" element={<WorldSelect
                        userId={userId} 
                        worldType={worldType}
                        setWorld={setWorld}
                        world={world}/>}/>
                    <Route path="/worldoptions" element={<WorldOptions
                        userId={userId} world={world}/>}/>
                    <Route path="/" element={<Landing userId={userId}/>}/>
                    {/* <Route path="/worldlore" element={<WorldLore
                        userId={userId} world={world}/>}/> */}
                    {/* <Route path="/worldcharacters" element={<WorldCharacters
                        userId={userId} world={world}/>}/>
                    <Route path="/worldlocations" element={<WorldLocations
                        userId={userId} world={world}/>}/> */}
                </Routes>
            </Router>
        </div>
        </div>
    );
}

export default App;