import '../Styles/Games.css'
import '../Styles/Cards.css'
import '../Styles/Tooltip.css'
import React from 'react'
import games from '../Resources/games.json'
import { Badges } from '../Utils/Badges'

export class GamesPage extends React.Component {
  render() {
    return (
      <div>
        { 
          games.map( (game) => (
            <GameCard game={game}/>
          ))
        }
      </div>
    )
  }
}

class GameCard extends React.Component {
  render() {
    return (
      <div className='game-card-container'>
        <div className='game-card'>
          <img className='game-card-img' src={'game_data/' + this.props.game.image} alt='preview'/>
          <div className='game-card-text'>
          <div className='game-card-top'>
            <div className='game-card-title'>{this.props.game.name}</div>
            <div className='badges'>
              {
                this.props.game.badges.map( ({icon, text}) => (
                  <Badge icon={icon} text={text}></Badge>
                ))
              }
            </div>
          </div>
          <div className='game-card-short-description'>{this.props.game.shortDescription}</div>
          <div className='game-card-description'>{this.props.game.longDescription}</div>
          <div className='card-buttons'>
            {
              this.props.game.buttons.map( ({text, link, cta}) => (
                <a href={link} className={'card-button' + ((cta)? ' card-button-cta' : '')}>{text}</a>
              ))
            }
          </div>
          </div>
        </div>
      </div>
    )
  }
}

class Badge extends React.Component {
  render() {
    return (
      <span data-tooltip={this.props.text} data-flow='left'>
        <div className='badge'>{ React.createElement(Badges[this.props.icon]) }</div>
      </span>
    )
  }
}

export default GamesPage
