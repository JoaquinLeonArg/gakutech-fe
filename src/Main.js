import { Sidebar } from './Components/Sidebar.js'
import React from 'react'
import './Styles/Sidebar.css'
import { GamesPage } from './Pages/GamesPage';
import { AboutPage } from './Pages/AboutPage.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

export class Main extends React.Component {
    render() {
        return (
            <Router>
                <BgParticles/>
                <div className='app'> 
                    <Sidebar/>
                    <div className='content'>
                        <Switch>
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
                    </div>
                </div>
            </Router>
        )
    }
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