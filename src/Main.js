import { Sidebar } from './Components/Sidebar'
import React from 'react'
import './Styles/Sidebar.css'
import { GamesPage } from './Pages/GamesPage';
import { AboutPage } from './Pages/AboutPage';
import { HomePage } from './Pages/HomePage';
import { Route, Switch, useLocation } from 'react-router-dom';
import Particles from 'react-particles-js';
import { AnimatePresence } from 'framer-motion';

export function Main() {
    const location = useLocation()
    return (
        <div className='app'> 
            <BgParticles/>
            <BgParticles2/>
            <BgParticles3/>
            <Sidebar/>
            <div className='content'>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>

                        <Route path='/games' exact>
                            <GamesPage/>
                        </Route>
                        
                        <Route path='/about' exact>
                            <AboutPage/>
                        </Route>

                        <Route path='/' exact>
                            <HomePage/>
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
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 500
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "radius": 1,
                },
                "size": {
                    "value": 1
                },
                "opacity": {
                    "value": 1
                }
            },
            "retina_detect": true
        }} />
    }
}

class BgParticles2 extends React.Component {
    render() {
        return <Particles
        style={{position: 'absolute'}}
        params={{
            "particles": {
                "number": {
                    "value": 15,
                    "density": {
                        "enable": true,
                        "value_area": 500
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "radius": 1
                },
                "size": {
                    "value": 3
                },
                "opacity": {
                    "value": 0.1
                }
            },
            "retina_detect": true
        }} />
    }
}

class BgParticles3 extends React.Component {
    render() {
        return <Particles
        style={{position: 'absolute'}}
        params={{
            "particles": {
                "number": {
                    "value": 10,
                    "density": {
                        "enable": true,
                        "value_area": 500
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "radius": 10
                },
                "size": {
                    "value": 6
                },
                "opacity": {
                    "value": 0.01
                }
            },
            "retina_detect": true
        }} />
    }
}