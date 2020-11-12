import React from 'react';

export class GamesContent extends React.Component {
    render() {
        return (this.props.game)? (
            <div className='content'>
                <div className='content-title'>{this.props.game.name}</div>
                <div className='content-short-description'>{this.props.game.shortDescription}</div>
                <img alt='game' src={'game_data/' + this.props.game.image} className='content-image'/>
                <div className='content-long-description'>{this.props.game.longDescription}</div>
                <div className='buttons'>
                    <a href={this.props.game.cta_link} className='button cta'>{this.props.game.cta_text}</a>
                    <a href={this.props.game.other_link} className='button normal'>{this.props.game.other_text}</a>
                </div>
            </div>
        ) : null
    }
}