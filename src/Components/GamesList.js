import React from 'react';
import games from '../Resources/games.json'
import '../Styles/Games.css'

export class GamesList extends React.Component {
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
                    games.map((game, index) => {
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

