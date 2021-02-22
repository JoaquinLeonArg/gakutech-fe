import React from 'react'
import './Styles/Admin/SidebarAdmin.css'
import { GamesPage } from './Pages/GamesPage';
import { AboutPage } from './Pages/AboutPage.js';
import { Route, Switch, useLocation } from 'react-router-dom';
import Particles from 'react-particles-js';
import { AnimatePresence } from 'framer-motion';
import { PostsPage}  from './Pages/BlogsPage.js';
import PostListPageAdmin from './Pages/Post/Admin/PostListPageAdmin.js';
import { SidebarAdmin } from './Components/Admin/SidebarAdmin.js';
import { Sidebar } from './Components/Sidebar.js';

export function Main() {
    const location = useLocation()
    return (
        <div className='app'> 
          <Switch>
            <Route path='/admin' exact>
              <SidebarAdmin/>
              <PostListPageAdmin/>                             
            </Route>

            <Route path='/add' exact>
              <PostListPageAdmin/>
            </Route>
            
            <Route>
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
                      <PostsPage/>                             
                      </Route>
                  </Switch>
                </AnimatePresence>
              </div>
            </Route>
          </Switch>
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