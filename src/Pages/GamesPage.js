import '../Styles/Games.css'
import React from 'react'
import { GamesContent } from '../Components/GamesContent.js';

export class GamesPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      game: null
    }
  }

  onChangeGame(game) {
    this.setState({
      game: game
    })
  }

  render() {
    return (
        <GamesContent game={this.props.game()}></GamesContent>
    )
  }
}
