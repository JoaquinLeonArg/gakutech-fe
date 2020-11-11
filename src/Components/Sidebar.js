import React from 'react';
import games from '../Resources/games.json'

export class Sidebar extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='sidebar-bg b1'/>
                <div className='sidebar-bg b2'/>
                <div className='sidebar-bg b3'/>
                <div className='sidebar-container'>
                    <a href='https://gakutech.com' className='sidebar-back'>Back to Gakutech's homepage</a>
                    {/* Remember to add the home icon: '<i class="material-icons">home</i> ' */}
                    <p className='sidebar-title'>Our<br/>games</p>
                    <GameList onChangeGame={this.props.onChangeGame} games={games}></GameList>
                </div>
            </div>
        )
    }
}

class GameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggledButton: -1
        }
        this.gameClicked.bind(this)
    }

    gameClicked(index) {
        if (index !== this.state.toggledButton) {
            this.setState({
                toggledButton: index
            })
            this.props.onChangeGame(games[index])
        } else {
            this.setState({
                toggledButton: -1
            })
            this.props.onChangeGame(null)
        }
        
    }

    render() {
        return (
            <ul className='gamelist'>
                {
                    this.props.games.map((game, index) => {
                    return (
                        <li key={index} className={(this.state.toggledButton === index) ? 'gamelist-item gamelist-toggled' : 'gamelist-item'}>
                            <a href='#' className='gamelist-link' onClick={() => this.gameClicked(index)}>
                                {game.name}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>
        )
    }
}

