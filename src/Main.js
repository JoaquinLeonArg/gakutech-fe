import { Sidebar } from './Components/Sidebar.js'
import React from 'react'
import './Styles/Mainbar.css'
import { GamesPage } from './Pages/GamesPage';
import { AboutPage } from './Pages/AboutPage.js';
import { GamesList } from './Components/GamesList'

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.setState({game: null})
        this.onChangeGame.bind(this)
    }

    onChangeGame(game) {
        this.setState({game: game})
    }

    render() {
        return (
            <div className='app'> 
                <Sidebar wide={false} >
                    <GamesList onChangeGame={(game) => this.onChangeGame(game)}></GamesList>
                </Sidebar>
                <GamesPage game={this.state.game}></GamesPage>
                <AboutPage></AboutPage>
                <img className="page-background" src='/game_data/default.jpg' alt='bg'/>
            </div>
        )
    }
}
