import { Sidebar } from './Components/Sidebar.js'
import React from 'react'
import './Styles/Sidebar.css'
import { GamesPage } from './Pages/GamesPage';
import { AboutPage } from './Pages/AboutPage.js';
import { Route, Switch, useLocation } from 'react-router-dom';
import Particles from 'react-particles-js';
import { AnimatePresence } from 'framer-motion';

export function Main() {
    const location = useLocation()
    return (
        <div className='app'> 
            <BgParticles/>
            <Sidebar/>
            <div className='content'>
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route path='/games' exact>
                            <GamesPage/>
                        </Route>
                        
                        <Route path='/about' exact>
                            <AboutPage/>
                        </Route>

                        <Route path='/' exact>
                            Home
                            
                        </Route>
                    </Switch>
                </AnimatePresence>
            </div>
        </div>
    )
}


class BgParticles extends React.Component {
    render() {
        return <Particles
        style={{position: 'absolute'}}
        params={{
            "particles": {
                "number": {
                    "value": 20,
                    "density": {
                        "enable": true,
                        "value_area": 500
                    }
                },
                "line_linked": {
                    "enable": true,
                    "opacity": 0.03
                },
                "move": {
                    radius: 5
                },
                "size": {
                    "value": 1.8
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.06
                    }
                }
            },
            "retina_detect": true
        }} />
    }
}