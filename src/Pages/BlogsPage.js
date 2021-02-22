import React from 'react'
import { Badges } from '../Utils/Badges'
import { pageVariants, pageStyle, pageTransition } from '../Utils/Animations'
import { motion } from 'framer-motion'
import '../Styles/Posts.css'
import posts from '../Resources/posts.json'

export class PostsPage extends React.Component {
  render() {
    return (
      <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} style={pageStyle} transition={pageTransition}>
        { 
          posts.map( (post) => (
            <PostCard post={post}/>
          ))
        }
      </motion.div>
    )
  }
}

class PostCard extends React.Component {
  render() {
    return (
      <div className='post-card-container'>
        <div className='post-card'>
          <div className='post-card-text'>
          <div className='post-card-top'>
            <div className='post-card-title'>{this.props.post.name}</div>
            <div className='badges'>
              {
                this.props.post.badges.map( ({icon, text}) => (
                  <Badge icon={icon} text={text}></Badge>
                ))
              }
            </div>
          </div>
          <div className='post-card-short-description'>{this.props.post.shortDescription}</div>
          <div className='post-card-description'>{this.props.post.longDescription}</div>
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

export default PostsPage