import React from 'react'
import { SocialMedia } from '../Utils/SocialMedia'
import { pageVariants, pageStyle, pageTransition } from '../Utils/Animations'
import { motion } from 'framer-motion'
import '../Styles/About.css'
import profiles from '../Resources/profiles.json'

export class AboutPage extends React.Component {
  render() {
    return (
      <>
        <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} style={pageStyle} transition={pageTransition}>
          <div className='about-container'>
            { profiles.map( profile => (
              <Profile profile={profile}></Profile>
            ))}
          </div>
        </motion.div>
        <div className='mobile-footer' />
      </>
    )
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div className='profile'>
        <div className='profile-header'>
          <img className='profile-image' src={this.props.profile.image} alt='profile'/>
          <div className='profile-name'>{this.props.profile.name}</div>
        </div>
        <div className='profile-description'>{this.props.profile.description}</div>
        <div className='profile-links'>
          { this.props.profile.links.map( link => (
            <span data-tooltip={link.text} data-flow='bottom'>
              <a href={link.target} className='profile-link'>{ React.createElement(SocialMedia[link.icon]) }</a>
            </span>
          ))}
        </div>
      </div>
    )
  }
}