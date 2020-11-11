import { Sidebar } from './Components/Sidebar.js'
import './App.css'
import React from 'react'
import { Content } from './Components/Content.js';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      game: null
    }
  }

  changeGame(game) {
    this.setState({
      game: game
    })
  }

  render() {
    return (
      <div className='app'>
        <Sidebar onChangeGame={(game) => this.changeGame(game)}></Sidebar>
        <Content game={this.state.game}></Content>
        <img className="page-background" src={'/game_data/' + ((this.state.game) ? this.state.game.background : 'default.jpg')} alt='bg'/>
      </div>
    )
  }
}

export default App;
