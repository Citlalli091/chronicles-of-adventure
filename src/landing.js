import React from 'react';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './landing.css'

function App() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);
}
const landingPage = () => {
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
            <Navbar />
            <h2>Welcome to chronicles of adventure</h2>
            <p>information about the site</p>
            <Login />
            <Signup />
        </div>
    );
};


export default landingPage;

